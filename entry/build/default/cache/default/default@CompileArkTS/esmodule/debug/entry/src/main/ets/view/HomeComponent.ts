if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomeComponent_Params {
}
import GoodsList from "@bundle:com.example.list_harmony/entry/ets/view/GoodsListComponent";
export class HomeComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomeComponent_Params) {
    }
    updateStateVars(params: HomeComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1. 顶部轮播图 (Member A 负责的装修)
            Swiper.create();
            // 1. 顶部轮播图 (Member A 负责的装修)
            Swiper.autoPlay(true);
            // 1. 顶部轮播图 (Member A 负责的装修)
            Swiper.height(150);
            // 1. 顶部轮播图 (Member A 负责的装修)
            Swiper.width('94%');
            // 1. 顶部轮播图 (Member A 负责的装修)
            Swiper.margin({ bottom: 10, top: 10 });
            // 1. 顶部轮播图 (Member A 负责的装修)
            Swiper.borderRadius(10);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            Image.width('100%');
            Image.height(150);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            Image.width('100%');
            Image.height(150);
        }, Image);
        // 1. 顶部轮播图 (Member A 负责的装修)
        Swiper.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 2. 商品列表 ( Member B 负责的组件)
                    GoodsList(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomeComponent.ets", line: 19, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "GoodsList" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
