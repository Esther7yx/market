if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SearchPage_Params {
    keyword?: string;
    sortAsc?: boolean;
    // 筛选弹窗控制器
    filterController?: CustomDialogController;
}
import { goodsList } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData";
import type { GoodsItem } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData";
import router from "@ohos:router";
import { FilterDialog } from "@bundle:com.example.list_harmony/entry/ets/view/FilterDialog";
class SearchPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__keyword = new ObservedPropertySimplePU('', this, "keyword");
        this.__sortAsc = new ObservedPropertySimplePU(false
        // 筛选弹窗控制器
        , this, "sortAsc");
        this.filterController = new CustomDialogController({
            builder: () => {
                let jsDialog = new FilterDialog(this, { sortAsc: this.__sortAsc }, undefined, -1, () => { }, { page: "entry/src/main/ets/pages/SearchPage.ets", line: 13, col: 14 });
                jsDialog.setController(this.
                // 筛选弹窗控制器
                filterController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        sortAsc: this.__sortAsc
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: true,
            alignment: DialogAlignment.Bottom,
            customStyle: true
        }, this);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SearchPage_Params) {
        if (params.keyword !== undefined) {
            this.keyword = params.keyword;
        }
        if (params.sortAsc !== undefined) {
            this.sortAsc = params.sortAsc;
        }
        if (params.filterController !== undefined) {
            this.filterController = params.filterController;
        }
    }
    updateStateVars(params: SearchPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__keyword.purgeDependencyOnElmtId(rmElmtId);
        this.__sortAsc.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__keyword.aboutToBeDeleted();
        this.__sortAsc.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __keyword: ObservedPropertySimplePU<string>;
    get keyword() {
        return this.__keyword.get();
    }
    set keyword(newValue: string) {
        this.__keyword.set(newValue);
    }
    private __sortAsc: ObservedPropertySimplePU<boolean>;
    get sortAsc() {
        return this.__sortAsc.get();
    }
    set sortAsc(newValue: boolean) {
        this.__sortAsc.set(newValue);
    }
    // 筛选弹窗控制器
    private filterController: CustomDialogController;
    aboutToAppear() {
        const params = router.getParams() as Record<string, string> | undefined;
        if (params && typeof params.keyword === 'string') {
            this.keyword = params.keyword;
        }
    }
    private getResults(): GoodsItem[] {
        let list = goodsList.filter((item: GoodsItem) => {
            const key = this.keyword.trim().toLowerCase();
            if (!key)
                return true;
            return item.title.toLowerCase().includes(key) || item.desc.toLowerCase().includes(key);
        });
        if (this.sortAsc) {
            return [...list].sort((a: GoodsItem, b: GoodsItem) => a.price - b.price);
        }
        return list;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`搜索: ${this.keyword}`);
            Text.fontSize(16);
            Text.padding(12);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('筛选');
            Text.fontSize(14);
            Text.padding(10);
            Text.backgroundColor('#f0f0f0');
            Text.borderRadius(6);
            Text.onClick(() => { if (this.filterController != undefined)
                this.filterController.open(); });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 结果列表
            WaterFlow.create();
            // 结果列表
            WaterFlow.columnsTemplate('1fr 1fr');
            // 结果列表
            WaterFlow.columnsGap(12);
            // 结果列表
            WaterFlow.rowsGap(12);
            // 结果列表
            WaterFlow.padding(12);
            // 结果列表
            WaterFlow.backgroundColor('#f5f5f5');
        }, WaterFlow);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    FlowItem.create();
                }, FlowItem);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.padding(8);
                    Column.backgroundColor('#ffffff');
                    Column.borderRadius(12);
                    Column.onClick(() => { router.pushUrl({ url: 'pages/GoodsDetail', params: item }); });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.image);
                    Image.width('100%');
                    Image.aspectRatio(item.id % 2 === 0 ? 0.75 : 1.25);
                    Image.borderRadius(12);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.title);
                    Text.fontSize(14);
                    Text.margin({ top: 6 });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`￥${item.price}`);
                    Text.fontSize(16);
                    Text.fontColor('#e60012');
                    Text.margin({ top: 4 });
                }, Text);
                Text.pop();
                Column.pop();
                FlowItem.pop();
            };
            this.forEachUpdateFunction(elmtId, this.getResults(), forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        // 结果列表
        WaterFlow.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SearchPage";
    }
}
registerNamedRoute(() => new SearchPage(undefined, {}), "", { bundleName: "com.example.list_harmony", moduleName: "entry", pagePath: "pages/SearchPage", pageFullPath: "entry/src/main/ets/pages/SearchPage", integratedHsp: "false", moduleType: "followWithHap" });
