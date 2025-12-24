if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CategoryComponent_Params {
    categories?: string[];
    selected?: string;
    sortAsc?: boolean;
    // 筛选弹窗控制器
    filterController?: CustomDialogController;
}
import { goodsList } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData";
import type { GoodsItem } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData";
import router from "@ohos:router";
import { FilterDialog } from "@bundle:com.example.list_harmony/entry/ets/view/FilterDialog";
export class CategoryComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.categories = Array.from(new Set(goodsList.map((g) => g.category)));
        this.__selected = new ObservedPropertySimplePU(this.categories.length > 0 ? this.categories[0] : '', this, "selected");
        this.__sortAsc = new ObservedPropertySimplePU(false
        // 筛选弹窗控制器
        , this, "sortAsc");
        this.filterController = new CustomDialogController({
            builder: () => {
                let jsDialog = new FilterDialog(this, { sortAsc: this.__sortAsc }, undefined, -1, () => { }, { page: "entry/src/main/ets/view/CategoryComponent.ets", line: 13, col: 14 });
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
    setInitiallyProvidedValue(params: CategoryComponent_Params) {
        if (params.categories !== undefined) {
            this.categories = params.categories;
        }
        if (params.selected !== undefined) {
            this.selected = params.selected;
        }
        if (params.sortAsc !== undefined) {
            this.sortAsc = params.sortAsc;
        }
        if (params.filterController !== undefined) {
            this.filterController = params.filterController;
        }
    }
    updateStateVars(params: CategoryComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selected.purgeDependencyOnElmtId(rmElmtId);
        this.__sortAsc.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selected.aboutToBeDeleted();
        this.__sortAsc.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private categories: string[];
    private __selected: ObservedPropertySimplePU<string>;
    get selected() {
        return this.__selected.get();
    }
    set selected(newValue: string) {
        this.__selected.set(newValue);
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
    private selectCategory(cat: string) {
        this.selected = cat;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 左侧分类导航
            Column.create();
            // 左侧分类导航
            Column.width('28%');
            // 左侧分类导航
            Column.backgroundColor('#f7f7f7');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const cat = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(cat);
                    Text.fontSize(16);
                    Text.padding({ top: 12, bottom: 12, left: 12, right: 12 });
                    Text.backgroundColor(this.selected === cat ? '#ffecec' : '#ffffff');
                    Text.onClick(() => this.selectCategory(cat));
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, this.categories, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Scroll.pop();
        // 左侧分类导航
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 右侧商品 Grid
            Column.create();
            // 右侧商品 Grid
            Column.width('72%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部操作行（筛选按钮）
            Row.create();
            // 顶部操作行（筛选按钮）
            Row.padding({ left: 12, top: 8, bottom: 8 });
        }, Row);
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
        // 顶部操作行（筛选按钮）
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            WaterFlow.create();
            WaterFlow.columnsTemplate('1fr 1fr');
            WaterFlow.columnsGap(12);
            WaterFlow.rowsGap(12);
            WaterFlow.padding(12);
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
                    Column.onClick(() => {
                        router.pushUrl({ url: 'pages/GoodsDetail', params: item });
                    });
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
            this.forEachUpdateFunction(elmtId, (() => {
                let list = goodsList.filter((item: GoodsItem) => item.category === this.selected);
                if (this.sortAsc) {
                    return [...list].sort((a: GoodsItem, b: GoodsItem) => a.price - b.price);
                }
                return list;
            })(), forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        WaterFlow.pop();
        // 右侧商品 Grid
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
