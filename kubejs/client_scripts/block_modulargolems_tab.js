// kubejs/client_scripts/hide_golem_curios_tab.js

ClientEvents.screenInit(event => {
  const screen = event.screen

  // Only target Modular Golems Curios screen
  if (!screen || screen.getClass().getName() !==
      'dev.xkmc.modulargolems.compat.curio.GolemCuriosListScreen') {
    return
  }

  // Iterate over widgets and remove the Curios tab
  event.addListener(() => {
    const widgets = screen.children()

    for (let i = widgets.size() - 1; i >= 0; i--) {
      const widget = widgets.get(i)

      // Golem tabs are instances of AbstractWidget with a tooltip/title
      if (!widget || !widget.getClass) continue

      const cls = widget.getClass().getName()

      // GolemCurioTab renders as a GolemTabBase widget
      if (cls.startsWith('dev.xkmc.modulargolems.content.menu.tabs')) {
        // Defensive: check tooltip text if present
        if (widget.getMessage && widget.getMessage().getString().toLowerCase().includes('curio')) {
          widgets.remove(i)
        }
      }
    }
  })
})
