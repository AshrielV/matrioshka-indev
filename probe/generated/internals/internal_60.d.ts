/// <reference path="./internal_*.d.ts" />
declare namespace org.apache.logging.log4j.core.config {
    class Node {
        constructor()
        constructor(parent: org.apache.logging.log4j.core.config.Node_, name: string, type: Internal.PluginType_<any>)
        constructor(node: org.apache.logging.log4j.core.config.Node_)
        isInstanceOf(clazz: typeof any): boolean;
        getClass(): typeof any;
        hasChildren(): boolean;
        toString(): string;
        getValue(): string;
        setParent(parent: org.apache.logging.log4j.core.config.Node_): void;
        notifyAll(): void;
        getChildren(): Internal.List<org.apache.logging.log4j.core.config.Node>;
        notify(): void;
        getObject<T>(clazz: T): T;
        wait(arg0: number, arg1: number): void;
        isRoot(): boolean;
        hashCode(): number;
        setValue(value: string): void;
        wait(): void;
        getName(): string;
        setObject(obj: any): void;
        wait(arg0: number): void;
        getObject<T>(): T;
        getParent(): this;
        equals(arg0: any): boolean;
        getType(): Internal.PluginType<any>;
        getAttributes(): Internal.Map<string, string>;
        get class(): typeof any
        get value(): string
        set parent(parent: org.apache.logging.log4j.core.config.Node_)
        get children(): Internal.List<org.apache.logging.log4j.core.config.Node>
        get root(): boolean
        set value(value: string)
        get name(): string
        set object(obj: any)
        get object(): T
        get parent(): org.apache.logging.log4j.core.config.Node
        get type(): Internal.PluginType<any>
        get attributes(): Internal.Map<string, string>
        static readonly CATEGORY: ("Core") & (string);
    }
    type Node_ = Node;
}
declare namespace Internal {
    interface ItemColorsExtended {
        abstract sodium$getColorProvider(arg0: Internal.ItemStack_): Internal.ItemColor;
        (arg0: Internal.ItemStack): Internal.ItemColor_;
    }
    type ItemColorsExtended_ = ((arg0: Internal.ItemStack)=> Internal.ItemColor_) | ItemColorsExtended;
    class RecipeSchemaType {
        constructor(namespace: Internal.RecipeNamespace_, id: ResourceLocation_, schema: Internal.RecipeSchema_)
        getClass(): typeof any;
        getSerializer(): Internal.RecipeSerializer<any>;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get serializer(): Internal.RecipeSerializer<any>
        readonly schema: Internal.RecipeSchema;
        parent: Internal.RecipeSchemaType;
        readonly namespace: Internal.RecipeNamespace;
        readonly id: ResourceLocation;
    }
    type RecipeSchemaType_ = RecipeSchemaType;
    interface NonNullSupplier <T> {
        abstract get(): T;
        (): T;
    }
    type NonNullSupplier_<T> = NonNullSupplier<T> | (()=> T);
    class AsyncLoggerConfig extends Internal.LoggerConfig {
        log(event: Internal.LogEvent_): void;
        removeFilter(filter: Internal.Filter_): void;
        /**
         * @deprecated
        */
        static "createLogger(java.lang.String,org.apache.logging.log4j.Level,java.lang.String,java.lang.String,org.apache.logging.log4j.core.config.AppenderRef[],org.apache.logging.log4j.core.config.Property[],org.apache.logging.log4j.core.config.Configuration,org.apache.logging.log4j.core.Filter)"(additivity: string, level: org.apache.logging.log4j.Level_, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        notify(): void;
        isPropertiesRequireLookup(): boolean;
        static newAsyncBuilder<B extends Internal.AsyncLoggerConfig$Builder<B>>(): B;
        getLevel(): org.apache.logging.log4j.Level;
        getAppenderRefs(): Internal.List<Internal.AppenderRef>;
        isFiltered(event: Internal.LogEvent_): boolean;
        addAppender(appender: Internal.Appender_, level: org.apache.logging.log4j.Level_, filter: Internal.Filter_): void;
        setLevel(level: org.apache.logging.log4j.Level_): void;
        initialize(): void;
        setLogEventFactory(logEventFactory: Internal.LogEventFactory_): void;
        getReliabilityStrategy(): Internal.ReliabilityStrategy;
        start(): void;
        /**
         * @deprecated
        */
        getProperties(): Internal.Map<org.apache.logging.log4j.core.config.Property, boolean>;
        wait(): void;
        stop(): void;
        isStopping(): boolean;
        getPropertyList(): Internal.List<org.apache.logging.log4j.core.config.Property>;
        getClass(): typeof any;
        getAppenders(): Internal.Map<string, Internal.Appender>;
        getExplicitLevel(): org.apache.logging.log4j.Level;
        /**
         * @deprecated
        */
        static createLogger(additivity: boolean, level: org.apache.logging.log4j.Level_, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        hasFilter(): boolean;
        isStarting(): boolean;
        /**
         * @deprecated
        */
        static createLogger(additivity: string, level: org.apache.logging.log4j.Level_, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        isStarted(): boolean;
        removeAppender(name: string): void;
        getLogEventFactory(): Internal.LogEventFactory;
        wait(arg0: number, arg1: number): void;
        getFilter(): Internal.Filter;
        getState(): Internal.LifeCycle$State;
        log(loggerName: string, fqcn: string, location: Internal.StackTraceElement_, marker: org.apache.logging.log4j.Marker_, level: org.apache.logging.log4j.Level_, data: org.apache.logging.log4j.message.Message_, t: Internal.Throwable_): void;
        requiresLocation(): boolean;
        isInitialized(): boolean;
        static newBuilder<B extends Internal.LoggerConfig$Builder<B>>(): B;
        getName(): string;
        log(loggerName: string, fqcn: string, marker: org.apache.logging.log4j.Marker_, level: org.apache.logging.log4j.Level_, data: org.apache.logging.log4j.message.Message_, t: Internal.Throwable_): void;
        addFilter(filter: Internal.Filter_): void;
        stop(timeout: number, timeUnit: Internal.TimeUnit_): boolean;
        /**
         * @deprecated
        */
        static createLogger(additivity: string, levelName: string, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        createRingBufferAdmin(contextName: string): Internal.RingBufferAdmin;
        isStopped(): boolean;
        /**
         * @deprecated
        */
        static "createLogger(boolean,org.apache.logging.log4j.Level,java.lang.String,java.lang.String,org.apache.logging.log4j.core.config.AppenderRef[],org.apache.logging.log4j.core.config.Property[],org.apache.logging.log4j.core.config.Configuration,org.apache.logging.log4j.core.Filter)"(additivity: boolean, level: org.apache.logging.log4j.Level_, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        toString(): string;
        setParent(parent: Internal.LoggerConfig_): void;
        notifyAll(): void;
        setAdditive(additive: boolean): void;
        getParent(): Internal.LoggerConfig;
        getPropertyArray(): org.apache.logging.log4j.core.config.Property[];
        /**
         * @deprecated
        */
        static "createLogger(java.lang.String,java.lang.String,java.lang.String,java.lang.String,org.apache.logging.log4j.core.config.AppenderRef[],org.apache.logging.log4j.core.config.Property[],org.apache.logging.log4j.core.config.Configuration,org.apache.logging.log4j.core.Filter)"(additivity: string, levelName: string, loggerName: string, includeLocation: string, refs: Internal.AppenderRef_[], properties: org.apache.logging.log4j.core.config.Property_[], config: org.apache.logging.log4j.core.config.Configuration_, filter: Internal.Filter_): Internal.LoggerConfig;
        isIncludeLocation(): boolean;
        isAdditive(): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get propertiesRequireLookup(): boolean
        get level(): org.apache.logging.log4j.Level
        get appenderRefs(): Internal.List<Internal.AppenderRef>
        set level(level: org.apache.logging.log4j.Level_)
        set logEventFactory(logEventFactory: Internal.LogEventFactory_)
        get reliabilityStrategy(): Internal.ReliabilityStrategy
        /**
         * @deprecated
        */
        get properties(): Internal.Map<org.apache.logging.log4j.core.config.Property, boolean>
        get stopping(): boolean
        get propertyList(): Internal.List<org.apache.logging.log4j.core.config.Property>
        get class(): typeof any
        get appenders(): Internal.Map<string, Internal.Appender>
        get explicitLevel(): org.apache.logging.log4j.Level
        get starting(): boolean
        get started(): boolean
        get logEventFactory(): Internal.LogEventFactory
        get filter(): Internal.Filter
        get state(): Internal.LifeCycle$State
        get initialized(): boolean
        get name(): string
        get stopped(): boolean
        set parent(parent: Internal.LoggerConfig_)
        set additive(additive: boolean)
        get parent(): Internal.LoggerConfig
        get propertyArray(): org.apache.logging.log4j.core.config.Property[]
        get includeLocation(): boolean
        get additive(): boolean
    }
    type AsyncLoggerConfig_ = AsyncLoggerConfig;
    interface Config$Entry extends Internal.UnmodifiableConfig$Entry {
        getChar(): string;
        getShortOrElse(arg0: number): number;
        abstract setValue<T>(arg0: any): T;
        getByte(): number;
        abstract getKey(): string;
        abstract getRawValue<T>(): T;
        getIntOrElse(arg0: number): number;
        getLongOrElse(arg0: number): number;
        getOptionalLong(): Internal.OptionalLong;
        getLong(): number;
        getByteOrElse(arg0: number): number;
        getShort(): number;
        getValue<T>(): T;
        isNull(): boolean;
        getOrElse<T>(arg0: T): T;
        getOptional<T>(): Internal.Optional<T>;
        getOptionalInt(): Internal.OptionalInt;
        getInt(): number;
        getCharOrElse(arg0: string): string;
        get "char"(): string
        set value(arg0: any)
        get "byte"(): number
        get key(): string
        get rawValue(): T
        get optionalLong(): Internal.OptionalLong
        get "long"(): number
        get "short"(): number
        get value(): T
        get "null"(): boolean
        get optional(): Internal.Optional<T>
        get optionalInt(): Internal.OptionalInt
        get "int"(): number
    }
    type Config$Entry_ = Config$Entry;
    interface SearchRegistry$TreeBuilderSupplier <T> extends Internal.Function<Internal.List<T>, Internal.RefreshableSearchTree<T>> {
        compose<V>(arg0: Internal.Function_<V, Internal.List<T>>): Internal.Function<V, Internal.RefreshableSearchTree<T>>;
        andThen<V>(arg0: Internal.Function_<Internal.RefreshableSearchTree<T>, V>): Internal.Function<Internal.List<T>, V>;
        identity<T>(): Internal.Function<T, T>;
        abstract apply(arg0: Internal.List_<T>): Internal.RefreshableSearchTree<T>;
        (arg0: Internal.List<T>): Internal.RefreshableSearchTree_<T>;
    }
    type SearchRegistry$TreeBuilderSupplier_<T> = SearchRegistry$TreeBuilderSupplier<T> | ((arg0: Internal.List<T>)=> Internal.RefreshableSearchTree_<T>);
    interface BlockLootSubProviderAccessor {
        create$HAS_SILK_TOUCH(): Internal.LootItemCondition$Builder;
    }
    type BlockLootSubProviderAccessor_ = BlockLootSubProviderAccessor;
    interface Reference2ByteFunction <K> extends Internal.ToIntFunction<K>, it.unimi.dsi.fastutil.Function<K, number> {
        andThenFloat(arg0: Internal.Byte2FloatFunction_): Internal.Reference2FloatFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        andThenDouble(arg0: Internal.Byte2DoubleFunction_): Internal.Reference2DoubleFunction<K>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Byte)"(arg0: any, arg1: number): number;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenInt(arg0: Internal.Byte2IntFunction_): Internal.Reference2IntFunction<K>;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Byte)"(arg0: K, arg1: number): number;
        "put(java.lang.Object,byte)"(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Byte2ShortFunction_): Internal.Reference2ShortFunction<K>;
        composeDouble(arg0: Internal.Double2ReferenceFunction_<K>): Internal.Double2ByteFunction;
        composeFloat(arg0: Internal.Float2ReferenceFunction_<K>): Internal.Float2ByteFunction;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        containsKey(arg0: any): boolean;
        defaultReturnValue(arg0: number): void;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Byte2CharFunction_): Internal.Reference2CharFunction<K>;
        removeByte(arg0: any): number;
        andThenObject<T>(arg0: Internal.Byte2ObjectFunction_<T>): Internal.Reference2ObjectFunction<K, T>;
        apply(arg0: K): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        defaultReturnValue(): number;
        andThenByte(arg0: Internal.Byte2ByteFunction_): this;
        andThenReference<T>(arg0: Internal.Byte2ReferenceFunction_<T>): Internal.Reference2ReferenceFunction<K, T>;
        composeChar(arg0: Internal.Char2ReferenceFunction_<K>): Internal.Char2ByteFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeObject<T>(arg0: Internal.Object2ReferenceFunction_<T, K>): Internal.Object2ByteFunction<T>;
        andThenLong(arg0: Internal.Byte2LongFunction_): Internal.Reference2LongFunction<K>;
        composeLong(arg0: Internal.Long2ReferenceFunction_<K>): Internal.Long2ByteFunction;
        applyAsInt(arg0: K): number;
        composeInt(arg0: Internal.Int2ReferenceFunction_<K>): Internal.Int2ByteFunction;
        "getOrDefault(java.lang.Object,byte)"(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        abstract getByte(arg0: any): number;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ReferenceFunction_<T, K>): Internal.Reference2ByteFunction<T>;
        composeByte(arg0: Internal.Byte2ReferenceFunction_<K>): Internal.Byte2ByteFunction;
        composeShort(arg0: Internal.Short2ReferenceFunction_<K>): Internal.Short2ByteFunction;
        clear(): void;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        (arg0: any): number;
    }
    type Reference2ByteFunction_<K> = ((arg0: any)=> number) | Reference2ByteFunction<K>;
    class FlagItem extends Internal.WoodBasedBlockItem implements net.mehvahdjukaar.moonlight.api.block.IColored, Internal.ICustomItemRendererProvider {
        constructor(block: Internal.Block_, properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        static setBlockEntityData(arg0: Internal.ItemStack_, arg1: Internal.BlockEntityType_<any>, arg2: Internal.CompoundTag_): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        abstract moonlight$addAdditionalBehavior(arg0: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, world: Internal.Level_, tooltip: Internal.List_<Internal.Component>, flag: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        abstract moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        abstract asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        abstract moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        abstract moonlight$setClientAnimationExtension(arg0: any): void;
        supportsBlankColor(): boolean;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        canPlace(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getBlockEntityData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        changeItemColor(color: Internal.DyeColor_): Internal.Item;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        removeFromBlockToItemMap(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        getBlockType(): net.mehvahdjukaar.moonlight.api.set.wood.WoodType;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        static updateCustomBlockEntityTag(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        getPlaceSound(arg0: Internal.BlockState_): Internal.SoundEvent;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        getBlock(): Internal.Block;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        registerBlocks(arg0: Internal.Map_<Internal.Block, Internal.Item>, arg1: Internal.Item_): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        mustSurvive(): boolean;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(itemStack: Internal.ItemStack_, recipeType: Internal.RecipeType_<any>): number;
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getColor(): Internal.DyeColor;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getPlaceSound(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): Internal.SoundEvent;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        getPlacementState(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        updateCustomBlockEntityTag(arg0: BlockPos_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.ItemStack_, arg4: Internal.BlockState_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        place(arg0: Internal.BlockPlaceContext_): Internal.InteractionResult;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        updatePlacementContext(arg0: Internal.BlockPlaceContext_): Internal.BlockPlaceContext;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        registerFabricRenderer(): void;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        placeBlock(arg0: Internal.BlockPlaceContext_, arg1: Internal.BlockState_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getRendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        puzzleslib$setBlock(arg0: Internal.Block_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        get blockType(): net.mehvahdjukaar.moonlight.api.set.wood.WoodType
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get block(): Internal.Block
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get color(): Internal.DyeColor
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get rendererFactory(): Internal.Supplier<Internal.ItemStackRenderer>
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type FlagItem_ = FlagItem;
    class Target extends Internal.Node {
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Node_)
        getClass(): typeof any;
        "distanceToSqr(net.minecraft.core.BlockPos)"(arg0: BlockPos_): number;
        distanceTo(arg0: BlockPos_): number;
        static createFromStream(arg0: Internal.FriendlyByteBuf_): Internal.Node;
        "distanceTo(net.minecraft.world.level.pathfinder.Node)"(arg0: Internal.Node_): number;
        distanceToXZ(arg0: Internal.Node_): number;
        distanceTo(arg0: Internal.Node_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static createFromStream(arg0: Internal.FriendlyByteBuf_): Internal.Target;
        asBlockPos(): BlockPos;
        "distanceManhattan(net.minecraft.world.level.pathfinder.Node)"(arg0: Internal.Node_): number;
        distanceManhattan(arg0: Internal.Node_): number;
        getBestNode(): Internal.Node;
        cloneAndMove(arg0: number, arg1: number, arg2: number): Internal.Node;
        setReached(): void;
        static "createFromStream(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): Internal.Node;
        updateBest(arg0: number, arg1: Internal.Node_): void;
        distanceToSqr(arg0: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        distanceToSqr(arg0: Internal.Node_): number;
        static createHash(arg0: number, arg1: number, arg2: number): number;
        distanceManhattan(arg0: BlockPos_): number;
        asVec3(): Vec3d;
        writeToStream(arg0: Internal.FriendlyByteBuf_): void;
        "distanceToSqr(net.minecraft.world.level.pathfinder.Node)"(arg0: Internal.Node_): number;
        "distanceManhattan(net.minecraft.core.BlockPos)"(arg0: BlockPos_): number;
        hashCode(): number;
        isReached(): boolean;
        wait(): void;
        static "createFromStream(net.minecraft.network.FriendlyByteBuf)"(arg0: Internal.FriendlyByteBuf_): Internal.Target;
        wait(arg0: number): void;
        static readContents(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Node_): void;
        equals(arg0: any): boolean;
        inOpenSet(): boolean;
        "distanceTo(net.minecraft.core.BlockPos)"(arg0: BlockPos_): number;
        get class(): typeof any
        get bestNode(): Internal.Node
        get reached(): boolean
    }
    type Target_ = Target;
    class Vector3i implements Internal.Vector3ic, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector2dc_, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2fc_, arg1: number, arg2: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector3fc_, arg1: number)
        constructor(arg0: Internal.Vector3dc_, arg1: number)
        constructor(arg0: Internal.Vector2ic_, arg1: number)
        constructor(arg0: Internal.Vector3ic_)
        "div(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): this;
        x(): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: number, arg1: number, arg2: number): this;
        "div(float)"(arg0: number): this;
        add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        "set(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): this;
        set(arg0: Internal.Vector2ic_, arg1: number): this;
        add(arg0: Internal.Vector3ic_): this;
        "set(org.joml.Vector2ic,int)"(arg0: Internal.Vector2ic_, arg1: number): this;
        mul(arg0: number, arg1: number, arg2: number): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        absolute(arg0: Internal.Vector3i_): this;
        distance(arg0: number, arg1: number, arg2: number): number;
        div(arg0: number, arg1: Internal.Vector3i_): this;
        distanceSquared(arg0: number, arg1: number, arg2: number): number;
        set(arg0: number): this;
        "mul(org.joml.Vector3ic,org.joml.Vector3i)"(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        div(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        getToAddress(arg0: number): Internal.Vector3ic;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Vector3fc,int)"(arg0: Internal.Vector3fc_, arg1: number): this;
        mul(arg0: number): this;
        min(arg0: Internal.Vector3ic_): this;
        "set(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        "mul(int)"(arg0: number): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: Internal.Vector3dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        min(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        mul(arg0: Internal.Vector3ic_): this;
        negate(): this;
        set(arg0: number, arg1: number, arg2: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        mul(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        zero(): this;
        "set(org.joml.Vector3dc,int)"(arg0: Internal.Vector3dc_, arg1: number): this;
        set(arg0: Internal.Vector3dc_, arg1: number): this;
        static length(arg0: number, arg1: number, arg2: number): number;
        sub(arg0: Internal.Vector3ic_): this;
        toString(): string;
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        notifyAll(): void;
        set(arg0: number[]): this;
        equals(arg0: number, arg1: number, arg2: number): boolean;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        wait(arg0: number): void;
        get(arg0: number): number;
        div(arg0: number): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number): number;
        "get(int)"(arg0: number): number;
        z(): number;
        "mul(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): this;
        notify(): void;
        add(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        set(arg0: Internal.Vector3ic_): this;
        max(arg0: Internal.Vector3ic_): this;
        "set(int[])"(arg0: number[]): this;
        setComponent(arg0: number, arg1: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        gridDistance(arg0: Internal.Vector3ic_): number;
        "div(int)"(arg0: number): this;
        set(arg0: Internal.Vector3fc_, arg1: number): this;
        sub(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        "get(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        absolute(): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        lengthSquared(): number;
        distance(arg0: Internal.Vector3ic_): number;
        wait(): void;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        gridDistance(arg0: number, arg1: number, arg2: number): number;
        "set(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_): this;
        minComponent(): number;
        "set(int)"(arg0: number): this;
        y(): number;
        div(arg0: number, arg1: Internal.Vector3i_): this;
        mul(arg0: number, arg1: Internal.Vector3i_): this;
        set(arg0: Internal.ByteBuffer_): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        negate(arg0: Internal.Vector3i_): this;
        wait(arg0: number, arg1: number): void;
        "div(float,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): this;
        add(arg0: number, arg1: number, arg2: number): this;
        "set(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        distanceSquared(arg0: Internal.Vector3ic_): number;
        max(arg0: Internal.Vector3ic_, arg1: Internal.Vector3i_): this;
        "get(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        set(arg0: Internal.IntBuffer_): this;
        hashCode(): number;
        "mul(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_): this;
        setFromAddress(arg0: number): this;
        mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3i_): this;
        equals(arg0: any): boolean;
        set "(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_)
        get class(): typeof any
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(int[])"(arg0: number[])
        set "(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_)
        set "(int)"(arg0: number)
        set "(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_)
        set fromAddress(arg0: number)
        z: number;
        x: number;
        y: number;
    }
    type Vector3i_ = Vector3i;
    /**
     * @deprecated
    */
    class MinimapRadarList extends Internal.RadarList {
        constructor()
        getClass(): typeof any;
        /**
         * @deprecated
        */
        setCategory(arg0: Internal.EntityRadarCategory_): this;
        toString(): string;
        notifyAll(): void;
        get(arg0: number): Internal.Entity;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        clearEntities(): void;
        "compareTo(xaero.hud.minimap.radar.state.RadarList)"(arg0: Internal.RadarList_): number;
        size(): number;
        hashCode(): number;
        wait(): void;
        add(arg0: Internal.Entity_): boolean;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getEntities(): Internal.Iterable<any>;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getCategory(): Internal.EntityRadarCategory;
        compareTo(arg0: Internal.RadarList_): number;
        get class(): typeof any
        /**
         * @deprecated
        */
        set category(arg0: Internal.EntityRadarCategory_)
        /**
         * @deprecated
        */
        get entities(): Internal.Iterable<any>
        /**
         * @deprecated
        */
        get category(): Internal.EntityRadarCategory
    }
    type MinimapRadarList_ = MinimapRadarList;
    class NetherForestVegetationFeature extends Internal.Feature<Internal.NetherForestVegetationConfig> {
        constructor(arg0: Internal.Codec_<Internal.NetherForestVegetationConfig>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NetherForestVegetationConfig_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NetherForestVegetationConfig, Internal.Feature<Internal.NetherForestVegetationConfig>>>;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NetherForestVegetationConfig>): boolean;
        get class(): typeof any
    }
    type NetherForestVegetationFeature_ = NetherForestVegetationFeature;
    class Vector3d implements Internal.Cloneable, Internal.Externalizable, Internal.Vector3dc {
        constructor()
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3fc_)
        constructor(arg0: Internal.Vector3dc_)
        constructor(arg0: Internal.Vector2dc_, arg1: number)
        constructor(arg0: Internal.Vector2fc_, arg1: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2ic_, arg1: number)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector3ic_)
        reflect(arg0: number, arg1: number, arg2: number): this;
        "mulTranspose(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "get(org.joml.Vector3d)"(arg0: Internal.Vector3d_): this;
        "mulAdd(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        "get(int)"(arg0: number): number;
        set(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        add(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulTransposeDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "sub(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "mulDirection(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        round(arg0: Internal.Vector3d_): this;
        rotateX(arg0: number, arg1: Internal.Vector3d_): this;
        mul(arg0: Internal.Vector3dc_): this;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        round(): this;
        "fma(org.joml.Vector3dc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        x(): number;
        mul(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        "mulTransposePosition(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        "add(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mulPosition(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulPositionW(arg0: Internal.Matrix4fc_): number;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        div(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "fma(double,org.joml.Vector3fc)"(arg0: number, arg1: Internal.Vector3fc_): this;
        "mulPositionW(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): number;
        "div(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        smoothStep(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): this;
        mulTranspose(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        getClass(): typeof any;
        half(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        orthogonalize(arg0: Internal.Vector3dc_): this;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        negate(): this;
        add(arg0: Internal.Vector3fc_): this;
        angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        ceil(): this;
        "mul(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        "mulDirection(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        half(arg0: Internal.Vector3dc_): this;
        setComponent(arg0: number, arg1: number): this;
        "mul(double)"(arg0: number): this;
        "sub(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        "fma(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        "set(double)"(arg0: number): this;
        rotateY(arg0: number, arg1: Internal.Vector3d_): this;
        getToAddress(arg0: number): Internal.Vector3dc;
        mul(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        "mulPositionW(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): number;
        set(arg0: number[]): this;
        get(arg0: number): number;
        y(): number;
        sub(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        "mulTranspose(org.joml.Matrix3fc,org.joml.Vector3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        hermite(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: number, arg4: Internal.Vector3d_): this;
        "mulTranspose(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        "div(double,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): this;
        negate(arg0: Internal.Vector3d_): this;
        fma(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        "mulPosition(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        "div(org.joml.Vector3d)"(arg0: Internal.Vector3d_): this;
        mulPositionW(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): number;
        equals(arg0: number, arg1: number, arg2: number): boolean;
        wait(arg0: number): void;
        "mulDirection(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        max(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3fc_): this;
        orthogonalize(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        ceil(arg0: Internal.Vector3d_): this;
        dot(arg0: Internal.Vector3dc_): number;
        distanceSquared(arg0: Internal.Vector3dc_): number;
        cross(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mulPosition(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        z(): number;
        mul(arg0: Internal.Vector3fc_): this;
        isFinite(): boolean;
        "fma(double,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4dc_): this;
        mul(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        "mulDirection(org.joml.Matrix4x3dc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        "mul(org.joml.Matrix3dc,org.joml.Vector3f)"(arg0: Internal.Matrix3dc_, arg1: Vec3f_): Vec3f;
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector3d_): this;
        half(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mulTransposeDirection(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        absolute(): this;
        "fma(double,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        fma(arg0: number, arg1: Internal.Vector3dc_): this;
        mulPosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        mulPositionW(arg0: Internal.Matrix4dc_): number;
        "mul(double,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3d_): this;
        distanceSquared(arg0: number, arg1: number, arg2: number): number;
        normalize(): this;
        mulDirection(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        angleCos(arg0: Internal.Vector3dc_): number;
        "mul(org.joml.Matrix3fc)"(arg0: Internal.Matrix3fc_): this;
        angle(arg0: Internal.Vector3dc_): number;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Vector3fc_): this;
        minComponent(): number;
        "mul(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        set(arg0: Internal.Vector2dc_, arg1: number): this;
        "add(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        set(arg0: Internal.Vector3fc_): this;
        add(arg0: Internal.Vector3dc_): this;
        normalize(arg0: Internal.Vector3d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        div(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        cross(arg0: Internal.Vector3dc_): this;
        getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        min(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mulTransposeDirection(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        mulTransposePosition(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "mul(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        "div(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        "mulAdd(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        "set(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Vec3f_): Vec3f;
        mulTranspose(arg0: Internal.Matrix3dc_): this;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        mulProject(arg0: Internal.Matrix4dc_): this;
        "set(float[])"(arg0: number[]): this;
        rotationTo(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniond_): Internal.Quaterniond;
        mulProject(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Vector3d_): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        "get(int,org.joml.Vector3i)"(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        "mulProject(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        mulAdd(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        mulDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        "mulPosition(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        sub(arg0: number, arg1: number, arg2: number): this;
        "sub(org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "fma(org.joml.Vector3dc,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        mul(arg0: number, arg1: Internal.Vector3d_): this;
        lerp(arg0: Internal.Vector3dc_, arg1: number, arg2: Internal.Vector3d_): this;
        equals(arg0: any): boolean;
        setFromAddress(arg0: number): this;
        set(arg0: Internal.Vector2ic_, arg1: number): this;
        "mulTransposeDirection(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        min(arg0: Internal.Vector3dc_): this;
        "mulTransposePosition(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        "mulProject(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        mulTransposeDirection(arg0: Internal.Matrix4fc_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        cross(arg0: number, arg1: number, arg2: number): this;
        "get(org.joml.Vector3f)"(arg0: Vec3f_): Vec3f;
        "mul(org.joml.Matrix3dc)"(arg0: Internal.Matrix3dc_): this;
        "mulPosition(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        half(arg0: number, arg1: number, arg2: number): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        "set(org.joml.Vector2fc,double)"(arg0: Internal.Vector2fc_, arg1: number): this;
        "fma(org.joml.Vector3fc,org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        distance(arg0: number, arg1: number, arg2: number): number;
        sub(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "mul(org.joml.Vector3fc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4fc_): this;
        mulPosition(arg0: Internal.Matrix4dc_): this;
        mul(arg0: number, arg1: number, arg2: number): this;
        normalize(arg0: number, arg1: Internal.Vector3d_): this;
        "fma(org.joml.Vector3fc,org.joml.Vector3fc)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        fma(arg0: number, arg1: Internal.Vector3fc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        "div(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        orthogonalizeUnit(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        normalize(arg0: number): this;
        sub(arg0: Internal.Vector3dc_): this;
        mulPositionW(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): number;
        "add(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        "set(org.joml.Vector2dc,double)"(arg0: Internal.Vector2dc_, arg1: number): this;
        "mulAdd(double,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        clone(): any;
        "mulPosition(org.joml.Matrix4x3fc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        absolute(arg0: Internal.Vector3d_): this;
        dot(arg0: number, arg1: number, arg2: number): number;
        set(arg0: Internal.Vector3dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "mulTransposePosition(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        orthogonalizeUnit(arg0: Internal.Vector3dc_): this;
        "mulAdd(org.joml.Vector3dc,org.joml.Vector3dc)"(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        div(arg0: number): this;
        set(arg0: number[]): this;
        rotateZ(arg0: number): this;
        add(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number): number;
        floor(arg0: Internal.Vector3d_): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "add(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_): this;
        mul(arg0: number): this;
        mulTranspose(arg0: Internal.Matrix3fc_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        floor(): this;
        zero(): this;
        mulProject(arg0: Internal.Matrix4fc_): this;
        mulTransposePosition(arg0: Internal.Matrix4dc_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        lengthSquared(): number;
        mulTransposeDirection(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: Internal.Vector3fc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        toString(): string;
        "mulDirection(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        notifyAll(): void;
        mulDirection(arg0: Internal.Matrix4x3dc_): this;
        mulPosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        mulDirection(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        "mul(org.joml.Matrix3x2fc,org.joml.Vector3d)"(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector3d_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3fc_): this;
        "mulPosition(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        "mulPositionW(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): number;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        "mul(org.joml.Matrix3x2fc)"(arg0: Internal.Matrix3x2fc_): this;
        max(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        mulTranspose(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        reflect(arg0: Internal.Vector3dc_): this;
        "normalize(double)"(arg0: number): this;
        set(arg0: Internal.Vector3ic_): this;
        "mulDirection(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        div(arg0: Internal.Vector3fc_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        fma(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_): this;
        mulTransposeDirection(arg0: Internal.Matrix4dc_): this;
        div(arg0: Internal.Vector3fc_, arg1: Internal.Vector3d_): this;
        lerp(arg0: Internal.Vector3dc_, arg1: number): this;
        "mul(org.joml.Matrix3x2dc,org.joml.Vector3d)"(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector3d_): this;
        set(arg0: number): this;
        angleSigned(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): number;
        notify(): void;
        rotateY(arg0: number): this;
        "mul(org.joml.Matrix3x2dc)"(arg0: Internal.Matrix3x2dc_): this;
        equals(arg0: Internal.Vector3dc_, arg1: number): boolean;
        add(arg0: number, arg1: number, arg2: number): this;
        rotateZ(arg0: number, arg1: Internal.Vector3d_): this;
        mulTransposePosition(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        static length(arg0: number, arg1: number, arg2: number): number;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        "mul(org.joml.Matrix3dc,org.joml.Vector3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        "fma(double,org.joml.Vector3dc)"(arg0: number, arg1: Internal.Vector3dc_): this;
        mulProject(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: Internal.Vector2fc_, arg1: number): this;
        "mulPosition(org.joml.Matrix4x3dc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        "mulTransposePosition(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        "mulAdd(org.joml.Vector3fc,org.joml.Vector3dc,org.joml.Vector3d)"(arg0: Internal.Vector3fc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4fc_): this;
        "mulProject(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): this;
        get(arg0: Internal.Vector3d_): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "set(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        "set(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_): this;
        length(): number;
        "sub(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_): this;
        fma(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Vector3d_): this;
        "mulDirection(org.joml.Matrix4x3fc,org.joml.Vector3d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector3d_): this;
        "mulTranspose(org.joml.Matrix3dc,org.joml.Vector3d)"(arg0: Internal.Matrix3dc_, arg1: Internal.Vector3d_): this;
        "normalize(org.joml.Vector3d)"(arg0: Internal.Vector3d_): this;
        mul(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3d_): this;
        "mulProject(org.joml.Matrix4fc,org.joml.Vector3d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector3d_): this;
        div(arg0: number, arg1: number, arg2: number): this;
        "mulTransposeDirection(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        rotateX(arg0: number): this;
        wait(arg0: number, arg1: number): void;
        "mulDirection(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        "mulPositionW(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): number;
        fma(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_): this;
        mulTransposePosition(arg0: Internal.Matrix4fc_): this;
        get(arg0: number, arg1: Internal.Vector3i_): Internal.Vector3i;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector3d_): this;
        mulAdd(arg0: number, arg1: Internal.Vector3dc_): this;
        div(arg0: Internal.Vector3d_): this;
        mulPosition(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector3d_): this;
        "set(org.joml.Vector2ic,double)"(arg0: Internal.Vector2ic_, arg1: number): this;
        cross(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): this;
        "div(double)"(arg0: number): this;
        mulDirection(arg0: Internal.Matrix4x3fc_): this;
        mulPosition(arg0: Internal.Matrix4x3dc_): this;
        hashCode(): number;
        get(arg0: Vec3f_): Vec3f;
        distance(arg0: Internal.Vector3dc_): number;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        div(arg0: number, arg1: Internal.Vector3d_): this;
        rotationTo(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniond_): Internal.Quaterniond;
        "mul(org.joml.Matrix3fc,org.joml.Vector3d)"(arg0: Internal.Matrix3fc_, arg1: Internal.Vector3d_): this;
        "set(double[])"(arg0: number[]): this;
        mul(arg0: Internal.Matrix3dc_): this;
        get class(): typeof any
        set "(double)"(arg0: number)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        get finite(): boolean
        set "(org.joml.Vector3dc)"(arg0: Internal.Vector3dc_)
        set "(float[])"(arg0: number[])
        set fromAddress(arg0: number)
        set "(org.joml.Vector3fc)"(arg0: Internal.Vector3fc_)
        set "(org.joml.Vector3ic)"(arg0: Internal.Vector3ic_)
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set "(double[])"(arg0: number[])
        z: number;
        x: number;
        y: number;
    }
    type Vector3d_ = Vector3d;
    class CeiRecipeTypes$1 implements Internal.RecipeType<T> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        static simple<T extends Internal.Recipe<any>>(arg0: ResourceLocation_): Internal.RecipeType<T>;
        static register<T extends Internal.Recipe<any>>(arg0: string): Internal.RecipeType<T>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type CeiRecipeTypes$1_ = CeiRecipeTypes$1;
    interface Short2IntFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.IntUnaryOperator {
        abstract get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Short2CharFunction;
        defaultReturnValue(): number;
        "getOrDefault(short,int)"(arg0: number, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2IntFunction<T>;
        "compose(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Short2DoubleFunction;
        "containsKey(short)"(arg0: number): boolean;
        "remove(short)"(arg0: number): number;
        andThenInt(arg0: Internal.Int2IntFunction_): this;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Integer)"(arg0: number, arg1: number): number;
        remove(arg0: number): number;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Integer)"(arg0: any, arg1: number): number;
        "put(short,int)"(arg0: number, arg1: number): number;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Short2LongFunction;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): any;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Short2FloatFunction;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2IntFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        "andThen(java.util.function.IntUnaryOperator)"(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        "andThen(java.util.function.Function)"<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        identity(): Internal.IntUnaryOperator;
        abstract "get(short)"(arg0: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2IntFunction;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Short2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Short2ByteFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        clear(): void;
        /**
         * @deprecated
        */
        "compose(java.util.function.Function)"<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2IntFunction;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2IntFunction;
    }
    type Short2IntFunction_ = Short2IntFunction;
    class CardboardArmorItem extends Internal.BaseArmorItem {
        constructor(arg0: Internal.ArmorItem$Type_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        getToughness(): number;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type CardboardArmorItem_ = CardboardArmorItem;
    class Barrel extends Internal.Attachment {
        getLength(): number;
        getClass(): typeof any;
        toString(): string;
        static addInformationEvent(arg0: Internal.ItemTooltipEvent_): void;
        notifyAll(): void;
        getModifiers(): Internal.IGunModifier[];
        static create(arg0: number, ...arg1: Internal.IGunModifier_[]): Internal.Barrel;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get length(): number
        get class(): typeof any
        get modifiers(): Internal.IGunModifier[]
    }
    type Barrel_ = Barrel;
    class ClientboundSetEntityMotionPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: number, arg1: Vec3d_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getXa(): number;
        getYa(): number;
        getZa(): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        getId(): number;
        get class(): typeof any
        get xa(): number
        get ya(): number
        get za(): number
        get skippable(): boolean
        get id(): number
    }
    type ClientboundSetEntityMotionPacket_ = ClientboundSetEntityMotionPacket;
    interface Serializable {
    }
    type Serializable_ = Serializable;
    interface Short2FloatFunction extends Internal.IntToDoubleFunction, it.unimi.dsi.fastutil.Function<number, number> {
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2FloatFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        defaultReturnValue(arg0: number): void;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Short2IntFunction;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2FloatFunction;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        "containsKey(short)"(arg0: number): boolean;
        "getOrDefault(short,float)"(arg0: number, arg1: number): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2FloatFunction<T>;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        abstract "get(short)"(arg0: number): number;
        "remove(short)"(arg0: number): number;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2FloatFunction<T>;
        containsKey(arg0: number): boolean;
        "put(short,float)"(arg0: number, arg1: number): number;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Short2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        "put(java.lang.Short,java.lang.Float)"(arg0: number, arg1: number): number;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2FloatFunction;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): any;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Short2ShortFunction;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Short2ByteFunction;
        apply(arg0: number): number;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2FloatFunction;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): number;
        defaultReturnValue(): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Short2DoubleFunction;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Float)"(arg0: any, arg1: number): number;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Short2CharFunction;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Short2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2FloatFunction;
        size(): number;
        put(arg0: number, arg1: number): number;
        clear(): void;
    }
    type Short2FloatFunction_ = Short2FloatFunction;
    class FluidTypes$1 extends Internal.FluidType {
        canSwim(arg0: Internal.Entity_): boolean;
        getDescriptionId(arg0: Internal.FluidStack_): string;
        isVaporizedOnPlacement(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraft.world.level.material.FluidState)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): boolean;
        getLightLevel(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        notify(): void;
        getDensity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getSound(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        canExtinguish(arg0: Internal.Entity_): boolean;
        canConvertToSource(arg0: Internal.FluidStack_): boolean;
        getDensity(): number;
        "canBePlacedInLevel(net.minecraft.world.level.BlockAndTintGetter,net.minecraft.core.BlockPos,net.minecraftforge.fluids.FluidStack)"(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        getTemperature(arg0: Internal.FluidStack_): number;
        getRarity(): Internal.Rarity;
        getDescriptionId(): string;
        getFallDistanceModifier(arg0: Internal.Entity_): number;
        getBlockForFluidState(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidState_): Internal.BlockState;
        getBucket(arg0: Internal.FluidStack_): Internal.ItemStack;
        "getSound(net.minecraftforge.fluids.FluidStack,net.minecraftforge.common.SoundAction)"(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getRarity(arg0: Internal.FluidStack_): Internal.Rarity;
        "canHydrate(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        canBePlacedInLevel(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): boolean;
        "getSound(net.minecraft.world.entity.Entity,net.minecraftforge.common.SoundAction)"(arg0: Internal.Entity_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getAdjacentBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        onVaporize(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.FluidStack_): void;
        "canHydrate(net.minecraftforge.fluids.FluidStack)"(arg0: Internal.FluidStack_): boolean;
        canHydrate(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: BlockPos_): boolean;
        wait(): void;
        getTemperature(): number;
        supportsBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        getDescription(): Internal.Component;
        getViscosity(): number;
        getSound(arg0: Internal.FluidStack_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        getClass(): typeof any;
        motionScale(arg0: Internal.Entity_): number;
        isVanilla(): boolean;
        getRenderPropertiesInternal(): any;
        getLightLevel(arg0: Internal.FluidStack_): number;
        isAir(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientFluidTypeExtensions>): void;
        canDrownIn(arg0: Internal.LivingEntity_): boolean;
        wait(arg0: number, arg1: number): void;
        getDensity(arg0: Internal.FluidStack_): number;
        getSound(arg0: Internal.SoundAction_): Internal.SoundEvent;
        canPushEntity(arg0: Internal.Entity_): boolean;
        isLighterThanAir(): boolean;
        toString(): string;
        canRideVehicleUnder(arg0: Internal.Entity_, arg1: Internal.Entity_): boolean;
        canHydrate(arg0: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        getLightLevel(): number;
        notifyAll(): void;
        getDescription(arg0: Internal.FluidStack_): Internal.Component;
        getViscosity(arg0: Internal.FluidStack_): number;
        getBlockPathType(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: boolean): Internal.BlockPathTypes;
        getStateForPlacement(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.FluidStack_): Internal.FluidState;
        setItemMovement(arg0: Internal.ItemEntity_): void;
        move(arg0: Internal.FluidState_, arg1: Internal.LivingEntity_, arg2: Vec3d_, arg3: number): boolean;
        canExtinguish(arg0: Internal.FluidState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        shouldUpdateWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_, arg2: Internal.Entity_): boolean;
        getSound(arg0: Internal.Player_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SoundAction_): Internal.SoundEvent;
        canConvertToSource(arg0: Internal.FluidState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        canHydrate(arg0: Internal.FluidStack_): boolean;
        hashCode(): number;
        wait(arg0: number): void;
        getViscosity(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        getTemperature(arg0: Internal.FluidState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_): number;
        equals(arg0: any): boolean;
        get density(): number
        get rarity(): Internal.Rarity
        get descriptionId(): string
        get temperature(): number
        get description(): Internal.Component
        get viscosity(): number
        get class(): typeof any
        get vanilla(): boolean
        get renderPropertiesInternal(): any
        get air(): boolean
        get lighterThanAir(): boolean
        get lightLevel(): number
        set itemMovement(arg0: Internal.ItemEntity_)
    }
    type FluidTypes$1_ = FluidTypes$1;
    class Vector2i implements Internal.Vector2ic, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector2fc_, arg1: number)
        constructor(arg0: Internal.Vector2dc_, arg1: number)
        constructor(arg0: Internal.Vector2ic_)
        absolute(arg0: Internal.Vector2i_): this;
        mul(arg0: number): this;
        x(): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        gridDistance(arg0: Internal.Vector2ic_): number;
        div(arg0: number): this;
        "set(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_): this;
        set(arg0: Internal.Vector2dc_, arg1: number): this;
        "set(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "sub(int,int)"(arg0: number, arg1: number): this;
        "mul(int)"(arg0: number): this;
        set(arg0: Internal.Vector2ic_): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        max(arg0: Internal.Vector2ic_): this;
        "set(int)"(arg0: number): this;
        add(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        negate(arg0: Internal.Vector2i_): this;
        negate(): this;
        "div(float)"(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        sub(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        div(arg0: number): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        set(arg0: number): this;
        absolute(): this;
        distance(arg0: Internal.Vector2ic_): number;
        "set(org.joml.Vector2fc,int)"(arg0: Internal.Vector2fc_, arg1: number): this;
        add(arg0: number, arg1: number): this;
        set(arg0: Internal.Vector2fc_, arg1: number): this;
        toString(): string;
        notifyAll(): void;
        getToAddress(arg0: number): Internal.Vector2ic;
        "add(int,int)"(arg0: number, arg1: number): this;
        max(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        wait(arg0: number): void;
        get(arg0: number): number;
        "get(int)"(arg0: number): number;
        zero(): this;
        sub(arg0: number, arg1: number): this;
        "set(int[])"(arg0: number[]): this;
        setComponent(arg0: number, arg1: number): this;
        "set(org.joml.Vector2dc,int)"(arg0: Internal.Vector2dc_, arg1: number): this;
        mul(arg0: number, arg1: number): this;
        set(arg0: number[]): this;
        "div(int)"(arg0: number): this;
        notify(): void;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        add(arg0: Internal.Vector2ic_): this;
        distanceSquared(arg0: number, arg1: number): number;
        "set(int,int)"(arg0: number, arg1: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        "mul(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_): this;
        div(arg0: number, arg1: Internal.Vector2i_): this;
        mul(arg0: number, arg1: Internal.Vector2i_): this;
        gridDistance(arg0: number, arg1: number): number;
        "get(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        "div(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): this;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2i_): this;
        lengthSquared(): number;
        "sub(org.joml.Vector2ic,org.joml.Vector2i)"(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        wait(): void;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        distanceSquared(arg0: Internal.Vector2ic_): number;
        min(arg0: Internal.Vector2ic_): this;
        minComponent(): number;
        "div(float,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): this;
        set(arg0: Internal.Vector2dc_): this;
        y(): number;
        div(arg0: number, arg1: Internal.Vector2i_): this;
        mul(arg0: Internal.Vector2ic_): this;
        set(arg0: Internal.IntBuffer_): this;
        wait(arg0: number, arg1: number): void;
        "mul(org.joml.Vector2ic,org.joml.Vector2i)"(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        add(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        equals(arg0: number, arg1: number): boolean;
        set(arg0: number, arg1: number): this;
        setFromAddress(arg0: number): this;
        "set(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        "mul(int,int)"(arg0: number, arg1: number): this;
        sub(arg0: Internal.Vector2ic_): this;
        mul(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        static lengthSquared(arg0: number, arg1: number): number;
        static length(arg0: number, arg1: number): number;
        distance(arg0: number, arg1: number): number;
        set(arg0: Internal.ByteBuffer_): this;
        "get(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        hashCode(): number;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "mul(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): this;
        "set(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): this;
        min(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        equals(arg0: any): boolean;
        "add(org.joml.Vector2ic,org.joml.Vector2i)"(arg0: Internal.Vector2ic_, arg1: Internal.Vector2i_): this;
        set "(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_)
        set "(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_)
        set "(int)"(arg0: number)
        get class(): typeof any
        set "(int[])"(arg0: number[])
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set fromAddress(arg0: number)
        set "(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_)
        x: number;
        y: number;
    }
    type Vector2i_ = Vector2i;
    class ServerCommand {
        constructor(arg0: string, arg1: Internal.CommandDispatcher_<Internal.CommandSourceStack>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static create(arg0: Internal.AbstractForgeMod_, arg1: Internal.CommandDispatcher_<Internal.CommandSourceStack>): Internal.ServerCommand;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        requires(arg0: Internal.ServerCommand$OpLevel_): this;
        hashCode(): number;
        register(): void;
        wait(): void;
        wait(arg0: number): void;
        task(arg0: string): Internal.ServerCommand$Task;
        equals(arg0: any): boolean;
        get class(): typeof any
    }
    type ServerCommand_ = ServerCommand;
    interface ITextureAtlasSpriteLoader {
        abstract loadContents(arg0: ResourceLocation_, arg1: Internal.Resource_, arg2: Internal.FrameSize_, arg3: Internal.NativeImage_, arg4: Internal.AnimationMetadataSection_, arg5: Internal.ForgeTextureMetadata_): Internal.SpriteContents;
        abstract makeSprite(arg0: ResourceLocation_, arg1: Internal.SpriteContents_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.TextureAtlasSprite;
    }
    type ITextureAtlasSpriteLoader_ = ITextureAtlasSpriteLoader;
    class BloodItem extends Internal.BucketItem {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        playEmptySound(arg0: Internal.Player_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): void;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        canBlockContainFluid(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        checkExtraContent(arg0: Internal.Player_, arg1: Internal.Level_, arg2: Internal.ItemStack_, arg3: BlockPos_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        arch$getFluid(): Internal.Fluid;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getContent(): Internal.Fluid;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        static getEmptySuccessItem(arg0: Internal.ItemStack_, arg1: Internal.Player_): Internal.ItemStack;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        emptyContents(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        getFluid(): Internal.Fluid;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        emptyContents(arg0: Internal.Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_, arg4: Internal.ItemStack_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        get content(): Internal.Fluid
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get fluid(): Internal.Fluid
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type BloodItem_ = BloodItem;
    interface ShortIterator extends Internal.PrimitiveIterator<number, Internal.ShortConsumer> {
        /**
         * @deprecated
        */
        "forEachRemaining(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        forEachRemaining(arg0: any): void;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        next(): any;
        skip(arg0: number): number;
        forEachRemaining(arg0: Internal.IntConsumer_): void;
        abstract nextShort(): number;
        forEachRemaining(arg0: Internal.ShortConsumer_): void;
        remove(): void;
        "forEachRemaining(it.unimi.dsi.fastutil.shorts.ShortConsumer)"(arg0: Internal.ShortConsumer_): void;
        "forEachRemaining(java.lang.Object)"(arg0: any): void;
        "forEachRemaining(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        abstract hasNext(): boolean;
    }
    type ShortIterator_ = ShortIterator;
    class Vector2f implements Internal.Vector2fc, Internal.Cloneable, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector2fc_)
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: number, arg1: Internal.FloatBuffer_)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number[])
        constructor(arg0: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector2ic_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        round(): this;
        min(arg0: Internal.Vector2fc_): this;
        div(arg0: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mul(arg0: Internal.Vector2fc_): this;
        "set(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_): this;
        set(arg0: Internal.Vector2ic_): this;
        ceil(arg0: Internal.Vector2f_): this;
        "set(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): this;
        negate(): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        "normalize(org.joml.Vector2f)"(arg0: Internal.Vector2f_): this;
        "set(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "mul(float,org.joml.Vector2f)"(arg0: number, arg1: Internal.Vector2f_): this;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        add(arg0: number, arg1: number): this;
        "div(float)"(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        perpendicular(): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        lengthSquared(): number;
        fma(arg0: number, arg1: Internal.Vector2fc_): this;
        div(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        lerp(arg0: Internal.Vector2fc_, arg1: number, arg2: Internal.Vector2f_): this;
        "mul(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        get(arg0: number): number;
        set(arg0: number): this;
        mulPosition(arg0: Internal.Matrix3x2fc_): this;
        set(arg0: Internal.FloatBuffer_): this;
        fma(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        "set(float)"(arg0: number): this;
        "div(float,org.joml.Vector2f)"(arg0: number, arg1: Internal.Vector2f_): this;
        sub(arg0: Internal.Vector2fc_): this;
        normalize(arg0: number, arg1: Internal.Vector2f_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        clone(): any;
        getClass(): typeof any;
        set(arg0: number, arg1: number): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        set(arg0: Internal.Vector2fc_): this;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        floor(): this;
        "set(float,float)"(arg0: number, arg1: number): this;
        absolute(): this;
        mul(arg0: number, arg1: Internal.Vector2f_): this;
        distance(arg0: Internal.Vector2fc_): number;
        mulTranspose(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2f_): this;
        setComponent(arg0: number, arg1: number): this;
        "set(double,double)"(arg0: number, arg1: number): this;
        div(arg0: number): this;
        mul(arg0: number): this;
        "get(org.joml.Vector2d)"(arg0: Internal.Vector2d_): Internal.Vector2d;
        "get(org.joml.Vector2f)"(arg0: Internal.Vector2f_): this;
        add(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        "equals(float,float)"(arg0: number, arg1: number): boolean;
        div(arg0: number, arg1: number): this;
        length(): number;
        toString(): string;
        dot(arg0: Internal.Vector2fc_): number;
        max(arg0: Internal.Vector2fc_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        div(arg0: number, arg1: Internal.Vector2f_): this;
        notifyAll(): void;
        mul(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        distanceSquared(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix2dc,org.joml.Vector2f)"(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2f_): this;
        fma(arg0: number, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        "get(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "div(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        set(arg0: number[]): this;
        wait(arg0: number): void;
        min(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        div(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        mul(arg0: Internal.Matrix2dc_): this;
        "normalize(float)"(arg0: number): this;
        "set(double)"(arg0: number): this;
        zero(): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        mulPosition(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector2f_): this;
        "mul(float,float)"(arg0: number, arg1: number): this;
        "fma(org.joml.Vector2fc,org.joml.Vector2fc)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2f_): this;
        "fma(float,org.joml.Vector2fc)"(arg0: number, arg1: Internal.Vector2fc_): this;
        "div(float,float)"(arg0: number, arg1: number): this;
        negate(arg0: Internal.Vector2f_): this;
        notify(): void;
        fma(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        isFinite(): boolean;
        mul(arg0: number, arg1: number): this;
        get(arg0: Internal.Vector2d_): Internal.Vector2d;
        add(arg0: number, arg1: number, arg2: Internal.Vector2f_): this;
        static length(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        set(arg0: number): this;
        x(): number;
        ceil(): this;
        normalize(arg0: number): this;
        normalize(arg0: Internal.Vector2f_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        normalize(): this;
        set(arg0: number, arg1: number): this;
        floor(arg0: Internal.Vector2f_): this;
        sub(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        sub(arg0: number, arg1: number): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        static lengthSquared(arg0: number, arg1: number): number;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(int)"(arg0: number): number;
        "sub(org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        angle(arg0: Internal.Vector2fc_): number;
        minComponent(): number;
        "add(float,float)"(arg0: number, arg1: number): this;
        "set(float[])"(arg0: number[]): this;
        add(arg0: Internal.Vector2fc_): this;
        lerp(arg0: Internal.Vector2fc_, arg1: number): this;
        get(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        set(arg0: Internal.Vector2dc_): this;
        "fma(float,org.joml.Vector2fc,org.joml.Vector2f)"(arg0: number, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        equals(arg0: number, arg1: number): boolean;
        wait(arg0: number, arg1: number): void;
        mulTranspose(arg0: Internal.Matrix2fc_): this;
        get(arg0: Internal.Vector2f_): this;
        equals(arg0: Internal.Vector2fc_, arg1: number): boolean;
        getToAddress(arg0: number): Internal.Vector2fc;
        "sub(float,float)"(arg0: number, arg1: number): this;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2f_): this;
        setFromAddress(arg0: number): this;
        mulDirection(arg0: Internal.Matrix3x2fc_, arg1: Internal.Vector2f_): this;
        "mul(org.joml.Matrix2fc,org.joml.Vector2f)"(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2f_): this;
        mulDirection(arg0: Internal.Matrix3x2fc_): this;
        y(): number;
        "equals(org.joml.Vector2fc,float)"(arg0: Internal.Vector2fc_, arg1: number): boolean;
        absolute(arg0: Internal.Vector2f_): this;
        "add(org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        "set(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): this;
        "mul(float)"(arg0: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        "set(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        "fma(org.joml.Vector2fc,org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_, arg2: Internal.Vector2f_): this;
        hashCode(): number;
        max(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        round(arg0: Internal.Vector2f_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        distanceSquared(arg0: Internal.Vector2fc_): number;
        "mul(org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        mul(arg0: Internal.Matrix2fc_): this;
        distance(arg0: number, arg1: number): number;
        "mul(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        equals(arg0: any): boolean;
        "div(org.joml.Vector2fc,org.joml.Vector2f)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): this;
        set "(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_)
        set "(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_)
        set "(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_)
        set "(float)"(arg0: number)
        get class(): typeof any
        set "(double)"(arg0: number)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        get finite(): boolean
        set "(float[])"(arg0: number[])
        set fromAddress(arg0: number)
        set "(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_)
        y: number;
        x: number;
    }
    type Vector2f_ = Vector2f;
    class MagicSwordItem extends Internal.ExtendedSwordItem implements Internal.IPresetSpellContainer {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: any_[], arg4: Internal.Map_<Internal.Attribute, Internal.AttributeModifier>, arg5: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getSpells(): Internal.List<Internal.SpellData>;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDamage(): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        initializeSpellContainer(arg0: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$hai000$dummmmmmy$mm$damageEquipment(stack: Internal.ItemStack_, entity: Internal.LivingEntity_, player: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get spells(): Internal.List<Internal.SpellData>
        get edible(): boolean
        get damage(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type MagicSwordItem_ = MagicSwordItem;
    class Vector2d implements Internal.Cloneable, Internal.Vector2dc, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector2fc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Vector2dc_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector2ic_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: number)
        div(arg0: Internal.Vector2fc_): this;
        equals(arg0: Internal.Vector2dc_, arg1: number): boolean;
        "mulTranspose(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        round(): this;
        set(arg0: Internal.Vector2ic_): this;
        "mul(org.joml.Matrix2fc)"(arg0: Internal.Matrix2fc_): this;
        "fma(double,org.joml.Vector2dc)"(arg0: number, arg1: Internal.Vector2dc_): this;
        "get(int)"(arg0: number): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        add(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        "sub(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        fma(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        "fma(double,org.joml.Vector2dc,org.joml.Vector2d)"(arg0: number, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        distance(arg0: Internal.Vector2fc_): number;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        angle(arg0: Internal.Vector2dc_): number;
        lerp(arg0: Internal.Vector2dc_, arg1: number): this;
        mul(arg0: number, arg1: Internal.Vector2d_): this;
        "set(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_): this;
        div(arg0: number, arg1: Internal.Vector2d_): this;
        x(): number;
        negate(): this;
        "fma(org.joml.Vector2dc,org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        dot(arg0: Internal.Vector2dc_): number;
        "set(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        fma(arg0: number, arg1: Internal.Vector2dc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        lerp(arg0: Internal.Vector2dc_, arg1: number, arg2: Internal.Vector2d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        setComponent(arg0: number, arg1: number): this;
        "mul(double)"(arg0: number): this;
        perpendicular(): this;
        round(arg0: Internal.Vector2d_): this;
        "normalize(org.joml.Vector2d)"(arg0: Internal.Vector2d_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        floor(): this;
        sub(arg0: Internal.Vector2fc_): this;
        sub(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        div(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        "mul(double,double)"(arg0: number, arg1: number): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        clone(): any;
        set(arg0: number, arg1: number): this;
        getClass(): typeof any;
        add(arg0: Internal.Vector2dc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        "add(org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        set(arg0: Internal.Vector2fc_): this;
        absolute(): this;
        negate(arg0: Internal.Vector2d_): this;
        mulTranspose(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        static length(arg0: number, arg1: number): number;
        normalize(): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "div(org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        mulDirection(arg0: Internal.Matrix3x2dc_): this;
        mulTranspose(arg0: Internal.Matrix2dc_): this;
        "div(double,double)"(arg0: number, arg1: number): this;
        "set(double,double)"(arg0: number, arg1: number): this;
        add(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "get(org.joml.Vector2d)"(arg0: Internal.Vector2d_): this;
        "get(org.joml.Vector2f)"(arg0: Internal.Vector2f_): Internal.Vector2f;
        get(arg0: number): number;
        "normalize(double)"(arg0: number): this;
        y(): number;
        ceil(arg0: Internal.Vector2d_): this;
        "mul(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        lengthSquared(): number;
        set(arg0: number[]): this;
        toString(): string;
        distanceSquared(arg0: Internal.Vector2fc_): number;
        notifyAll(): void;
        mul(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "distanceSquared(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): number;
        floor(arg0: Internal.Vector2d_): this;
        "set(double)"(arg0: number): this;
        "add(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        fma(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        distance(arg0: number, arg1: number): number;
        "get(int,org.joml.Vector2i)"(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "div(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        zero(): this;
        wait(arg0: number): void;
        "distance(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): number;
        set(arg0: number[]): this;
        mul(arg0: Internal.Matrix2dc_): this;
        min(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "mul(org.joml.Matrix2dc,org.joml.Vector2d)"(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        div(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        mulPosition(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector2d_): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        div(arg0: number, arg1: number): this;
        min(arg0: Internal.Vector2dc_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "div(org.joml.Vector2d)"(arg0: Internal.Vector2d_): this;
        "equals(org.joml.Vector2dc,double)"(arg0: Internal.Vector2dc_, arg1: number): boolean;
        notify(): void;
        "distanceSquared(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): number;
        mulTranspose(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        mul(arg0: Internal.Vector2dc_): this;
        isFinite(): boolean;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        get(arg0: Internal.Vector2d_): this;
        distance(arg0: Internal.Vector2dc_): number;
        getToAddress(arg0: number): Internal.Vector2dc;
        "mulTranspose(org.joml.Matrix2fc,org.joml.Vector2d)"(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        add(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "set(double[])"(arg0: number[]): this;
        equals(arg0: number, arg1: number): boolean;
        absolute(arg0: Internal.Vector2d_): this;
        "mul(org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "mul(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        ceil(): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        "sub(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        "add(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_): this;
        set(arg0: number): this;
        div(arg0: number): this;
        mul(arg0: number, arg1: number): this;
        sub(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        mul(arg0: number): this;
        wait(): void;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        sub(arg0: Internal.Vector2dc_): this;
        mulPosition(arg0: Internal.Matrix3x2dc_): this;
        "sub(org.joml.Vector2fc,org.joml.Vector2d)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        "set(float[])"(arg0: number[]): this;
        static lengthSquared(arg0: number, arg1: number): number;
        minComponent(): number;
        set(arg0: Internal.Vector2dc_): this;
        "distance(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): number;
        get(arg0: number, arg1: Internal.Vector2i_): Internal.Vector2i;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        add(arg0: number, arg1: number): this;
        add(arg0: Internal.Vector2fc_): this;
        div(arg0: Internal.Vector2d_): this;
        normalize(arg0: number, arg1: Internal.Vector2d_): this;
        div(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        wait(arg0: number, arg1: number): void;
        "equals(double,double)"(arg0: number, arg1: number): boolean;
        "div(double)"(arg0: number): this;
        "sub(org.joml.Vector2dc,org.joml.Vector2d)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        "sub(double,double)"(arg0: number, arg1: number): this;
        mulTranspose(arg0: Internal.Matrix2fc_): this;
        "mul(org.joml.Matrix2fc,org.joml.Vector2d)"(arg0: Internal.Matrix2fc_, arg1: Internal.Vector2d_): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        get(arg0: Internal.Vector2f_): Internal.Vector2f;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        normalize(arg0: number): this;
        mulDirection(arg0: Internal.Matrix3x2dc_, arg1: Internal.Vector2d_): this;
        setFromAddress(arg0: number): this;
        "mul(double,org.joml.Vector2d)"(arg0: number, arg1: Internal.Vector2d_): this;
        "add(org.joml.Vector2fc,org.joml.Vector2d)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        "fma(org.joml.Vector2dc,org.joml.Vector2dc)"(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        fma(arg0: number, arg1: Internal.Vector2dc_, arg2: Internal.Vector2d_): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mul(arg0: number, arg1: number, arg2: Internal.Vector2d_): this;
        distanceSquared(arg0: number, arg1: number): number;
        "mulTranspose(org.joml.Matrix2dc,org.joml.Vector2d)"(arg0: Internal.Matrix2dc_, arg1: Internal.Vector2d_): this;
        distanceSquared(arg0: Internal.Vector2dc_): number;
        normalize(arg0: Internal.Vector2d_): this;
        sub(arg0: number, arg1: number): this;
        "add(double,double)"(arg0: number, arg1: number): this;
        set(arg0: Internal.ByteBuffer_): this;
        hashCode(): number;
        max(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): this;
        sub(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        "set(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_): this;
        "div(double,org.joml.Vector2d)"(arg0: number, arg1: Internal.Vector2d_): this;
        max(arg0: Internal.Vector2dc_): this;
        mul(arg0: Internal.Matrix2fc_): this;
        "mulTranspose(org.joml.Matrix2dc)"(arg0: Internal.Matrix2dc_): this;
        equals(arg0: any): boolean;
        "div(org.joml.Vector2fc,org.joml.Vector2d)"(arg0: Internal.Vector2fc_, arg1: Internal.Vector2d_): this;
        set "(org.joml.Vector2ic)"(arg0: Internal.Vector2ic_)
        set "(org.joml.Vector2dc)"(arg0: Internal.Vector2dc_)
        get class(): typeof any
        set "(double)"(arg0: number)
        get finite(): boolean
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set "(double[])"(arg0: number[])
        set "(float[])"(arg0: number[])
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        set fromAddress(arg0: number)
        set "(org.joml.Vector2fc)"(arg0: Internal.Vector2fc_)
        x: number;
        y: number;
    }
    type Vector2d_ = Vector2d;
    class LootParams$Builder {
        constructor(arg0: Internal.ServerLevel_)
        getClass(): typeof any;
        getOptionalParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        getLevel(): Internal.ServerLevel;
        toString(): string;
        notifyAll(): void;
        withOptionalParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        handler$hdf000$lootjs$addTypeOnCreate(paramSet: Internal.LootContextParamSet_, cir: Internal.CallbackInfoReturnable_<any>): void;
        hashCode(): number;
        getParameter<T>(arg0: Internal.LootContextParam_<T>): T;
        wait(): void;
        withParameter<T>(arg0: Internal.LootContextParam_<T>, arg1: T): this;
        withDynamicDrop(arg0: ResourceLocation_, arg1: Internal.LootParams$DynamicDrop_): this;
        wait(arg0: number): void;
        create(arg0: Internal.LootContextParamSet_): Internal.LootParams;
        withLuck(arg0: number): this;
        equals(arg0: any): boolean;
        get class(): typeof any
        get level(): Internal.ServerLevel
        luck: number;
    }
    type LootParams$Builder_ = LootParams$Builder;
    class ConfigurationSource {
        constructor(stream: Internal.InputStream_, file: Internal.File_)
        constructor(stream: Internal.InputStream_, url: Internal.URL_)
        constructor(source: Internal.Source_, data: number[], lastModified: number)
        constructor(stream: Internal.InputStream_, url: Internal.URL_, lastModified: number)
        constructor(stream: Internal.InputStream_)
        constructor(stream: Internal.InputStream_, path: Internal.Path_)
        getInputStream(): Internal.InputStream;
        getClass(): typeof any;
        getURL(): Internal.URL;
        toString(): string;
        notifyAll(): void;
        getLocation(): string;
        setData(data: number[]): void;
        static fromResource(resource: string, loader: Internal.ClassLoader_): Internal.ConfigurationSource;
        /**
         * @deprecated
        */
        setSource(source: Internal.Source_): void;
        getURI(): Internal.URI;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        resetInputStream(): this;
        getFile(): Internal.File;
        getLastModified(): number;
        hashCode(): number;
        static fromUri(configLocation: Internal.URI_): Internal.ConfigurationSource;
        wait(): void;
        wait(arg0: number): void;
        setModifiedMillis(modifiedMillis: number): void;
        equals(arg0: any): boolean;
        get inputStream(): Internal.InputStream
        get class(): typeof any
        get URL(): Internal.URL
        get location(): string
        set data(data: number[])
        /**
         * @deprecated
        */
        set source(source: Internal.Source_)
        get URI(): Internal.URI
        get file(): Internal.File
        get lastModified(): number
        set modifiedMillis(modifiedMillis: number)
        static readonly NULL_SOURCE: (Internal.ConfigurationSource) & (Internal.ConfigurationSource);
        static readonly COMPOSITE_SOURCE: (Internal.ConfigurationSource) & (Internal.ConfigurationSource);
    }
    type ConfigurationSource_ = ConfigurationSource;
    class BenchBlock extends Internal.ModularSeatBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        canTakeShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, face: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        /**
         * @deprecated
        */
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, hand: Internal.InteractionHand_, hit: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        sitOn(level: Internal.Level_, pos: BlockPos_, player: Internal.Player_, dir: Internal.Direction_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(state: Internal.BlockState_, direction: Internal.Direction_, neighborState: Internal.BlockState_, level: Internal.LevelAccessor_, currentPos: BlockPos_, neighborPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        isPathfindable(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, type: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        onRemove(state: Internal.BlockState_, level: Internal.Level_, pos: BlockPos_, newState: Internal.BlockState_, moved: boolean): void;
        mobControl$breakTick(): number;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        invokeGetSoundGroup(arg0: Internal.BlockState_): SoundType;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getTableParticle(arg0: Internal.BlockState_): Internal.ParticleOptions;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        getArcanaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        sounds$prepareTagPair(value: ResourceLocation_): void;
        handler$ifn000$sounds$$manageCustomSounds(state: Internal.BlockState_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSeatSize(state: Internal.BlockState_): Internal.AABB;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(stack: Internal.ItemStack_, level: Internal.BlockGetter_, tooltip: Internal.List_<Internal.Component>, flag: Internal.TooltipFlag_): void;
        mirror(state: Internal.BlockState_, mirror: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_): Internal.ModularSeatProperty;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly COLOR: Internal.EnumProperty<Internal.OptionalColorProperty>;
        static readonly SEAT: (Internal.AABB) & (Internal.AABB);
        static readonly VOXEL_SHAPE: (Internal.CubeVoxelShape) & (Internal.VoxelShape);
    }
    type BenchBlock_ = BenchBlock;
    interface EntityTickListAccessor {
        abstract getActive(): Internal.Int2ObjectMap<Internal.Entity>;
        get active(): Internal.Int2ObjectMap<Internal.Entity>
        (): Internal.Int2ObjectMap_<Internal.Entity>;
    }
    type EntityTickListAccessor_ = (()=> Internal.Int2ObjectMap_<Internal.Entity>) | EntityTickListAccessor;
    class WorldGenSirenIsland extends Internal.Feature<Internal.NoneFeatureConfiguration> implements Internal.TypedFeature {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        getId(): string;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        getFeatureType(): Internal.IafWorldData$FeatureType;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Internal.Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
        get id(): string
        get featureType(): Internal.IafWorldData$FeatureType
    }
    type WorldGenSirenIsland_ = WorldGenSirenIsland;
    abstract class AbstractContainerMenu implements Internal.AbstractContainerMenuAccessor, fuzs.puzzleslib.mixin.accessor.AbstractContainerMenuAccessor, Internal.AbstractContainerMenuInvoker {
        constructor(arg0: Internal.MenuType_<any>, arg1: number)
        findSlot(arg0: Internal.Container_, arg1: number): Internal.OptionalInt;
        getItems(): Internal.NonNullList<Internal.ItemStack>;
        addSlot(arg0: Internal.Slot_): Internal.Slot;
        abstract quickMoveStack(arg0: Internal.Player_, arg1: number): Internal.ItemStack;
        resetQuickCraft(): void;
        broadcastFullState(): void;
        setRemoteCarried(arg0: Internal.ItemStack_): void;
        notify(): void;
        incrementStateId(): number;
        static checkContainerDataCount(arg0: Internal.ContainerData_, arg1: number): void;
        puzzleslib$callAddSlot(arg0: Internal.Slot_): Internal.Slot;
        isValidSlotIndex(arg0: number): boolean;
        broadcastChanges(): void;
        setData(arg0: number, arg1: number): void;
        getSlot(arg0: number): Internal.Slot;
        slotsChanged(arg0: Internal.Container_): void;
        removeSlotListener(arg0: Internal.ContainerListener_): void;
        _moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        setRemoteSlot(arg0: number, arg1: Internal.ItemStack_): void;
        tryItemClickBehaviourOverride(arg0: Internal.Player_, arg1: Internal.ClickAction_, arg2: Internal.Slot_, arg3: Internal.ItemStack_, arg4: Internal.ItemStack_): boolean;
        getCarried(): Internal.ItemStack;
        clearContainer(arg0: Internal.Player_, arg1: Internal.Container_): void;
        wait(): void;
        getType(): Internal.MenuType<any>;
        puzzlesapi$getMenuType(): Internal.MenuType<any>;
        setSynchronizer(arg0: Internal.ContainerSynchronizer_): void;
        doClick(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        static isValidQuickcraftType(arg0: number, arg1: Internal.Player_): boolean;
        getClass(): typeof any;
        static getRedstoneSignalFromBlockEntity(arg0: Internal.BlockEntity_): number;
        moveItemStackTo(arg0: Internal.ItemStack_, arg1: number, arg2: number, arg3: boolean): boolean;
        canTakeItemForPickAll(arg0: Internal.ItemStack_, arg1: Internal.Slot_): boolean;
        setItem(arg0: number, arg1: number, arg2: Internal.ItemStack_): void;
        addDataSlot(arg0: Internal.DataSlot_): Internal.DataSlot;
        static getRedstoneSignalFromContainer(arg0: Internal.Container_): number;
        setCarried(arg0: Internal.ItemStack_): void;
        sendAllDataToRemote(): void;
        static getQuickCraftPlaceCount(arg0: Internal.Set_<Internal.Slot>, arg1: number, arg2: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$baj000$highlighter$doClick(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_, arg4: Internal.CallbackInfo_): void;
        handler$igh000$sounds$$item_transfer_sound_effects(slotIndex: number, button: number, actionType: Internal.ClickType_, player: Internal.Player_, ci: Internal.CallbackInfo_): void;
        resumeRemoteUpdates(): void;
        addDataSlots(arg0: Internal.ContainerData_): void;
        static getQuickcraftHeader(arg0: number): number;
        static stillValid(arg0: Internal.ContainerLevelAccess_, arg1: Internal.Player_, arg2: Internal.Block_): boolean;
        static canItemQuickReplace(arg0: Internal.Slot_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addSlotListener(arg0: Internal.ContainerListener_): void;
        updateDataSlotListeners(arg0: number, arg1: number): void;
        toString(): string;
        clickMenuButton(arg0: Internal.Player_, arg1: number): boolean;
        static getQuickcraftMask(arg0: number, arg1: number): number;
        notifyAll(): void;
        static getQuickcraftType(arg0: number): number;
        static checkContainerSize(arg0: Internal.Container_, arg1: number): void;
        clicked(arg0: number, arg1: number, arg2: Internal.ClickType_, arg3: Internal.Player_): void;
        setRemoteSlotNoCopy(arg0: number, arg1: Internal.ItemStack_): void;
        abstract stillValid(arg0: Internal.Player_): boolean;
        suppressRemoteUpdates(): void;
        hashCode(): number;
        initializeContents(arg0: number, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): void;
        getStateId(): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        transferState(arg0: Internal.AbstractContainerMenu_): void;
        canDragTo(arg0: Internal.Slot_): boolean;
        removed(arg0: Internal.Player_): void;
        get items(): Internal.NonNullList<Internal.ItemStack>
        set remoteCarried(arg0: Internal.ItemStack_)
        get carried(): Internal.ItemStack
        get type(): Internal.MenuType<any>
        set synchronizer(arg0: Internal.ContainerSynchronizer_)
        get class(): typeof any
        set carried(arg0: Internal.ItemStack_)
        get stateId(): number
        static readonly QUICKCRAFT_TYPE_CLONE: (2) & (number);
        readonly containerListeners: Internal.List<Internal.ContainerListener>;
        static readonly SLOT_CLICKED_OUTSIDE: (-999) & (number);
        readonly slots: Internal.NonNullList<Internal.Slot>;
        static readonly CARRIED_SLOT_SIZE: (2147483647) & (number);
        static readonly QUICKCRAFT_TYPE_GREEDY: (1) & (number);
        remoteSlots: Internal.NonNullList<Internal.ItemStack>;
        menuType: Internal.MenuType<any>;
        static readonly QUICKCRAFT_HEADER_CONTINUE: (1) & (number);
        static readonly QUICKCRAFT_HEADER_START: (0) & (number);
        static readonly QUICKCRAFT_HEADER_END: (2) & (number);
        quickcraftStatus: number;
        readonly quickcraftSlots: Internal.Set<Internal.Slot>;
        quickcraftType: number;
        static readonly QUICKCRAFT_TYPE_CHARITABLE: (0) & (number);
        containerId: number;
        readonly lastSlots: Internal.NonNullList<Internal.ItemStack>;
    }
    type AbstractContainerMenu_ = AbstractContainerMenu;
    class LocalDateTime implements Internal.ChronoLocalDateTime<Internal.LocalDate>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        getMonth(): Internal.Month;
        toLocalTime(): Internal.LocalTime;
        withHour(arg0: number): this;
        getDayOfMonth(): number;
        static now(): Internal.LocalDateTime;
        static ofInstant(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.LocalDateTime;
        plus(arg0: Internal.TemporalAmount_): this;
        "with"(arg0: Internal.TemporalField_, arg1: number): Internal.Temporal;
        "compareTo(java.time.chrono.ChronoLocalDateTime)"(arg0: Internal.ChronoLocalDateTime_<any>): number;
        plusHours(arg0: number): this;
        "isSupported(java.time.temporal.TemporalField)"(arg0: Internal.TemporalField_): boolean;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        getYear(): number;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        withDayOfMonth(arg0: number): this;
        get(arg0: Internal.TemporalField_): number;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        "compareTo(java.lang.Object)"(arg0: any): number;
        compareTo(arg0: Internal.ChronoLocalDateTime_<any>): number;
        plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        static timeLineOrder(): Internal.Comparator<Internal.ChronoLocalDateTime<any>>;
        getMonthValue(): number;
        getClass(): typeof any;
        withDayOfYear(arg0: number): this;
        minusYears(arg0: number): this;
        plusDays(arg0: number): this;
        static "of(int,int,int,int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        plusWeeks(arg0: number): this;
        withYear(arg0: number): this;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        getLong(arg0: Internal.TemporalField_): number;
        plusYears(arg0: number): this;
        toString(): string;
        notifyAll(): void;
        minusHours(arg0: number): this;
        minusDays(arg0: number): this;
        toInstant(arg0: Internal.ZoneOffset_): Internal.Instant;
        getNano(): number;
        getSecond(): number;
        static from(arg0: Internal.TemporalAccessor_): Internal.LocalDateTime;
        atZone(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        withMinute(arg0: number): this;
        wait(arg0: number): void;
        toEpochSecond(arg0: Internal.ZoneOffset_): number;
        plusNanos(arg0: number): this;
        minus(arg0: Internal.TemporalAmount_): Internal.Temporal;
        minusSeconds(arg0: number): this;
        getHour(): number;
        minusMonths(arg0: number): this;
        withSecond(arg0: number): this;
        getDayOfWeek(): Internal.DayOfWeek;
        notify(): void;
        compareTo(arg0: any): number;
        getMinute(): number;
        static of(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        static of(arg0: Internal.LocalDate_, arg1: Internal.LocalTime_): Internal.LocalDateTime;
        "with"(arg0: Internal.TemporalAdjuster_): Internal.Temporal;
        plusMonths(arg0: number): this;
        minusNanos(arg0: number): this;
        isSupported(arg0: Internal.TemporalField_): boolean;
        format(arg0: Internal.DateTimeFormatter_): string;
        getChronology(): Internal.Chronology;
        plusSeconds(arg0: number): this;
        isBefore(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        static now(arg0: Internal.Clock_): Internal.LocalDateTime;
        atOffset(arg0: Internal.ZoneOffset_): Internal.OffsetDateTime;
        static "of(int,int,int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        static "of(int,java.time.Month,int,int,int,int)"(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        isAfter(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        wait(): void;
        static "now(java.time.Clock)"(arg0: Internal.Clock_): Internal.LocalDateTime;
        minusMinutes(arg0: number): this;
        withMonth(arg0: number): this;
        static "of(int,java.time.Month,int,int,int,int,int)"(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): Internal.LocalDateTime;
        "isSupported(java.time.temporal.TemporalUnit)"(arg0: Internal.TemporalUnit_): boolean;
        minusWeeks(arg0: number): this;
        static ofEpochSecond(arg0: number, arg1: number, arg2: Internal.ZoneOffset_): Internal.LocalDateTime;
        static parse(arg0: Internal.CharSequence_, arg1: Internal.DateTimeFormatter_): Internal.LocalDateTime;
        toLocalDate(): Internal.LocalDate;
        static parse(arg0: Internal.CharSequence_): Internal.LocalDateTime;
        wait(arg0: number, arg1: number): void;
        static "of(int,java.time.Month,int,int,int)"(arg0: number, arg1: Internal.Month_, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        static now(arg0: Internal.ZoneId_): Internal.LocalDateTime;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.LocalDateTime;
        isEqual(arg0: Internal.ChronoLocalDateTime_<any>): boolean;
        plusMinutes(arg0: number): this;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        withNano(arg0: number): this;
        getDayOfYear(): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        hashCode(): number;
        static "of(int,int,int,int,int)"(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        static "now(java.time.ZoneId)"(arg0: Internal.ZoneId_): Internal.LocalDateTime;
        equals(arg0: any): boolean;
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): Internal.LocalDateTime;
        get month(): Internal.Month
        get dayOfMonth(): number
        get year(): number
        get monthValue(): number
        get class(): typeof any
        get nano(): number
        get second(): number
        get hour(): number
        get dayOfWeek(): Internal.DayOfWeek
        get minute(): number
        get chronology(): Internal.Chronology
        get dayOfYear(): number
        static readonly MAX: (Internal.LocalDateTime) & (Internal.LocalDateTime);
        static readonly MIN: (Internal.LocalDateTime) & (Internal.LocalDateTime);
    }
    type LocalDateTime_ = LocalDateTime;
    class Behavior$Status extends Internal.Enum<Internal.Behavior$Status> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.Behavior$Status[];
        toString(): string;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.Behavior$Status;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Behavior$Status>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        getDeclaringClass(): typeof Internal.Behavior$Status;
        hashCode(): number;
        ordinal(): number;
        wait(): void;
        compareTo(arg0: Internal.Behavior$Status_): number;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        "compareTo(net.minecraft.world.entity.ai.behavior.Behavior$Status)"(arg0: Internal.Behavior$Status_): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.Behavior$Status
        static readonly RUNNING: (Internal.Behavior$Status) & (Internal.Behavior$Status);
        static readonly STOPPED: (Internal.Behavior$Status) & (Internal.Behavior$Status);
    }
    type Behavior$Status_ = "stopped" | Behavior$Status | "running";
    class ClientboundSetSubtitleTextPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Component_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getClass(): typeof any;
        write(arg0: Internal.FriendlyByteBuf_): void;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        isSkippable(): boolean;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        getText(): Internal.Component;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        wait(arg0: number): void;
        "handle(net.minecraft.network.protocol.game.ClientGamePacketListener)"(arg0: Internal.ClientGamePacketListener_): void;
        equals(arg0: any): boolean;
        "handle(net.minecraft.network.PacketListener)"(arg0: Internal.PacketListener_): void;
        get class(): typeof any
        get skippable(): boolean
        get text(): Internal.Component
    }
    type ClientboundSetSubtitleTextPacket_ = ClientboundSetSubtitleTextPacket;
    class PlayerInteractEvent$LeftClickBlock extends Internal.PlayerInteractEvent {
        constructor()
        constructor(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.PlayerInteractEvent$LeftClickBlock$Action_)
        constructor(arg0: Internal.Player_, arg1: BlockPos_, arg2: Internal.Direction_)
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        getUseBlock(): Internal.Event$Result;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        setUseItem(arg0: Internal.Event$Result_): void;
        getLevel(): Internal.Level;
        getPos(): BlockPos;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        getHand(): Internal.InteractionHand;
        getFace(): Internal.Direction;
        getResult(): Internal.Event$Result;
        toString(): string;
        getCancellationResult(): Internal.InteractionResult;
        getEntity(): Internal.LivingEntity;
        notifyAll(): void;
        getSide(): Internal.LogicalSide;
        setUseBlock(arg0: Internal.Event$Result_): void;
        getUseItem(): Internal.Event$Result;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        getAction(): Internal.PlayerInteractEvent$LeftClickBlock$Action;
        getPhase(): Internal.EventPriority;
        setCancellationResult(arg0: Internal.InteractionResult_): void;
        equals(arg0: any): boolean;
        getItemStack(): Internal.ItemStack;
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get useBlock(): Internal.Event$Result
        get canceled(): boolean
        set useItem(arg0: Internal.Event$Result_)
        get level(): Internal.Level
        get pos(): BlockPos
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get hand(): Internal.InteractionHand
        get face(): Internal.Direction
        get result(): Internal.Event$Result
        get cancellationResult(): Internal.InteractionResult
        get entity(): Internal.LivingEntity
        get side(): Internal.LogicalSide
        set useBlock(arg0: Internal.Event$Result_)
        get useItem(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get action(): Internal.PlayerInteractEvent$LeftClickBlock$Action
        get phase(): Internal.EventPriority
        set cancellationResult(arg0: Internal.InteractionResult_)
        get itemStack(): Internal.ItemStack
    }
    type PlayerInteractEvent$LeftClickBlock_ = PlayerInteractEvent$LeftClickBlock;
    class RegistryAccess$1FrozenAccess extends Internal.RegistryAccess$ImmutableRegistryAccess implements Internal.RegistryAccess$Frozen {
        constructor(arg0: Internal.RegistryAccess_, arg1: Internal.Stream_<any>)
        getClass(): typeof any;
        toString(): string;
        static create(arg0: Internal.Stream_<Internal.HolderLookup$RegistryLookup<any>>): Internal.HolderLookup$Provider;
        registry<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Optional<Internal.Registry<E>>;
        registryOrThrow<E>(arg0: Internal.ResourceKey_<Internal.Registry<E>>): Internal.Registry<E>;
        notifyAll(): void;
        registries(): Internal.Stream<Internal.RegistryAccess$RegistryEntry<any>>;
        freeze(): Internal.RegistryAccess$Frozen;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        static fromRegistryOfRegistries(arg0: Internal.Registry_<Internal.Registry<any>>): Internal.RegistryAccess$Frozen;
        lookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.Optional<Internal.HolderLookup$RegistryLookup<T>>;
        hashCode(): number;
        allRegistriesLifecycle(): Internal.Lifecycle;
        wait(): void;
        lookupOrThrow<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup$RegistryLookup<T>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        asGetterLookup(): Internal.HolderGetter$Provider;
        get class(): typeof any
        readonly f_244254_: Internal.RegistryAccess;
    }
    type RegistryAccess$1FrozenAccess_ = RegistryAccess$1FrozenAccess;
    interface Supplier <T> {
        abstract get(): T;
        (): T;
    }
    type Supplier_<T> = Supplier<T> | (()=> T);
    interface ILightRenderer {
        abstract renderOverlays(arg0: Internal.ILightScanner_, arg1: Internal.PoseStack_): void;
        (arg0: Internal.ILightScanner, arg1: Internal.PoseStack): void;
    }
    type ILightRenderer_ = ILightRenderer | ((arg0: Internal.ILightScanner, arg1: Internal.PoseStack)=> void);
    class TrackNodeLocation extends Vec3i {
        constructor(arg0: Vec3d_)
        constructor(arg0: number, arg1: number, arg2: number)
        static offsetCodec(arg0: number): Internal.Codec<Vec3i>;
        getY(): number;
        toShortString(): string;
        notify(): void;
        compareTo(arg0: any): number;
        east(arg0: number): Vec3i;
        write(arg0: Internal.DimensionPalette_): Internal.CompoundTag;
        getDimension(): Internal.ResourceKey<Internal.Level>;
        relative(arg0: Internal.Direction_): Vec3i;
        multiply(arg0: number): Vec3i;
        closerThan(arg0: Vec3i_, arg1: number): boolean;
        below(arg0: number): Vec3i;
        above(): Vec3i;
        "compareTo(net.minecraft.core.Vec3i)"(arg0: Vec3i_): number;
        east(): Vec3i;
        static receive(arg0: Internal.FriendlyByteBuf_, arg1: Internal.DimensionPalette_): Internal.TrackNodeLocation;
        west(): Vec3i;
        relative(arg0: Internal.Direction$Axis_, arg1: number): Vec3i;
        distSqr(arg0: Vec3i_): number;
        subtract(arg0: Vec3i_): Vec3i;
        send(arg0: Internal.FriendlyByteBuf_, arg1: Internal.DimensionPalette_): void;
        wait(): void;
        "in"(arg0: Internal.Level_): this;
        setY(arg0: number): Vec3i;
        "compareTo(java.lang.Object)"(arg0: any): number;
        distToCenterSqr(arg0: number, arg1: number, arg2: number): number;
        north(): Vec3i;
        getClass(): typeof any;
        distToCenterSqr(arg0: Internal.Position_): number;
        getX(): number;
        equalsIgnoreDim(arg0: any): boolean;
        south(arg0: number): Vec3i;
        getLocation(): Vec3d;
        above(arg0: number): Vec3i;
        west(arg0: number): Vec3i;
        wait(arg0: number, arg1: number): void;
        distToLowCornerSqr(arg0: number, arg1: number, arg2: number): number;
        "relative(net.minecraft.core.Direction$Axis,int)"(arg0: Internal.Direction$Axis_, arg1: number): Vec3i;
        getZ(): number;
        "in(net.minecraft.world.level.Level)"(arg0: Internal.Level_): this;
        "in"(arg0: Internal.ResourceKey_<Internal.Level>): this;
        allAdjacent(): Internal.Collection<BlockPos>;
        offset(arg0: number, arg1: number, arg2: number): Vec3i;
        toString(): string;
        "in(net.minecraft.resources.ResourceKey)"(arg0: Internal.ResourceKey_<Internal.Level>): this;
        north(arg0: number): Vec3i;
        below(): Vec3i;
        notifyAll(): void;
        distManhattan(arg0: Vec3i_): number;
        get(arg0: Internal.Direction$Axis_): number;
        static read(arg0: Internal.CompoundTag_, arg1: Internal.DimensionPalette_): Internal.TrackNodeLocation;
        offset(arg0: Vec3i_): Vec3i;
        cross(arg0: Vec3i_): Vec3i;
        south(): Vec3i;
        hashCode(): number;
        relative(arg0: Internal.Direction_, arg1: number): Vec3i;
        setZ(arg0: number): Vec3i;
        wait(arg0: number): void;
        compareTo(arg0: Vec3i_): number;
        setX(arg0: number): Vec3i;
        equals(arg0: any): boolean;
        closerToCenterThan(arg0: Internal.Position_, arg1: number): boolean;
        "relative(net.minecraft.core.Direction,int)"(arg0: Internal.Direction_, arg1: number): Vec3i;
        get y(): number
        get dimension(): Internal.ResourceKey<Internal.Level>
        set y(arg0: number)
        get class(): typeof any
        get x(): number
        get location(): Vec3d
        get z(): number
        set z(arg0: number)
        set x(arg0: number)
        dimension: Internal.ResourceKey<Internal.Level>;
        yOffsetPixels: number;
    }
    type TrackNodeLocation_ = TrackNodeLocation;
    class GeoArmorRenderer <T extends Internal.Item & Internal.GeoItem> extends Internal.HumanoidModel<any> implements Internal.GeoRenderer<T>, Internal.UpdateableLevel<any> {
        constructor(arg0: I)
        constructor(arg0: Internal.GeoModel_<T>)
        "getRenderType(java.lang.Object,net.minecraft.resources.ResourceLocation,net.minecraft.client.renderer.MultiBufferSource,float)"(arg0: T, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        "preRender(com.mojang.blaze3d.vertex.PoseStack,software.bernie.geckolib.core.animatable.GeoAnimatable,software.bernie.geckolib.cache.object.BakedGeoModel,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getBodyBone(): Internal.GeoBone;
        applyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        static register<O extends Internal.UpdateableLevel<any>>(arg0: O): void;
        rotlerpRad(arg0: number, arg1: number, arg2: number): number;
        getRenderType(arg0: T, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        withScale(arg0: number, arg1: number): this;
        getRenderColor(arg0: T, arg1: number, arg2: number): software.bernie.geckolib.core.object.Color;
        emf$getEMFRootModel(): Internal.EMFModelPartRoot;
        "prepareMobModel(net.minecraft.world.entity.LivingEntity,float,float,float)"(arg0: T, arg1: number, arg2: number, arg3: number): void;
        getRightLegBone(): Internal.GeoBone;
        handler$ifc000$moonlight$setupAnim(entity: Internal.LivingEntity_, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, ci: Internal.CallbackInfo_): void;
        getRightBootBone(): Internal.GeoBone;
        handler$ifc001$moonlight$poseLeftArm(entity: Internal.LivingEntity_, ci: Internal.CallbackInfo_): void;
        getPackedOverlay(arg0: T, arg1: number, arg2: number): number;
        copyPropertiesTo(arg0: Internal.HumanoidModel_<T>): void;
        preApplyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        actuallyRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getHeadBone(): Internal.GeoBone;
        atl$onClientLevelUpdated(arg0: Internal.ClientLevel_): void;
        renderRecursively(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        getMotionAnimThreshold(arg0: T): number;
        renderChildBones(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        "actuallyRender(com.mojang.blaze3d.vertex.PoseStack,software.bernie.geckolib.core.animatable.GeoAnimatable,software.bernie.geckolib.cache.object.BakedGeoModel,net.minecraft.client.renderer.RenderType,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        copyPropertiesTo(arg0: Internal.EntityModel_<T>): void;
        getClass(): typeof any;
        setupAnim(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        updateAnimatedTextureFrame(arg0: Internal.GeoAnimatable_): void;
        applyBoneVisibilityByPart(arg0: Internal.EquipmentSlot_, arg1: Internal.ModelPart_, arg2: Internal.HumanoidModel_<any>): void;
        preRender(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getInstanceId(arg0: T): number;
        "renderRecursively(com.mojang.blaze3d.vertex.PoseStack,java.lang.Object,software.bernie.geckolib.cache.object.GeoBone,net.minecraft.client.renderer.RenderType,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        "copyPropertiesTo(net.minecraft.client.model.EntityModel)"(arg0: Internal.EntityModel_<T>): void;
        reRender(arg0: Internal.BakedGeoModel_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: T, arg4: Internal.RenderType_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        "copyPropertiesTo(net.minecraft.client.model.HumanoidModel)"(arg0: Internal.HumanoidModel_<T>): void;
        static createMesh(arg0: Internal.CubeDeformation_, arg1: number): Internal.MeshDefinition;
        "prepareMobModel(net.minecraft.world.entity.Entity,float,float,float)"(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number): void;
        setupAnim(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setAllVisible(arg0: boolean): void;
        getLeftBootBone(): Internal.GeoBone;
        actuallyRender(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        "getInstanceId(java.lang.Object)"(arg0: T): number;
        "updateAnimatedTextureFrame(software.bernie.geckolib.core.animatable.GeoAnimatable)"(arg0: Internal.GeoAnimatable_): void;
        getRenderType(arg0: Internal.GeoAnimatable_, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        "getRenderType(software.bernie.geckolib.core.animatable.GeoAnimatable,net.minecraft.resources.ResourceLocation,net.minecraft.client.renderer.MultiBufferSource,float)"(arg0: Internal.GeoAnimatable_, arg1: ResourceLocation_, arg2: Internal.MultiBufferSource_, arg3: number): Internal.RenderType;
        toString(): string;
        "getInstanceId(software.bernie.geckolib.core.animatable.GeoAnimatable)"(arg0: Internal.GeoAnimatable_): number;
        notifyAll(): void;
        doPostRenderCleanup(): void;
        setupAttackAnimation(arg0: T, arg1: number): void;
        getEmoteSupplier(): Internal.SetableSupplier<any>;
        "preRender(com.mojang.blaze3d.vertex.PoseStack,java.lang.Object,software.bernie.geckolib.cache.object.BakedGeoModel,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        renderRecursively(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderCube(arg0: Internal.PoseStack_, arg1: Internal.GeoCube_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        getCurrentEntity(): Internal.Entity;
        wait(arg0: number): void;
        "renderRecursively(com.mojang.blaze3d.vertex.PoseStack,software.bernie.geckolib.core.animatable.GeoAnimatable,software.bernie.geckolib.cache.object.GeoBone,net.minecraft.client.renderer.RenderType,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: Internal.GeoAnimatable_, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        setEmoteSupplier(emoteSupplier: Internal.SetableSupplier_<any>): void;
        getLeftLegBone(): Internal.GeoBone;
        renderCubesOfBone(arg0: Internal.PoseStack_, arg1: Internal.GeoBone_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        handler$fpj002$xaerominimap$onRender(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.CallbackInfo_): void;
        create$callHeadParts(): Internal.Iterable<any>;
        "setupAnim(net.minecraft.world.entity.Entity,float,float,float,float,float)"(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        invokeBodyParts(): Internal.Iterable<any>;
        emf$isEMFModel(): boolean;
        headParts(): Internal.Iterable<Internal.ModelPart>;
        withScale(arg0: number): this;
        defaultRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.MultiBufferSource_, arg3: Internal.RenderType_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number): void;
        notify(): void;
        getGeoModel(): Internal.GeoModel<T>;
        fireCompileRenderLayersEvent(): void;
        getCurrentSlot(): Internal.EquipmentSlot;
        scaleModelForBaby(arg0: Internal.PoseStack_, arg1: T, arg2: number, arg3: boolean): void;
        getRenderLayers(): Internal.List<Internal.GeoRenderLayer<T>>;
        getHead(): Internal.ModelPart;
        preRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        postRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        addRenderLayer(arg0: Internal.GeoRenderLayer_<T>): this;
        renderType(arg0: ResourceLocation_): Internal.RenderType;
        getTextureLocation(arg0: T): ResourceLocation;
        "setupAnim(net.minecraft.world.entity.LivingEntity,float,float,float,float,float)"(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        updateAnimatedTextureFrame(arg0: T): void;
        wait(): void;
        "actuallyRender(com.mojang.blaze3d.vertex.PoseStack,java.lang.Object,software.bernie.geckolib.cache.object.BakedGeoModel,net.minecraft.client.renderer.RenderType,net.minecraft.client.renderer.MultiBufferSource,com.mojang.blaze3d.vertex.VertexConsumer,boolean,float,int,int,float,float,float,float)"(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderFinal(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        prepForRender(arg0: Internal.Entity_, arg1: Internal.ItemStack_, arg2: Internal.EquipmentSlot_, arg3: Internal.HumanoidModel_<any>): void;
        getLeftArmBone(): Internal.GeoBone;
        getCurrentStack(): Internal.ItemStack;
        getAnimatable(): Internal.GeoAnimatable;
        prepareMobModel(arg0: T, arg1: number, arg2: number, arg3: number): void;
        getArm(arg0: Internal.HumanoidArm_): Internal.ModelPart;
        wait(arg0: number, arg1: number): void;
        bodyParts(): Internal.Iterable<Internal.ModelPart>;
        createVerticesOfQuad(arg0: Internal.GeoQuad_, arg1: Matrix4f_, arg2: Vec3f_, arg3: Internal.VertexConsumer_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getPackedOverlay(arg0: T, arg1: number): number;
        create$callBodyParts(): Internal.Iterable<any>;
        renderToBuffer(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        prepareMobModel(arg0: Internal.Entity_, arg1: number, arg2: number, arg3: number): void;
        handler$ifc001$moonlight$poseRightArm(entity: Internal.LivingEntity_, ci: Internal.CallbackInfo_): void;
        getInstanceId(arg0: Internal.GeoAnimatable_): number;
        firePreRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): boolean;
        firePostRenderEvent(arg0: Internal.PoseStack_, arg1: Internal.BakedGeoModel_, arg2: Internal.MultiBufferSource_, arg3: number, arg4: number): void;
        applyRenderLayersForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        "updateAnimatedTextureFrame(java.lang.Object)"(arg0: T): void;
        hashCode(): number;
        getRightArmBone(): Internal.GeoBone;
        scaleModelForRender(arg0: number, arg1: number, arg2: Internal.PoseStack_, arg3: T, arg4: Internal.BakedGeoModel_, arg5: boolean, arg6: number, arg7: number, arg8: number): void;
        translateToHand(arg0: Internal.HumanoidArm_, arg1: Internal.PoseStack_): void;
        equals(arg0: any): boolean;
        get bodyBone(): Internal.GeoBone
        get rightLegBone(): Internal.GeoBone
        get rightBootBone(): Internal.GeoBone
        get headBone(): Internal.GeoBone
        get class(): typeof any
        set allVisible(arg0: boolean)
        get leftBootBone(): Internal.GeoBone
        get emoteSupplier(): Internal.SetableSupplier<any>
        get currentEntity(): Internal.Entity
        set emoteSupplier(emoteSupplier: Internal.SetableSupplier_<any>)
        get leftLegBone(): Internal.GeoBone
        get geoModel(): Internal.GeoModel<T>
        get currentSlot(): Internal.EquipmentSlot
        get renderLayers(): Internal.List<Internal.GeoRenderLayer<T>>
        get head(): Internal.ModelPart
        get leftArmBone(): Internal.GeoBone
        get currentStack(): Internal.ItemStack
        get animatable(): Internal.GeoAnimatable
        get rightArmBone(): Internal.GeoBone
    }
    type GeoArmorRenderer_<T extends Internal.Item & Internal.GeoItem> = GeoArmorRenderer<T>;
    abstract class ControlsRegister {
        getClass(): typeof any;
        getKeyMappingControllers(): Internal.KeyMappingControllerManager;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        onStage2(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        registerKeybindings(arg0: Internal.Consumer_<Internal.KeyMapping>): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get keyMappingControllers(): Internal.KeyMappingControllerManager
    }
    type ControlsRegister_ = ControlsRegister;
    class ServerPlayer extends Internal.Player implements xaero.common.server.player.IServerPlayer, Internal.IPlayer, Internal.IMixinServerPlayer, Internal.IServerPlayer, Internal.ServerPlayerKJS, Internal.IPlayerDataPlayer, Internal.KryptonServerPlayerEntity, Internal.IChunksendingPlayer {
        constructor(arg0: Internal.MinecraftServer_, arg1: Internal.ServerLevel_, arg2: Internal.GameProfile_)
        getStats(): Internal.PlayerStatsJS;
        abstract etf$getType(): Internal.EntityType<any>;
        getUpVector(arg0: number): Vec3d;
        gameEvent(arg0: Internal.GameEvent_, arg1: Internal.Entity_): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        handler$fkj000$curios$curio$canFreeze(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isSuppressingBounce(): boolean;
        setServerLevel(arg0: Internal.ServerLevel_): void;
        setCulled(value: boolean): void;
        isOnFire(): boolean;
        getDeathSound(): Internal.SoundEvent;
        onUpdateAbilities(): void;
        getPositionCodec(): Internal.VecDeltaCodec;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        sendMerchantOffers(arg0: number, arg1: Internal.MerchantOffers_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): void;
        /**
         * @deprecated
        */
        updateFluidHeightAndDoFluidPushing(arg0: Internal.TagKey_<Internal.Fluid>, arg1: number): boolean;
        setMaxUpStep(arg0: number): void;
        getEntityReach(): number;
        getFallFlyingTicks(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        chunkPosition(): Internal.ChunkPos;
        emf$isOnGround(): boolean;
        gameEvent(arg0: Internal.GameEvent_): void;
        setSelectedSlot(index: number): void;
        updateWalkAnimation(arg0: number): void;
        isShiftKeyDown(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        setUUID(arg0: Internal.UUID_): void;
        checkBelowWorld(): void;
        onEffectUpdated(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_): void;
        updateSwingTime(): void;
        crit(arg0: Internal.Entity_): void;
        atl$getBaseClass(): typeof any;
        setMotionZ(z: number): void;
        "getInventory()"(): Internal.InventoryKJS;
        handler$ggl000$ars_nouveau$anSetDeltaMovement(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        awardStat(arg0: ResourceLocation_, arg1: number): void;
        sweepAttack(): void;
        callCheckTotemDeathProtection(arg0: DamageSource_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        handler$ghf000$ars_nouveau$removed(arg0: Internal.CallbackInfo_): void;
        "deserializeNBT(net.minecraft.nbt.Tag)"(arg0: Internal.Tag_): void;
        canFreeze(): boolean;
        ignoreExplosion(): boolean;
        getIsInsideStructureTracker(): Internal.IsInsideStructureTracker;
        getBlockY(): number;
        tryToStartFallFlying(): boolean;
        getShoulderEntityLeft(): Internal.CompoundTag;
        transition$setRawPosition(arg0: Vec3d_): void;
        handler$epm000$fabric_entity_events_v1$injectElytraCheck(cir: Internal.CallbackInfoReturnable_<any>): void;
        attack(arg0: Internal.Entity_): void;
        isSpectator(): boolean;
        stopFallFlying(): void;
        isAlwaysExperienceDropper(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        removeEffectNoUpdate(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        spawnAtLocation(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        getPersistentData(): Internal.CompoundTag;
        serverLevel(): Internal.ServerLevel;
        getHealth(): number;
        getMaxHealth(): number;
        emf$isGlowing(): boolean;
        setForcedPose(arg0: Internal.Pose_): void;
        etf$getEntity(): Internal.Entity;
        getRandomZ(arg0: number): number;
        pehkui_getOnGround(): boolean;
        setRemoved(arg0: Internal.Entity$RemovalReason_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        canReachRaw(arg0: BlockPos_, arg1: number): boolean;
        getDistanceSq(arg0: number, arg1: number, arg2: number): number;
        isInWaterRainOrBubble(): boolean;
        getRemovalReason(): Internal.Entity$RemovalReason;
        wantsToStopRiding(): boolean;
        abstract etf$getVelocity(): Vec3d;
        onFlap(): void;
        isMiningBlock(): boolean;
        getIndirectPassengers(): Internal.Iterable<Internal.Entity>;
        actuallyHurt(arg0: DamageSource_, arg1: number): void;
        redirect$bcj000$attributeslib$apoth_applyProtPen(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        resetFallDistance(): void;
        canSprint(): boolean;
        blockPosition(): BlockPos;
        "awardStat(net.minecraft.stats.Stat)"(arg0: Internal.Stat_<any>): void;
        setLevel(arg0: Internal.Level_): void;
        setBoundingBox(arg0: Internal.AABB_): void;
        isAmbientCreature(): boolean;
        setExperiencePoints(arg0: number): void;
        closeMenu(): void;
        getBlock(): Internal.BlockContainerJS;
        setShoulderEntityLeft(arg0: Internal.CompoundTag_): void;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        invalidateCaps(): void;
        randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
        getName(): Internal.Component;
        setMouseItem(item: Internal.ItemStack_): void;
        onGround(): boolean;
        getTabListHeader(): Internal.Component;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        getControlledVehicle(): Internal.Entity;
        isOnSameTeam(arg0: Internal.Entity_): boolean;
        getArmorValue(): number;
        redirect$bcj000$attributeslib$apoth_sunderingGetAmplifier(arg0: Internal.MobEffectInstance_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        tick(): void;
        setRespawnPosition(arg0: Internal.ResourceKey_<Internal.Level>, arg1: BlockPos_, arg2: number, arg3: boolean, arg4: boolean): void;
        give(item: Internal.ItemStack_): void;
        getKillCredit(): Internal.LivingEntity;
        etf$getETFRenderState(): Internal.ETFEntityRenderState;
        handler$ghf001$ars_nouveau$onRemove(arg0: Internal.CallbackInfo_): void;
        emf$isTouchingWater(): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getDigSpeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        emf$getVariableMap(): Internal.Object2FloatOpenHashMap<any>;
        "teleportTo(net.minecraft.server.level.ServerLevel,double,double,double,float,float)"(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        tryCheckInsideBlocks(): void;
        hasPermissions(arg0: number): boolean;
        getTabListDisplayName(): Internal.Component;
        refreshTabListName(): void;
        handler$cmo000$l2damagetracker$attack$allowSweep(arg0: Internal.Entity_, arg1: Internal.CallbackInfo_, arg2: Internal.LocalBooleanRef_): void;
        modifyReturnValue$bfe000$enhancedai$isOnClimbable(arg0: boolean): boolean;
        setNeedsChunksReloaded(needsChunksReloaded: boolean): void;
        getTargetPitch(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): number;
        onTravel(arg0: Vec3d_, arg1: boolean): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        onInsideBlock(arg0: Internal.BlockState_): void;
        pehkui_readScaleNbt(nbt: Internal.CompoundTag_): void;
        getRecipeBook(): Internal.ServerRecipeBook;
        setOutOfCamera(value: boolean): void;
        getRespawnPosition(): BlockPos;
        isAutoSpinAttack(): boolean;
        handler$gfa000$morehitboxes$restoreYPos(arg0: Internal.CallbackInfo_, arg1: Internal.LocalDoubleRef_): void;
        getRemainingFireTicks(): number;
        limitPistonMovement(arg0: Vec3d_): Vec3d;
        onlyOpCanSetNbt(): boolean;
        addMotion(arg0: number, arg1: number, arg2: number): void;
        fireImmune(): boolean;
        getMaxFallDistance(): number;
        isHolding(arg0: Internal.Item_): boolean;
        getZ(arg0: number): number;
        hasCustomOutlineRendering(arg0: Internal.Player_): boolean;
        setGameMode(arg0: Internal.GameType_): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        static areAllEffectsAmbient(arg0: Internal.Collection_<Internal.MobEffectInstance>): boolean;
        doHurtTarget(arg0: Internal.Entity_): boolean;
        nextContainerCounter(): void;
        getTicksFrozen(): number;
        setXaeroWorldMapPlayerData(arg0: Internal.ServerPlayerData_): void;
        handler$eei000$irons_spellbooks$isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        tickRidden(arg0: Internal.Player_, arg1: Vec3d_): void;
        getRandomX(arg0: number): number;
        handler$gfa000$morehitboxes$updateBounds(arg0: Internal.AABB_, arg1: Internal.CallbackInfo_): void;
        getDynamicLightZ(): number;
        create$callSpawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        spawnAtLocation(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        pick(arg0: number, arg1: number, arg2: boolean): Internal.HitResult;
        setStatusMessage(message: Internal.Component_): void;
        getVoicePitch(): number;
        setSleepingPos(arg0: BlockPos_): void;
        isDescending(): boolean;
        setPlayerInput(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        getAttributeBaseValue(arg0: Internal.Attribute_): number;
        emf$getPitch(): number;
        sendEffectToPassengers(arg0: Internal.MobEffectInstance_): void;
        getYHeadRot(): number;
        verifyEquippedItem(arg0: Internal.ItemStack_): void;
        gc_makeBoundingBox(): Internal.AABB;
        openCommandBlock(arg0: Internal.CommandBlockEntity_): void;
        getProjectile(arg0: Internal.ItemStack_): Internal.ItemStack;
        static getAlpha(le: Internal.LivingEntity_, partialTicks: number): number;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
        setAbsorptionAmount(arg0: number): void;
        makeBrain(arg0: Internal.Dynamic_<any>): Internal.Brain<any>;
        redirect$dlm000$nyfsspiders$bop(arg0: Internal.Entity$MovementEmission_): boolean;
        isAffectedByFluids(): boolean;
        canAddPassenger(arg0: Internal.Entity_): boolean;
        markFlying(): void;
        shouldRenderAtSqrDistance(arg0: number): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        damageSources(): Internal.DamageSources;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        betterchunkloading$getPlayerChunkData(): Internal.PlayerChunkData;
        recreateFromPacket(arg0: Internal.ClientboundAddEntityPacket_): void;
        getTargetHeadYaw(arg0: number, arg1: number): number;
        handler$eei000$irons_spellbooks$handleEquipmentChanges(arg0: Internal.CallbackInfoReturnable_<any>): void;
        canStartSwimming(): boolean;
        setDeltaMovement(arg0: Vec3d_): void;
        getAbilities(): Internal.Abilities;
        getLeashOffset(arg0: number): Vec3d;
        isBaby(): boolean;
        isCulled(): boolean;
        openGUI(gui: Internal.Consumer_<Internal.KubeJSGUI>): void;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        setFireType(arg0: ResourceLocation_): void;
        isGlowing(): boolean;
        "isInFluidType(net.minecraft.world.level.material.FluidState)"(arg0: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        canBreatheUnderwater(): boolean;
        die(arg0: DamageSource_): void;
        abstract etf$getOptifineId(): number;
        removeAllEffects(): boolean;
        getLeashOffset(): Vec3d;
        hasLineOfSight(arg0: Internal.Entity_): boolean;
        handler$eef000$irons_spellbooks$setTicksFrozen(arg0: number, arg1: Internal.CallbackInfo_): void;
        onClimbable(): boolean;
        isAttackable(): boolean;
        getRiddenSpeed(arg0: Internal.Player_): number;
        processPortalCooldown(): void;
        isChangingDimension(): boolean;
        setReducedDebugInfo(arg0: boolean): void;
        getSlot(arg0: number): Internal.SlotAccess;
        "deserializeNBT(net.minecraft.nbt.CompoundTag)"(arg0: Internal.CompoundTag_): void;
        pehkui_constructScaleData(type: Internal.ScaleType_): Internal.ScaleData;
        emf$isInLava(): boolean;
        notify(title: Internal.Component_, text: Internal.Component_): void;
        stopSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isUnderWater(): boolean;
        stopRiding(): void;
        getSwimHighSpeedSplashSound(): Internal.SoundEvent;
        createWitherRose(arg0: Internal.LivingEntity_): void;
        addXPLevels(l: number): void;
        getX(arg0: number): number;
        handler$gfa000$morehitboxes$setPartIds(arg0: number, arg1: Internal.CallbackInfo_): void;
        getLegsArmorItem(): Internal.ItemStack;
        getLuminance(): number;
        captureDrops(arg0: Internal.Collection_<Internal.ItemEntity>): Internal.Collection<Internal.ItemEntity>;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getDeltaMovement(): Vec3d;
        canTakeItem(arg0: Internal.ItemStack_): boolean;
        removeSoulSpeed(): void;
        isplayerInRange(): boolean;
        shouldDropExperience(): boolean;
        hasPassenger(arg0: Internal.Entity_): boolean;
        sendData(channel: string): void;
        updateOptions(arg0: Internal.ServerboundClientInformationPacket_): void;
        getDynamicLightX(): number;
        setSecondsOnFire(arg0: number): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        emf$getZ(): number;
        "getDisplayName()"(): Internal.Component;
        openMenu(arg0: Internal.MenuProvider_): Internal.OptionalInt;
        getTicksUsingItem(): number;
        getLootTable(): ResourceLocation;
        "awardStat(net.minecraft.resources.ResourceLocation,int)"(arg0: ResourceLocation_, arg1: number): void;
        modifyExpressionValue$jhi000$create$playerHidingAsBoxIsCrouchingNotSwimming(arg0: boolean, arg1: Internal.Pose_): boolean;
        getArrowCount(): number;
        tickHeadTurn(arg0: number, arg1: number): number;
        calculateViewVector(arg0: number, arg1: number): Vec3d;
        "attack(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): void;
        setMotion(arg0: number, arg1: number, arg2: number): void;
        playSound(arg0: Internal.SoundEvent_): void;
        makeBoundingBox(): Internal.AABB;
        doCloseContainer(): void;
        setXp(xp: number): void;
        getDefaultMovementSpeed(): number;
        restoreFrom(arg0: Internal.Entity_): void;
        "canReach(net.minecraft.core.BlockPos,double)"(arg0: BlockPos_, arg1: number): boolean;
        setXaeroMinimapPlayerData(arg0: xaero.common.server.player.ServerPlayerData_): void;
        isPeacefulCreature(): boolean;
        setOnGround(arg0: boolean): void;
        addEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): boolean;
        emf$getYaw(): number;
        setPos(arg0: number, arg1: number, arg2: number): void;
        getInventory(): Internal.Inventory;
        hasDisconnected(): boolean;
        notify(): void;
        isLocalPlayer(): boolean;
        getFirstTick(): boolean;
        getLastHurtByMobTimestamp(): number;
        getVehicle(): Internal.Entity;
        isEffectiveAi(): boolean;
        startRiding(arg0: Internal.Entity_, arg1: boolean): boolean;
        getStringUuid(): string;
        getLastSectionPos(): Internal.SectionPos;
        setSwimming(arg0: boolean): void;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getMainArm(): Internal.HumanoidArm;
        getRotationVector(): Internal.Vec2;
        getHurtDir(): number;
        abstract etf$getBlockY(): number;
        isSprinting(): boolean;
        createItemCooldowns(): Internal.ItemCooldowns;
        getMotionY(): number;
        getOffhandItem(): Internal.ItemStack;
        getCurrentItemAttackStrengthDelay(): number;
        canCollideWith(arg0: Internal.Entity_): boolean;
        neruina$isErrored(): boolean;
        addExhaustion(exhaustion: number): void;
        getBlockExplosionResistance(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.FluidState_, arg5: number): number;
        magicCrit(arg0: Internal.Entity_): void;
        callGetJumpPower(): number;
        wrapOperation$jaf000$supplementaries$onTravel(instance: Internal.LivingEntity_, state: Internal.FluidState_, original: Internal.Operation_<any>): boolean;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        increaseScore(arg0: number): void;
        clearSleepingPos(): void;
        canSpawnSprintParticle(): boolean;
        canRide(arg0: Internal.Entity_): boolean;
        doTick(): void;
        "moveTo(net.minecraft.core.BlockPos,float,float)"(arg0: BlockPos_, arg1: number, arg2: number): void;
        getLastHurtMob(): Internal.LivingEntity;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Internal.Entity_, arg2: Internal.EntityAnchorArgument$Anchor_): void;
        getOnPos(arg0: number): BlockPos;
        getSelfAndPassengers(): Internal.Stream<Internal.Entity>;
        moveRelative(arg0: number, arg1: Vec3d_): void;
        isAddedToWorld(): boolean;
        saveAsPassenger(arg0: Internal.CompoundTag_): boolean;
        updatePlayerPose(): void;
        getIpAddress(): string;
        icarus$isSlowFalling(): boolean;
        getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        isSecondaryUseActive(): boolean;
        getSoundSource(): Internal.SoundSource;
        getLastDamageSource(): DamageSource;
        setNoActionTime(arg0: number): void;
        setMovementSpeedAddition(speed: number): void;
        removeAfterChangingDimensions(): void;
        getLastActionTime(): number;
        equipmentHasChanged(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getPose(): Internal.Pose;
        callActuallyHurt(arg0: DamageSource_, arg1: number): void;
        getSharedFlag(arg0: number): boolean;
        getAttribute(arg0: Internal.Attribute_): Internal.AttributeInstance;
        subtleEffects$setTouchingLava(arg0: boolean): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        canBeAffected(arg0: Internal.MobEffectInstance_): boolean;
        checkFallDamage(arg0: number, arg1: boolean, arg2: Internal.BlockState_, arg3: BlockPos_): void;
        kick(reason: Internal.Component_): void;
        /**
         * @deprecated
        */
        etf$isPartVisible(part: Internal.PlayerModelPart_): boolean;
        tryAddFrost(): void;
        callGetSoundVolume(): number;
        handler$bcl000$attributeslib$apoth_cacheFlying(arg0: Internal.CompoundTag_, arg1: Internal.CallbackInfo_): void;
        invokeShouldDropLoot(): boolean;
        isModelPartShown(arg0: Internal.PlayerModelPart_): boolean;
        abstract etf$getUuid(): Internal.UUID;
        removeVehicle(): void;
        defineSynchedData(): void;
        checkInsideBlocks(): void;
        setZ(z: number): void;
        etf$getUuidAsString(): string;
        getY(): number;
        hashCode(): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        eat(arg0: Internal.Level_, arg1: Internal.ItemStack_): Internal.ItemStack;
        static startTracking(arg0: any): void;
        createHoverEvent(): Internal.HoverEvent;
        bookshelf$makePoofParticles(): void;
        etf$getInventory(): Internal.Inventory;
        serverAiStep(): void;
        getExitPortal(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: boolean, arg3: Internal.WorldBorder_): Internal.Optional<Internal.BlockUtil$FoundRectangle>;
        broadcastBreakEvent(arg0: Internal.EquipmentSlot_): void;
        showVehicleHealth(): boolean;
        getDistance(pos: BlockPos_): number;
        isBlocking(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        emf$getVelocity(): Vec3d;
        playMuffledStepSound(arg0: Internal.BlockState_, arg1: BlockPos_): void;
        getSpawnLocation(): Internal.BlockContainerJS;
        abstract etf$isBlockEntity(): boolean;
        shouldUpdateDynamicLight(): boolean;
        getScore(): number;
        isPushedByFluid(): boolean;
        handler$geh000$tetra$increaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$bcj000$attributeslib$apoth_ownedAttrMap(arg0: Internal.EntityType_<any>, arg1: Internal.Level_, arg2: Internal.CallbackInfo_): void;
        setSpawnLocation(c: Internal.BlockContainerJS_): void;
        getArmorCoverPercentage(): number;
        dropFromLootTable(arg0: DamageSource_, arg1: boolean): void;
        captureInventory(autoRestore: boolean): Internal.Container;
        handleRelativeFrictionAndCalculateMovement(arg0: Vec3d_, arg1: number): Vec3d;
        turn(arg0: number, arg1: number): void;
        getFoodData(): Internal.FoodData;
        getAirSupply(): number;
        resetRecipes(arg0: Internal.Collection_<Internal.Recipe<any>>): number;
        getTabListFooter(): Internal.Component;
        "canReachRaw(net.minecraft.core.BlockPos,double)"(arg0: BlockPos_, arg1: number): boolean;
        waterSwimSound(): void;
        isPlayer(): boolean;
        moveTo(arg0: BlockPos_, arg1: number, arg2: number): void;
        isAnimal(): boolean;
        readAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        canBeCollidedWith(): boolean;
        getMotionDirection(): Internal.Direction;
        handler$bhd000$krypton$setClientSettings(packet: Internal.ServerboundClientInformationPacket_, ci: Internal.CallbackInfo_): void;
        lavaHurt(): void;
        disconnect(): void;
        handleDamageEvent(arg0: DamageSource_): void;
        updateUsingItem(arg0: Internal.ItemStack_): void;
        getFabricBalmData(): Internal.CompoundTag;
        canChangeDimensions(): boolean;
        jumpInFluid(arg0: Internal.FluidType_): void;
        getCommandSenderWorld(): Internal.Level;
        getWardenSpawnTracker(): Internal.Optional<Internal.WardenSpawnTracker>;
        kick(): void;
        getTotalMovementSpeed(): number;
        getMotions(): Internal.Stack<any>;
        changeDimension(arg0: Internal.ServerLevel_): Internal.Entity;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        updatingUsingItem(): void;
        startFallFlying(): void;
        localvar$ddn000$fluidCollision(arg0: Vec3d_): Vec3d;
        blockedByShield(arg0: Internal.LivingEntity_): void;
        pehkui_shouldIgnoreScaleNbt(): boolean;
        handler$fnf000$bagofholding$dropEquipment(arg0: Internal.CallbackInfo_): void;
        onRead(arg0: Internal.CompoundTag_): void;
        canEat(arg0: boolean): boolean;
        handler$bcj000$attributeslib$apoth_onEffectUpdateAddAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        openChestGUI(title: Internal.Component_, rows: number, gui: Internal.Consumer_<Internal.ChestMenuData>): void;
        getFireImmuneTicks(): number;
        "getInventory()"(): Internal.Inventory;
        getCraftingGrid(): Internal.InventoryKJS;
        getAttributes(): Internal.AttributeMap;
        isCreative(): boolean;
        "hasPassenger(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getDimensions(arg0: Internal.Pose_): Internal.EntityDimensions;
        isSwimming(): boolean;
        mayInteract(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        setSprinting(arg0: boolean): void;
        setRot(arg0: number, arg1: number): void;
        setPortalCooldown(): void;
        getAttackAnim(arg0: number): number;
        setX(x: number): void;
        getPortalWaitTime(): number;
        getBlockStateOn(): Internal.BlockState;
        subtleEffects$getTickers(): Internal.Int2ObjectMap<any>;
        getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        getFluidJumpThreshold(): number;
        "setPositionAndRotation(double,double,double,float,float)"(x: number, y: number, z: number, yaw: number, pitch: number): void;
        isInvisibleTo(arg0: Internal.Player_): boolean;
        setRewinding(arg0: boolean): void;
        stopSleeping(): void;
        modifyReturnValue$gfa000$morehitboxes$changeCullBox(arg0: Internal.AABB_): Internal.AABB;
        setAirSupply(arg0: number): void;
        getOnPos(): BlockPos;
        abstract etf$getWorld(): Internal.Level;
        isUndead(): boolean;
        repositionEntityAfterLoad(): boolean;
        static createLivingAttributes(): Internal.AttributeSupplier$Builder;
        pehkui_getScales(): Internal.Map<any, any>;
        moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
        getBlockPosBelowThatAffectsMyMovement(): BlockPos;
        getStepHeight(): number;
        handler$ggj000$ars_nouveau$getJumpPower(arg0: Internal.CallbackInfoReturnable_<any>): void;
        static getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): Vec3d;
        stopUsingItem(): void;
        isSleeping(): boolean;
        abstract etf$getNbt(): Internal.CompoundTag;
        acceptsFailure(): boolean;
        restoreFrom(arg0: Internal.ServerPlayer_, arg1: boolean): void;
        abstract etf$getBlockPos(): BlockPos;
        playCombinationStepSounds(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: BlockPos_): void;
        pehkui_setShouldIgnoreScaleNbt(ignore: boolean): void;
        setOnGroundWithKnownMovement(arg0: boolean, arg1: Vec3d_): void;
        getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: Vec3d_): Vec3d;
        setOldPosAndRot(): void;
        isFree(arg0: number, arg1: number, arg2: number): boolean;
        subtleEffects$setTouchingWater(arg0: boolean): void;
        getLanguage(): string;
        getDismountPoses(): Internal.ImmutableList<Internal.Pose>;
        getLastHurtMobTimestamp(): number;
        playBlockFallSound(): void;
        "moveTo(double,double,double)"(arg0: number, arg1: number, arg2: number): void;
        setRemainingFireTicks(arg0: number): void;
        emf$age(): number;
        abstract etf$hasCustomName(): boolean;
        /**
         * @deprecated
        */
        getOnPosLegacy(): BlockPos;
        findDimensionEntryPoint(arg0: Internal.ServerLevel_): Internal.PortalInfo;
        awardStat(arg0: ResourceLocation_): void;
        setPos(arg0: Vec3d_): void;
        getPlayerViewDistance(): number;
        revokeAdvancement(id: ResourceLocation_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getStandingEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMainHandItem(): Internal.ItemStack;
        areCapsCompatible(arg0: Internal.CapabilityDispatcher_): boolean;
        getFireType(): ResourceLocation;
        setSilent(arg0: boolean): void;
        doPush(arg0: Internal.Entity_): void;
        hasExactlyOnePlayerPassenger(): boolean;
        captureDrops(): Internal.Collection<Internal.ItemEntity>;
        canBeSeenAsEnemy(): boolean;
        openMinecartCommandBlock(arg0: Internal.BaseCommandBlock_): void;
        getSwimSplashSound(): Internal.SoundEvent;
        getActiveEffects(): Internal.Collection<Internal.MobEffectInstance>;
        isOnPortalCooldown(): boolean;
        hurtArmor(arg0: DamageSource_, arg1: number): void;
        canAttack(arg0: Internal.LivingEntity_, arg1: Internal.TargetingConditions_): boolean;
        increaseAirSupply(arg0: number): number;
        getAttributeValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        modifyExpressionValue$ggh001$ars_nouveau$elytraOverride(arg0: boolean): boolean;
        setPitch(arg0: number): void;
        isMultipartEntity(): boolean;
        setPosRaw(arg0: number, arg1: number, arg2: number): void;
        handleEntityEvent(arg0: number): void;
        getParts(): Internal.PartEntity<any>[];
        isUsingItem(): boolean;
        spawnSoulSpeedParticle(): void;
        removeFrost(): void;
        isAlwaysTicking(): boolean;
        isAdvancementDone(id: ResourceLocation_): boolean;
        handler$cmn000$l2damagetracker$checkTotemDeathProtection$addCustomTotem(arg0: DamageSource_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        interactAt(arg0: Internal.Player_, arg1: Vec3d_, arg2: Internal.InteractionHand_): Internal.InteractionResult;
        abstract etf$getHandItems(): Internal.Iterable<Internal.ItemStack>;
        emf$getX(): number;
        lerpTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        onPassengerTurned(arg0: Internal.Entity_): void;
        spawnAtLocation(arg0: Internal.ItemLike_): Internal.ItemEntity;
        blockActionRestricted(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.GameType_): boolean;
        emf$hasPassengers(): boolean;
        setAttached(type: Internal.AttachmentType_<any>, value: any): any;
        serializeNBT(): Internal.CompoundTag;
        /**
         * @deprecated
        */
        couldAcceptPassenger(): boolean;
        supplementaries$setQuiver(quiver: Internal.ItemStack_): void;
        getForgePersistentData(): Internal.CompoundTag;
        modifyExpressionValue$ggg000$ars_nouveau$elytraOverride(arg0: boolean): boolean;
        isHurt(): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike,int)"(arg0: Internal.ItemLike_, arg1: number): Internal.ItemEntity;
        setInvulnerable(arg0: boolean): void;
        push(arg0: Internal.Entity_): void;
        emf$hasVehicle(): boolean;
        isInFluidType(): boolean;
        jumpFromGround(): void;
        getDamageAfterArmorAbsorb(arg0: DamageSource_, arg1: number): number;
        maxUpStep(): number;
        setGlowing(arg0: boolean): void;
        load(arg0: Internal.CompoundTag_): void;
        getAdvancements(): Internal.PlayerAdvancements;
        "broadcastBreakEvent(net.minecraft.world.entity.EquipmentSlot)"(arg0: Internal.EquipmentSlot_): void;
        onChangedBlock(arg0: BlockPos_): void;
        giveExperiencePoints(arg0: number): void;
        isAlive(): boolean;
        addFood(f: number, m: number): void;
        startSleeping(arg0: BlockPos_): void;
        isStayingOnGroundSurface(): boolean;
        getBbHeight(): number;
        getForcedPose(): Internal.Pose;
        handler$eef000$irons_spellbooks$isAlliedTo(arg0: Internal.Entity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getlastPlayerScanTime(): number;
        handler$cmo000$l2damagetracker$attack$critParticle(arg0: Internal.Entity_, arg1: Internal.CallbackInfo_, arg2: Internal.LocalBooleanRef_, arg3: Internal.LocalRef_<any>): void;
        bookshelf$getDrinkingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        resetStat(arg0: Internal.Stat_<any>): void;
        getTags(): Internal.Set<string>;
        getViewVector(arg0: number): Vec3d;
        getXpLevel(): number;
        calculateFallDamage(arg0: number, arg1: number): number;
        getNeedsChunksReloaded(): boolean;
        getLastAttacker(): Internal.LivingEntity;
        hasControllingPassenger(): boolean;
        isOp(): boolean;
        closerThan(arg0: Internal.Entity_, arg1: number, arg2: number): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        canChatInColor(): boolean;
        updateEffectVisibility(): void;
        openItemGui(arg0: Internal.ItemStack_, arg1: Internal.InteractionHand_): void;
        paint(renderer: Internal.CompoundTag_): void;
        getPercentFrozen(): number;
        getBlockReach(): number;
        setPortalCooldown(arg0: number): void;
        hasGlowingTag(): boolean;
        shouldBlockExplode(arg0: Internal.Explosion_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: number): boolean;
        emf$isInvisible(): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        getSoundVolume(): number;
        handler$ich000$setServerLevel(level: Internal.ServerLevel_, ci: Internal.CallbackInfo_): void;
        addEffect(arg0: Internal.MobEffectInstance_): boolean;
        emf$isSprinting(): boolean;
        getLastDeathLocation(): Internal.Optional<Internal.GlobalPos>;
        awardStat(arg0: Internal.Stat_<any>, arg1: number): void;
        setXpLevel(l: number): void;
        getViewXRot(arg0: number): number;
        canRiderInteract(): boolean;
        fabric_getAttachments(): Internal.Map<any, any>;
        setPose(arg0: Internal.Pose_): void;
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        getReachDistance(): number;
        static collideBoundingBox(arg0: Internal.Entity_, arg1: Vec3d_, arg2: Internal.AABB_, arg3: Internal.Level_, arg4: Internal.List_<Internal.VoxelShape>): Vec3d;
        getEntityType(): Internal.EntityType<any>;
        isWaterCreature(): boolean;
        toString(): string;
        pehkui_getScaleData(type: Internal.ScaleType_): Internal.ScaleData;
        abstract etf$getItemsEquipped(): Internal.Iterable<Internal.ItemStack>;
        updateInvisibilityStatus(): void;
        abstract etf$getScoreboardTeam(): Internal.Team;
        setLastHurtByPlayer(arg0: Internal.Player_): void;
        "getServer()"(): Internal.MinecraftServer;
        "canReach(net.minecraft.world.entity.Entity,double)"(arg0: Internal.Entity_, arg1: number): boolean;
        wasExperienceConsumed(): boolean;
        isPushable(): boolean;
        setYBodyRot(arg0: number): void;
        foodEaten(is: Internal.ItemStack_): void;
        onClientRemoval(): void;
        self(): Internal.LivingEntity;
        shouldDropLoot(): boolean;
        reviveCaps(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttached(type: Internal.AttachmentType_<any>): any;
        setRotation(yaw: number, pitch: number): void;
        isDynamicLightEnabled(): boolean;
        notify(builder: Notification_): void;
        awardStat(arg0: Internal.Stat_<any>): void;
        calculateEntityAnimation(arg0: boolean): void;
        distantHorizons$getDimensionChangeDestination(): Internal.ServerLevel;
        redirect$bcj000$attributeslib$apoth_applyArmorPen(arg0: number, arg1: number, arg2: number, arg3: DamageSource_, arg4: number): number;
        forceAddEffect(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getRespawnAngle(): number;
        checkAutoSpinAttack(arg0: Internal.AABB_, arg1: Internal.AABB_): void;
        bookshelf$getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        onAboveBubbleCol(arg0: boolean): void;
        "playSound(net.minecraft.sounds.SoundEvent,float,float)"(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        isPassenger(): boolean;
        ban(banner: string, reason: string, expiresInMillis: number): void;
        hasPose(arg0: Internal.Pose_): boolean;
        playStepSound(arg0: BlockPos_, arg1: Internal.BlockState_): void;
        supp$setSlimedTicks(newSlimedTicks: number, sync: boolean): void;
        /**
         * @deprecated
        */
        getDestroySpeed(arg0: Internal.BlockState_): number;
        isInvulnerableTo(arg0: DamageSource_): boolean;
        makeStuckInBlock(arg0: Internal.BlockState_, arg1: Vec3d_): void;
        handler$gfa000$morehitboxes$callRemoveCallback(arg0: Internal.Entity$RemovalReason_, arg1: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        isEyeInFluid(arg0: Internal.TagKey_<Internal.Fluid>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        isSensitiveToWater(): boolean;
        skipAttackInteraction(arg0: Internal.Entity_): boolean;
        maybeBackOffFromEdge(arg0: Vec3d_, arg1: Internal.MoverType_): Vec3d;
        newFloatList(...arg0: number[]): Internal.ListTag;
        lerpMotion(arg0: number, arg1: number, arg2: number): void;
        "getAttributeValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        shouldRender(arg0: number, arg1: number, arg2: number): boolean;
        canReachRaw(arg0: Internal.Entity_, arg1: number): boolean;
        isFlapping(): boolean;
        getEyeHeight(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        trackEnteredOrExitedLavaOnVehicle(): void;
        isReducedDebugInfo(): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        sendSystemMessage(arg0: Internal.Component_, arg1: boolean): void;
        static getViewScale(): number;
        getVisualRotationYInDegrees(): number;
        triggerRecipeCrafted(arg0: Internal.Recipe_<any>, arg1: Internal.List_<Internal.ItemStack>): void;
        setSpeed(arg0: number): void;
        handler$gfg000$morehitboxes$removePartsOnClientRemoval(arg0: Internal.CallbackInfo_): void;
        resetLastActionTime(): void;
        isDiscrete(): boolean;
        "canReachRaw(net.minecraft.world.entity.Entity,double)"(arg0: Internal.Entity_, arg1: number): boolean;
        unRide(): void;
        getLevel(): Internal.Level;
        "spawnAtLocation(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): Internal.ItemEntity;
        getCombatTracker(): Internal.CombatTracker;
        updateDynamicGameEventListener(arg0: Internal.BiConsumer_<Internal.DynamicGameEventListener<any>, Internal.ServerLevel>): void;
        hasCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        "onSyncedDataUpdated(net.minecraft.network.syncher.EntityDataAccessor)"(arg0: Internal.EntityDataAccessor_<any>): void;
        handler$fpd000$modulargolems$wantsToStopRiding$dogOverride(arg0: Internal.CallbackInfoReturnable_<any>): void;
        handler$dea000$cataclysm$CMcanAttack(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        emf$prevY(): number;
        sendInventoryUpdate(): void;
        areCapsCompatible(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        extinguishFire(): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getBlockJumpFactor(): number;
        setTabListHeader(arg0: Internal.Component_): void;
        tell(message: Internal.Component_): void;
        closerThan(arg0: Internal.Entity_, arg1: number): boolean;
        onSoulSpeedBlock(): boolean;
        /**
         * @deprecated
        */
        goDownInWater(): void;
        getDistanceSq(pos: BlockPos_): number;
        indicateDamage(arg0: number, arg1: number): void;
        canBeSeenByAnyone(): boolean;
        emf$getTypeString(): string;
        playEntityOnFireExtinguishedSound(): void;
        respawn(): void;
        isFullyFrozen(): boolean;
        dropCustomDeathLoot(arg0: DamageSource_, arg1: number, arg2: boolean): void;
        isInWall(): boolean;
        getMeleeAttackReferencePosition(): Vec3d;
        getAllSlots(): Internal.Iterable<Internal.ItemStack>;
        remove(arg0: Internal.Entity$RemovalReason_): void;
        interactOn(arg0: Internal.Entity_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        getScale(): number;
        isSuppressingSlidingDownLadder(): boolean;
        getBlockZ(): number;
        dampensVibrations(): boolean;
        hasAttached(type: Internal.AttachmentType_<any>): boolean;
        isSilent(): boolean;
        setUseItem(arg0: Internal.ItemStack_): void;
        "playSound(net.minecraft.sounds.SoundEvent)"(id: Internal.SoundEvent_): void;
        newDoubleList(...arg0: number[]): Internal.ListTag;
        getPitch(): number;
        getRandom(): Internal.RandomSource;
        rotate(arg0: Internal.Rotation_): number;
        getPassengersAndSelf(): Internal.Stream<Internal.Entity>;
        shouldRiderFaceForward(arg0: Internal.Player_): boolean;
        handler$eef000$irons_spellbooks$isInvisibleTo(arg0: Internal.Player_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        playNotifySound(arg0: Internal.SoundEvent_, arg1: Internal.SoundSource_, arg2: number, arg3: number): void;
        "getAttributeBaseValue(net.minecraft.core.Holder)"(arg0: Internal.Holder_<Internal.Attribute>): number;
        onLookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): Vec3d;
        callGetDeathSound(): Internal.SoundEvent;
        wrapOperation$fpc000$modulargolems$collectEquipmentChanges$specialEquipment(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Operation_<any>): Internal.Multimap<any, any>;
        "self()"(): Internal.LivingEntity;
        rayTrace(): Internal.RayTraceResultJS;
        alwaysAccepts(): boolean;
        spawnItemParticles(arg0: Internal.ItemStack_, arg1: number): void;
        neruina$getTickingEntryId(): Internal.UUID;
        "isHolding(java.util.function.Predicate)"(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getNoActionTime(): number;
        isVisuallyCrawling(): boolean;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        initInventoryMenu(): void;
        handler$bkf000$l2screentracker$l2library_openMenu_recordTitle(arg0: Internal.MenuProvider_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        handler$eei000$irons_spellbooks$updateInvisibilityStatus(arg0: Internal.CallbackInfo_): void;
        "broadcastBreakEvent(net.minecraft.world.InteractionHand)"(arg0: Internal.InteractionHand_): void;
        setFluidTypeHeight(arg0: Internal.FluidType_, arg1: number): void;
        neruina$clearErrored(): void;
        dropExperience(): void;
        teleportRelative(arg0: number, arg1: number, arg2: number): void;
        supplementaries$getQuiver(): Internal.ItemStack;
        handler$gfa000$morehitboxes$refreshDimensionsForParts(arg0: Internal.CallbackInfo_, arg1: Internal.LocalDoubleRef_): void;
        getLastHurtByMob(): Internal.LivingEntity;
        pehkui_setScaleCache(scaleCache: Internal.ScaleData_[]): void;
        isInWaterOrBubble(): boolean;
        decreaseAirSupply(arg0: number): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        updateFluidHeightAndDoFluidPushing(): void;
        wrapOperation$fpc000$modulargolems$dropExperience$moveToGolem(arg0: Internal.LivingEntity_, arg1: Internal.Operation_<any>): Vec3d;
        getPortalCooldown(): number;
        getItem(): Internal.ItemStack;
        handler$eek000$irons_spellbooks$canEatForGluttony(arg0: boolean, arg1: Internal.CallbackInfoReturnable_<any>): void;
        causeFallDamage(arg0: number, arg1: number, arg2: DamageSource_): boolean;
        hasContainerOpen(): boolean;
        releaseUsingItem(): void;
        getPosition(arg0: number): Vec3d;
        "awardStat(net.minecraft.resources.ResourceLocation)"(arg0: ResourceLocation_): void;
        wait(arg0: number): void;
        isIgnoringBlockTriggers(): boolean;
        setRecordPlayingNearby(arg0: BlockPos_, arg1: boolean): void;
        isInRain(): boolean;
        getHandHoldingItemAngle(arg0: Internal.Item_): Vec3d;
        neruina$setTickingEntryId(uuid: Internal.UUID_): void;
        setCreativeMode(mode: boolean): void;
        hasItemInSlot(arg0: Internal.EquipmentSlot_): boolean;
        sendServerStatus(arg0: Internal.ServerStatus_): void;
        canUpdate(arg0: boolean): void;
        setShoulderEntityRight(arg0: Internal.CompoundTag_): void;
        distanceToSqr(arg0: Vec3d_): number;
        getEyeInFluidType(): Internal.FluidType;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isSteppingCarefully(): boolean;
        getInventoryChangeListener(): Internal.KubeJSInventoryListener;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        "spawnAtLocation(net.minecraft.world.item.ItemStack,float)"(arg0: Internal.ItemStack_, arg1: number): Internal.ItemEntity;
        addAdditionalSaveData(arg0: Internal.CompoundTag_): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(): number;
        getBlockX(): number;
        isFallFlying(): boolean;
        getEncodeId(): string;
        getAnimationStack(): Internal.AnimationStack;
        getY(arg0: number): number;
        emf$prevPitch(): number;
        getNbt(): Internal.CompoundTag;
        setInvisible(arg0: boolean): void;
        getStages(): Internal.Stages;
        boostElytraFlight(): void;
        handler$fpb000$modulargolems$setRemoved(arg0: Internal.Entity$RemovalReason_, arg1: Internal.CallbackInfo_): void;
        canEnterPose(arg0: Internal.Pose_): boolean;
        getEffect(arg0: Internal.MobEffect_): Internal.MobEffectInstance;
        setTotalMovementSpeedMultiplier(speed: number): void;
        redirect$bcj000$attributeslib$apoth_sunderingHasEffect(arg0: Internal.LivingEntity_, arg1: Internal.MobEffect_): boolean;
        getDynamicLightY(): number;
        setHealth(arg0: number): void;
        attack(arg0: DamageSource_, arg1: number): boolean;
        getBlockSpeedFactor(): number;
        onInsideBubbleColumn(arg0: boolean): void;
        initMenu(arg0: Internal.AbstractContainerMenu_): void;
        getEyePosition(): Vec3d;
        getEyeHeight(): number;
        getLuck(): number;
        setDiscardFriction(arg0: boolean): void;
        hasPassenger(arg0: Internal.Predicate_<Internal.Entity>): boolean;
        getYaw(): number;
        swing(arg0: Internal.InteractionHand_, arg1: boolean): void;
        hasChangedDimension(): void;
        getUsedItemHand(): Internal.InteractionHand;
        setDefaultMovementSpeed(speed: number): void;
        onEffectAdded(arg0: Internal.MobEffectInstance_, arg1: Internal.Entity_): void;
        canAttackType(arg0: Internal.EntityType_<any>): boolean;
        getRespawnDimension(): Internal.ResourceKey<Internal.Level>;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        getBrain(): Internal.Brain<any>;
        setCustomNameVisible(arg0: boolean): void;
        isAlliedTo(arg0: Internal.Team_): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        updateTutorialInventoryAction(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.ClickAction_): void;
        getControllingPassenger(): Internal.LivingEntity;
        getScriptType(): Internal.ScriptType;
        onWrite(arg0: Internal.CompoundTag_): void;
        shouldDiscardFriction(): boolean;
        startRiding(arg0: Internal.Entity_): boolean;
        saveWithoutId(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        getForward(): Vec3d;
        wrap(): Internal.WeakReference<Internal.Trackable>;
        getDamageAfterMagicAbsorb(arg0: DamageSource_, arg1: number): number;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        pehkui_isFirstUpdate(): boolean;
        getId(): number;
        canBeHitByProjectile(): boolean;
        onMove(arg0: Internal.MoverType_, arg1: Vec3d_, arg2: boolean): boolean;
        getXpNeededForNextLevel(): number;
        resetAttackStrengthTicker(): void;
        getEyeY(): number;
        getScoreboard(): Internal.Scoreboard;
        skipDropExperience(): void;
        fabric_readAttachmentsFromNbt(nbt: Internal.CompoundTag_): void;
        getBoundingBox(): Internal.AABB;
        isInWaterOrRain(): boolean;
        openInventoryGUI(inventory: Internal.InventoryKJS_, title: Internal.Component_): void;
        getSaturation(): number;
        setItemSlot(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): void;
        tryAddSoulSpeed(): void;
        disableShield(arg0: boolean): void;
        equals(arg0: any): boolean;
        getViewYRot(arg0: number): number;
        getSwimSound(): Internal.SoundEvent;
        dismountsUnderwater(): boolean;
        isAffectedByPotions(): boolean;
        addTag(arg0: string): boolean;
        playerTouch(arg0: Internal.Player_): void;
        getAddEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>;
        getCitadelEntityData(): Internal.CompoundTag;
        getEyeHeight(arg0: Internal.Pose_): number;
        playerAnimator_getAnimation(id: ResourceLocation_): Internal.IAnimation;
        doWaterSplashEffect(): void;
        redirect$epf000$fabric_entity_events_v1$beforeEntityKilled(livingEntity: Internal.LivingEntity_, source: DamageSource_, amount: number): boolean;
        getTeam(): Internal.Team;
        setTicksFrozen(arg0: number): void;
        getUseItem(): Internal.ItemStack;
        getMyRidingOffset(): number;
        mobControl$ticks(): number;
        dismountTo(arg0: number, arg1: number, arg2: number): void;
        getFlyingSpeed(): number;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        handler$igj000$sounds$$drop_item_sound_effect(stack: Internal.ItemStack_, throwRandomly: boolean, retainOwnership: boolean, cir: Internal.CallbackInfoReturnable_<any>): void;
        abstract etf$getEntityKey(): string;
        /**
         * @deprecated
        */
        abstract etf$getPose(): Internal.Pose;
        hasCustomName(): boolean;
        getEnchantmentSeed(): number;
        getSwimAmount(arg0: number): number;
        isLiving(): boolean;
        getX(): number;
        dropAllDeathLoot(arg0: DamageSource_): void;
        isVehicle(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        addItem(arg0: Internal.ItemStack_): boolean;
        resetDynamicLight(): void;
        handler$een000$irons_spellbooks$changeGlowOutline(arg0: Internal.CallbackInfoReturnable_<any>): void;
        modify$fpc000$modulargolems$travelRiddenByGolem(arg0: Vec3d_): Vec3d;
        handler$gfa000$morehitboxes$saveYPos(arg0: Internal.CallbackInfo_, arg1: Internal.LocalDoubleRef_): void;
        spawnAtLocation(arg0: Internal.ItemStack_): Internal.ItemEntity;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        thunderHit(arg0: Internal.ServerLevel_, arg1: Internal.LightningBolt_): void;
        setIsInPowderSnow(arg0: boolean): void;
        abstract etf$distanceTo(arg0: Internal.Entity_): number;
        doEnchantDamageEffects(arg0: Internal.LivingEntity_, arg1: Internal.Entity_): void;
        setCustomName(arg0: Internal.Component_): void;
        handleNetherPortal(): void;
        doWaterSplashingEffects(): void;
        lambdynlights$scheduleTrackedChunksRebuild(arg0: Internal.LevelRenderer_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setStingerCount(arg0: number): void;
        isScoping(): boolean;
        playerAnimator_getAnimation(): Internal.AnimationApplier;
        setFoodLevel(foodLevel: number): void;
        getBoundingBoxForPose(arg0: Internal.Pose_): Internal.AABB;
        isCustomNameVisible(): boolean;
        isSupportedBy(arg0: BlockPos_): boolean;
        setTabListFooter(arg0: Internal.Component_): void;
        getPistonPushReaction(): Internal.PushReaction;
        shouldRiderSit(): boolean;
        lookAt(arg0: Internal.EntityAnchorArgument$Anchor_, arg1: Vec3d_): void;
        getChatVisibility(): Internal.ChatVisiblity;
        hurtCurrentlyUsedShield(arg0: number): void;
        triggerItemUseEffects(arg0: Internal.ItemStack_, arg1: number): void;
        supplementaries$hasQuiver(): boolean;
        getLootTableSeed(): number;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        collide(arg0: Vec3d_): Vec3d;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        "onSyncedDataUpdated(java.util.List)"(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        hasIndirectPassenger(arg0: Internal.Entity_): boolean;
        getEntityData(): Internal.SynchedEntityData;
        bookshelf$getFallDamageSound(arg0: number): Internal.SoundEvent;
        getShoulderEntityRight(): Internal.CompoundTag;
        setlastPlayerScanTime(arg0: number): void;
        handleInsidePortal(arg0: BlockPos_): void;
        sendTexturePack(arg0: string, arg1: string, arg2: boolean, arg3: Internal.Component_): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        resetSentInfo(): void;
        /**
         * @deprecated
        */
        jumpInLiquid(arg0: Internal.TagKey_<Internal.Fluid>): void;
        updateIsUnderwater(): boolean;
        absMoveTo(arg0: number, arg1: number, arg2: number): void;
        updateFluidHeightAndDoFluidPushing(arg0: Internal.Predicate_<Internal.FluidState>): void;
        onBelowWorld(): void;
        isOnRails(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        static clearNullReferences(): void;
        getStingerCount(): number;
        getXaeroWorldMapPlayerData(): Internal.ServerPlayerData;
        getFallSounds(): Internal.LivingEntity$Fallsounds;
        reapplyPosition(): void;
        getDimensionChangingDelay(): number;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        setLivingEntityFlag(arg0: number, arg1: boolean): void;
        getWaterSlowDown(): number;
        setYaw(arg0: number): void;
        getPickRadius(): number;
        trackStartFallingPosition(): void;
        supp$getSlimedTicks(): number;
        setplayerInRange(arg0: boolean): void;
        awardRecipes(arg0: Internal.Collection_<Internal.Recipe<any>>): number;
        isRemoved(): boolean;
        emf$isSneaking(): boolean;
        teleportToWithTicket(arg0: number, arg1: number, arg2: number): void;
        getJumpBoostPower(): number;
        fillCrashReportCategory(arg0: Internal.CrashReportCategory_): void;
        getCamera(): Internal.Entity;
        refreshDimensions(): void;
        pehkui_writeScaleNbt(nbt: Internal.CompoundTag_): Internal.CompoundTag;
        isRewinding(): boolean;
        handler$eei000$irons_spellbooks$getArmorCoverPercentage(arg0: Internal.CallbackInfoReturnable_<any>): void;
        "getAttributeValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        "isHolding(net.minecraft.world.item.Item)"(arg0: Internal.Item_): boolean;
        "spawnAtLocation(net.minecraft.world.level.ItemLike)"(arg0: Internal.ItemLike_): Internal.ItemEntity;
        getEyePosition(arg0: number): Vec3d;
        setShiftKeyDown(arg0: boolean): void;
        getPassengers(): Internal.EntityArrayList;
        getEnderChestInventory(): Internal.PlayerEnderChestContainer;
        getRiddenInput(arg0: Internal.Player_, arg1: Vec3d_): Vec3d;
        calculateUpVector(arg0: number, arg1: number): Vec3d;
        spawnSprintParticle(): void;
        getAdjustedOnPosition(arg0: BlockPos_): BlockPos;
        getMaxHeightFluidType(): Internal.FluidType;
        handler$bgi000$l2library$overrideClientGlow_isCurrentlyGlowing(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getZ(): number;
        trackChunk(arg0: Internal.ChunkPos_, arg1: Internal.Packet_<any>): void;
        isSleepingLongEnough(): boolean;
        checkSupportingBlock(arg0: boolean, arg1: Vec3d_): void;
        handler$ich000$changeDimension(destination: Internal.ServerLevel_, teleporter: Internal.ITeleporter_, cir: Internal.CallbackInfoReturnable_<any>): void;
        shouldRemoveSoulSpeed(arg0: Internal.BlockState_): boolean;
        dropEquipment(): void;
        teleportTo(arg0: number, arg1: number, arg2: number): void;
        getAttributeBaseValue(arg0: Internal.Holder_<Internal.Attribute>): number;
        getServer(): Internal.MinecraftServer;
        getExperienceReward(): number;
        getFirstPassenger(): Internal.Entity;
        heal(arg0: number): void;
        getGameProfile(): Internal.GameProfile;
        setLastHurtMob(arg0: Internal.Entity_): void;
        getRelativePortalPosition(arg0: Internal.Direction$Axis_, arg1: Internal.BlockUtil$FoundRectangle_): Vec3d;
        setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        interact(arg0: Internal.Player_, arg1: Internal.InteractionHand_): Internal.InteractionResult;
        removePassenger(arg0: Internal.Entity_): void;
        getDismountLocationForPassenger(arg0: Internal.LivingEntity_): Vec3d;
        checkSlowFallDistance(): void;
        tickDeath(): void;
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        canStandOnFluid(arg0: Internal.FluidState_): boolean;
        addPassenger(arg0: Internal.Entity_): void;
        modifyReturnValue$bfc000$enhancedai$getFireImmuneTicks(arg0: number): number;
        setFabricBalmData(arg0: Internal.CompoundTag_): void;
        touchingUnloadedChunk(): boolean;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        handler$bfc000$enhancedai$cancelPush(arg0: number, arg1: number, arg2: number, arg3: Internal.CallbackInfo_): void;
        getLookAngle(): Vec3d;
        etf$getName(): Internal.Component;
        getData(): Internal.AttachedData<any>;
        handler$jcg000$petrolpark$inPlayHurtSound(arg0: DamageSource_, arg1: Internal.CallbackInfo_): void;
        emf$isOnFire(): boolean;
        getPermissionLevel(): number;
        setArrowCount(arg0: number): void;
        getMotionZ(): number;
        onNotifyDataManagerChange(arg0: Internal.EntityDataAccessor_<any>): void;
        nextStep(): number;
        isInvisible(): boolean;
        is(arg0: Internal.Entity_): boolean;
        "awardStat(net.minecraft.stats.Stat,int)"(arg0: Internal.Stat_<any>, arg1: number): void;
        getAttackStrengthScale(arg0: number): number;
        getBedOrientation(): Internal.Direction;
        /**
         * @deprecated
        */
        getBlockStateOnLegacy(): Internal.BlockState;
        ejectPassengers(): void;
        removeEffect(arg0: Internal.MobEffect_): boolean;
        "canReach(net.minecraft.world.phys.Vec3,double)"(arg0: Vec3d_, arg1: number): boolean;
        getProfile(): Internal.GameProfile;
        openTextEdit(arg0: Internal.SignBlockEntity_, arg1: boolean): void;
        mayBuild(): boolean;
        isDeadOrDying(): boolean;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        static setViewScale(arg0: number): void;
        emf$isAlive(): boolean;
        take(arg0: Internal.Entity_, arg1: number): void;
        setLevelCallback(arg0: Internal.EntityInLevelCallback_): void;
        startTracking(): void;
        playSound(arg0: Internal.SoundEvent_, arg1: number, arg2: number): void;
        pushEntities(): void;
        attachToPending(arg0: Internal.ChunkPos_, arg1: Internal.Packet_<any>): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityDispatcher)"(arg0: Internal.CapabilityDispatcher_): boolean;
        canAttack(arg0: Internal.LivingEntity_): boolean;
        getOffHandItem(): Internal.ItemStack;
        startSeenByPlayer(arg0: Internal.ServerPlayer_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        startUsingItem(arg0: Internal.InteractionHand_): void;
        subtleEffects$wasTouchingLava(): boolean;
        setTimeout(): void;
        position(): Vec3d;
        static getEquipmentSlotForItem(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        displayFireAnimation(): boolean;
        getAdjustedCanTriggerWalking(arg0: boolean): boolean;
        isOutOfCamera(): boolean;
        getRopeHoldPosition(arg0: number): Vec3d;
        copyPosition(arg0: Internal.Entity_): void;
        onAddedToWorld(): void;
        "hasPassenger(net.minecraft.world.entity.Entity)"(arg0: Internal.Entity_): boolean;
        loadGameTypes(arg0: Internal.CompoundTag_): void;
        abstract etf$canBeBright(): boolean;
        isCrouching(): boolean;
        handler$ggl000$ars_nouveau$anSetDeltaMovement(arg0: Vec3d_, arg1: Internal.CallbackInfo_): void;
        "getAttributeBaseValue(net.minecraft.world.entity.ai.attributes.Attribute)"(arg0: Internal.Attribute_): number;
        onLeaveCombat(): void;
        setY(y: number): void;
        getAttributeValue(arg0: Internal.Attribute_): number;
        getFeetBlockState(): Internal.BlockState;
        allowsListing(): boolean;
        changeDimension(arg0: Internal.ServerLevel_, arg1: Internal.ITeleporter_): Internal.Entity;
        isHorizontalCollisionMinor(arg0: Vec3d_): boolean;
        positionRider(arg0: Internal.Entity_): void;
        broadcastToPlayer(arg0: Internal.ServerPlayer_): boolean;
        baseTick(): void;
        setSharedFlag(arg0: number, arg1: boolean): void;
        handler$eek000$irons_spellbooks$hideJacketLayers(arg0: Internal.PlayerModelPart_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getSleepingPos(): Internal.Optional<BlockPos>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightAccess(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        damageHeldItem(): void;
        getCustomName(): Internal.Component;
        getClass(): typeof any;
        freeAt(arg0: BlockPos_): boolean;
        isVisuallySwimming(): boolean;
        getMaxAirSupply(): number;
        canTrample(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: number): boolean;
        blockUsingShield(arg0: Internal.LivingEntity_): void;
        processFlappingMovement(): void;
        neruina$setErrored(): void;
        getFoodLevel(): number;
        setItemInHand(arg0: Internal.InteractionHand_, arg1: Internal.ItemStack_): void;
        setMaxHealth(hp: number): void;
        dynamicLightTick(): void;
        getFacing(): Internal.Direction;
        emf$isWet(): boolean;
        setSaturation(saturation: number): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>, arg1: boolean): boolean;
        static createWeakRefBasedSet(): Internal.ObjectOpenCustomHashSet<Internal.WeakReference<Internal.Trackable>>;
        openJigsawBlock(arg0: Internal.JigsawBlockEntity_): void;
        isPassengerOfSameVehicle(arg0: Internal.Entity_): boolean;
        getBoundingBoxForCulling(): Internal.AABB;
        handler$ghf005$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        handler$ggl004$ars_nouveau$onTick(arg0: Internal.CallbackInfo_): void;
        abstract etf$getArmorItems(): Internal.Iterable<Internal.ItemStack>;
        onJump(): boolean;
        getTargetYaw(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): number;
        trackingPosition(): Vec3d;
        getNameTagOffsetY(): number;
        isInvulnerable(): boolean;
        isInLava(): boolean;
        awardKillScore(arg0: Internal.Entity_, arg1: number, arg2: DamageSource_): void;
        isInWater(): boolean;
        localvar$fkb001$more_mod_tetra$fluidCollision(arg0: Vec3d_): Vec3d;
        getXp(): number;
        unsetRemoved(): void;
        pehkui_getScaleCache(): Internal.ScaleData[];
        swing(arg0: Internal.InteractionHand_): void;
        hasEffect(arg0: Internal.MobEffect_): boolean;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        /**
         * @deprecated
        */
        fixupDimensions(): void;
        handler$bcl000$attributeslib$apoth_ownedAbilities(arg0: Internal.Level_, arg1: BlockPos_, arg2: number, arg3: Internal.GameProfile_, arg4: Internal.CallbackInfo_): void;
        handler$jcg000$petrolpark$inSetLastHurtByMob(arg0: Internal.LivingEntity_, arg1: Internal.CallbackInfo_): void;
        getRootVehicle(): Internal.Entity;
        save(arg0: Internal.CompoundTag_): boolean;
        getLocalBoundsForPose(arg0: Internal.Pose_): Internal.AABB;
        isNoGravity(): boolean;
        curePotionEffects(arg0: Internal.ItemStack_): boolean;
        setMainArm(arg0: Internal.HumanoidArm_): void;
        redirect$bcj000$attributeslib$apoth_sunderingApplyEffect(arg0: number, arg1: number, arg2: DamageSource_, arg3: number): number;
        handler$bcj000$attributeslib$apoth_onEffectUpdateRemoveAttribute(arg0: Internal.MobEffectInstance_, arg1: boolean, arg2: Internal.Entity_, arg3: Internal.CallbackInfo_): void;
        getSuffixes(): Internal.Collection<Internal.MutableComponent>;
        onItemPickup(arg0: Internal.ItemEntity_): void;
        setCitadelEntityData(arg0: Internal.CompoundTag_): void;
        static getSummary(): Internal.Map<typeof any, Internal.Map<typeof any, number>>;
        getXaeroMinimapPlayerData(): xaero.common.server.player.ServerPlayerData;
        completeUsingItem(): void;
        playExtinguishedSound(): void;
        emf$getY(): number;
        icarus$setSlowFalling(arg0: boolean): void;
        bookshelf$createHoverEvent(): Internal.HoverEvent;
        isImmobile(): boolean;
        updateSwimming(): void;
        isHolding(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        modifyReturnValue$bka000$blazinghot$isInLavaInjector(original: boolean): boolean;
        getSpeed(): number;
        shouldInformAdmins(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        rideTick(): void;
        getInventory(): Internal.InventoryKJS;
        wait(): void;
        getUuid(): Internal.UUID;
        setOffHandItem(item: Internal.ItemStack_): void;
        shouldFilterMessageTo(arg0: Internal.ServerPlayer_): boolean;
        spawn(): void;
        modifyReturnValue$jhi000$create$onFireImmune(arg0: boolean): boolean;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: Internal.Set_<Internal.RelativeMovement>, arg5: number, arg6: number): boolean;
        abstract etf$getCustomName(): Internal.Component;
        fabric_writeAttachmentsToNbt(nbt: Internal.CompoundTag_): void;
        shouldShowName(): boolean;
        setScore(arg0: number): void;
        markHurt(): void;
        getArmorSlots(): Internal.Iterable<Internal.ItemStack>;
        kill(): void;
        onEnterCombat(): void;
        openStructureBlock(arg0: Internal.StructureBlockEntity_): void;
        playSwimSound(arg0: number): void;
        animateHurt(arg0: number): void;
        drop(arg0: Internal.ItemStack_, arg1: boolean): Internal.ItemEntity;
        static resetForwardDirectionOfRelativePortalPosition(arg0: Vec3d_): Vec3d;
        brainProvider(): Internal.Brain$Provider<any>;
        getJumpPower(): number;
        getHeadArmorItem(): Internal.ItemStack;
        checkMovementStatistics(arg0: number, arg1: number, arg2: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDimensionsForge(arg0: Internal.Pose_): Internal.EntityDimensions;
        setExtension(key: any, value: any): void;
        setTabListHeaderFooter(arg0: Internal.Component_, arg1: Internal.Component_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        positionRider(arg0: Internal.Entity_, arg1: Internal.Entity$MoveFunction_): void;
        removeEffectParticles(): void;
        revive(): void;
        setCamera(arg0: Internal.Entity_): void;
        handler$ggj000$ars_nouveau$decreaseAirSupply(arg0: number, arg1: Internal.CallbackInfoReturnable_<any>): void;
        unlockAdvancement(id: ResourceLocation_): void;
        refreshDisplayName(): void;
        getBbWidth(): number;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        addDeltaMovement(arg0: Vec3d_): void;
        pehkui_setOnGround(onGround: boolean): void;
        localvar$bcg000$attributeslib$apoth_checkFallDamageWithGravity(arg0: number): number;
        getHurtSound(arg0: DamageSource_): Internal.SoundEvent;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        "getName()"(): Internal.Component;
        mirror(arg0: Internal.Mirror_): number;
        isFake(): boolean;
        handler$epl000$fabric_entity_events_v1$injectElytraTick(info: Internal.CallbackInfo_): void;
        canUpdate(): boolean;
        "attack(float)"(hp: number): void;
        mayUseItemAt(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.ItemStack_): boolean;
        knockback(arg0: number, arg1: number, arg2: number): void;
        getTypeName(): Internal.Component;
        getChatSession(): Internal.RemoteChatSession;
        mobControl$setDays(arg0: number): void;
        getTicksRequiredToFreeze(): number;
        setExperienceLevels(arg0: number): void;
        catnip$callSetLevel(arg0: Internal.Level_): void;
        setlastWanderTime(arg0: number): void;
        "teleportTo(net.minecraft.resources.ResourceLocation,double,double,double,float,float)"(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getVisibilityPercent(arg0: Internal.Entity_): number;
        doAutoAttackOnTouch(arg0: Internal.LivingEntity_): void;
        emf$prevZ(): number;
        teleportTo(arg0: Internal.ServerLevel_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getUsername(): string;
        transition$getRawPosition(): Vec3d;
        getPrimaryStepSoundBlockPos(arg0: BlockPos_): BlockPos;
        move(arg0: Internal.MoverType_, arg1: Vec3d_): void;
        doCheckFallDamage(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        onRemovedFromWorld(): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isPickable(): boolean;
        setYHeadRot(arg0: number): void;
        isRespawnForced(): boolean;
        setJumping(arg0: boolean): void;
        awardRecipesByKey(arg0: ResourceLocation_[]): void;
        getPickResult(): Internal.ItemStack;
        setChatSession(arg0: Internal.RemoteChatSession_): void;
        "getMainHandItem()"(): Internal.ItemStack;
        getAbsorptionAmount(): number;
        getRandomY(): number;
        onEffectRemoved(arg0: Internal.MobEffectInstance_): void;
        getDisplayName(): Internal.Component;
        displayClientMessage(arg0: Internal.Component_, arg1: boolean): void;
        getMobType(): Internal.MobType;
        static collideWithShapes(arg0: Vec3d_, arg1: Internal.AABB_, arg2: Internal.List_<Internal.VoxelShape>): Vec3d;
        travel(arg0: Vec3d_): void;
        maxhealthfix$setRestorePoint(arg0: number): void;
        getItemInHand(arg0: Internal.InteractionHand_): Internal.ItemStack;
        getlastWanderTime(): number;
        shouldBeSaved(): boolean;
        getFluidTypeHeight(arg0: Internal.FluidType_): number;
        drop(arg0: Internal.ItemStack_, arg1: boolean, arg2: boolean): Internal.ItemEntity;
        fabric_hasPersistentAttachments(): boolean;
        causeFoodExhaustion(arg0: number): void;
        setEntityOnShoulder(arg0: Internal.CompoundTag_): boolean;
        "areCapsCompatible(net.minecraftforge.common.capabilities.CapabilityProvider)"(arg0: Internal.CapabilityProvider_<Internal.Entity>): boolean;
        hurtHelmet(arg0: DamageSource_, arg1: number): void;
        giveExperienceLevels(arg0: number): void;
        removeTag(arg0: string): boolean;
        setLastDeathLocation(arg0: Internal.Optional_<Internal.GlobalPos>): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        /**
         * @deprecated
        */
        getFluidHeight(arg0: Internal.TagKey_<Internal.Fluid>): number;
        canSpawnSoulSpeedParticle(): boolean;
        notifyAll(): void;
        getStatsCounter(): Internal.ServerStatsCounter;
        aiStep(): void;
        getPassengersRidingOffset(): number;
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        canHarmPlayer(arg0: Internal.Player_): boolean;
        "isInFluidType(java.util.function.BiPredicate)"(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        distanceToEntitySqr(arg0: Internal.Entity_): number;
        isFrame(): boolean;
        broadcastBreakEvent(arg0: Internal.InteractionHand_): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        getAndDestroyFlyingCache(): boolean;
        startAutoSpinAttack(arg0: number): void;
        discard(): void;
        sendSystemMessage(arg0: Internal.Component_): void;
        drop(arg0: boolean): boolean;
        acceptsSuccess(): boolean;
        static tickEntity(entity: Internal.LivingEntity_): void;
        setNoGravity(arg0: boolean): void;
        getUseItemRemainingTicks(): number;
        onEnchantmentPerformed(arg0: Internal.ItemStack_, arg1: number): void;
        attackable(): boolean;
        createCommandSourceStack(): Internal.CommandSourceStack;
        isControlledByLocalInstance(): boolean;
        isMonster(): boolean;
        pehkui_setShouldSyncScales(sync: boolean): void;
        getSleepTimer(): number;
        getLastClimbablePos(): Internal.Optional<BlockPos>;
        getEatingSound(arg0: Internal.ItemStack_): Internal.SoundEvent;
        onSyncedDataUpdated(arg0: Internal.List_<Internal.SynchedEntityData$DataValue<any>>): void;
        getHorizontalFacing(): Internal.Direction;
        setId(arg0: number): void;
        getType(): string;
        isDamageSourceBlocked(arg0: DamageSource_): boolean;
        sendChatMessage(arg0: Internal.OutgoingChatMessage_, arg1: boolean, arg2: Internal.ChatType$Bound_): void;
        getLightProbePosition(arg0: number): Vec3d;
        setLastSectionPos(arg0: Internal.SectionPos_): void;
        getActiveEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        emf$prevX(): number;
        onEquipItem(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        getTextFilter(): Internal.TextFilter;
        giveInHand(item: Internal.ItemStack_): void;
        addXP(xp: number): void;
        checkDespawn(): void;
        pehkui_shouldSyncScales(): boolean;
        getDynamicLightWorld(): Internal.Level;
        canUseGameMasterBlocks(): boolean;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        stopSleepInBed(arg0: boolean, arg1: boolean): void;
        playHurtSound(arg0: DamageSource_): void;
        onSyncedDataUpdated(arg0: Internal.EntityDataAccessor_<any>): void;
        lerpHeadTo(arg0: number, arg1: number): void;
        isTextFilteringEnabled(): boolean;
        canDisableShield(): boolean;
        doesEmitEquipEvent(arg0: Internal.EquipmentSlot_): boolean;
        setMotionX(x: number): void;
        getMovementEmission(): Internal.Entity$MovementEmission;
        getHandSlots(): Internal.Iterable<Internal.ItemStack>;
        distanceToEntity(arg0: Internal.Entity_): number;
        bookshelf$getDeathSound(): Internal.SoundEvent;
        wait(arg0: number, arg1: number): void;
        getTeamColor(): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        "isInFluidType(net.minecraftforge.fluids.FluidType)"(arg0: Internal.FluidType_): boolean;
        getPrefixes(): Internal.Collection<Internal.MutableComponent>;
        extinguish(): void;
        removeEntitiesOnShoulder(): void;
        setDynamicLightEnabled(arg0: boolean): void;
        getCooldowns(): Internal.ItemCooldowns;
        moveTo(arg0: Vec3d_): void;
        etf$isTeammate(player: Internal.Player_): boolean;
        getExtension(key: any, type: typeof any): any;
        isColliding(arg0: BlockPos_, arg1: Internal.BlockState_): boolean;
        updateInWaterStateAndDoFluidPushing(): boolean;
        "swing(net.minecraft.world.InteractionHand)"(hand: Internal.InteractionHand_): void;
        static findRespawnPositionAndUseSpawnBlock(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number, arg3: boolean, arg4: boolean): Internal.Optional<Vec3d>;
        openHorseInventory(arg0: Internal.AbstractHorse_, arg1: Internal.Container_): void;
        lambdynlights$updateDynamicLight(arg0: Internal.LevelRenderer_): boolean;
        untrackChunk(arg0: Internal.ChunkPos_): void;
        destroyVanishingCursedItems(): void;
        tickEffects(): void;
        isForcedVisible(): boolean;
        isInvertedHealAndHarm(): boolean;
        getMouseItem(): Internal.ItemStack;
        killedEntity(arg0: Internal.ServerLevel_, arg1: Internal.LivingEntity_): boolean;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        modifyExpressionValue$ggh000$ars_nouveau$eytraValidOverride(arg0: boolean): boolean;
        getClassification(arg0: boolean): Internal.MobCategory;
        isFreezing(): boolean;
        wrapOperation$bfc000$enhancedai$pushResistance(arg0: Vec3d_, arg1: number, arg2: number, arg3: number, arg4: Internal.Operation_<any>): Vec3d;
        runCommand(command: string): number;
        setSharedFlagOnFire(arg0: boolean): void;
        startSleepInBed(arg0: BlockPos_): Internal.Either<Internal.Player$BedSleepingProblem, net.minecraft.util.Unit>;
        playerAnimator_setAnimation(id: ResourceLocation_, animation: Internal.IAnimation_): Internal.IAnimation;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get suppressingBounce(): boolean
        set serverLevel(arg0: Internal.ServerLevel_)
        set culled(value: boolean)
        get onFire(): boolean
        get deathSound(): Internal.SoundEvent
        get positionCodec(): Internal.VecDeltaCodec
        set maxUpStep(arg0: number)
        get entityReach(): number
        get fallFlyingTicks(): number
        set selectedSlot(index: number)
        get shiftKeyDown(): boolean
        set UUID(arg0: Internal.UUID_)
        set motionZ(z: number)
        get "inventory()"(): Internal.InventoryKJS
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get isInsideStructureTracker(): Internal.IsInsideStructureTracker
        get blockY(): number
        get shoulderEntityLeft(): Internal.CompoundTag
        get spectator(): boolean
        get alwaysExperienceDropper(): boolean
        set mainHandItem(item: Internal.ItemStack_)
        get persistentData(): Internal.CompoundTag
        get health(): number
        get maxHealth(): number
        set forcedPose(arg0: Internal.Pose_)
        set removed(arg0: Internal.Entity$RemovalReason_)
        get inWaterRainOrBubble(): boolean
        get removalReason(): Internal.Entity$RemovalReason
        get miningBlock(): boolean
        get indirectPassengers(): Internal.Iterable<Internal.Entity>
        set level(arg0: Internal.Level_)
        set boundingBox(arg0: Internal.AABB_)
        get ambientCreature(): boolean
        set experiencePoints(arg0: number)
        get block(): Internal.BlockContainerJS
        set shoulderEntityLeft(arg0: Internal.CompoundTag_)
        get name(): Internal.Component
        set mouseItem(item: Internal.ItemStack_)
        get tabListHeader(): Internal.Component
        get controlledVehicle(): Internal.Entity
        get armorValue(): number
        get killCredit(): Internal.LivingEntity
        get tabListDisplayName(): Internal.Component
        set needsChunksReloaded(needsChunksReloaded: boolean)
        get recipeBook(): Internal.ServerRecipeBook
        set outOfCamera(value: boolean)
        get respawnPosition(): BlockPos
        get autoSpinAttack(): boolean
        get remainingFireTicks(): number
        get maxFallDistance(): number
        set gameMode(arg0: Internal.GameType_)
        get ticksFrozen(): number
        set xaeroWorldMapPlayerData(arg0: Internal.ServerPlayerData_)
        get dynamicLightZ(): number
        set statusMessage(message: Internal.Component_)
        get voicePitch(): number
        set sleepingPos(arg0: BlockPos_)
        get descending(): boolean
        get YHeadRot(): number
        set absorptionAmount(arg0: number)
        get affectedByFluids(): boolean
        set deltaMovement(arg0: Vec3d_)
        get abilities(): Internal.Abilities
        get baby(): boolean
        get culled(): boolean
        set fireType(arg0: ResourceLocation_)
        get glowing(): boolean
        get leashOffset(): Vec3d
        get attackable(): boolean
        get changingDimension(): boolean
        set reducedDebugInfo(arg0: boolean)
        get underWater(): boolean
        get swimHighSpeedSplashSound(): Internal.SoundEvent
        get legsArmorItem(): Internal.ItemStack
        get luminance(): number
        get deltaMovement(): Vec3d
        get playerInRange(): boolean
        get dynamicLightX(): number
        set secondsOnFire(arg0: number)
        get "displayName()"(): Internal.Component
        get ticksUsingItem(): number
        get lootTable(): ResourceLocation
        get arrowCount(): number
        set xp(xp: number)
        get defaultMovementSpeed(): number
        set xaeroMinimapPlayerData(arg0: xaero.common.server.player.ServerPlayerData_)
        get peacefulCreature(): boolean
        set onGround(arg0: boolean)
        get inventory(): Internal.Inventory
        get localPlayer(): boolean
        get firstTick(): boolean
        get lastHurtByMobTimestamp(): number
        get vehicle(): Internal.Entity
        get effectiveAi(): boolean
        get stringUuid(): string
        get lastSectionPos(): Internal.SectionPos
        set swimming(arg0: boolean)
        get mainArm(): Internal.HumanoidArm
        get rotationVector(): Internal.Vec2
        get hurtDir(): number
        get sprinting(): boolean
        get motionY(): number
        get offhandItem(): Internal.ItemStack
        get currentItemAttackStrengthDelay(): number
        get lastHurtMob(): Internal.LivingEntity
        get selfAndPassengers(): Internal.Stream<Internal.Entity>
        get addedToWorld(): boolean
        get ipAddress(): string
        get secondaryUseActive(): boolean
        get soundSource(): Internal.SoundSource
        get lastDamageSource(): DamageSource
        set noActionTime(arg0: number)
        set movementSpeedAddition(speed: number)
        get lastActionTime(): number
        get pose(): Internal.Pose
        set z(z: number)
        get y(): number
        get blocking(): boolean
        get spawnLocation(): Internal.BlockContainerJS
        get score(): number
        get pushedByFluid(): boolean
        set spawnLocation(c: Internal.BlockContainerJS_)
        get armorCoverPercentage(): number
        get foodData(): Internal.FoodData
        get airSupply(): number
        get tabListFooter(): Internal.Component
        get player(): boolean
        get animal(): boolean
        get motionDirection(): Internal.Direction
        get fabricBalmData(): Internal.CompoundTag
        get commandSenderWorld(): Internal.Level
        get wardenSpawnTracker(): Internal.Optional<Internal.WardenSpawnTracker>
        get totalMovementSpeed(): number
        get motions(): Internal.Stack<any>
        get fireImmuneTicks(): number
        get "inventory()"(): Internal.Inventory
        get craftingGrid(): Internal.InventoryKJS
        get attributes(): Internal.AttributeMap
        get creative(): boolean
        get swimming(): boolean
        set sprinting(arg0: boolean)
        set x(x: number)
        get portalWaitTime(): number
        get blockStateOn(): Internal.BlockState
        get fluidJumpThreshold(): number
        set rewinding(arg0: boolean)
        set airSupply(arg0: number)
        get onPos(): BlockPos
        get undead(): boolean
        get blockPosBelowThatAffectsMyMovement(): BlockPos
        get stepHeight(): number
        get sleeping(): boolean
        get language(): string
        get dismountPoses(): Internal.ImmutableList<Internal.Pose>
        get lastHurtMobTimestamp(): number
        set remainingFireTicks(arg0: number)
        /**
         * @deprecated
        */
        get onPosLegacy(): BlockPos
        set pos(arg0: Vec3d_)
        get playerViewDistance(): number
        get mainHandItem(): Internal.ItemStack
        get fireType(): ResourceLocation
        set silent(arg0: boolean)
        get swimSplashSound(): Internal.SoundEvent
        get activeEffects(): Internal.Collection<Internal.MobEffectInstance>
        get onPortalCooldown(): boolean
        set pitch(arg0: number)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get usingItem(): boolean
        get alwaysTicking(): boolean
        get forgePersistentData(): Internal.CompoundTag
        get hurt(): boolean
        set invulnerable(arg0: boolean)
        get inFluidType(): boolean
        set glowing(arg0: boolean)
        get advancements(): Internal.PlayerAdvancements
        get alive(): boolean
        get stayingOnGroundSurface(): boolean
        get bbHeight(): number
        get forcedPose(): Internal.Pose
        get lastPlayerScanTime(): number
        get tags(): Internal.Set<string>
        get xpLevel(): number
        get needsChunksReloaded(): boolean
        get lastAttacker(): Internal.LivingEntity
        get op(): boolean
        get percentFrozen(): number
        get blockReach(): number
        set portalCooldown(arg0: number)
        set position(block: Internal.BlockContainerJS_)
        get soundVolume(): number
        get lastDeathLocation(): Internal.Optional<Internal.GlobalPos>
        set xpLevel(l: number)
        set pose(arg0: Internal.Pose_)
        get reachDistance(): number
        get entityType(): Internal.EntityType<any>
        get waterCreature(): boolean
        set lastHurtByPlayer(arg0: Internal.Player_)
        get "server()"(): Internal.MinecraftServer
        get pushable(): boolean
        set YBodyRot(arg0: number)
        set motionY(y: number)
        get dynamicLightEnabled(): boolean
        set chestArmorItem(item: Internal.ItemStack_)
        get respawnAngle(): number
        get passenger(): boolean
        get sensitiveToWater(): boolean
        get flapping(): boolean
        get reducedDebugInfo(): boolean
        get feetArmorItem(): Internal.ItemStack
        get viewScale(): number
        get visualRotationYInDegrees(): number
        set speed(arg0: number)
        get discrete(): boolean
        get level(): Internal.Level
        get combatTracker(): Internal.CombatTracker
        get chestArmorItem(): Internal.ItemStack
        get blockJumpFactor(): number
        set tabListHeader(arg0: Internal.Component_)
        get fullyFrozen(): boolean
        get inWall(): boolean
        get meleeAttackReferencePosition(): Vec3d
        get allSlots(): Internal.Iterable<Internal.ItemStack>
        get scale(): number
        get suppressingSlidingDownLadder(): boolean
        get blockZ(): number
        get silent(): boolean
        set useItem(arg0: Internal.ItemStack_)
        get pitch(): number
        get random(): Internal.RandomSource
        get passengersAndSelf(): Internal.Stream<Internal.Entity>
        get noActionTime(): number
        get visuallyCrawling(): boolean
        get lastHurtByMob(): Internal.LivingEntity
        get inWaterOrBubble(): boolean
        get portalCooldown(): number
        get item(): Internal.ItemStack
        get ignoringBlockTriggers(): boolean
        get inRain(): boolean
        set creativeMode(mode: boolean)
        set shoulderEntityRight(arg0: Internal.CompoundTag_)
        get eyeInFluidType(): Internal.FluidType
        get steppingCarefully(): boolean
        get inventoryChangeListener(): Internal.KubeJSInventoryListener
        /**
         * @deprecated
        */
        get lightLevelDependentMagicValue(): number
        get blockX(): number
        get fallFlying(): boolean
        get encodeId(): string
        get animationStack(): Internal.AnimationStack
        get nbt(): Internal.CompoundTag
        set invisible(arg0: boolean)
        get stages(): Internal.Stages
        set totalMovementSpeedMultiplier(speed: number)
        get dynamicLightY(): number
        set health(arg0: number)
        get blockSpeedFactor(): number
        get eyePosition(): Vec3d
        get eyeHeight(): number
        get luck(): number
        set discardFriction(arg0: boolean)
        get yaw(): number
        get usedItemHand(): Internal.InteractionHand
        set defaultMovementSpeed(speed: number)
        get respawnDimension(): Internal.ResourceKey<Internal.Level>
        get brain(): Internal.Brain<any>
        set customNameVisible(arg0: boolean)
        get controllingPassenger(): Internal.LivingEntity
        get scriptType(): Internal.ScriptType
        get forward(): Vec3d
        set feetArmorItem(item: Internal.ItemStack_)
        get id(): number
        get xpNeededForNextLevel(): number
        get eyeY(): number
        get scoreboard(): Internal.Scoreboard
        get boundingBox(): Internal.AABB
        get inWaterOrRain(): boolean
        get saturation(): number
        get swimSound(): Internal.SoundEvent
        get affectedByPotions(): boolean
        get addEntityPacket(): Internal.Packet<Internal.ClientGamePacketListener>
        get citadelEntityData(): Internal.CompoundTag
        get team(): Internal.Team
        set ticksFrozen(arg0: number)
        get useItem(): Internal.ItemStack
        get myRidingOffset(): number
        get flyingSpeed(): number
        get enchantmentSeed(): number
        get living(): boolean
        get x(): number
        get vehicle(): boolean
        set isInPowderSnow(arg0: boolean)
        set customName(arg0: Internal.Component_)
        get teamId(): string
        set stingerCount(arg0: number)
        get scoping(): boolean
        set foodLevel(foodLevel: number)
        get customNameVisible(): boolean
        set tabListFooter(arg0: Internal.Component_)
        get pistonPushReaction(): Internal.PushReaction
        get chatVisibility(): Internal.ChatVisiblity
        get lootTableSeed(): number
        get motionX(): number
        get entityData(): Internal.SynchedEntityData
        get shoulderEntityRight(): Internal.CompoundTag
        set lastPlayerScanTime(arg0: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get onRails(): boolean
        get stingerCount(): number
        get xaeroWorldMapPlayerData(): Internal.ServerPlayerData
        get fallSounds(): Internal.LivingEntity$Fallsounds
        get dimensionChangingDelay(): number
        get waterSlowDown(): number
        set yaw(arg0: number)
        get pickRadius(): number
        set playerInRange(arg0: boolean)
        get removed(): boolean
        get jumpBoostPower(): number
        get camera(): Internal.Entity
        get rewinding(): boolean
        set shiftKeyDown(arg0: boolean)
        get passengers(): Internal.EntityArrayList
        get enderChestInventory(): Internal.PlayerEnderChestContainer
        get maxHeightFluidType(): Internal.FluidType
        get z(): number
        get sleepingLongEnough(): boolean
        get server(): Internal.MinecraftServer
        get experienceReward(): number
        get firstPassenger(): Internal.Entity
        get gameProfile(): Internal.GameProfile
        set lastHurtMob(arg0: Internal.Entity_)
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set fabricBalmData(arg0: Internal.CompoundTag_)
        get lookAngle(): Vec3d
        get data(): Internal.AttachedData<any>
        get permissionLevel(): number
        set arrowCount(arg0: number)
        get motionZ(): number
        get invisible(): boolean
        get bedOrientation(): Internal.Direction
        /**
         * @deprecated
        */
        get blockStateOnLegacy(): Internal.BlockState
        get profile(): Internal.GameProfile
        get deadOrDying(): boolean
        set headArmorItem(item: Internal.ItemStack_)
        set viewScale(arg0: number)
        set levelCallback(arg0: Internal.EntityInLevelCallback_)
        get offHandItem(): Internal.ItemStack
        get outOfCamera(): boolean
        get crouching(): boolean
        set y(y: number)
        get feetBlockState(): Internal.BlockState
        get sleepingPos(): Internal.Optional<BlockPos>
        get customName(): Internal.Component
        get class(): typeof any
        get visuallySwimming(): boolean
        get maxAirSupply(): number
        get foodLevel(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set saturation(saturation: number)
        get boundingBoxForCulling(): Internal.AABB
        get nameTagOffsetY(): number
        get invulnerable(): boolean
        get inLava(): boolean
        get inWater(): boolean
        get xp(): number
        get rootVehicle(): Internal.Entity
        get noGravity(): boolean
        set mainArm(arg0: Internal.HumanoidArm_)
        get suffixes(): Internal.Collection<Internal.MutableComponent>
        set citadelEntityData(arg0: Internal.CompoundTag_)
        get summary(): Internal.Map<typeof any, Internal.Map<typeof any, number>>
        get xaeroMinimapPlayerData(): xaero.common.server.player.ServerPlayerData
        get immobile(): boolean
        get speed(): number
        get inventory(): Internal.InventoryKJS
        get uuid(): Internal.UUID
        set offHandItem(item: Internal.ItemStack_)
        set score(arg0: number)
        get armorSlots(): Internal.Iterable<Internal.ItemStack>
        get jumpPower(): number
        get headArmorItem(): Internal.ItemStack
        set camera(arg0: Internal.Entity_)
        get bbWidth(): number
        get "name()"(): Internal.Component
        get fake(): boolean
        get typeName(): Internal.Component
        get chatSession(): Internal.RemoteChatSession
        get ticksRequiredToFreeze(): number
        set experienceLevels(arg0: number)
        set lastWanderTime(arg0: number)
        get username(): string
        get pickable(): boolean
        set YHeadRot(arg0: number)
        get respawnForced(): boolean
        set jumping(arg0: boolean)
        get pickResult(): Internal.ItemStack
        set chatSession(arg0: Internal.RemoteChatSession_)
        get "mainHandItem()"(): Internal.ItemStack
        get absorptionAmount(): number
        get randomY(): number
        get displayName(): Internal.Component
        get mobType(): Internal.MobType
        get lastWanderTime(): number
        set entityOnShoulder(arg0: Internal.CompoundTag_)
        set lastDeathLocation(arg0: Internal.Optional_<Internal.GlobalPos>)
        get statsCounter(): Internal.ServerStatsCounter
        get passengersRidingOffset(): number
        get selectedSlot(): number
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get andDestroyFlyingCache(): boolean
        set noGravity(arg0: boolean)
        get useItemRemainingTicks(): number
        get controlledByLocalInstance(): boolean
        get monster(): boolean
        get sleepTimer(): number
        get lastClimbablePos(): Internal.Optional<BlockPos>
        get horizontalFacing(): Internal.Direction
        set id(arg0: number)
        get type(): string
        set lastSectionPos(arg0: Internal.SectionPos_)
        get activeEffectsMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get textFilter(): Internal.TextFilter
        get dynamicLightWorld(): Internal.Level
        get textFilteringEnabled(): boolean
        set motionX(x: number)
        get movementEmission(): Internal.Entity$MovementEmission
        get handSlots(): Internal.Iterable<Internal.ItemStack>
        get teamColor(): number
        set nbt(nbt: Internal.CompoundTag_)
        get prefixes(): Internal.Collection<Internal.MutableComponent>
        set dynamicLightEnabled(arg0: boolean)
        get cooldowns(): Internal.ItemCooldowns
        get forcedVisible(): boolean
        get invertedHealAndHarm(): boolean
        get mouseItem(): Internal.ItemStack
        get freezing(): boolean
        set sharedFlagOnFire(arg0: boolean)
        recipeBook: Internal.ServerRecipeBook;
        latency: number;
        readonly containerListener: Internal.ContainerListener;
        containerCounter: number;
        wonGame: boolean;
        camera: Internal.Entity;
        readonly gameMode: Internal.ServerPlayerGameMode;
        mobControl$lastTick: number;
        readonly server: Internal.MinecraftServer;
        readonly containerSynchronizer: Internal.ContainerSynchronizer;
        connection: Internal.ServerGamePacketListenerImpl;
    }
    type ServerPlayer_ = ServerPlayer;
    interface IForgeFluidState {
        getAdjacentBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canExtinguish(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        canHydrate(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: BlockPos_): boolean;
        move(arg0: Internal.LivingEntity_, arg1: Vec3d_, arg2: number): boolean;
        shouldUpdateWhileBoating(arg0: Internal.Boat_, arg1: Internal.Entity_): boolean;
        supportsBoating(arg0: Internal.Boat_): boolean;
        canConvertToSource(arg0: Internal.Level_, arg1: BlockPos_): boolean;
        getBlockPathType(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Mob_, arg3: boolean): Internal.BlockPathTypes;
        getExplosionResistance(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Explosion_): number;
        getFluidType(): Internal.FluidType;
        get fluidType(): Internal.FluidType
    }
    type IForgeFluidState_ = IForgeFluidState;
    class WhiteFlagItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type WhiteFlagItem_ = WhiteFlagItem;
    class Structure$StructureSettings extends Internal.Record {
        constructor(biomes: Internal.HolderSet_<Internal.Biome>, spawnOverrides: Internal.Map_<Internal.MobCategory, Internal.StructureSpawnOverride>, step: Internal.GenerationStep$Decoration_, terrainAdaptation: Internal.TerrainAdjustment_)
        getClass(): typeof any;
        toString(): string;
        biomes(): Internal.HolderSet<Internal.Biome>;
        step(): Internal.GenerationStep$Decoration;
        spawnOverrides(): Internal.Map<Internal.MobCategory, Internal.StructureSpawnOverride>;
        notifyAll(): void;
        notify(): void;
        terrainAdaptation(): Internal.TerrainAdjustment;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        static readonly CODEC: Internal.MapCodec<Internal.Structure$StructureSettings>;
    }
    type Structure$StructureSettings_ = Structure$StructureSettings;
    class InterModEnqueueEvent extends Internal.ParallelDispatchEvent {
        constructor()
        constructor(arg0: Internal.ModContainer_, arg1: Internal.ModLoadingStage_)
        getIMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        setPhase(arg0: Internal.EventPriority_): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "enqueueWork(java.util.function.Supplier)"<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        getIMCStream(arg0: Internal.Predicate_<string>): Internal.Stream<Internal.InterModComms$IMCMessage>;
        isCancelable(): boolean;
        getListenerList(): Internal.ListenerList;
        description(): string;
        getResult(): Internal.Event$Result;
        toString(): string;
        enqueueWork<T>(arg0: Internal.Supplier_<T>): Internal.CompletableFuture<T>;
        notifyAll(): void;
        "enqueueWork(java.lang.Runnable)"(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        enqueueWork(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        wait(): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get IMCStream(): Internal.Stream<Internal.InterModComms$IMCMessage>
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get canceled(): boolean
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get result(): Internal.Event$Result
        set result(arg0: Internal.Event$Result_)
        get phase(): Internal.EventPriority
    }
    type InterModEnqueueEvent_ = InterModEnqueueEvent;
    class BookCloningRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        "assemble(net.minecraft.world.Container,net.minecraft.core.RegistryAccess)"(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        "matches(net.minecraft.world.inventory.CraftingContainer,net.minecraft.world.level.Level)"(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        category(): Internal.CraftingBookCategory;
        getSerializer(): Internal.RecipeSerializer<any>;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        "getRemainingItems(net.minecraft.world.inventory.CraftingContainer)"(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<any>;
        "assemble(net.minecraft.world.inventory.CraftingContainer,net.minecraft.core.RegistryAccess)"(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        notifyAll(): void;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        "matches(net.minecraft.world.Container,net.minecraft.world.level.Level)"(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        "getRemainingItems(net.minecraft.world.Container)"(arg0: Internal.Container_): Internal.NonNullList<any>;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
    }
    type BookCloningRecipe_ = BookCloningRecipe;
    class WeightedOre implements Internal.CommonCollect$IWeighted {
        constructor(arg0: Internal.BlockState_, arg1: number)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getBlockState(): Internal.BlockState;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        getWeight(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get blockState(): Internal.BlockState
        get weight(): number
    }
    type WeightedOre_ = WeightedOre;
    class StateDefinition$Builder <O, S extends Internal.StateHolder<O, S>> {
        constructor(arg0: O)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        create(arg0: Internal.Function_<O, S>, arg1: Internal.StateDefinition$Factory_<O, S>): Internal.StateDefinition<O, S>;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        add(...arg0: Internal.Property_<any>[]): this;
        get class(): typeof any
        readonly properties: Internal.Map<string, Internal.Property<any>>;
    }
    type StateDefinition$Builder_<O, S extends Internal.StateHolder<O, S>> = StateDefinition$Builder<O, S>;
    class SpellbreakerItem extends Internal.MagicSwordItem {
        constructor(arg0: any_[])
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        getSpells(): Internal.List<Internal.SpellData>;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        getDamage(): number;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getTier(): Internal.Tier;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        initializeSpellContainer(arg0: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        handler$hai000$dummmmmmy$mm$damageEquipment(stack: Internal.ItemStack_, entity: Internal.LivingEntity_, player: Internal.LivingEntity_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get spells(): Internal.List<Internal.SpellData>
        get edible(): boolean
        get damage(): number
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get tier(): Internal.Tier
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type SpellbreakerItem_ = SpellbreakerItem;
    class RingBufferAdmin implements Internal.RingBufferAdminMBean {
        getClass(): typeof any;
        hashCode(): number;
        abstract getBufferSize(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        abstract getRemainingCapacity(): number;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        get bufferSize(): number
        get remainingCapacity(): number
    }
    type RingBufferAdmin_ = RingBufferAdmin;
    class AbuseReport {
        constructor(arg0: string, arg1: string, arg2: Internal.ReportEvidence_, arg3: Internal.ReportedEntity_, arg4: Internal.Instant_)
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        createdTime: Internal.Instant;
        reportedEntity: Internal.ReportedEntity;
        opinionComments: string;
        evidence: Internal.ReportEvidence;
        reason: string;
    }
    type AbuseReport_ = AbuseReport;
    class EntityPotionEffectsJS {
        constructor(e: Internal.LivingEntity_)
        getClass(): typeof any;
        toString(): string;
        add(mobEffect: Internal.MobEffect_, duration: number, amplifier: number, ambient: boolean, showParticles: boolean): void;
        add(mobEffect: Internal.MobEffect_, duration: number): void;
        notifyAll(): void;
        isActive(mobEffect: Internal.MobEffect_): boolean;
        add(mobEffect: Internal.MobEffect_, duration: number, amplifier: number): void;
        getMap(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>;
        notify(): void;
        isApplicable(effect: Internal.MobEffectInstance_): boolean;
        wait(arg0: number, arg1: number): void;
        add(mobEffect: Internal.MobEffect_): void;
        getActive(mobEffect: Internal.MobEffect_): Internal.MobEffectInstance;
        hashCode(): number;
        wait(): void;
        clear(): void;
        wait(arg0: number): void;
        getActive(): Internal.Collection<Internal.MobEffectInstance>;
        equals(arg0: any): boolean;
        getDuration(mobEffect: Internal.MobEffect_): number;
        get class(): typeof any
        get map(): Internal.Map<Internal.MobEffect, Internal.MobEffectInstance>
        get active(): Internal.Collection<Internal.MobEffectInstance>
    }
    type EntityPotionEffectsJS_ = EntityPotionEffectsJS;
    interface LessWanderingHorse {
        abstract horseman$setWanderAnchor(arg0: Vec3d_): void;
        getAnchorUpdateThreshold(): number;
        horseman$isOutsideWanderingLimit(pos: Vec3d_): boolean;
        abstract horseman$getWanderAnchor(): Vec3d;
        isEnabled(): boolean;
        getMaxWanderDistance(): number;
        get anchorUpdateThreshold(): number
        get enabled(): boolean
        get maxWanderDistance(): number
    }
    type LessWanderingHorse_ = LessWanderingHorse;
    class MappingRecipeComponent <T> implements Internal.RecipeComponentWithParent<T> {
        constructor(parent: Internal.RecipeComponent_<T>, mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>)
        getClass(): typeof any;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<T, O>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): this;
        parentComponent(): Internal.RecipeComponent<T>;
        isOutput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<T>;
        read(recipe: Internal.RecipeJS_, from: any): T;
        orSelf(): Internal.RecipeComponent<T>;
        checkEmpty(key: Internal.RecipeKey_<T>, value: T): string;
        role(): Internal.ComponentRole;
        notify(): void;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): this;
        replaceInput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): T;
        checkValueHasChanged(oldValue: T, newValue: T): boolean;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        replaceOutput(recipe: Internal.RecipeJS_, original: T, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): T;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<T>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<T>;
        isInput(recipe: Internal.RecipeJS_, value: T, match: Internal.ReplacementMatch_): boolean;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): this;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, T>>;
        asArray(): Internal.ArrayRecipeComponent<T>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, T>>;
        write(recipe: Internal.RecipeJS_, value: T): Internal.JsonElement;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<T>, map: Internal.Map_<any, any>): void;
        equals(arg0: any): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<T, O>;
        get class(): typeof any
    }
    type MappingRecipeComponent_<T> = MappingRecipeComponent<T>;
    class ScreenEvent$Init$Post extends Internal.ScreenEvent$Init {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: Internal.List_<Internal.GuiEventListener>, arg2: Internal.Consumer_<Internal.GuiEventListener>, arg3: Internal.Consumer_<Internal.GuiEventListener>)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getScreen(): Internal.Screen;
        notifyAll(): void;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        getListenersList(): Internal.List<Internal.GuiEventListener>;
        isCancelable(): boolean;
        removeListener(arg0: Internal.GuiEventListener_): void;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        addListener(arg0: Internal.GuiEventListener_): void;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get screen(): Internal.Screen
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get listenersList(): Internal.List<Internal.GuiEventListener>
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
    }
    type ScreenEvent$Init$Post_ = ScreenEvent$Init$Post;
    class BaseContainerType <T extends Internal.BaseContainer> extends Internal.MenuType<T> {
        getClass(): typeof any;
        static register<T extends Internal.AbstractContainerMenu>(arg0: string, arg1: Internal.MenuType$MenuSupplier_<T>): Internal.MenuType<T>;
        toString(): string;
        notifyAll(): void;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        static create<T extends Internal.BaseContainer>(containerSerializer: Internal.BiConsumer_<T, Internal.FriendlyByteBuf>, containerDeserializer: Internal.BiFunction_<Internal.Player, Internal.FriendlyByteBuf, T>): Internal.BaseContainerType<T>;
        notify(): void;
        writeContainer(container: T, buffer: Internal.FriendlyByteBuf_): void;
        wait(arg0: number, arg1: number): void;
        create(arg0: number, arg1: Internal.Inventory_): T;
        static create<T extends Internal.AbstractContainerMenu>(arg0: Internal.IContainerFactory_<T>): Internal.MenuType<T>;
        static "create(java.util.function.BiConsumer,java.util.function.BiFunction)"<T extends Internal.BaseContainer>(containerSerializer: Internal.BiConsumer_<T, Internal.FriendlyByteBuf>, containerDeserializer: Internal.BiFunction_<Internal.Player, Internal.FriendlyByteBuf, T>): Internal.BaseContainerType<T>;
        create(arg0: number, arg1: Internal.Inventory_, arg2: Internal.FriendlyByteBuf_): any;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        "create(int,net.minecraft.world.entity.player.Inventory)"(arg0: number, arg1: Internal.Inventory_): T;
        get class(): typeof any
    }
    type BaseContainerType_<T extends Internal.BaseContainer> = BaseContainerType<T>;
    class ScriptType extends Internal.Enum<Internal.ScriptType> implements Internal.ScriptTypePredicate, Internal.ScriptTypeHolder {
        getValidTypes(): Internal.List<Internal.ScriptType>;
        getClass(): typeof any;
        compareTo(arg0: Internal.ScriptType_): number;
        isStartup(): boolean;
        or(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.ScriptType>>;
        kjs$getScriptType(): this;
        test(arg0: any): boolean;
        getLogFile(): Internal.Path;
        isServer(): boolean;
        "test(java.lang.Object)"(arg0: any): boolean;
        "test(dev.latvian.mods.kubejs.script.ScriptType)"(type: Internal.ScriptType_): boolean;
        "compareTo(dev.latvian.mods.kubejs.script.ScriptType)"(arg0: Internal.ScriptType_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        and(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        test(type: Internal.ScriptType_): boolean;
        isClient(): boolean;
        static valueOf(name: string): Internal.ScriptType;
        toString(): string;
        notifyAll(): void;
        negate(): Internal.ScriptTypePredicate;
        name(): string;
        hashCode(): number;
        static getCurrent(cx: Internal.Context_): Internal.ScriptType;
        ordinal(): number;
        wait(): void;
        getDeclaringClass(): typeof Internal.ScriptType;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static values(): Internal.ScriptType[];
        get validTypes(): Internal.List<Internal.ScriptType>
        get class(): typeof any
        get startup(): boolean
        get logFile(): Internal.Path
        get server(): boolean
        get client(): boolean
        get declaringClass(): typeof Internal.ScriptType
        readonly name: string;
        static readonly VALUES: Internal.ScriptType[];
        readonly nameStrip: string;
        static readonly STARTUP: (Internal.ScriptType) & (Internal.ScriptType);
        readonly console: Internal.ConsoleJS;
        readonly path: Internal.Path;
        static readonly SERVER: (Internal.ScriptType) & (Internal.ScriptType);
        static readonly CLIENT: (Internal.ScriptType) & (Internal.ScriptType);
    }
    type ScriptType_ = ScriptType | "startup" | "server" | "client";
    class PermissionType <T> {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        typeToken(): T;
        equals(arg0: any): boolean;
        typeName(): string;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type PermissionType_<T> = PermissionType<T>;
    interface IArrayEntry {
        abstract keyTyped(arg0: string, arg1: number): void;
        abstract drawToolTip(arg0: number, arg1: number): void;
        abstract mouseClicked(arg0: number, arg1: number, arg2: number): void;
        abstract isValueSavable(): boolean;
        abstract getValue(): any;
        abstract updateCursorCounter(): void;
        get valueSavable(): boolean
        get value(): any
    }
    type IArrayEntry_ = IArrayEntry;
    class Vector4i implements Internal.Cloneable, Internal.Vector4ic, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.Vector4dc_, arg1: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3fc_, arg1: number, arg2: number)
        constructor(arg0: number, arg1: Internal.IntBuffer_)
        constructor(arg0: Internal.IntBuffer_)
        constructor(arg0: Internal.Vector2ic_, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector4fc_, arg1: number)
        constructor(arg0: Internal.Vector4ic_)
        constructor(arg0: Internal.Vector3ic_, arg1: number)
        set(arg0: number, arg1: Internal.IntBuffer_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        x(): number;
        div(arg0: number, arg1: Internal.Vector4i_): this;
        set(arg0: number): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        distance(arg0: Internal.Vector4ic_): number;
        set(arg0: Internal.Vector4ic_): this;
        "set(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): this;
        "div(float,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): this;
        get(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        max(arg0: Internal.Vector4ic_): this;
        "div(org.joml.Vector4ic,org.joml.Vector4i)"(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        toString(arg0: Internal.NumberFormat_): string;
        set(arg0: Internal.Vector4dc_, arg1: number): this;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        "set(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): this;
        add(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        clone(): any;
        w(): number;
        getClass(): typeof any;
        "set(int[])"(arg0: number[]): this;
        "set(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        setComponent(arg0: number, arg1: number): this;
        gridDistance(arg0: Internal.Vector4ic_): number;
        set(arg0: number[]): this;
        div(arg0: number): this;
        "div(int)"(arg0: number): this;
        max(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4i_): this;
        sub(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        mul(arg0: number): this;
        dot(arg0: Internal.Vector4ic_): number;
        sub(arg0: number, arg1: number, arg2: number, arg3: number): this;
        negate(): this;
        toString(): string;
        notifyAll(): void;
        set(arg0: Internal.Vector3ic_, arg1: number): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4i_): this;
        wait(arg0: number): void;
        "set(org.joml.Vector4dc,int)"(arg0: Internal.Vector4dc_, arg1: number): this;
        get(arg0: number): number;
        "get(int)"(arg0: number): number;
        add(arg0: Internal.Vector4ic_): this;
        "mul(org.joml.Vector4ic,org.joml.Vector4i)"(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number): this;
        z(): number;
        mul(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        set(arg0: Internal.IntBuffer_): this;
        notify(): void;
        absolute(): this;
        "set(org.joml.Vector4fc,int)"(arg0: Internal.Vector4fc_, arg1: number): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        div(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        setFromAddress(arg0: number): this;
        div(arg0: number): this;
        min(arg0: Internal.Vector4ic_, arg1: Internal.Vector4i_): this;
        set(arg0: Internal.ByteBuffer_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        "get(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        lengthSquared(): number;
        wait(): void;
        length(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        "set(org.joml.Vector3ic,int)"(arg0: Internal.Vector3ic_, arg1: number): this;
        min(arg0: Internal.Vector4ic_): this;
        distanceSquared(arg0: Internal.Vector4ic_): number;
        minComponent(): number;
        zero(): this;
        absolute(arg0: Internal.Vector4i_): this;
        div(arg0: Internal.Vector4ic_): this;
        y(): number;
        set(arg0: Internal.Vector4dc_): this;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        mul(arg0: Internal.Vector4ic_): this;
        wait(arg0: number, arg1: number): void;
        get(arg0: Internal.IntBuffer_): Internal.IntBuffer;
        static length(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "mul(int,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): this;
        "mul(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_): this;
        "mul(int)"(arg0: number): this;
        gridDistance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        set(arg0: Internal.Vector2ic_, arg1: number, arg2: number): this;
        equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        "set(int)"(arg0: number): this;
        "div(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_): this;
        div(arg0: number, arg1: Internal.Vector4i_): this;
        mul(arg0: number, arg1: Internal.Vector4i_): this;
        negate(arg0: Internal.Vector4i_): this;
        "get(int,java.nio.IntBuffer)"(arg0: number, arg1: Internal.IntBuffer_): Internal.IntBuffer;
        "div(float)"(arg0: number): this;
        "div(int,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): this;
        getToAddress(arg0: number): Internal.Vector4ic;
        hashCode(): number;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        equals(arg0: any): boolean;
        sub(arg0: Internal.Vector4ic_): this;
        "set(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        set(arg0: Internal.Vector4fc_, arg1: number): this;
        set "(java.nio.IntBuffer)"(arg0: Internal.IntBuffer_)
        get class(): typeof any
        set "(int[])"(arg0: number[])
        set "(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_)
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        set fromAddress(arg0: number)
        set "(int)"(arg0: number)
        set "(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_)
        z: number;
        x: number;
        y: number;
        w: number;
    }
    type Vector4i_ = Vector4i;
    class ServerFunctionLibrary implements Internal.PreparableReloadListener, Internal.IdentifiableResourceReloadListener {
        constructor(arg0: number, arg1: Internal.CommandDispatcher_<Internal.CommandSourceStack>)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        getFunctions(): Internal.Map<ResourceLocation, Internal.CommandFunction>;
        getFabricDependencies(): Internal.Collection<any>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getTag(arg0: ResourceLocation_): Internal.Collection<Internal.CommandFunction>;
        getAvailableTags(): Internal.Iterable<ResourceLocation>;
        hashCode(): number;
        wait(): void;
        getName(): string;
        getFunction(arg0: ResourceLocation_): Internal.Optional<Internal.CommandFunction>;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getFabricId(): ResourceLocation;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get class(): typeof any
        get functions(): Internal.Map<ResourceLocation, Internal.CommandFunction>
        get fabricDependencies(): Internal.Collection<any>
        get availableTags(): Internal.Iterable<ResourceLocation>
        get name(): string
        get fabricId(): ResourceLocation
    }
    type ServerFunctionLibrary_ = ServerFunctionLibrary;
    class BroadheadArrowItem extends Internal.ArrowItem implements Internal.IApothArrowItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        createArrow(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_): Internal.AbstractArrow;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        fromDispenser(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number): Internal.AbstractArrow;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        isInfinite(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Player_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        handler$zko000$apotheosis$apoth_isInfinite(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Player_, arg3: Internal.CallbackInfoReturnable_<any>): void;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type BroadheadArrowItem_ = BroadheadArrowItem;
    class TomeOfSacrificeItem extends com.github.sculkhorde.common.item.TomeItem implements Internal.IForgeItem {
        constructor()
        constructor(arg0: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        getDrinkingSound(): Internal.SoundEvent;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCooldownTicks(): number;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        asItem(): Internal.Item;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        executePower(arg0: Internal.Player_): void;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        setNameKey(arg0: string): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        static getProperties(): Internal.Item$Properties;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        abstract isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get cooldownTicks(): number
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        get properties(): Internal.Item$Properties
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type TomeOfSacrificeItem_ = TomeOfSacrificeItem;
    class BlockComponent extends Internal.Record implements Internal.RecipeComponent<Internal.Block> {
        constructor(crole: Internal.ComponentRole_)
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: Internal.JsonObject_): void;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<Internal.Block, O>;
        notify(): void;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<Internal.Block>;
        key(name: string): Internal.RecipeKey<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        checkEmpty(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<Internal.Block>, map: Internal.Map_<any, any>): void;
        "isOutput(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        crole(): Internal.ComponentRole;
        checkValueHasChanged(oldValue: Internal.Block_, newValue: Internal.Block_): boolean;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, Internal.Block>>;
        write(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,net.minecraft.world.level.block.Block)"(key: Internal.RecipeKey_<Internal.Block>, value: Internal.Block_): string;
        wait(): void;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object)"(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        read(recipe: Internal.RecipeJS_, from: any): Internal.Block;
        replaceOutput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): Internal.Block;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        asArray(): Internal.ArrayRecipeComponent<Internal.Block>;
        getClass(): typeof any;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, Internal.Block>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isInput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        wait(arg0: number, arg1: number): void;
        replaceInput(recipe: Internal.RecipeJS_, original: Internal.Block_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): Internal.Block;
        "write(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block)"(recipe: Internal.RecipeJS_, value: Internal.Block_): Internal.JsonPrimitive;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,net.minecraft.world.level.block.Block,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<Internal.Block>;
        componentType(): string;
        static builder(): Internal.RecipeComponentBuilder;
        toString(): string;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<Internal.Block>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<Internal.Block>;
        notifyAll(): void;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<Internal.Block>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        "checkEmpty(dev.latvian.mods.kubejs.recipe.RecipeKey,java.lang.Object)"(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        hashCode(): number;
        "isInput(dev.latvian.mods.kubejs.recipe.RecipeJS,java.lang.Object,dev.latvian.mods.kubejs.recipe.ReplacementMatch)"(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        isOutput(recipe: Internal.RecipeJS_, value: Internal.Block_, match: Internal.ReplacementMatch_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<Internal.Block, O>;
        wait(arg0: number): void;
        equals(o: any): boolean;
        get class(): typeof any
        static readonly OUTPUT: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
        static readonly INPUT: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
        static readonly BLOCK: (Internal.BlockComponent) & (Internal.RecipeComponent<Internal.Block>);
    }
    type BlockComponent_ = BlockComponent;
    abstract class DragonRespawnAnimation extends Internal.Enum<Internal.DragonRespawnAnimation> {
        constructor(arg0: string, arg1: number)
        compareTo(arg0: Internal.DragonRespawnAnimation_): number;
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        "compareTo(net.minecraft.world.level.dimension.end.DragonRespawnAnimation)"(arg0: Internal.DragonRespawnAnimation_): number;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        static values(): Internal.DragonRespawnAnimation[];
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.DragonRespawnAnimation>>;
        ordinal(): number;
        wait(): void;
        static valueOf(arg0: string): Internal.DragonRespawnAnimation;
        wait(arg0: number): void;
        abstract tick(arg0: Internal.ServerLevel_, arg1: Internal.EndDragonFight_, arg2: Internal.List_<Internal.EndCrystal>, arg3: number, arg4: BlockPos_): void;
        getDeclaringClass(): typeof Internal.DragonRespawnAnimation;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.DragonRespawnAnimation
        static readonly SUMMONING_PILLARS: Internal.DragonRespawnAnimation;
        static readonly PREPARING_TO_SUMMON_PILLARS: Internal.DragonRespawnAnimation;
        static readonly END: Internal.DragonRespawnAnimation;
        static readonly START: Internal.DragonRespawnAnimation;
        static readonly SUMMONING_DRAGON: Internal.DragonRespawnAnimation;
    }
    type DragonRespawnAnimation_ = "summoning_pillars" | "start" | "summoning_dragon" | DragonRespawnAnimation | "end" | "preparing_to_summon_pillars";
    interface IntSet extends Internal.Set<number>, Internal.IntCollection {
        /**
         * @deprecated
        */
        stream(): Internal.Stream<number>;
        abstract "contains(int)"(arg0: number): boolean;
        abstract addAll(arg0: Internal.Collection_<number>): boolean;
        of(arg0: number, arg1: number): this;
        of(): this;
        abstract contains(arg0: number): boolean;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        intStream(): Internal.IntStream;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        abstract "containsAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intParallelStream(): Internal.IntStream;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        abstract "remove(int)"(arg0: number): boolean;
        abstract removeAll(arg0: Internal.IntCollection_): boolean;
        abstract "removeAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        abstract "retainAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        intIterator(): Internal.IntIterator;
        abstract "add(int)"(arg0: number): boolean;
        removeIf(arg0: Internal.IntPredicate_): boolean;
        "of(java.lang.Object[])"<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        "contains(java.lang.Object)"(arg0: any): boolean;
        abstract remove(arg0: number): boolean;
        abstract addAll(arg0: Internal.IntCollection_): boolean;
        abstract retainAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "removeIf(java.util.function.Predicate)"(arg0: Internal.Predicate_<number>): boolean;
        abstract add(arg0: number): boolean;
        abstract toArray<T>(arg0: T[]): T[];
        abstract "toArray(int[])"(arg0: number[]): number[];
        abstract containsAll(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        toIntArray(arg0: number[]): number[];
        /**
         * @deprecated
        */
        remove(arg0: any): boolean;
        abstract "removeAll(java.util.Collection)"(arg0: Internal.Collection_<any>): boolean;
        "of(int,int,int)"(arg0: number, arg1: number, arg2: number): this;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): boolean;
        of(arg0: number): this;
        /**
         * @deprecated
        */
        add(arg0: any): boolean;
        of<E>(arg0: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        "add(java.lang.Integer)"(arg0: number): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        spliterator(): Internal.Spliterator<any>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        "of(int)"(arg0: number): this;
        "of(java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E): Internal.Set<E>;
        "of(int,int)"(arg0: number, arg1: number): this;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        abstract "retainAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        /**
         * @deprecated
        */
        "forEach(java.util.function.Consumer)"(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        add(arg0: number): boolean;
        abstract isEmpty(): boolean;
        /**
         * @deprecated
        */
        "add(java.lang.Object)"(arg0: any): boolean;
        abstract toIntArray(): number[];
        forEach(arg0: Internal.IntConsumer_): void;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        abstract toArray(arg0: number[]): number[];
        "of(int[])"(...arg0: number[]): this;
        of(arg0: number, arg1: number, arg2: number): this;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        contains(arg0: any): boolean;
        abstract "addAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        iterator(): Internal.Iterator<any>;
        forEach(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(it.unimi.dsi.fastutil.ints.IntPredicate)"(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        "forEach(it.unimi.dsi.fastutil.ints.IntConsumer)"(arg0: it.unimi.dsi.fastutil.ints.IntConsumer_): void;
        "removeIf(java.util.function.IntPredicate)"(arg0: Internal.IntPredicate_): boolean;
        "of(java.lang.Object,java.lang.Object,java.lang.Object)"<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        /**
         * @deprecated
        */
        forEach(arg0: Internal.Consumer_<number>): void;
        /**
         * @deprecated
        */
        parallelStream(): Internal.Stream<number>;
        abstract "toArray(java.lang.Object[])"<T>(arg0: T[]): T[];
        "toArray(java.util.function.IntFunction)"<T>(arg0: Internal.IntFunction_<T[]>): T[];
        /**
         * @deprecated
        */
        removeIf(arg0: Internal.Predicate_<number>): boolean;
        removeIf(arg0: it.unimi.dsi.fastutil.ints.IntPredicate_): boolean;
        abstract toArray(): any[];
        intSpliterator(): Internal.IntSpliterator;
        of(...arg0: number[]): this;
        abstract hashCode(): number;
        abstract size(): number;
        abstract "addAll(java.util.Collection)"(arg0: Internal.Collection_<number>): boolean;
        of<E>(...arg0: E[]): Internal.Set<E>;
        /**
         * @deprecated
        */
        rem(arg0: number): boolean;
        abstract clear(): void;
        abstract "containsAll(it.unimi.dsi.fastutil.ints.IntCollection)"(arg0: Internal.IntCollection_): boolean;
        abstract equals(arg0: any): boolean;
        "forEach(java.util.function.IntConsumer)"(arg0: Internal.IntConsumer_): void;
        "of(java.lang.Object)"<E>(arg0: E): Internal.Set<E>;
        get empty(): boolean
    }
    type IntSet_ = IntSet;
    class Vector4d implements Internal.Cloneable, Internal.Externalizable, Internal.Vector4dc {
        constructor()
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number[])
        constructor(arg0: number, arg1: Internal.DoubleBuffer_)
        constructor(arg0: Internal.ByteBuffer_)
        constructor(arg0: number, arg1: Internal.ByteBuffer_)
        constructor(arg0: Internal.Vector3dc_, arg1: number)
        constructor(arg0: Internal.Vector4fc_)
        constructor(arg0: Internal.Vector3fc_, arg1: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Vector4dc_)
        constructor(arg0: Internal.Vector3ic_, arg1: number)
        constructor(arg0: number)
        constructor(arg0: number[])
        constructor(arg0: Internal.Vector2ic_, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector2dc_, arg1: number, arg2: number)
        constructor(arg0: Internal.Vector4ic_)
        constructor(arg0: Internal.Vector2fc_, arg1: number, arg2: number)
        set(arg0: Internal.Vector4ic_): this;
        "get(int)"(arg0: number): number;
        "fma(org.joml.Vector4dc,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        negate(arg0: Internal.Vector4d_): this;
        "set(org.joml.Vector2ic,double,double)"(arg0: Internal.Vector2ic_, arg1: number, arg2: number): this;
        "set(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): this;
        mul(arg0: Internal.Vector4fc_): this;
        getToAddress(arg0: number): Internal.Vector4dc;
        equals(arg0: Internal.Vector4dc_, arg1: number): boolean;
        x(): number;
        min(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        fma(arg0: number, arg1: Internal.Vector4dc_): this;
        set(arg0: Internal.Vector3ic_, arg1: number): this;
        set(arg0: number, arg1: number, arg2: number): this;
        rotateX(arg0: number): this;
        mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        "get(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulAdd(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        mul(arg0: Internal.Matrix4x3fc_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number): this;
        distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        mulProject(arg0: Internal.Matrix4dc_): this;
        "fma(org.joml.Vector4dc,org.joml.Vector4dc)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        "mul(org.joml.Matrix4dc,org.joml.Vector4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        "mulAdd(org.joml.Vector4dc,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        set(arg0: number[]): this;
        lerp(arg0: Internal.Vector4dc_, arg1: number): this;
        round(): this;
        getClass(): typeof any;
        "mulAdd(double,org.joml.Vector4dc)"(arg0: number, arg1: Internal.Vector4dc_): this;
        static length(arg0: number, arg1: number, arg2: number, arg3: number): number;
        distance(arg0: Internal.Vector4dc_): number;
        set(arg0: Internal.Vector2ic_, arg1: number, arg2: number): this;
        sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        "set(org.joml.Vector2dc,double,double)"(arg0: Internal.Vector2dc_, arg1: number, arg2: number): this;
        get(arg0: Internal.Vector4d_): this;
        angle(arg0: Internal.Vector4dc_): number;
        fma(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        mulTranspose(arg0: Internal.Matrix4dc_): this;
        "set(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_): this;
        get(arg0: number): number;
        y(): number;
        "mul(org.joml.Matrix4x3fc)"(arg0: Internal.Matrix4x3fc_): this;
        "sub(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_): this;
        negate(): this;
        ceil(): this;
        dot(arg0: Internal.Vector4dc_): number;
        "set(org.joml.Vector3dc,double)"(arg0: Internal.Vector3dc_, arg1: number): this;
        set(arg0: Internal.DoubleBuffer_): this;
        "div(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector4d_): this;
        round(arg0: Internal.Vector4d_): this;
        rotateX(arg0: number, arg1: Internal.Vector4d_): this;
        setComponent(arg0: number, arg1: number): this;
        "sub(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        "add(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        wait(arg0: number): void;
        hermite(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4dc_, arg3: number, arg4: Internal.Vector4d_): this;
        "get(org.joml.Vector4f)"(arg0: Vec4f_): Vec4f;
        "mul(double)"(arg0: number): this;
        absolute(): this;
        "div(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        div(arg0: Internal.Vector4dc_): this;
        min(arg0: Internal.Vector4dc_): this;
        static lengthSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        normalize(): this;
        z(): number;
        isFinite(): boolean;
        "div(double,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): this;
        "add(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        setFromAddress(arg0: number): this;
        "normalize(double)"(arg0: number): this;
        mul(arg0: Internal.Matrix4fc_, arg1: Internal.Vector4d_): this;
        "get(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "add(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        mulTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        set(arg0: Internal.Vector2dc_, arg1: number, arg2: number): this;
        wait(): void;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        zero(): this;
        minComponent(): number;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        max(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        add(arg0: Internal.Vector4fc_): this;
        "fma(double,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        lerp(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): this;
        fma(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: Internal.Vector3dc_, arg1: number): this;
        "fma(double,org.joml.Vector4dc)"(arg0: number, arg1: Internal.Vector4dc_): this;
        "mul(org.joml.Matrix4x3dc,org.joml.Vector4d)"(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector4d_): this;
        mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: number, arg1: Internal.Vector4d_): this;
        sub(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        "mul(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        "set(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        "add(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_): this;
        "mulAdd(org.joml.Vector4dc,org.joml.Vector4dc)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        mulAdd(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        "set(float[])"(arg0: number[]): this;
        equals(arg0: any): boolean;
        "mul(org.joml.Matrix4dc)"(arg0: Internal.Matrix4dc_): this;
        add(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        mulAdd(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_): this;
        static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalize(arg0: number, arg1: Internal.Vector4d_): this;
        "div(double)"(arg0: number): this;
        set(arg0: Internal.Vector3fc_, arg1: number): this;
        "set(int,java.nio.DoubleBuffer)"(arg0: number, arg1: Internal.DoubleBuffer_): this;
        mul(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        sub(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        angleCos(arg0: Internal.Vector4dc_): number;
        normalize(arg0: number): this;
        "sub(org.joml.Vector4dc,org.joml.Vector4d)"(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        "mul(org.joml.Matrix4fc,org.joml.Vector4d)"(arg0: Internal.Matrix4fc_, arg1: Internal.Vector4d_): this;
        div(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): this;
        "get(int,java.nio.FloatBuffer)"(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        normalize(arg0: Internal.Vector4d_): this;
        dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
        distanceSquared(arg0: Internal.Vector4dc_): number;
        toString(arg0: Internal.NumberFormat_): string;
        "get(int,java.nio.ByteBuffer)"(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector4d_): this;
        floor(arg0: Internal.Vector4d_): this;
        "mul(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        sub(arg0: Internal.Vector4fc_): this;
        "mul(double,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4d_): this;
        normalize3(): this;
        clone(): any;
        set(arg0: Internal.Vector4fc_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        maxComponent(): number;
        getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        "get(java.nio.FloatBuffer)"(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        "mul(org.joml.Vector4fc,org.joml.Vector4d)"(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        "set(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_): this;
        add(arg0: Internal.Vector4dc_): this;
        "get(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        "get(int,org.joml.Vector4i)"(arg0: number, arg1: Internal.Vector4i_): Internal.Vector4i;
        "mulProject(org.joml.Matrix4dc,org.joml.Vector4d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        "set(org.joml.Vector3ic,double)"(arg0: Internal.Vector3ic_, arg1: number): this;
        "mul(org.joml.Matrix4fc)"(arg0: Internal.Matrix4fc_): this;
        "set(org.joml.Vector2fc,double,double)"(arg0: Internal.Vector2fc_, arg1: number, arg2: number): this;
        lengthSquared(): number;
        absolute(arg0: Internal.Vector4d_): this;
        toString(): string;
        mulAffineTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        "set(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_): this;
        notifyAll(): void;
        "mul(org.joml.Matrix4x3fc,org.joml.Vector4d)"(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector4d_): this;
        div(arg0: number): this;
        mul(arg0: Internal.Matrix4dc_): this;
        "get(org.joml.Vector4d)"(arg0: Internal.Vector4d_): this;
        equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mulAdd(arg0: number, arg1: Internal.Vector4dc_): this;
        mul(arg0: number): this;
        floor(): this;
        get(arg0: number, arg1: Internal.Vector4i_): Internal.Vector4i;
        distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        "sub(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        notify(): void;
        "set(org.joml.Vector3fc,double)"(arg0: Internal.Vector3fc_, arg1: number): this;
        set(arg0: Internal.Vector2fc_, arg1: number, arg2: number): this;
        "normalize(org.joml.Vector4d)"(arg0: Internal.Vector4d_): this;
        get(arg0: Vec4f_): Vec4f;
        fma(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        mul(arg0: Internal.Vector4dc_): this;
        "mul(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        ceil(arg0: Internal.Vector4d_): this;
        "mulAdd(double,org.joml.Vector4dc,org.joml.Vector4d)"(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        set(arg0: number[]): this;
        "mulProject(org.joml.Matrix4dc,org.joml.Vector3d)"(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        "set(double)"(arg0: number): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        rotateY(arg0: number, arg1: Internal.Vector4d_): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): number;
        length(): number;
        sub(arg0: Internal.Vector4dc_): this;
        "mul(org.joml.Matrix4x3dc)"(arg0: Internal.Matrix4x3dc_): this;
        add(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): this;
        normalize3(arg0: Internal.Vector4d_): this;
        smoothStep(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): this;
        set(arg0: Internal.Vector4dc_): this;
        mul(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): this;
        wait(arg0: number, arg1: number): void;
        sub(arg0: number, arg1: number, arg2: number, arg3: number): this;
        "set(double,double,double)"(arg0: number, arg1: number, arg2: number): this;
        div(arg0: number, arg1: Internal.Vector4d_): this;
        w(): number;
        "set(double[])"(arg0: number[]): this;
        mul(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): this;
        rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): this;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector4d_): this;
        rotateY(arg0: number): this;
        set(arg0: number): this;
        hashCode(): number;
        rotateZ(arg0: number, arg1: Internal.Vector4d_): this;
        "set(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_): this;
        max(arg0: Internal.Vector4dc_): this;
        mul(arg0: Internal.Matrix4fc_): this;
        set "(java.nio.DoubleBuffer)"(arg0: Internal.DoubleBuffer_)
        get class(): typeof any
        set "(java.nio.ByteBuffer)"(arg0: Internal.ByteBuffer_)
        get finite(): boolean
        set fromAddress(arg0: number)
        set "(float[])"(arg0: number[])
        set "(org.joml.Vector4ic)"(arg0: Internal.Vector4ic_)
        set "(org.joml.Vector4fc)"(arg0: Internal.Vector4fc_)
        set "(double)"(arg0: number)
        set "(double[])"(arg0: number[])
        set "(org.joml.Vector4dc)"(arg0: Internal.Vector4dc_)
        z: number;
        w: number;
        x: number;
        y: number;
    }
    type Vector4d_ = Vector4d;
    abstract class Config$Serializer <T extends Internal.Config> {
        constructor()
        abstract deserialize(arg0: Internal.JsonObject_): T;
        getClass(): typeof any;
        toString(): string;
        isInvalid(): boolean;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        abstract serialize(arg0: T): Internal.JsonObject;
        wait(arg0: number): void;
        safeGet<V>(supplier: Internal.Supplier_<V>, defaultValue: V): V;
        equals(arg0: any): boolean;
        get class(): typeof any
        get invalid(): boolean
    }
    type Config$Serializer_<T extends Internal.Config> = Config$Serializer<T>;
    class XenonGiant4Feature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor()
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        place(arg0: Internal.NoneFeatureConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.NoneFeatureConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.NoneFeatureConfiguration, Internal.Feature<Internal.NoneFeatureConfiguration>>>;
        get class(): typeof any
    }
    type XenonGiant4Feature_ = XenonGiant4Feature;
    class MutableInt extends number implements Internal.Mutable<number>, Internal.Comparable<Internal.MutableInt> {
        constructor()
        constructor(arg0: number)
        constructor(arg0: number)
        constructor(arg0: string)
        decrementAndGet(): number;
        "getAndAdd(int)"(arg0: number): number;
        doubleValue(): number;
        getAndAdd(arg0: number): number;
        increment(): void;
        compareTo(arg0: Internal.MutableInt_): number;
        add(arg0: number): void;
        notify(): void;
        "setValue(java.lang.Object)"(arg0: any): void;
        compareTo(arg0: any): number;
        "add(int)"(arg0: number): void;
        setValue(arg0: any): void;
        subtract(arg0: number): void;
        getAndDecrement(): number;
        longValue(): number;
        "addAndGet(java.lang.Number)"(arg0: number): number;
        toInteger(): number;
        incrementAndGet(): number;
        "subtract(java.lang.Number)"(arg0: number): void;
        getValue(): any;
        shortValue(): number;
        getAndIncrement(): number;
        wait(): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        addAndGet(arg0: number): number;
        setValue(arg0: number): void;
        getClass(): typeof any;
        floatValue(): number;
        add(arg0: number): void;
        "setValue(int)"(arg0: number): void;
        wait(arg0: number, arg1: number): void;
        addAndGet(arg0: number): number;
        getAndAdd(arg0: number): number;
        intValue(): number;
        decrement(): void;
        "getAndAdd(java.lang.Number)"(arg0: number): number;
        toString(): string;
        "subtract(int)"(arg0: number): void;
        notifyAll(): void;
        "add(java.lang.Number)"(arg0: number): void;
        subtract(arg0: number): void;
        "setValue(java.lang.Number)"(arg0: number): void;
        "compareTo(org.apache.commons.lang3.mutable.MutableInt)"(arg0: Internal.MutableInt_): number;
        hashCode(): number;
        "addAndGet(int)"(arg0: number): number;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        setValue(arg0: number): void;
        byteValue(): number;
        set "value(java.lang.Object)"(arg0: any)
        set value(arg0: any)
        get andDecrement(): number
        get value(): any
        get andIncrement(): number
        set value(arg0: number)
        get class(): typeof any
        set "value(int)"(arg0: number)
        set "value(java.lang.Number)"(arg0: number)
        set value(arg0: number)
    }
    type MutableInt_ = MutableInt;
    class BakedGlyph implements Internal.ReverseRenderableBakedGlyph {
        constructor(arg0: any_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        getClass(): typeof any;
        renderType(arg0: Internal.Font$DisplayMode_): Internal.RenderType;
        toString(): string;
        bits_n_bobs$renderReverse(arg0: boolean, arg1: number, arg2: number, arg3: Matrix4f_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        handler$chd000$oculus$render(italic: boolean, x: number, y: number, matrix: Matrix4f_, vertexConsumer: Internal.VertexConsumer_, red: number, green: number, blue: number, alpha: number, light: number, ci: Internal.CallbackInfo_): void;
        wait(): void;
        renderEffect(arg0: Internal.BakedGlyph$Effect_, arg1: Matrix4f_, arg2: Internal.VertexConsumer_, arg3: number): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        render(arg0: boolean, arg1: number, arg2: number, arg3: Matrix4f_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        get class(): typeof any
    }
    type BakedGlyph_ = BakedGlyph;
    interface VertexBufferHelper {
        abstract restoreBinding(): void;
        abstract saveBinding(): void;
    }
    type VertexBufferHelper_ = VertexBufferHelper;
    abstract class AbstractParsableList implements Internal.IReloadableData {
        constructor(arg0: Internal.UnitConfig_, arg1: string, arg2: string, arg3: string[])
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        loadData(): void;
        wait(): void;
        notifyAll(): void;
        wait(arg0: number): void;
        addDefaultValues(...arg0: string[]): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
    }
    type AbstractParsableList_ = AbstractParsableList;
    class IntTag extends Internal.NumericTag {
        constructor(arg0: number)
        getClass(): typeof any;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        "accept(net.minecraft.nbt.StreamTagVisitor)"(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "accept(net.minecraft.nbt.TagVisitor)"(arg0: Internal.TagVisitor_): void;
        sizeInBytes(): number;
        getAsFloat(): number;
        getAsLong(): number;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        write(arg0: Internal.DataOutput_): void;
        getId(): number;
        toString(): string;
        notifyAll(): void;
        specialEquals(o: any, shallow: boolean): boolean;
        static valueOf(arg0: number): Internal.IntTag;
        getAsDouble(): number;
        getType(): Internal.TagType<Internal.IntTag>;
        accept(arg0: Internal.TagVisitor_): void;
        hashCode(): number;
        getAsInt(): number;
        getAsString(): string;
        getAsByte(): number;
        getAsNumber(): number;
        copy(): Internal.Tag;
        wait(): void;
        wait(arg0: number): void;
        getAsShort(): number;
        equals(arg0: any): boolean;
        accept(arg0: Internal.StreamTagVisitor_): Internal.StreamTagVisitor$ValueResult;
        get class(): typeof any
        get asFloat(): number
        get asLong(): number
        get id(): number
        get asDouble(): number
        get type(): Internal.TagType<Internal.IntTag>
        get asInt(): number
        get asString(): string
        get asByte(): number
        get asNumber(): number
        get asShort(): number
        static readonly TYPE: Internal.TagType<Internal.IntTag>;
    }
    type IntTag_ = IntTag;
    class NetheriteGasMaskArmorItem extends Internal.ArmorItem implements Internal.GeoItem {
        constructor(arg0: Internal.ArmorMaterial_, arg1: Internal.ArmorItem$Type_, arg2: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        getToughness(): number;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get perspectiveAware(): boolean
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get boneResetTime(): number
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type NetheriteGasMaskArmorItem_ = NetheriteGasMaskArmorItem;
    abstract class AbstractLong2ObjectMap <V> extends Internal.AbstractLong2ObjectFunction<V> implements Internal.Serializable, Internal.Long2ObjectMap<V> {
        "replace(java.lang.Long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        "computeIfPresent(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "merge(long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        containsValue(arg0: any): boolean;
        remove(arg0: number): V;
        "apply(java.lang.Long)"(arg0: number): V;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        "remove(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): boolean;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        "computeIfAbsent(long,it.unimi.dsi.fastutil.longs.Long2ObjectFunction)"(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Long2ObjectFunction<T>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Long2LongFunction;
        "computeIfAbsent(java.lang.Long,java.util.function.Function)"(arg0: number, arg1: Internal.Function_<number, V>): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        "computeIfPresent(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Long2FloatFunction;
        composeLong(arg0: Internal.Long2LongFunction_): Internal.Long2ObjectFunction<V>;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Long2ShortFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        abstract "get(long)"(arg0: number): V;
        "replace(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        abstract defaultReturnValue(): V;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        "containsKey(java.lang.Object)"(arg0: any): boolean;
        getClass(): typeof any;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        "getOrDefault(long,java.lang.Object)"(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ObjectFunction<V>;
        static of<K, V>(): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        "compute(java.lang.Long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Long2ByteFunction;
        put(arg0: number, arg1: V): V;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ObjectFunction<V>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        "remove(long)"(arg0: number): V;
        toString(): string;
        notifyAll(): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        "merge(java.lang.Long,java.lang.Object,java.util.function.BiFunction)"(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        "computeIfAbsent(long,java.util.function.LongFunction)"(arg0: number, arg1: Internal.LongFunction_<V>): V;
        abstract size(): number;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        "remove(long,java.lang.Object)"(arg0: number, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ObjectFunction<V>;
        wait(arg0: number): void;
        replace(arg0: number, arg1: V): V;
        abstract long2ObjectEntrySet(): Internal.ObjectSet<Internal.Long2ObjectMap$Entry<V>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Long2ReferenceFunction<T>;
        replace(arg0: number, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        "putIfAbsent(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        "replace(long,java.lang.Object,java.lang.Object)"(arg0: number, arg1: V, arg2: V): boolean;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ObjectFunction<V>;
        notify(): void;
        /**
         * @deprecated
        */
        "put(java.lang.Object,java.lang.Object)"(arg0: any, arg1: any): any;
        "apply(long)"(arg0: number): V;
        keySet(): Internal.Set<any>;
        "putIfAbsent(long,java.lang.Object)"(arg0: number, arg1: V): V;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Long2IntFunction;
        "compute(long,java.util.function.BiFunction)"(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.LongFunction_<V>): V;
        /**
         * @deprecated
        */
        "put(java.lang.Long,java.lang.Object)"(arg0: number, arg1: V): V;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        apply(arg0: number): V;
        putAll(arg0: Internal.Map_<number, V>): void;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<number, V>>;
        containsKey(arg0: number): boolean;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        "replace(long,java.lang.Object)"(arg0: number, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ObjectFunction<V>;
        wait(): void;
        putIfAbsent(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        static identity<T>(): Internal.Function<T, T>;
        remove(arg0: number, arg1: any): boolean;
        abstract defaultReturnValue(arg0: V): void;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        "put(long,java.lang.Object)"(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "getOrDefault(java.lang.Object,java.lang.Object)"(arg0: any, arg1: V): V;
        "containsKey(long)"(arg0: number): boolean;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        isEmpty(): boolean;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        wait(arg0: number, arg1: number): void;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        computeIfAbsent(arg0: number, arg1: Internal.Long2ObjectFunction_<V>): V;
        apply(arg0: number): V;
        replaceAll(arg0: Internal.BiFunction_<number, V, V>): void;
        /**
         * @deprecated
        */
        "get(java.lang.Object)"(arg0: any): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Long2DoubleFunction;
        values(): Internal.ObjectCollection<V>;
        abstract get(arg0: number): V;
        hashCode(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        equals(arg0: any): boolean;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Long2CharFunction;
        putIfAbsent(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        "remove(java.lang.Object)"(arg0: any): V;
        get class(): typeof any
        get empty(): boolean
    }
    type AbstractLong2ObjectMap_<V> = AbstractLong2ObjectMap<V>;
    interface GenerationProperties {
        abstract getFeatures(arg0: Internal.GenerationStep$Decoration_): Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>;
        abstract getCarvers(arg0: Internal.GenerationStep$Carving_): Internal.Iterable<Internal.Holder<Internal.ConfiguredWorldCarver<any>>>;
        abstract getFeatures(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>;
        get features(): Internal.List<Internal.Iterable<Internal.Holder<Internal.PlacedFeature>>>
    }
    type GenerationProperties_ = GenerationProperties;
    interface ItemModel$Properties$IPropertyGetter extends Internal.ItemPropertyFunction {
        /**
         * @deprecated
        */
        call(arg0: Internal.ItemStack_, arg1: Internal.ClientLevel_, arg2: Internal.LivingEntity_, arg3: number): number;
        abstract get(arg0: Internal.ItemStack_, arg1: Internal.Optional_<Internal.ClientLevel>, arg2: Internal.Optional_<Internal.LivingEntity>): number;
        (arg0: Internal.ItemStack, arg1: Internal.Optional<Internal.ClientLevel>, arg2: Internal.Optional<Internal.LivingEntity>): number;
    }
    type ItemModel$Properties$IPropertyGetter_ = ((arg0: Internal.ItemStack, arg1: Internal.Optional<Internal.ClientLevel>, arg2: Internal.Optional<Internal.LivingEntity>)=> number) | ItemModel$Properties$IPropertyGetter;
    class WallTrophyBlock extends Internal.SimpleBlock {
        constructor(properties: Internal.BlockBehaviour$Properties_)
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        /**
         * @deprecated
        */
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        /**
         * @deprecated
        */
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        /**
         * @deprecated
        */
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(state: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(context: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(state: Internal.BlockState_, direction: Internal.Direction_, neighborState: Internal.BlockState_, level: Internal.LevelAccessor_, pos: BlockPos_, neighborPos: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        setIsRandomlyTicking(arg0: boolean): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        mobControl$breakTick(): number;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        invokeGetSoundGroup(arg0: Internal.BlockState_): SoundType;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getTableParticle(arg0: Internal.BlockState_): Internal.ParticleOptions;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        getArcanaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        sounds$prepareTagPair(value: ResourceLocation_): void;
        handler$ifn000$sounds$$manageCustomSounds(state: Internal.BlockState_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(state: Internal.BlockState_, level: Internal.BlockGetter_, pos: BlockPos_, context: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
    }
    type WallTrophyBlock_ = WallTrophyBlock;
    class HoodItem extends Internal.CustomGeoArmorItem {
        constructor(properties: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<Internal.Component>, isAdvanced: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        createRenderer(consumer: Internal.Consumer_<any>): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        getToughness(): number;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(controllerRegistrar: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getRenderProvider(): Internal.Supplier<any>;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        initializeClient(consumer: Internal.Consumer_<any>): void;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get perspectiveAware(): boolean
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get boneResetTime(): number
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get renderProvider(): Internal.Supplier<any>
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type HoodItem_ = HoodItem;
    class SinglePoolElement extends Internal.StructurePoolElement implements com.github.L_Ender.cataclysm.mixin.accessor.SinglePoolElementAccessor, Internal.SinglePoolElementAccessor {
        constructor(arg0: Internal.Either_<ResourceLocation, Internal.StructureTemplate>, arg1: Internal.Holder_<Internal.StructureProcessorList>, arg2: Internal.StructureTemplatePool$Projection_)
        getBoundingBox(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_): Internal.BoundingBox;
        getClass(): typeof any;
        static projectionCodec<E extends Internal.StructurePoolElement>(): Internal.RecordCodecBuilder<E, Internal.StructureTemplatePool$Projection>;
        notify(): void;
        getGroundLevelDelta(): number;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.StructureTemplateManager_, arg1: Internal.WorldGenLevel_, arg2: Internal.StructureManager_, arg3: Internal.ChunkGenerator_, arg4: BlockPos_, arg5: BlockPos_, arg6: Internal.Rotation_, arg7: Internal.BoundingBox_, arg8: Internal.RandomSource_, arg9: boolean): boolean;
        callGetTemplate(arg0: Internal.StructureTemplateManager_): Internal.StructureTemplate;
        static templateCodec<E extends Internal.SinglePoolElement>(): Internal.RecordCodecBuilder<E, Internal.Either<ResourceLocation, Internal.StructureTemplate>>;
        getSettings(arg0: Internal.Rotation_, arg1: Internal.BoundingBox_, arg2: boolean): Internal.StructurePlaceSettings;
        getDataMarkers(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: boolean): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        getProjection(): Internal.StructureTemplatePool$Projection;
        static empty(): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.EmptyPoolElement>;
        static list(arg0: Internal.List_<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.ListPoolElement>;
        static legacy(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        getType(): Internal.StructurePoolElementType<any>;
        toString(): string;
        getTemplate(arg0: Internal.StructureTemplateManager_): Internal.StructureTemplate;
        getShuffledJigsawBlocks(arg0: Internal.StructureTemplateManager_, arg1: BlockPos_, arg2: Internal.Rotation_, arg3: Internal.RandomSource_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static single(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        notifyAll(): void;
        static processorsCodec<E extends Internal.SinglePoolElement>(): Internal.RecordCodecBuilder<E, Internal.Holder<Internal.StructureProcessorList>>;
        handleDataMarker(arg0: Internal.LevelAccessor_, arg1: Internal.StructureTemplate$StructureBlockInfo_, arg2: BlockPos_, arg3: Internal.Rotation_, arg4: Internal.RandomSource_, arg5: Internal.BoundingBox_): void;
        getSize(arg0: Internal.StructureTemplateManager_, arg1: Internal.Rotation_): Vec3i;
        setProjection(arg0: Internal.StructureTemplatePool$Projection_): Internal.StructurePoolElement;
        hashCode(): number;
        static legacy(arg0: string): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.LegacySinglePoolElement>;
        wait(): void;
        wait(arg0: number): void;
        static single(arg0: string, arg1: Internal.Holder_<Internal.StructureProcessorList>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.SinglePoolElement>;
        equals(arg0: any): boolean;
        static feature(arg0: Internal.Holder_<Internal.PlacedFeature>): Internal.Function<Internal.StructureTemplatePool$Projection, Internal.FeaturePoolElement>;
        get class(): typeof any
        get groundLevelDelta(): number
        get projection(): Internal.StructureTemplatePool$Projection
        get type(): Internal.StructurePoolElementType<any>
        set projection(arg0: Internal.StructureTemplatePool$Projection_)
        readonly template: Internal.Either<ResourceLocation, Internal.StructureTemplate>;
        readonly processors: Internal.Holder<Internal.StructureProcessorList>;
        static readonly CODEC: Internal.Codec<Internal.SinglePoolElement>;
    }
    type SinglePoolElement_ = SinglePoolElement;
    class AnimationApplier extends dev.kosmx.playerAnim.core.impl.AnimationProcessor {
        constructor(animation: Internal.IAnimation_)
        getClass(): typeof any;
        getFirstPersonMode(): Internal.FirstPersonMode;
        updatePart(partName: string, part: Internal.ModelPart_): void;
        toString(): string;
        notifyAll(): void;
        getBend(modelName: string): Internal.Pair<number, number>;
        isActive(): boolean;
        isFirstPersonAnimationDisabled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        tick(): void;
        getFirstPersonConfiguration(): Internal.FirstPersonConfiguration;
        hashCode(): number;
        setTickDelta(tickDelta: number): void;
        wait(): void;
        wait(arg0: number): void;
        get3DTransform(modelName: string, type: Internal.TransformType_, value0: Internal.Vec3f_): Internal.Vec3f;
        equals(arg0: any): boolean;
        get class(): typeof any
        get firstPersonMode(): Internal.FirstPersonMode
        get active(): boolean
        get firstPersonAnimationDisabled(): boolean
        get firstPersonConfiguration(): Internal.FirstPersonConfiguration
        set tickDelta(tickDelta: number)
    }
    type AnimationApplier_ = AnimationApplier;
    class TaggedChoice$TaggedChoiceType <K> extends com.mojang.datafixers.types.Type<com.mojang.datafixers.util.Pair<K, any>> {
        constructor(arg0: string, arg1: com.mojang.datafixers.types.Type_<K>, arg2: Internal.Object2ObjectMap_<K, com.mojang.datafixers.types.Type<any>>)
        getKeyType(): com.mojang.datafixers.types.Type<K>;
        getSetType<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>): com.mojang.datafixers.types.Type<any>;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: B): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        static elementResult<K, FT, FR>(arg0: K, arg1: Internal.TaggedChoice$TaggedChoiceType_<K>, arg2: Internal.RewriteResult_<FT, FR>): Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, com.mojang.datafixers.util.Pair<K, any>>;
        codec(): Internal.Codec<com.mojang.datafixers.util.Pair<K, any>>;
        notify(): void;
        readTyped<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>, T>>;
        findTypeInChildren<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<com.mojang.datafixers.util.Pair<K, any>, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        ifSame<B>(arg0: Internal.Typed_<B>): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        static unbox<A>(arg0: Internal.App_<Internal.Type$Mu, A>): com.mojang.datafixers.types.Type<A>;
        findTypeCached<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<com.mojang.datafixers.util.Pair<K, any>, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        "ifSame(com.mojang.datafixers.types.Type,com.mojang.datafixers.RewriteResult)"<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: Internal.RewriteResult_<B, any>): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        rewrite(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        read<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.TypeRewriteRule_, arg2: Internal.PointFreeRule_, arg3: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Optional<any>, T>>;
        write<T>(arg0: Internal.DynamicOps_<T>, arg1: com.mojang.datafixers.util.Pair_<K, any>): Internal.DataResult<T>;
        pointTyped(arg0: Internal.DynamicOps_<any>): Internal.Optional<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>>;
        rewriteOrNop(arg0: Internal.TypeRewriteRule_): Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>;
        ifSame<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: Internal.RewriteResult_<B, any>): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        wait(): void;
        point(arg0: Internal.DynamicOps_<any>, arg1: K, arg2: any): Internal.Optional<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>>;
        readTyped<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<com.mojang.datafixers.util.Pair<Internal.Typed<com.mojang.datafixers.util.Pair<K, any>>, T>>;
        buildTemplate(): Internal.TypeTemplate;
        getClass(): typeof any;
        findChoiceType(arg0: string, arg1: number): Internal.Optional<Internal.TaggedChoice$TaggedChoiceType<any>>;
        read<T>(arg0: Internal.Dynamic_<T>): Internal.DataResult<com.mojang.datafixers.util.Pair<com.mojang.datafixers.util.Pair<K, any>, Internal.Dynamic<T>>>;
        all(arg0: Internal.TypeRewriteRule_, arg1: boolean, arg2: boolean): Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>;
        wait(arg0: number, arg1: number): void;
        readAndWrite<T>(arg0: Internal.DynamicOps_<T>, arg1: com.mojang.datafixers.types.Type_<any>, arg2: Internal.TypeRewriteRule_, arg3: Internal.PointFreeRule_, arg4: T): Internal.DataResult<T>;
        findField(arg0: string): Internal.OpticFinder<any>;
        getName(): string;
        equals(arg0: any, arg1: boolean, arg2: boolean): boolean;
        "ifSame(com.mojang.datafixers.types.Type,java.lang.Object)"<B>(arg0: com.mojang.datafixers.types.Type_<B>, arg1: B): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        writeDynamic<T>(arg0: Internal.DynamicOps_<T>, arg1: com.mojang.datafixers.util.Pair_<K, any>): Internal.DataResult<Internal.Dynamic<T>>;
        static opticView<S, T, A, B>(arg0: com.mojang.datafixers.types.Type_<S>, arg1: Internal.RewriteResult_<A, B>, arg2: Internal.TypedOptic_<S, T, A, B>): Internal.RewriteResult<S, T>;
        finder(): Internal.OpticFinder<com.mojang.datafixers.util.Pair<K, any>>;
        toString(): string;
        everywhere(arg0: Internal.TypeRewriteRule_, arg1: Internal.PointFreeRule_, arg2: boolean, arg3: boolean): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        notifyAll(): void;
        findCheckedType(arg0: number): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        point(arg0: Internal.DynamicOps_<any>): Internal.Optional<com.mojang.datafixers.util.Pair<K, any>>;
        hasType(arg0: K): boolean;
        hashCode(): number;
        findFieldTypeOpt(arg0: string): Internal.Optional<com.mojang.datafixers.types.Type<any>>;
        findType<FT, FR>(arg0: com.mojang.datafixers.types.Type_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Type$TypeMatcher_<FT, FR>, arg3: boolean): Internal.Either<Internal.TypedOptic<com.mojang.datafixers.util.Pair<K, any>, any, FT, FR>, Internal.Type$FieldNotFoundException>;
        findFieldType(arg0: string): com.mojang.datafixers.types.Type<any>;
        wait(arg0: number): void;
        one(arg0: Internal.TypeRewriteRule_): Internal.Optional<Internal.RewriteResult<com.mojang.datafixers.util.Pair<K, any>, any>>;
        types(): Internal.Map<K, com.mojang.datafixers.types.Type<any>>;
        equals(arg0: any): boolean;
        updateMu(arg0: Internal.RecursiveTypeFamily_): com.mojang.datafixers.types.Type<any>;
        template(): Internal.TypeTemplate;
        get keyType(): com.mojang.datafixers.types.Type<K>
        get class(): typeof any
        get name(): string
    }
    type TaggedChoice$TaggedChoiceType_<K> = TaggedChoice$TaggedChoiceType<K>;
    class WanderingMagicianArmorItem extends Internal.ExtendedArmorItem {
        constructor(arg0: Internal.ArmorItem$Type_, arg1: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        getTick(arg0: any): number;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        isPerspectiveAware(): boolean;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        "triggerAnim(net.minecraft.world.entity.Entity,long,java.lang.String,java.lang.String)"<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getDefense(): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        supplyRenderer(): Internal.GeoArmorRenderer<any>;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        static dispenseArmor(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): boolean;
        getMaterial(): Internal.ArmorMaterial;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getBoneResetTime(): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getToughness(): number;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static "getId(net.minecraft.world.item.Item)"(arg0: Internal.Item_): number;
        registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        equals(arg0: any): boolean;
        "triggerAnim(long,java.lang.String,java.lang.String,net.minecraftforge.network.PacketDistributor$PacketTarget)"<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        setRarity(arg0: Internal.Rarity_): void;
        getType(): Internal.ArmorItem$Type;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getEquipmentSlot(): Internal.EquipmentSlot;
        static getId(arg0: Internal.ItemStack_): number;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        static "getId(net.minecraft.world.item.ItemStack)"(arg0: Internal.ItemStack_): number;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getEquipSound(): Internal.SoundEvent;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get perspectiveAware(): boolean
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get defense(): number
        get edible(): boolean
        get material(): Internal.ArmorMaterial
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get boneResetTime(): number
        set nameKey(arg0: string)
        get toughness(): number
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get type(): Internal.ArmorItem$Type
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        set attackDamage(attackDamage: number)
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        get equipSound(): Internal.SoundEvent
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type WanderingMagicianArmorItem_ = WanderingMagicianArmorItem;
    class EffectHemorrhage extends Internal.MobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getEffectRendererInternal(): any;
        getColor(): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): Internal.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get effectRendererInternal(): any
        get color(): number
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get orCreateDescriptionId(): string
    }
    type EffectHemorrhage_ = EffectHemorrhage;
    class CarvingMaskPlacement extends Internal.PlacementModifier {
        getClass(): typeof any;
        hashCode(): number;
        toString(): string;
        getPositions(arg0: Internal.PlacementContext_, arg1: Internal.RandomSource_, arg2: BlockPos_): Internal.Stream<BlockPos>;
        static forStep(arg0: Internal.GenerationStep$Carving_): Internal.CarvingMaskPlacement;
        wait(): void;
        type(): Internal.PlacementModifierType<any>;
        notifyAll(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        get class(): typeof any
        static readonly CODEC: Internal.Codec<Internal.CarvingMaskPlacement>;
    }
    type CarvingMaskPlacement_ = CarvingMaskPlacement;
    class FireBomb6Block extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor()
        /**
         * @deprecated
        */
        getSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        getVisualShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number, arg5: number): void;
        static popResource(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.ItemStack_): void;
        setRandomTickCallback(callback: Internal.Consumer_<any>): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        stepOn(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Entity_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        getSettings(): Internal.BlockBehaviour$Properties;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        getExplosionResistance(): number;
        asItem(): Internal.Item;
        /**
         * @deprecated
        */
        triggerEvent(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: number, arg4: number): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_, arg6: boolean): void;
        getBlacklistedEnchantments(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Set<Internal.Enchantment>;
        getTypeData(): Internal.CompoundTag;
        setFriction(arg0: number): void;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        /**
         * @deprecated
        */
        getRenderShape(arg0: Internal.BlockState_): Internal.RenderShape;
        getSpeedFactor(): number;
        getLightBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        playerDestroy(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.BlockEntity_, arg5: Internal.ItemStack_): void;
        isPossibleToRespawnInThis(arg0: Internal.BlockState_): boolean;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        playerWillDestroy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Player_): void;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Internal.Player_): Internal.ItemStack;
        getClass(): typeof any;
        getMaxVerticalOffset(): number;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        getRenderPropertiesInternal(): any;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        getDrops(arg0: Internal.BlockState_, arg1: Internal.LootParams$Builder_): Internal.List<Internal.ItemStack>;
        getStateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>;
        /**
         * @deprecated
        */
        entityInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): void;
        setBlockBuilder(b: Internal.BlockBuilder_): void;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientBlockExtensions>): void;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        getBlockStates(): Internal.List<Internal.BlockState>;
        setRequiresTool(v: boolean): void;
        asBlock(): Internal.Block;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        spawnTableParticle(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: BlockPos_): void;
        puzzleslib$setItem(arg0: Internal.Item_): void;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Block>;
        static popResourceFromFace(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.ItemStack_): void;
        handlePrecipitation(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Biome$Precipitation_): void;
        wait(arg0: number): void;
        getFluidState(arg0: Internal.BlockState_): Internal.FluidState;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        /**
         * @deprecated
        */
        tick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        neighborChanged(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_, arg4: BlockPos_, arg5: boolean): void;
        /**
         * @deprecated
        */
        getBlockSupportShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        /**
         * @deprecated
        */
        isCollisionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        getMenuProvider(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.MenuProvider;
        static byItem(arg0: Internal.Item_): Internal.Block;
        static updateFromNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_): Internal.BlockState;
        /**
         * @deprecated
        */
        updateIndirectNeighbourShapes(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: number, arg4: number): void;
        destroy(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        allowsTreasure(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        use(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: Internal.InteractionHand_, arg5: Internal.BlockHitResult_): Internal.InteractionResult;
        setLightEmission(v: number): void;
        setJumpFactor(arg0: number): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        getShadeBrightness(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getCollisionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        defaultBlockState(): Internal.BlockState;
        getStateForPlacement(arg0: Internal.BlockPlaceContext_): Internal.BlockState;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        spawnDestroyParticles(arg0: Internal.Level_, arg1: Internal.Player_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        wait(): void;
        getMaxHorizontalOffset(): number;
        /**
         * @deprecated
        */
        getDestroyProgress(arg0: Internal.BlockState_, arg1: Internal.Player_, arg2: Internal.BlockGetter_, arg3: BlockPos_): number;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        updateShape(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.BlockState_, arg3: Internal.LevelAccessor_, arg4: BlockPos_, arg5: BlockPos_): Internal.BlockState;
        isRandomlyTicking(arg0: Internal.BlockState_): boolean;
        static isShapeFullBlock(arg0: Internal.VoxelShape_): boolean;
        withPropertiesOf(arg0: Internal.BlockState_): Internal.BlockState;
        setIsRandomlyTicking(arg0: boolean): void;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        rotate(arg0: Internal.BlockState_, arg1: Internal.Rotation_): Internal.BlockState;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        defaultMapColor(): Internal.MapColor;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        setNameKey(arg0: string): void;
        static box(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.VoxelShape;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        updateEntityAfterFallOn(arg0: Internal.BlockGetter_, arg1: Internal.Entity_): void;
        registerDefaultState(arg0: Internal.BlockState_): void;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        arch$registryName(): ResourceLocation;
        getBlockBuilder(): Internal.BlockBuilder;
        getIdLocation(): ResourceLocation;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        /**
         * @deprecated
        */
        isSignalSource(arg0: Internal.BlockState_): boolean;
        getMaxEnchantingPower(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        onProjectileHit(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockHitResult_, arg3: Internal.Projectile_): void;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_, arg4: Internal.Entity_, arg5: Internal.ItemStack_): Internal.List<Internal.ItemStack>;
        /**
         * @deprecated
        */
        isOcclusionShapeFullBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static getId(arg0: Internal.BlockState_): number;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.level.material.Fluid)"(arg0: Internal.BlockState_, arg1: Internal.Fluid_): boolean;
        canSustainPlant(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.IPlantable_): boolean;
        /**
         * @deprecated
        */
        isPathfindable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.PathComputationType_): boolean;
        setSoundType(arg0: SoundType_): void;
        /**
         * @deprecated
        */
        onRemove(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        mobControl$breakTick(): number;
        equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        getOcclusionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        invokeGetSoundGroup(arg0: Internal.BlockState_): SoundType;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        getSoundType(arg0: Internal.BlockState_): SoundType;
        isAir(arg0: Internal.BlockState_): boolean;
        /**
         * @deprecated
        */
        randomTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.BlockEntity_): void;
        static canSupportRigidBlock(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
        getTableParticle(arg0: Internal.BlockState_): Internal.ParticleOptions;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        getDescriptionId(): string;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        fallOn(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Entity_, arg4: number): void;
        tryDropExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: Internal.ItemStack_, arg3: Internal.IntProvider_): void;
        getArcanaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getJumpFactor(): number;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        static canSupportCenter(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        skipRendering(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        getDirectSignal(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        /**
         * @deprecated
        */
        "canBeReplaced(net.minecraft.world.level.block.state.BlockState,net.minecraft.world.item.context.BlockPlaceContext)"(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        /**
         * @deprecated
        */
        useShapeForLightOcclusion(arg0: Internal.BlockState_): boolean;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getQuantaBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setSpeedFactor(arg0: number): void;
        sounds$prepareTagPair(value: ResourceLocation_): void;
        handler$ifn000$sounds$$manageCustomSounds(state: Internal.BlockState_, cir: Internal.CallbackInfoReturnable_<any>): void;
        setExplosionResistance(arg0: number): void;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        toString(): string;
        notifyAll(): void;
        getShapeForEachState(arg0: Internal.Function_<Internal.BlockState, Internal.VoxelShape>): Internal.ImmutableMap<Internal.BlockState, Internal.VoxelShape>;
        getId(): string;
        getLootTable(): ResourceLocation;
        getQuantaRectification(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        /**
         * @deprecated
        */
        getInteractionShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): Internal.VoxelShape;
        propagatesSkylightDown(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setPlacedBy(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.LivingEntity_, arg4: Internal.ItemStack_): void;
        /**
         * @deprecated
        */
        onPlace(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: boolean): void;
        getFriction(): number;
        /**
         * @deprecated
        */
        hasAnalogOutputSignal(arg0: Internal.BlockState_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        /**
         * @deprecated
        */
        getAnalogOutputSignal(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): number;
        createBlockStateDefinition(arg0: Internal.StateDefinition$Builder_<Internal.Block, Internal.BlockState>): void;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        notify(): void;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static isFaceFull(arg0: Internal.VoxelShape_, arg1: Internal.Direction_): boolean;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        /**
         * @deprecated
        */
        canSurvive(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        static dropResources(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        setDestroySpeed(v: number): void;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        arch$holder(): Internal.Holder<Internal.Block>;
        /**
         * @deprecated
        */
        getCloneItemStack(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        hasDynamicShape(): boolean;
        /**
         * @deprecated
        */
        getSeed(arg0: Internal.BlockState_, arg1: BlockPos_): number;
        defaultDestroyTime(): number;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        dropFromExplosion(arg0: Internal.Explosion_): boolean;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isExceptionForConnection(arg0: Internal.BlockState_): boolean;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        wait(arg0: number, arg1: number): void;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.BlockGetter_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        mirror(arg0: Internal.BlockState_, arg1: Internal.Mirror_): Internal.BlockState;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        wasExploded(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.Explosion_): void;
        getName(): Internal.MutableComponent;
        getBonusClues(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        animateTick(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.RandomSource_): void;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getMod(): string;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        /**
         * @deprecated
        */
        canBeReplaced(arg0: Internal.BlockState_, arg1: Internal.BlockPlaceContext_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        static updateOrDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_, arg4: number): void;
        /**
         * @deprecated
        */
        attack(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): void;
        getShape(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.CollisionContext_): Internal.VoxelShape;
        static stateById(arg0: number): Internal.BlockState;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        popExperience(arg0: Internal.ServerLevel_, arg1: BlockPos_, arg2: number): void;
        static pushEntitiesUp(arg0: Internal.BlockState_, arg1: Internal.BlockState_, arg2: Internal.LevelAccessor_, arg3: BlockPos_): Internal.BlockState;
        static getDrops(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockEntity_): Internal.List<Internal.ItemStack>;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        setHasCollision(arg0: boolean): void;
        static shouldRenderFace(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: BlockPos_): boolean;
        /**
         * @deprecated
        */
        spawnAfterBreak(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: boolean): void;
        set randomTickCallback(callback: Internal.Consumer_<any>)
        get settings(): Internal.BlockBehaviour$Properties
        /**
         * @deprecated
        */
        get explosionResistance(): number
        get typeData(): Internal.CompoundTag
        set friction(arg0: number)
        get speedFactor(): number
        get class(): typeof any
        get maxVerticalOffset(): number
        get renderPropertiesInternal(): any
        get stateDefinition(): Internal.StateDefinition<Internal.Block, Internal.BlockState>
        set blockBuilder(b: Internal.BlockBuilder_)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        set lightEmission(v: number)
        set jumpFactor(arg0: number)
        get maxHorizontalOffset(): number
        set isRandomlyTicking(arg0: boolean)
        set nameKey(arg0: string)
        get blockBuilder(): Internal.BlockBuilder
        get idLocation(): ResourceLocation
        set soundType(arg0: SoundType_)
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        get descriptionId(): string
        get jumpFactor(): number
        set speedFactor(arg0: number)
        set explosionResistance(arg0: number)
        get id(): string
        get lootTable(): ResourceLocation
        get friction(): number
        set destroySpeed(v: number)
        get name(): Internal.MutableComponent
        get mod(): string
        set hasCollision(arg0: boolean)
        static readonly WATERLOGGED: (Internal.BooleanProperty) & (Internal.BooleanProperty);
        static readonly FACING: (Internal.DirectionProperty) & (Internal.DirectionProperty);
    }
    type FireBomb6Block_ = FireBomb6Block;
    class AbstractForgeMod$ConfigValueBuilder {
        constructor()
        getClass(): typeof any;
        worldRestart(): this;
        defineFactor(arg0: string, arg1: number): Internal.ForgeConfigSpec$ConfigValue<number>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        "define(java.lang.String,com.endertech.minecraft.forge.configs.ColorARGB)"(arg0: string, arg1: Internal.ColorARGB_): Internal.ForgeConfigSpec$ConfigValue<number>;
        define(arg0: string, arg1: Internal.ColorARGB_): Internal.ForgeConfigSpec$ConfigValue<number>;
        defineEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T, arg2: Internal.Predicate_<T>): Internal.ForgeConfigSpec$ConfigValue<T>;
        defineList(arg0: string, arg1: string[], arg2: Internal.Predicate_<string>): Internal.ForgeConfigSpec$ConfigValue<Internal.List<string>>;
        shared(arg0: string): void;
        define(arg0: string, arg1: boolean): Internal.ForgeConfigSpec$ConfigValue<boolean>;
        "defineInRange(java.lang.String,float,com.endertech.common.FloatBounds)"(arg0: string, arg1: number, arg2: Internal.FloatBounds_): Internal.ForgeConfigSpec$ConfigValue<number>;
        toString(): string;
        push(arg0: string): this;
        notifyAll(): void;
        defineInRange(arg0: string, arg1: number, arg2: Internal.FloatBounds_): Internal.ForgeConfigSpec$ConfigValue<number>;
        defineEnum<T extends Internal.Enum<T>>(arg0: string, arg1: T): Internal.ForgeConfigSpec$ConfigValue<T>;
        hashCode(): number;
        comment(arg0: string): this;
        "defineInRange(java.lang.String,int,com.endertech.common.IntBounds)"(arg0: string, arg1: number, arg2: Internal.IntBounds_): Internal.ForgeConfigSpec$ConfigValue<number>;
        wait(): void;
        wait(arg0: number): void;
        defineInRange(arg0: string, arg1: number, arg2: Internal.IntBounds_): Internal.ForgeConfigSpec$ConfigValue<number>;
        equals(arg0: any): boolean;
        "define(java.lang.String,boolean)"(arg0: string, arg1: boolean): Internal.ForgeConfigSpec$ConfigValue<boolean>;
        pop(): this;
        get class(): typeof any
        readonly builder: Internal.ForgeConfigSpec$Builder;
    }
    type AbstractForgeMod$ConfigValueBuilder_ = AbstractForgeMod$ConfigValueBuilder;
    interface EncasedBlock {
        abstract getCasing(): Internal.Block;
        handleEncasing(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.ItemStack_, arg4: Internal.Player_, arg5: Internal.InteractionHand_, arg6: Internal.BlockHitResult_): void;
        get casing(): Internal.Block
        (): Internal.Block_;
    }
    type EncasedBlock_ = (()=> Internal.Block_) | EncasedBlock;
    class Direction8 extends Internal.Enum<Internal.Direction8> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        compareTo(arg0: Internal.Direction8_): number;
        "compareTo(net.minecraft.core.Direction8)"(arg0: Internal.Direction8_): number;
        notifyAll(): void;
        static valueOf(arg0: string): Internal.Direction8;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.Direction8>>;
        name(): string;
        getDirections(): Internal.Set<Internal.Direction>;
        hashCode(): number;
        getStepX(): number;
        getStepZ(): number;
        getDeclaringClass(): typeof Internal.Direction8;
        ordinal(): number;
        wait(): void;
        static values(): Internal.Direction8[];
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get directions(): Internal.Set<Internal.Direction>
        get stepX(): number
        get stepZ(): number
        get declaringClass(): typeof Internal.Direction8
        static readonly NORTH_EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly NORTH_WEST: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH_EAST: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH_WEST: (Internal.Direction8) & (Internal.Direction8);
        static readonly NORTH: (Internal.Direction8) & (Internal.Direction8);
        static readonly SOUTH: (Internal.Direction8) & (Internal.Direction8);
        static readonly WEST: (Internal.Direction8) & (Internal.Direction8);
    }
    type Direction8_ = "north_west" | "west" | "north_east" | "east" | "south_west" | "south" | "north" | Direction8 | "south_east";
    class BookCategory extends Internal.AbstractReadStateHolder implements Internal.Comparable<Internal.BookCategory> {
        constructor(arg0: Internal.JsonObject_, arg1: ResourceLocation_, arg2: Internal.Book_)
        getClass(): typeof any;
        addEntry(arg0: Internal.BookEntry_): void;
        build(arg0: Internal.BookContentsBuilder_): void;
        getDescription(): string;
        isSecret(): boolean;
        markReadStateDirty(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        canAdd(): boolean;
        addChildCategory(arg0: Internal.BookCategory_): void;
        getId(): ResourceLocation;
        isRootCategory(): boolean;
        getName(): Internal.MutableComponent;
        "compareTo(vazkii.patchouli.client.book.BookCategory)"(arg0: Internal.BookCategory_): number;
        updateLockStatus(arg0: boolean): void;
        toString(): string;
        compareTo(arg0: Internal.BookCategory_): number;
        notifyAll(): void;
        shouldHide(): boolean;
        getEntries(): Internal.List<Internal.BookEntry>;
        getBook(): Internal.Book;
        getIcon(): Internal.BookIcon;
        isLocked(): boolean;
        getParentCategory(): this;
        hashCode(): number;
        wait(): void;
        getReadState(): Internal.EntryDisplayState;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        static mostImportantState(arg0: Internal.Stream_<Internal.EntryDisplayState>): Internal.EntryDisplayState;
        get class(): typeof any
        get description(): string
        get secret(): boolean
        get id(): ResourceLocation
        get rootCategory(): boolean
        get name(): Internal.MutableComponent
        get entries(): Internal.List<Internal.BookEntry>
        get book(): Internal.Book
        get icon(): Internal.BookIcon
        get locked(): boolean
        get parentCategory(): Internal.BookCategory
        get readState(): Internal.EntryDisplayState
    }
    type BookCategory_ = BookCategory;
    class LocateStructureRecipe implements Internal.Recipe<Internal.Container> {
        constructor(id: ResourceLocation_, augments: Internal.List_<Internal.ResourceOrTag<Internal.Item>>, structure: Internal.ResourceOrTag_<Internal.Structure>, radius: number, skipKnownStructures: boolean)
        getClass(): typeof any;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getSerializer(): Internal.RecipeSerializer<any>;
        assemble(container: Internal.Container_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        getId(): ResourceLocation;
        getRadius(): number;
        matches(container: Internal.Container_, level: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getName(): Internal.Component;
        getStructureHolder(level: Internal.ServerLevel_): Internal.HolderSet<Internal.Structure>;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        toString(): string;
        notifyAll(): void;
        canCraftInDimensions(i: number, i1: number): boolean;
        asRecipe(): Internal.JsonElement;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        hashCode(): number;
        getStructure(): Internal.ResourceOrTag<Internal.Structure>;
        getOrCreateId(): ResourceLocation;
        matches(input: Internal.List_<Internal.ItemStack>): boolean;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        wait(): void;
        isIncomplete(): boolean;
        wait(arg0: number): void;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        equals(arg0: any): boolean;
        getSkipExisting(): boolean;
        get class(): typeof any
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get radius(): number
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get name(): Internal.Component
        get type(): ResourceLocation
        set group(group: string)
        get structure(): Internal.ResourceOrTag<Internal.Structure>
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get skipExisting(): boolean
    }
    type LocateStructureRecipe_ = LocateStructureRecipe;
    /**
     * @deprecated
     * This class is marked to be removed in future!
    */
    interface IScrollGridWidgetFactory <R> extends Internal.ISlottedWidgetFactory<R> {
        abstract setPosition(arg0: number, arg1: number): void;
        abstract getArea(): Internal.ScreenRectangle;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract createWidgetForSlots(arg0: Internal.IRecipeExtrasBuilder_, arg1: R, arg2: Internal.List_<Internal.IRecipeSlotDrawable>): void;
        get area(): Internal.ScreenRectangle
    }
    type IScrollGridWidgetFactory_<R> = IScrollGridWidgetFactory<R>;
    abstract class AbstractByteBufAllocator implements Internal.ByteBufAllocator {
        compositeDirectBuffer(arg0: number): Internal.CompositeByteBuf;
        getClass(): typeof any;
        compositeHeapBuffer(arg0: number): Internal.CompositeByteBuf;
        compositeBuffer(): Internal.CompositeByteBuf;
        ioBuffer(): Internal.ByteBuf;
        heapBuffer(arg0: number): Internal.ByteBuf;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        calculateNewCapacity(arg0: number, arg1: number): number;
        directBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        buffer(): Internal.ByteBuf;
        toString(): string;
        compositeDirectBuffer(): Internal.CompositeByteBuf;
        heapBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        notifyAll(): void;
        heapBuffer(): Internal.ByteBuf;
        ioBuffer(arg0: number): Internal.ByteBuf;
        compositeBuffer(arg0: number): Internal.CompositeByteBuf;
        directBuffer(): Internal.ByteBuf;
        abstract isDirectBufferPooled(): boolean;
        hashCode(): number;
        directBuffer(arg0: number): Internal.ByteBuf;
        buffer(arg0: number, arg1: number): Internal.ByteBuf;
        ioBuffer(arg0: number, arg1: number): Internal.ByteBuf;
        wait(): void;
        wait(arg0: number): void;
        compositeHeapBuffer(): Internal.CompositeByteBuf;
        equals(arg0: any): boolean;
        buffer(arg0: number): Internal.ByteBuf;
        get class(): typeof any
        get directBufferPooled(): boolean
    }
    type AbstractByteBufAllocator_ = AbstractByteBufAllocator;
    abstract class AbstractSwampFeature <C extends Internal.FeatureConfiguration> extends Internal.AbstractNbtFeature<C> {
        constructor(arg0: Internal.Codec_<C>)
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<C, Internal.Feature<C>>>;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: C, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        abstract place(arg0: Internal.FeaturePlaceContext_<C>): boolean;
        get class(): typeof any
    }
    type AbstractSwampFeature_<C extends Internal.FeatureConfiguration> = AbstractSwampFeature<C>;
    interface DoubleToIntFunction {
        abstract applyAsInt(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleToIntFunction_ = ((arg0: number)=> number) | DoubleToIntFunction;
    interface StatePredicateAccessor {
        abstract getConditions(): Internal.List<Internal.StatePropertiesPredicate$PropertyMatcher>;
        get conditions(): Internal.List<Internal.StatePropertiesPredicate$PropertyMatcher>
        (): Internal.List_<Internal.StatePropertiesPredicate$PropertyMatcher>;
    }
    type StatePredicateAccessor_ = StatePredicateAccessor | (()=> Internal.List_<Internal.StatePropertiesPredicate$PropertyMatcher>);
    class MoveControl$Operation extends Internal.Enum<Internal.MoveControl$Operation> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        static values(): Internal.MoveControl$Operation[];
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.MoveControl$Operation>>;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        compareTo(arg0: Internal.MoveControl$Operation_): number;
        "compareTo(net.minecraft.world.entity.ai.control.MoveControl$Operation)"(arg0: Internal.MoveControl$Operation_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        getDeclaringClass(): typeof Internal.MoveControl$Operation;
        static valueOf(arg0: string): Internal.MoveControl$Operation;
        get class(): typeof any
        get declaringClass(): typeof Internal.MoveControl$Operation
        static readonly STRAFE: (Internal.MoveControl$Operation) & (Internal.MoveControl$Operation);
        static readonly MOVE_TO: (Internal.MoveControl$Operation) & (Internal.MoveControl$Operation);
        static readonly WAIT: (Internal.MoveControl$Operation) & (Internal.MoveControl$Operation);
        static readonly JUMPING: (Internal.MoveControl$Operation) & (Internal.MoveControl$Operation);
    }
    type MoveControl$Operation_ = MoveControl$Operation | "wait" | "jumping" | "move_to" | "strafe";
    class LongReachEffect extends Internal.MobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getEffectRendererInternal(): any;
        getColor(): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): Internal.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get effectRendererInternal(): any
        get color(): number
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get orCreateDescriptionId(): string
    }
    type LongReachEffect_ = LongReachEffect;
    abstract class ViewportEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Camera_, arg2: number)
        getResult(): Internal.Event$Result;
        setCanceled(arg0: boolean): void;
        getClass(): typeof any;
        toString(): string;
        setPhase(arg0: Internal.EventPriority_): void;
        getRenderer(): Internal.GameRenderer;
        notifyAll(): void;
        getCamera(): Internal.Camera;
        isCanceled(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hasResult(): boolean;
        setResult(arg0: Internal.Event$Result_): void;
        hashCode(): number;
        isCancelable(): boolean;
        wait(): void;
        getListenerList(): Internal.ListenerList;
        wait(arg0: number): void;
        getPhase(): Internal.EventPriority;
        getPartialTick(): number;
        equals(arg0: any): boolean;
        get result(): Internal.Event$Result
        set canceled(arg0: boolean)
        get class(): typeof any
        set phase(arg0: Internal.EventPriority_)
        get renderer(): Internal.GameRenderer
        get camera(): Internal.Camera
        get canceled(): boolean
        set result(arg0: Internal.Event$Result_)
        get cancelable(): boolean
        get listenerList(): Internal.ListenerList
        get phase(): Internal.EventPriority
        get partialTick(): number
    }
    type ViewportEvent_ = ViewportEvent;
    interface Paint extends Internal.Transparency {
        abstract createContext(arg0: Internal.ColorModel_, arg1: Internal.Rectangle_, arg2: Internal.Rectangle2D_, arg3: Internal.AffineTransform_, arg4: Internal.RenderingHints_): Internal.PaintContext;
        abstract getTransparency(): number;
        get transparency(): number
    }
    type Paint_ = Paint;
    interface FileNotFoundAction {
        copyData(arg0: Internal.InputStream_): this;
        "copyData(java.nio.file.Path)"(arg0: Internal.Path_): this;
        "copyData(java.io.File)"(arg0: Internal.File_): this;
        "copyData(java.net.URL)"(arg0: Internal.URL_): this;
        copyData(arg0: Internal.URL_): this;
        abstract run(arg0: Internal.Path_, arg1: Internal.ConfigFormat_<any>): boolean;
        copyData(arg0: Internal.File_): this;
        copyResource(arg0: string): this;
        "copyData(java.io.InputStream)"(arg0: Internal.InputStream_): this;
        copyData(arg0: Internal.Path_): this;
        (arg0: Internal.Path, arg1: Internal.ConfigFormat<any>): boolean;
        readonly THROW_ERROR: Internal.FileNotFoundAction;
        readonly READ_NOTHING: Internal.FileNotFoundAction;
        readonly CREATE_EMPTY: Internal.FileNotFoundAction;
    }
    type FileNotFoundAction_ = FileNotFoundAction | ((arg0: Internal.Path, arg1: Internal.ConfigFormat<any>)=> boolean);
    class ScatteredOreFeature extends Internal.Feature<Internal.OreConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.OreConfiguration>)
        getClass(): typeof any;
        place(arg0: Internal.FeaturePlaceContext_<Internal.OreConfiguration>): boolean;
        static isStone(arg0: Internal.BlockState_): boolean;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.OreConfiguration, Internal.Feature<Internal.OreConfiguration>>>;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        place(arg0: Internal.OreConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type ScatteredOreFeature_ = ScatteredOreFeature;
    class SpiderAspectEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getEffectRendererInternal(): any;
        getColor(): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): Internal.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get effectRendererInternal(): any
        get color(): number
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get orCreateDescriptionId(): string
        static readonly DAMAGE_PER_LEVEL: (0.05) & (number);
    }
    type SpiderAspectEffect_ = SpiderAspectEffect;
    class EmberCartridgeItem extends Internal.EmberStorageItem {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getItem(): Internal.Item;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        static withFill(arg0: Internal.Item_, arg1: number): Internal.ItemStack;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        getCapacity(): number;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(arg0: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get capacity(): number
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        static readonly CAPACITY: (6000.0) & (number);
    }
    type EmberCartridgeItem_ = EmberCartridgeItem;
    class GlobalTrainDisplayData$TrainDeparturePrediction implements Internal.Comparable<Internal.GlobalTrainDisplayData$TrainDeparturePrediction> {
        constructor(arg0: Internal.Train_, arg1: number, arg2: Internal.MutableComponent_, arg3: string)
        getClass(): typeof any;
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        compareTo(arg0: Internal.GlobalTrainDisplayData$TrainDeparturePrediction_): number;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(com.simibubi.create.content.trains.display.GlobalTrainDisplayData$TrainDeparturePrediction)"(arg0: Internal.GlobalTrainDisplayData$TrainDeparturePrediction_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        ticks: number;
        scheduleTitle: Internal.MutableComponent;
        destination: string;
        train: Internal.Train;
    }
    type GlobalTrainDisplayData$TrainDeparturePrediction_ = GlobalTrainDisplayData$TrainDeparturePrediction;
    class AnimationController$State extends Internal.Enum<Internal.AnimationController$State> {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        static values(): Internal.AnimationController$State[];
        toString(): string;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.AnimationController$State>>;
        getDeclaringClass(): typeof Internal.AnimationController$State;
        static valueOf(arg0: string): Internal.AnimationController$State;
        compareTo(arg0: Internal.AnimationController$State_): number;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(software.bernie.geckolib.core.animation.AnimationController$State)"(arg0: Internal.AnimationController$State_): number;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        get class(): typeof any
        get declaringClass(): typeof Internal.AnimationController$State
        static readonly TRANSITIONING: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly PAUSED: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly RUNNING: (Internal.AnimationController$State) & (Internal.AnimationController$State);
        static readonly STOPPED: (Internal.AnimationController$State) & (Internal.AnimationController$State);
    }
    type AnimationController$State_ = "transitioning" | "paused" | AnimationController$State | "stopped" | "running";
    interface VerticalAnchor {
        aboveBottom(arg0: number): this;
        absolute(arg0: number): this;
        belowTop(arg0: number): this;
        bottom(): this;
        top(): this;
        abstract resolveY(arg0: Internal.WorldGenerationContext_): number;
        (arg0: Internal.WorldGenerationContext): number;
        readonly BOTTOM: (Internal.VerticalAnchor$AboveBottom) & (Internal.VerticalAnchor);
        readonly CODEC: Internal.Codec<Internal.VerticalAnchor>;
        readonly TOP: (Internal.VerticalAnchor$BelowTop) & (Internal.VerticalAnchor);
    }
    type VerticalAnchor_ = ((arg0: Internal.WorldGenerationContext)=> number) | VerticalAnchor;
    interface IForgeRegistry$ValidateCallback <V> {
        abstract onValidate(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_, arg2: number, arg3: ResourceLocation_, arg4: V): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager, arg2: number, arg3: ResourceLocation, arg4: V): void;
    }
    type IForgeRegistry$ValidateCallback_<V> = ((arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager, arg2: number, arg3: ResourceLocation, arg4: V)=> void) | IForgeRegistry$ValidateCallback<V>;
    class IndigoSproutsFeature extends Internal.RandomPatchFeature {
        constructor()
        getClass(): typeof any;
        static isStone(arg0: Internal.BlockState_): boolean;
        configuredCodec(): Internal.Codec<Internal.ConfiguredFeature<Internal.RandomPatchConfiguration, Internal.Feature<Internal.RandomPatchConfiguration>>>;
        safeSetBlock(arg0: Internal.WorldGenLevel_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Predicate_<Internal.BlockState>): void;
        place(arg0: Internal.RandomPatchConfiguration_, arg1: Internal.WorldGenLevel_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        toString(): string;
        setBlock(arg0: Internal.LevelWriter_, arg1: BlockPos_, arg2: Internal.BlockState_): void;
        static checkNeighbors(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_, arg2: Internal.Predicate_<Internal.BlockState>): boolean;
        notifyAll(): void;
        notify(): void;
        static isAdjacentToAir(arg0: Internal.Function_<BlockPos, Internal.BlockState>, arg1: BlockPos_): boolean;
        wait(arg0: number, arg1: number): void;
        place(arg0: Internal.FeaturePlaceContext_<Internal.RandomPatchConfiguration>): boolean;
        static isGrassOrDirt(arg0: Internal.LevelSimulatedReader_, arg1: BlockPos_): boolean;
        markAboveForPostProcessing(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): void;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        static isDirt(arg0: Internal.BlockState_): boolean;
        equals(arg0: any): boolean;
        static isReplaceable(arg0: Internal.TagKey_<Internal.Block>): Internal.Predicate<Internal.BlockState>;
        get class(): typeof any
    }
    type IndigoSproutsFeature_ = IndigoSproutsFeature;
    interface INearbyItemAwareEntity {
        abstract getNearbyItems(): number;
        abstract setNearbyItems(arg0: number): void;
        get nearbyItems(): number
        set nearbyItems(arg0: number)
    }
    type INearbyItemAwareEntity_ = INearbyItemAwareEntity;
    class EMFJemData {
        constructor()
        getClass(): typeof any;
        toString(): string;
        validateJemTexture(textureIn: string, canRemoveRedundancy: boolean): ResourceLocation;
        validateJemTexture(textureIn: string): ResourceLocation;
        notifyAll(): void;
        validateResourcePathAndExists(pathIn: string, fileTypeExtension: string): ResourceLocation;
        notify(): void;
        getMobModelIDInfo(): Internal.EMFModel_ID;
        wait(arg0: number, arg1: number): void;
        getAllTopLevelAnimationsByVanillaPartName(): Internal.LinkedHashMap<string, Internal.List<Internal.LinkedHashMap<string, string>>>;
        hashCode(): number;
        wait(): void;
        wait(arg0: number): void;
        prepare(directoryContext: Internal.EMFDirectoryHandler_, mobModelIDInfo: Internal.EMFModel_ID_): void;
        equals(arg0: any): boolean;
        getCustomTexture(): ResourceLocation;
        get class(): typeof any
        get mobModelIDInfo(): Internal.EMFModel_ID
        get allTopLevelAnimationsByVanillaPartName(): Internal.LinkedHashMap<string, Internal.List<Internal.LinkedHashMap<string, string>>>
        get customTexture(): ResourceLocation
        texture: string;
        textureSize: number[];
        models: Internal.LinkedList<Internal.EMFPartData>;
        shadow_size: number;
    }
    type EMFJemData_ = EMFJemData;
    class AdvancedDominionWand extends Internal.Item {
        constructor()
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Internal.Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        isFireResistant(): boolean;
        forciblyAllowsTableEnchantment(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        appendHoverText(stack: Internal.ItemStack_, level: Internal.Level_, tooltip: Internal.List_<Internal.Component>, isAdvanced: Internal.TooltipFlag_): void;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        moonlight$getClientAnimationExtension(): any;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        asItem(): Internal.Item;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Internal.Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setMaxStackSize(arg0: number): void;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getItem(): Internal.Item;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        mfix$setDelegate(registryKey: Internal.ResourceKey_<any>, holder: Internal.Holder$Reference_<any>): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: Internal.Entity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        asIngredient(): Internal.Ingredient;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        getClass(): typeof any;
        mfix$getDelegate(registryKey: Internal.ResourceKey_<any>): Internal.Holder$Reference<any>;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        interactLivingEntity(stack: Internal.ItemStack_, player: Internal.Player_, interactionTarget: Internal.LivingEntity_, usedHand: Internal.InteractionHand_): Internal.InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        selectEnchantments(arg0: Internal.List_<Internal.EnchantmentInstance>, arg1: Internal.RandomSource_, arg2: Internal.ItemStack_, arg3: number, arg4: number, arg5: number, arg6: boolean): Internal.List<Internal.EnchantmentInstance>;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        isEdible(): boolean;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(pLevel: Internal.Level_, pPlayer: Internal.Player_, pUsedHand: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        wait(arg0: number): void;
        isFoil(arg0: Internal.ItemStack_): boolean;
        "getAttributeModifiers(net.minecraft.world.entity.EquipmentSlot,net.minecraft.world.item.ItemStack)"(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Internal.Player_, arg2: number): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        wait(): void;
        "setFoodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Internal.Player_, stack: Internal.ItemStack_): Vec3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        "getAttributeModifiers(net.minecraft.world.item.ItemStack,net.minecraft.world.entity.EquipmentSlot)"(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Internal.Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Internal.Player_, arg5: Internal.SlotAccess_): boolean;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        isTreasureAllowed(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Internal.Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        equals(arg0: any): boolean;
        setRarity(arg0: Internal.Rarity_): void;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): Internal.InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_): void;
        isComplex(): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        handler$eeg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getDescriptionId(): string;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        setBurnTime(i: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        getDescription(): Internal.Component;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        useOn(context: Internal.UseOnContext_): Internal.InteractionResult;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setAttackDamage(attackDamage: number): void;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        toString(): string;
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        notifyAll(): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(stack: Internal.ItemStack_, player: Internal.Player_, target: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        getDigSpeed(): number;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Internal.Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Internal.Player_): boolean;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        "setFoodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_): void;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        puzzleslib$setRenderProperties(arg0: any): void;
        handler$bjj000$blazinghot$tooltipInjector(stack: Internal.ItemStack_, level: Internal.Level_, tooltipComponents: Internal.List_<any>, isAdvanced: Internal.TooltipFlag_, ci: Internal.CallbackInfo_): void;
        notify(): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        handler$ifg000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        bookshelf$setCraftingRemainder(arg0: Internal.Item_): void;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        puzzleslib$getRenderProperties(): any;
        canBeDepleted(): boolean;
        onEnchantment(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.EnchantmentInstance>): Internal.ItemStack;
        getDamage(arg0: Internal.ItemStack_): number;
        wait(arg0: number, arg1: number): void;
        handler$dfi000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getMod(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Internal.Player_, stack: Internal.ItemStack_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): Internal.Item;
        getTypeItemStackKey(): Internal.ItemStackKey;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        hashCode(): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Player_): boolean;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        get drinkingSound(): Internal.SoundEvent
        get fireResistant(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get item(): Internal.Item
        get orCreateDescriptionId(): string
        get class(): typeof any
        get renderPropertiesInternal(): any
        get edible(): boolean
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set "foodProperties(java.util.function.Consumer)"(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        set rarity(arg0: Internal.Rarity_)
        get complex(): boolean
        get descriptionId(): string
        get creativeTab(): string
        set burnTime(i: number)
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        get digSpeed(): number
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set "foodProperties(net.minecraft.world.food.FoodProperties)"(arg0: Internal.FoodProperties_)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        get eatingSound(): Internal.SoundEvent
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
    }
    type AdvancedDominionWand_ = AdvancedDominionWand;
    class EffectEnderFlu extends Internal.MobEffect {
        constructor()
        getDisplayName(): Internal.Component;
        getClass(): typeof any;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: string, arg2: number, arg3: Internal.AttributeModifier$Operation_): Internal.MobEffect;
        isInstantenous(): boolean;
        addAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyInstantenousEffect(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: Internal.LivingEntity_, arg3: number, arg4: number): void;
        notify(): void;
        isBeneficial(): boolean;
        wait(arg0: number, arg1: number): void;
        getEffectRendererInternal(): any;
        getColor(): number;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientMobEffectExtensions>): void;
        removeAttributeModifiers(arg0: Internal.LivingEntity_, arg1: Internal.AttributeMap_, arg2: number): void;
        applyEffectTick(arg0: Internal.LivingEntity_, arg1: number): void;
        getAttributeModifierValue(arg0: number, arg1: Internal.AttributeModifier_): number;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        getDescriptionId(): string;
        static getIdFromNullable(arg0: Internal.MobEffect_): number;
        getCategory(): Internal.MobEffectCategory;
        toString(): string;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        notifyAll(): void;
        setFactorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>): Internal.MobEffect;
        createFactorData(): Internal.Optional<Internal.MobEffectInstance$FactorData>;
        static byId(arg0: number): Internal.MobEffect;
        hashCode(): number;
        getAttributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>;
        wait(): void;
        getOrCreateDescriptionId(): string;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        isDurationEffectTick(arg0: number, arg1: number): boolean;
        static getId(arg0: Internal.MobEffect_): number;
        get displayName(): Internal.Component
        get class(): typeof any
        get instantenous(): boolean
        get beneficial(): boolean
        get effectRendererInternal(): any
        get color(): number
        get descriptionId(): string
        get category(): Internal.MobEffectCategory
        get curativeItems(): Internal.List<Internal.ItemStack>
        set factorDataFactory(arg0: Internal.Supplier_<Internal.MobEffectInstance$FactorData>)
        get attributeModifiers(): Internal.Map<Internal.Attribute, Internal.AttributeModifier>
        get orCreateDescriptionId(): string
    }
    type EffectEnderFlu_ = EffectEnderFlu;
    interface IParticleColor extends Internal.ITagSerializable, Internal.Cloneable {
        getBlueInt(): number;
        abstract getRed(): number;
        abstract getGreen(): number;
        abstract getColor(): number;
        abstract getBlue(): number;
        abstract serialize(): Internal.CompoundTag;
        getRedInt(): number;
        abstract getRegistryName(): ResourceLocation;
        transition(arg0: number): Internal.ParticleColor;
        getGreenInt(): number;
        get blueInt(): number
        get red(): number
        get green(): number
        get color(): number
        get blue(): number
        get redInt(): number
        get registryName(): ResourceLocation
        get greenInt(): number
    }
    type IParticleColor_ = IParticleColor;
    interface ISummon extends Internal.OwnableEntity {
        abstract setOwnerID(arg0: Internal.UUID_): void;
        abstract level(): Internal.EntityGetter;
        abstract getOwnerUUID(): Internal.UUID;
        abstract setTicksLeft(arg0: number): void;
        onSummonDeath(arg0: Internal.Level_, arg1: DamageSource_, arg2: boolean): void;
        getOwnerAlt(): Internal.LivingEntity;
        abstract getTicksLeft(): number;
        getOwner(): Internal.LivingEntity;
        writeOwner(arg0: Internal.CompoundTag_): void;
        getLivingEntity(): Internal.LivingEntity;
        readOwner(arg0: Internal.ServerLevel_, arg1: Internal.CompoundTag_): Internal.Entity;
        set ownerID(arg0: Internal.UUID_)
        get ownerUUID(): Internal.UUID
        set ticksLeft(arg0: number)
        get ownerAlt(): Internal.LivingEntity
        get ticksLeft(): number
        get owner(): Internal.LivingEntity
        get livingEntity(): Internal.LivingEntity
    }
    type ISummon_ = ISummon;
    abstract class FieldNamingPolicy extends Internal.Enum<Internal.FieldNamingPolicy> implements Internal.FieldNamingStrategy {
        static valueOf<T extends Internal.Enum<T>>(arg0: T, arg1: string): T;
        getClass(): typeof any;
        abstract translateName(arg0: Internal.Field_): string;
        getDeclaringClass(): typeof Internal.FieldNamingPolicy;
        toString(): string;
        compareTo(arg0: Internal.FieldNamingPolicy_): number;
        notifyAll(): void;
        static values(): Internal.FieldNamingPolicy[];
        "compareTo(com.google.gson.FieldNamingPolicy)"(arg0: Internal.FieldNamingPolicy_): number;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        compareTo(arg0: any): number;
        name(): string;
        hashCode(): number;
        static valueOf(arg0: string): Internal.FieldNamingPolicy;
        ordinal(): number;
        wait(): void;
        wait(arg0: number): void;
        "compareTo(java.lang.Object)"(arg0: any): number;
        equals(arg0: any): boolean;
        describeConstable(): Internal.Optional<Internal.Enum$EnumDesc<Internal.FieldNamingPolicy>>;
        get class(): typeof any
        get declaringClass(): typeof Internal.FieldNamingPolicy
        static readonly UPPER_CASE_WITH_UNDERSCORES: Internal.FieldNamingPolicy;
        static readonly IDENTITY: Internal.FieldNamingPolicy;
        static readonly UPPER_CAMEL_CASE: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_UNDERSCORES: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_DASHES: Internal.FieldNamingPolicy;
        static readonly UPPER_CAMEL_CASE_WITH_SPACES: Internal.FieldNamingPolicy;
        static readonly LOWER_CASE_WITH_DOTS: Internal.FieldNamingPolicy;
    }
    type FieldNamingPolicy_ = "lower_case_with_underscores" | "lower_case_with_dashes" | "identity" | "upper_camel_case_with_spaces" | "lower_case_with_dots" | "upper_case_with_underscores" | FieldNamingPolicy | "upper_camel_case";
    class ServerOpListEntry extends Internal.StoredUserEntry<Internal.GameProfile> {
        constructor(arg0: Internal.GameProfile_, arg1: number, arg2: boolean)
        constructor(arg0: Internal.JsonObject_)
        getClass(): typeof any;
        getLevel(): number;
        toString(): string;
        getUser(): Internal.GameProfile;
        notifyAll(): void;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        hashCode(): number;
        wait(): void;
        serialize(arg0: Internal.JsonObject_): void;
        hasExpired(): boolean;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        getBypassesPlayerLimit(): boolean;
        get class(): typeof any
        get level(): number
        get user(): Internal.GameProfile
        get bypassesPlayerLimit(): boolean
    }
    type ServerOpListEntry_ = ServerOpListEntry;
    class PotionFlaskRecipe$Serializer implements Internal.RecipeSerializer<Internal.PotionFlaskRecipe> {
        constructor()
        getClass(): typeof any;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        toString(): string;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,net.minecraft.world.item.crafting.Recipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PotionFlaskRecipe_): void;
        notifyAll(): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.PotionFlaskRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        notify(): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(arg0: number, arg1: number): void;
        "fromJson(net.minecraft.resources.ResourceLocation,com.google.gson.JsonObject)"(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.PotionFlaskRecipe;
        "toNetwork(net.minecraft.network.FriendlyByteBuf,com.hollingsworth.arsnouveau.common.crafting.recipes.PotionFlaskRecipe)"(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PotionFlaskRecipe_): void;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        hashCode(): number;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        wait(): void;
        wait(arg0: number): void;
        "fromNetwork(net.minecraft.resources.ResourceLocation,net.minecraft.network.FriendlyByteBuf)"(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.PotionFlaskRecipe;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.PotionFlaskRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.PotionFlaskRecipe;
        equals(arg0: any): boolean;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
        get class(): typeof any
    }
    type PotionFlaskRecipe$Serializer_ = PotionFlaskRecipe$Serializer;
}
declare namespace dev.latvian.mods.kubejs {
    class BuilderBase {
        translationKey(key: Special.LangKey): dev.latvian.mods.kubejs.BuilderBase<T>;
    }
    type BuilderBase_ = BuilderBase;
}
declare namespace com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation {
    class LargeCarvedTopNoBeardAdaptation extends com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.EnhancedTerrainAdaptation {
        constructor()
        getClass(): typeof any;
        getKernelDistance(): number;
        type(): Internal.EnhancedTerrainAdaptationType<any>;
        toString(): string;
        getKernelSize(): number;
        getKernelRadius(): number;
        computeDensityFactor(arg0: number, arg1: number, arg2: number, arg3: number): number;
        notifyAll(): void;
        beards(): boolean;
        notify(): void;
        wait(arg0: number, arg1: number): void;
        getKernel(): number[];
        hashCode(): number;
        carves(): boolean;
        wait(): void;
        wait(arg0: number): void;
        equals(arg0: any): boolean;
        get class(): typeof any
        get kernelDistance(): number
        get kernelSize(): number
        get kernelRadius(): number
        get kernel(): number[]
        static readonly CODEC: Internal.Codec<com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.LargeCarvedTopNoBeardAdaptation>;
    }
    type LargeCarvedTopNoBeardAdaptation_ = LargeCarvedTopNoBeardAdaptation;
}
