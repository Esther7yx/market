if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface GoodsListComponent_Params {
    data?: GoodsItem[];
}
import { goodsList } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData";
import type { GoodsItem } from "@bundle:com.example.list_harmony/entry/ets/viewmodel/InitialData";
import router from "@ohos:router";
export class GoodsListComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.data = goodsList;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: GoodsListComponent_Params) {
        if (params.data !== undefined) {
            this.data = params.data;
        }
    }
    updateStateVars(params: GoodsListComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private data: GoodsItem[];
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // [!code change] 移除构造参数，改用属性方法配置
            WaterFlow.create();
            // [!code change] 移除构造参数，改用属性方法配置
            WaterFlow.columnsTemplate('1fr 1fr');
            // [!code change] 移除构造参数，改用属性方法配置
            WaterFlow.columnsGap(12);
            // [!code change] 移除构造参数，改用属性方法配置
            WaterFlow.rowsGap(12);
            // [!code change] 移除构造参数，改用属性方法配置
            WaterFlow.padding(12);
            // [!code change] 移除构造参数，改用属性方法配置
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
                        router.pushUrl({
                            url: 'pages/GoodsDetail',
                            params: item
                        });
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
            this.forEachUpdateFunction(elmtId, this.data, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        // [!code change] 移除构造参数，改用属性方法配置
        WaterFlow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
