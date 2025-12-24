if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface GoodsDetail_Params {
    item?: GoodsItem;
}
import router from "@ohos:router";
import type { GoodsItem } from '../viewmodel/InitialData';
export class GoodsDetail extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__item = new ObservedPropertyObjectPU({ id: 0, title: '', price: 0, category: '', image: { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, desc: '' }, this, "item");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: GoodsDetail_Params) {
        if (params.item !== undefined) {
            this.item = params.item;
        }
    }
    updateStateVars(params: GoodsDetail_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__item.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__item.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __item: ObservedPropertyObjectPU<GoodsItem>;
    get item() {
        return this.__item.get();
    }
    set item(newValue: GoodsItem) {
        this.__item.set(newValue);
    }
    aboutToAppear() {
        const params = router.getParams() as Partial<GoodsItem> | undefined;
        if (params) {
            const title = params.title;
            const price = params.price;
            if (typeof title === 'string' && typeof price === 'number') {
                // 逐字段赋值，保证类型安全
                this.item = {
                    id: typeof params.id === 'number' ? params.id as number : 0,
                    title: title,
                    price: price,
                    category: typeof params.category === 'string' ? params.category as string : '',
                    image: typeof params.image !== 'undefined' ? params.image as Resource : { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" },
                    desc: typeof params.desc === 'string' ? params.desc as string : ''
                };
            }
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.item.image);
            Image.width('100%');
            Image.height(300);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding(16);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.title);
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`￥${this.item.price}`);
            Text.fontSize(22);
            Text.fontColor('#e60012');
            Text.margin({ top: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item.desc);
            Text.fontSize(14);
            Text.fontColor('#666');
            Text.margin({ top: 12 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('加入购物车');
            Button.width('90%');
            Button.height(48);
            Button.margin({ top: 24 });
            Button.backgroundColor('#e60012');
            Button.fontColor('#ffffff');
            Button.onClick(() => {
                // ⭐ 向 Member D 发送“加入购物车事件”
                AppStorage.setOrCreate('addToCartEvent', {
                    id: this.item.id,
                    title: this.item.title,
                    price: this.item.price,
                    image: this.item.image
                });
            });
        }, Button);
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "GoodsDetail";
    }
}
registerNamedRoute(() => new GoodsDetail(undefined, {}), "", { bundleName: "com.example.list_harmony", moduleName: "entry", pagePath: "pages/GoodsDetail", pageFullPath: "entry/src/main/ets/pages/GoodsDetail", integratedHsp: "false", moduleType: "followWithHap" });
