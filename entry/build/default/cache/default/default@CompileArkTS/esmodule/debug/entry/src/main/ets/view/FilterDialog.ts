if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FilterDialog_Params {
    controller?: CustomDialogController;
    sortAsc?: boolean;
    localSortAsc?: boolean;
}
export class FilterDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = undefined;
        this.__sortAsc = new SynchedPropertySimpleTwoWayPU(params.sortAsc, this, "sortAsc");
        this.__localSortAsc = new ObservedPropertySimplePU(false, this, "localSortAsc");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FilterDialog_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.localSortAsc !== undefined) {
            this.localSortAsc = params.localSortAsc;
        }
    }
    updateStateVars(params: FilterDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__sortAsc.purgeDependencyOnElmtId(rmElmtId);
        this.__localSortAsc.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__sortAsc.aboutToBeDeleted();
        this.__localSortAsc.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    private __sortAsc: SynchedPropertySimpleTwoWayPU<boolean>;
    get sortAsc() {
        return this.__sortAsc.get();
    }
    set sortAsc(newValue: boolean) {
        this.__sortAsc.set(newValue);
    }
    private __localSortAsc: ObservedPropertySimplePU<boolean>;
    get localSortAsc() {
        return this.__localSortAsc.get();
    }
    set localSortAsc(newValue: boolean) {
        this.__localSortAsc.set(newValue);
    }
    aboutToAppear() {
        // 初始化本地选择为传入值
        this.localSortAsc = this.sortAsc;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor(Color.White);
            Column.borderRadius({ topLeft: 16, topRight: 16 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 顶部句柄
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('筛选');
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 12, bottom: 12 });
        }, Text);
        Text.pop();
        // 顶部句柄
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 选项：默认
            Row.create();
            // 选项：默认
            Row.padding({ left: 16, right: 16, top: 8, bottom: 8 });
            // 选项：默认
            Row.onClick(() => {
                this.localSortAsc = false;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('默认');
            Text.fontSize(14);
            Text.layoutWeight(1);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 单选指示器
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.localSortAsc) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                        Image.width(18);
                        Image.height(18);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                        Text.width(18);
                        Text.height(18);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        // 单选指示器
        Row.pop();
        // 选项：默认
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 选项：价格从低到高
            Row.create();
            // 选项：价格从低到高
            Row.padding({ left: 16, right: 16, top: 8, bottom: 8 });
            // 选项：价格从低到高
            Row.onClick(() => {
                this.localSortAsc = true;
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('价格从低到高');
            Text.fontSize(14);
            Text.layoutWeight(1);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.localSortAsc) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                        Image.width(18);
                        Image.height(18);
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('');
                        Text.width(18);
                        Text.height(18);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        Row.pop();
        // 选项：价格从低到高
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 按钮
            Row.create();
            // 按钮
            Row.padding({ left: 16, right: 16, bottom: 16, top: 12 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('取消');
            Button.onClick(() => this.controller.close());
            Button.backgroundColor('#F5F5F5');
            Button.fontColor('#666666');
            Button.layoutWeight(1);
            Button.margin({ right: 12 });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('确定');
            Button.onClick(() => { this.sortAsc = this.localSortAsc; this.controller.close(); });
            Button.backgroundColor('#E92F2F');
            Button.fontColor(Color.White);
            Button.layoutWeight(1);
        }, Button);
        Button.pop();
        // 按钮
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
