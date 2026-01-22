import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const ROOT = process.cwd();
const INPUT = path.join(ROOT, "index.html");

// Output folder that will be committed/published
const OUT_DIR = path.join(ROOT, "static");
const OUT_FILE = path.join(OUT_DIR, "index.html");

// A local file URL so the JS in index.html runs normally
const fileUrl = new URL(`file://${INPUT}`).toString();

// Heuristic: wait until the “indexing” message disappears OR main content appears.
// You can tweak these selectors once you know your DOM.
const WAIT_UNTIL_ANY = [
  // common patterns you can try:
  () => !document.body.innerText.includes("being indexed"),
  () => document.body.innerText.includes("Global Bindings"),
  () => document.querySelector("nav, aside, main, #app, .app") !== null
];

fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

// Load and let scripts run
await page.goto(fileUrl, { waitUntil: "domcontentloaded" });

// Wait up to 30s for the app to finish building the DOM
await page.waitForFunction(
  (checks) => checks.some((fn) => {
    try { return fn(); } catch { return false; }
  }),
  WAIT_UNTIL_ANY,
  { timeout: 30_000 }
);

// Optional: remove scripts so the snapshot is “dead simple” HTML for crawlers
await page.evaluate(() => {
  for (const el of Array.from(document.querySelectorAll("script"))) el.remove();
});

// Serialize rendered HTML
const html = await page.content();
fs.writeFileSync(OUT_FILE, html, "utf8");

await browser.close();

console.log(`Wrote: ${path.relative(ROOT, OUT_FILE)}`);
