if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomeComponent_Params {
    keyword?: string;
}
import { GoodsListComponent } from "@bundle:com.example.list_harmony/entry/ets/view/GoodsListComponent";
import router from "@ohos:router";
export class HomeComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__keyword = new ObservedPropertySimplePU('', this, "keyword");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomeComponent_Params) {
        if (params.keyword !== undefined) {
            this.keyword = params.keyword;
        }
    }
    updateStateVars(params: HomeComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__keyword.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__keyword.aboutToBeDeleted();
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
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 搜索栏
            Row.create();
            // 搜索栏
            Row.padding(12);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '搜索商品', text: this.keyword });
            TextInput.onChange((value) => this.keyword = value);
            TextInput.height(40);
            TextInput.width('78%');
            TextInput.backgroundColor('#F5F5F5');
            TextInput.borderRadius(8);
            TextInput.padding({ left: 12 });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('搜索');
            Text.fontSize(16);
            Text.fontColor('#ffffff');
            Text.backgroundColor('#e60012');
            Text.padding({ left: 14, right: 14, top: 8, bottom: 8 });
            Text.borderRadius(8);
            Text.margin({ left: 10 });
            Text.onClick(() => {
                router.pushUrl({ url: 'pages/SearchPage', params: { keyword: this.keyword } });
            });
        }, Text);
        Text.pop();
        // 搜索栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.autoPlay(true);
            Swiper.height(150);
            Swiper.width('94%');
            Swiper.margin({ bottom: 10, top: 10 });
            Swiper.borderRadius(10);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 使用正确的资源引用方式
            Image.create({ "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            // 使用正确的资源引用方式
            Image.width('100%');
            // 使用正确的资源引用方式
            Image.height(150);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            Image.width('100%');
            Image.height(150);
        }, Image);
        Swiper.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 商品列表
                    GoodsListComponent(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/HomeComponent.ets", line: 45, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "GoodsListComponent" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
