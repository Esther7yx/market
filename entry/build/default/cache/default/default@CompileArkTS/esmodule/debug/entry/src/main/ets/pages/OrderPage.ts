if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface OrderPage_Params {
    currentIndex?: number;
    tabsController?: TabsController;
}
import router from "@ohos:router";
class OrderPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.tabsController = new TabsController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: OrderPage_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
    }
    updateStateVars(params: OrderPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private tabsController: TabsController;
    aboutToAppear() {
        // 获取传递过来的参数
        const params = router.getParams() as Record<string, number>;
        if (params && params['initialIndex'] !== undefined) {
            this.currentIndex = params['initialIndex'];
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height('100%');
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部自定义导航栏
            Row.create();
            // 顶部自定义导航栏
            Row.width('100%');
            // 顶部自定义导航栏
            Row.padding({ top: 12, bottom: 12 });
            // 顶部自定义导航栏
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('<');
            Text.fontSize(24);
            Text.padding({ left: 16, right: 16, top: 10, bottom: 10 });
            Text.onClick(() => {
                router.back();
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('我的订单');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        // 顶部自定义导航栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 订单 Tabs 组件
            Tabs.create({
                // 【修复点】这里改为 BarPosition.Start (表示在顶部)
                barPosition: BarPosition.Start,
                index: this.currentIndex,
                controller: this.tabsController
            });
            // 订单 Tabs 组件
            Tabs.barMode(BarMode.Fixed);
            // 订单 Tabs 组件
            Tabs.width('100%');
            // 订单 Tabs 组件
            Tabs.backgroundColor('#F1F3F5');
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.OrderListPlaceholder.bind(this)('全部订单内容');
            });
            TabContent.tabBar('全部');
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.OrderListPlaceholder.bind(this)('待付款订单内容');
            });
            TabContent.tabBar('待付款');
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.OrderListPlaceholder.bind(this)('运输中订单内容');
            });
            TabContent.tabBar('运输中');
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.OrderListPlaceholder.bind(this)('已收货订单内容');
            });
            TabContent.tabBar('已收货');
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.OrderListPlaceholder.bind(this)('售后订单内容');
            });
            TabContent.tabBar('售后');
        }, TabContent);
        TabContent.pop();
        // 订单 Tabs 组件
        Tabs.pop();
        Column.pop();
    }
    // 占位显示内容 Builder
    OrderListPlaceholder(text: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            Image.width(100);
            Image.height(100);
            Image.opacity(0.3);
            Image.margin({ top: 100, bottom: 20 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(text);
            Text.fontSize(16);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "OrderPage";
    }
}
registerNamedRoute(() => new OrderPage(undefined, {}), "", { bundleName: "com.example.list_harmony", moduleName: "entry", pagePath: "pages/OrderPage", pageFullPath: "entry/src/main/ets/pages/OrderPage", integratedHsp: "false", moduleType: "followWithHap" });
