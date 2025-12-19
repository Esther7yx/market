if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SettingsDialog_Params {
    controller?: CustomDialogController;
    userId?: string // 接收父组件传递的 userId
    ;
}
interface CustomerServiceDialog_Params {
    controller?: CustomDialogController;
}
interface AboutUsDialog_Params {
    controller?: CustomDialogController;
}
interface AddressManagementDialog_Params {
    controller?: CustomDialogController;
    addresses?: string[];
    newAddress?: string;
    isAdding?: boolean;
}
interface ModifyInfoDialog_Params {
    controller?: CustomDialogController;
    nickname?: string;
    userImage?: Resource;
    tempNickname?: string;
    tempImage?: Resource;
    availableAvatars?: Resource[];
}
interface MineComponent_Params {
    nickname?: string;
    userId?: string;
    userImage?: Resource;
    addresses?: string[];
    // 1. 个人信息弹窗控制器
    dialogController?: CustomDialogController;
    // 2. 收货地址管理弹窗控制器
    addressDialogController?: CustomDialogController;
    // 3. 关于我们弹窗控制器
    aboutUsController?: CustomDialogController;
    // 4. 新增：客服中心弹窗控制器
    customerServiceController?: CustomDialogController;
    // 5. 新增：设置弹窗控制器 (用于显示账号ID)
    settingsController?: CustomDialogController;
}
import { LAYOUT_WIDTH_OR_HEIGHT } from "@bundle:com.example.list_harmony/entry/ets/common/CommonConstants";
import router from "@ohos:router";
export class MineComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__nickname = new ObservedPropertySimplePU('鸿蒙体验官', this, "nickname");
        this.__userId = new ObservedPropertySimplePU('ID: 88888888', this, "userId");
        this.__userImage = new ObservedPropertyObjectPU({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, this, "userImage");
        this.__addresses = new ObservedPropertyObjectPU([
            '北京市海淀区软件园',
            '上海市浦东新区张江高科'
        ], this, "addresses");
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new ModifyInfoDialog(this, {
                    nickname: this.__nickname,
                    userImage: this.__userImage
                }, undefined, -1, () => { }, { page: "entry/src/main/ets/view/MineComponent.ets", line: 19, col: 14 });
                jsDialog.setController(this.
                // 1. 个人信息弹窗控制器
                dialogController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        nickname: this.__nickname,
                        userImage: this.__userImage
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: true,
            alignment: DialogAlignment.Center,
            customStyle: true
        }, this);
        this.addressDialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new AddressManagementDialog(this, {
                    addresses: this.__addresses
                }, undefined, -1, () => { }, { page: "entry/src/main/ets/view/MineComponent.ets", line: 30, col: 14 });
                jsDialog.setController(this.
                // 2. 收货地址管理弹窗控制器
                addressDialogController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        addresses: this.__addresses
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: true,
            alignment: DialogAlignment.Center,
            customStyle: true
        }, this);
        this.aboutUsController = new CustomDialogController({
            builder: () => {
                let jsDialog = new AboutUsDialog(this, {}, undefined, -1, () => { }, { page: "entry/src/main/ets/view/MineComponent.ets", line: 40, col: 14 });
                jsDialog.setController(this.
                // 3. 关于我们弹窗控制器
                aboutUsController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {};
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: true,
            alignment: DialogAlignment.Center,
            customStyle: true
        }, this);
        this.customerServiceController = new CustomDialogController({
            builder: () => {
                let jsDialog = new CustomerServiceDialog(this, {}, undefined, -1, () => { }, { page: "entry/src/main/ets/view/MineComponent.ets", line: 48, col: 14 });
                jsDialog.setController(this.
                // 4. 新增：客服中心弹窗控制器
                customerServiceController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {};
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: true,
            alignment: DialogAlignment.Center,
            customStyle: true
        }, this);
        this.settingsController = new CustomDialogController({
            builder: () => {
                let jsDialog = new SettingsDialog(this, {
                    userId: this.__userId // 将当前 userId 状态传递给弹窗
                }, undefined, -1, () => { }, { page: "entry/src/main/ets/view/MineComponent.ets", line: 56, col: 14 });
                jsDialog.setController(this.
                // 5. 新增：设置弹窗控制器 (用于显示账号ID)
                settingsController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        userId: this.__userId
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            autoCancel: true,
            alignment: DialogAlignment.Center,
            customStyle: true
        }, this);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MineComponent_Params) {
        if (params.nickname !== undefined) {
            this.nickname = params.nickname;
        }
        if (params.userId !== undefined) {
            this.userId = params.userId;
        }
        if (params.userImage !== undefined) {
            this.userImage = params.userImage;
        }
        if (params.addresses !== undefined) {
            this.addresses = params.addresses;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
        if (params.addressDialogController !== undefined) {
            this.addressDialogController = params.addressDialogController;
        }
        if (params.aboutUsController !== undefined) {
            this.aboutUsController = params.aboutUsController;
        }
        if (params.customerServiceController !== undefined) {
            this.customerServiceController = params.customerServiceController;
        }
        if (params.settingsController !== undefined) {
            this.settingsController = params.settingsController;
        }
    }
    updateStateVars(params: MineComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__nickname.purgeDependencyOnElmtId(rmElmtId);
        this.__userId.purgeDependencyOnElmtId(rmElmtId);
        this.__userImage.purgeDependencyOnElmtId(rmElmtId);
        this.__addresses.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__nickname.aboutToBeDeleted();
        this.__userId.aboutToBeDeleted();
        this.__userImage.aboutToBeDeleted();
        this.__addresses.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 定义状态变量
    private __nickname: ObservedPropertySimplePU<string>;
    get nickname() {
        return this.__nickname.get();
    }
    set nickname(newValue: string) {
        this.__nickname.set(newValue);
    }
    private __userId: ObservedPropertySimplePU<string>;
    get userId() {
        return this.__userId.get();
    }
    set userId(newValue: string) {
        this.__userId.set(newValue);
    }
    private __userImage: ObservedPropertyObjectPU<Resource>;
    get userImage() {
        return this.__userImage.get();
    }
    set userImage(newValue: Resource) {
        this.__userImage.set(newValue);
    }
    // 收货地址列表数据
    private __addresses: ObservedPropertyObjectPU<string[]>;
    get addresses() {
        return this.__addresses.get();
    }
    set addresses(newValue: string[]) {
        this.__addresses.set(newValue);
    }
    // 1. 个人信息弹窗控制器
    private dialogController: CustomDialogController;
    // 2. 收货地址管理弹窗控制器
    private addressDialogController: CustomDialogController;
    // 3. 关于我们弹窗控制器
    private aboutUsController: CustomDialogController;
    // 4. 新增：客服中心弹窗控制器
    private customerServiceController: CustomDialogController;
    // 5. 新增：设置弹窗控制器 (用于显示账号ID)
    private settingsController: CustomDialogController;
    /**
     * 用户头部 Builder
     */
    UserHeader(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(180);
            Row.padding({ left: 24, right: 24 });
            Row.backgroundColor(Color.White);
            Row.alignItems(VerticalAlign.Center);
            Row.onClick(() => {
                if (this.dialogController != undefined) {
                    this.dialogController.open();
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 头像
            Image.create(this.userImage);
            // 头像
            Image.width(72);
            // 头像
            Image.height(72);
            // 头像
            Image.borderRadius(36);
            // 头像
            Image.objectFit(ImageFit.Cover);
            // 头像
            Image.margin({ right: 16 });
            // 头像
            Image.backgroundColor(Color.White);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 信息
            Column.create();
            // 信息
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.margin({ bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.nickname);
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            Image.width(16);
            Image.height(16);
            Image.margin({ left: 8 });
            Image.opacity(0.5);
        }, Image);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.userId);
            Text.fontSize(14);
            Text.fontColor(Color.Gray);
        }, Text);
        Text.pop();
        // 信息
        Column.pop();
        Row.pop();
    }
    /**
     * 订单项 Builder
     */
    OrderItem(title: string, icon: Resource, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.onClick(() => {
                router.pushUrl({
                    url: 'pages/OrderPage',
                    params: {
                        initialIndex: index
                    }
                });
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(icon);
            Image.width(28);
            Image.height(28);
            Image.margin({ bottom: 8 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(12);
            Text.fontColor('#666666');
        }, Text);
        Text.pop();
        Column.pop();
    }
    /**
     * 订单区域 Builder
     */
    OrderArea(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('94%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(16);
            Column.margin({ top: -20, bottom: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题栏
            Row.create();
            // 标题栏
            Row.width('100%');
            // 标题栏
            Row.padding({ left: 12, right: 12, top: 12, bottom: 12 });
            // 标题栏
            Row.border({ width: { bottom: 1 }, color: '#F1F3F5' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('我的订单');
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 点击“全部订单”
            Row.create();
            // 点击“全部订单”
            Row.onClick(() => {
                router.pushUrl({
                    url: 'pages/OrderPage',
                    params: {
                        initialIndex: 0
                    }
                });
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全部订单');
            Text.fontSize(12);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(' >');
            Text.fontSize(12);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        // 点击“全部订单”
        Row.pop();
        // 标题栏
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 订单状态图标
            Row.create();
            // 订单状态图标
            Row.width('100%');
            // 订单状态图标
            Row.justifyContent(FlexAlign.SpaceAround);
            // 订单状态图标
            Row.padding({ top: 16, bottom: 16 });
        }, Row);
        this.OrderItem.bind(this)('未付款', { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 1);
        this.OrderItem.bind(this)('运输中', { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 2);
        this.OrderItem.bind(this)('已收货', { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 3);
        this.OrderItem.bind(this)('退换/售后', { "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 4);
        // 订单状态图标
        Row.pop();
        Column.pop();
    }
    /**
     * 通用菜单项 Builder
     */
    MenuItem(title: string, subTitle?: string, onItemClick?: () => void, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(56);
            Row.padding({ left: 16, right: 16 });
            Row.onClick(() => {
                if (onItemClick) {
                    onItemClick();
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(16);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (subTitle) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(subTitle);
                        Text.fontSize(14);
                        Text.fontColor('#999999');
                        Text.margin({ right: 8 });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('>');
            Text.fontSize(14);
            Text.fontColor('#CCCCCC');
        }, Text);
        Text.pop();
        Row.pop();
    }
    /**
     * 菜单区域 Builder
     */
    MenuArea(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('94%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(16);
            Column.margin({ bottom: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1. 收货地址
            Row.create();
            // 1. 收货地址
            Row.width('100%');
            // 1. 收货地址
            Row.height(56);
            // 1. 收货地址
            Row.padding({ left: 16, right: 16 });
            // 1. 收货地址
            Row.backgroundColor(Color.White);
            // 1. 收货地址
            Row.onClick(() => {
                if (this.addressDialogController != undefined) {
                    this.addressDialogController.open();
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('收货地址');
            Text.fontSize(16);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('管理我的收货地址');
            Text.fontSize(14);
            Text.fontColor('#999999');
            Text.margin({ right: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('>');
            Text.fontSize(14);
            Text.fontColor('#CCCCCC');
        }, Text);
        Text.pop();
        // 1. 收货地址
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.color('#F1F3F5');
            Divider.strokeWidth(1);
            Divider.padding({ left: 16, right: 16 });
        }, Divider);
        // 2. 客服中心
        this.MenuItem.bind(this)('客服中心', '为您服务', () => {
            if (this.customerServiceController != undefined) {
                this.customerServiceController.open();
            }
        });
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.color('#F1F3F5');
            Divider.strokeWidth(1);
            Divider.padding({ left: 16, right: 16 });
        }, Divider);
        // 3. 设置 (修改：添加点击事件打开设置弹窗)
        this.MenuItem.bind(this)('设置', '账号与隐私', () => {
            if (this.settingsController != undefined) {
                this.settingsController.open();
            }
        });
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.color('#F1F3F5');
            Divider.strokeWidth(1);
            Divider.padding({ left: 16, right: 16 });
        }, Divider);
        // 4. 关于我们
        this.MenuItem.bind(this)('关于我们', '版本 1.0.0', () => {
            if (this.aboutUsController != undefined) {
                this.aboutUsController.open();
            }
        });
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(LAYOUT_WIDTH_OR_HEIGHT);
            Column.constraintSize({ minHeight: LAYOUT_WIDTH_OR_HEIGHT });
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.UserHeader.bind(this)();
        this.OrderArea.bind(this)();
        this.MenuArea.bind(this)();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class ModifyInfoDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = undefined;
        this.__nickname = new SynchedPropertySimpleTwoWayPU(params.nickname, this, "nickname");
        this.__userImage = new SynchedPropertyObjectTwoWayPU(params.userImage, this, "userImage");
        this.__tempNickname = new ObservedPropertySimplePU('', this, "tempNickname");
        this.__tempImage = new ObservedPropertyObjectPU({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, this, "tempImage");
        this.availableAvatars = [{ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ModifyInfoDialog_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.tempNickname !== undefined) {
            this.tempNickname = params.tempNickname;
        }
        if (params.tempImage !== undefined) {
            this.tempImage = params.tempImage;
        }
        if (params.availableAvatars !== undefined) {
            this.availableAvatars = params.availableAvatars;
        }
    }
    updateStateVars(params: ModifyInfoDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__nickname.purgeDependencyOnElmtId(rmElmtId);
        this.__userImage.purgeDependencyOnElmtId(rmElmtId);
        this.__tempNickname.purgeDependencyOnElmtId(rmElmtId);
        this.__tempImage.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__nickname.aboutToBeDeleted();
        this.__userImage.aboutToBeDeleted();
        this.__tempNickname.aboutToBeDeleted();
        this.__tempImage.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    private __nickname: SynchedPropertySimpleTwoWayPU<string>;
    get nickname() {
        return this.__nickname.get();
    }
    set nickname(newValue: string) {
        this.__nickname.set(newValue);
    }
    private __userImage: SynchedPropertySimpleOneWayPU<Resource>;
    get userImage() {
        return this.__userImage.get();
    }
    set userImage(newValue: Resource) {
        this.__userImage.set(newValue);
    }
    private __tempNickname: ObservedPropertySimplePU<string>;
    get tempNickname() {
        return this.__tempNickname.get();
    }
    set tempNickname(newValue: string) {
        this.__tempNickname.set(newValue);
    }
    private __tempImage: ObservedPropertyObjectPU<Resource>;
    get tempImage() {
        return this.__tempImage.get();
    }
    set tempImage(newValue: Resource) {
        this.__tempImage.set(newValue);
    }
    private availableAvatars: Resource[];
    aboutToAppear() {
        this.tempNickname = this.nickname;
        this.tempImage = this.userImage;
    }
    changeAvatarRandomly() {
        const randomIndex = Math.floor(Math.random() * this.availableAvatars.length);
        this.tempImage = this.availableAvatars[randomIndex];
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('80%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(24);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('编辑个人信息');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 24, bottom: 24 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ bottom: 24 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.tempImage);
            Image.width(80);
            Image.height(80);
            Image.borderRadius(40);
            Image.objectFit(ImageFit.Cover);
            Image.onClick(() => this.changeAvatarRandomly());
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('点击头像切换');
            Text.fontSize(12);
            Text.fontColor('#999999');
            Text.margin({ top: 8 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '请输入昵称', text: this.tempNickname });
            TextInput.onChange((value) => this.tempNickname = value);
            TextInput.height(48);
            TextInput.margin({ left: 24, right: 24, bottom: 32 });
            TextInput.backgroundColor('#F5F5F5');
            TextInput.borderRadius(8);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding({ left: 24, right: 24, bottom: 24 });
            Row.width('100%');
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
            Button.onClick(() => { this.nickname = this.tempNickname; this.userImage = this.tempImage; this.controller.close(); });
            Button.backgroundColor('#E92F2F');
            Button.fontColor(Color.White);
            Button.layoutWeight(1);
            Button.margin({ left: 12 });
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class AddressManagementDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = undefined;
        this.__addresses = new SynchedPropertyObjectTwoWayPU(params.addresses, this, "addresses");
        this.__newAddress = new ObservedPropertySimplePU('', this, "newAddress");
        this.__isAdding = new ObservedPropertySimplePU(false, this, "isAdding");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AddressManagementDialog_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.newAddress !== undefined) {
            this.newAddress = params.newAddress;
        }
        if (params.isAdding !== undefined) {
            this.isAdding = params.isAdding;
        }
    }
    updateStateVars(params: AddressManagementDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__addresses.purgeDependencyOnElmtId(rmElmtId);
        this.__newAddress.purgeDependencyOnElmtId(rmElmtId);
        this.__isAdding.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__addresses.aboutToBeDeleted();
        this.__newAddress.aboutToBeDeleted();
        this.__isAdding.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    private __addresses: SynchedPropertySimpleOneWayPU<string[]>;
    get addresses() {
        return this.__addresses.get();
    }
    set addresses(newValue: string[]) {
        this.__addresses.set(newValue);
    }
    private __newAddress: ObservedPropertySimplePU<string>;
    get newAddress() {
        return this.__newAddress.get();
    }
    set newAddress(newValue: string) {
        this.__newAddress.set(newValue);
    }
    private __isAdding: ObservedPropertySimplePU<boolean>;
    get isAdding() {
        return this.__isAdding.get();
    }
    set isAdding(newValue: boolean) {
        this.__isAdding.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('85%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(16);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('收货地址管理');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 20, bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create();
            List.constraintSize({ maxHeight: 250, minHeight: 100 });
            List.width('100%');
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.width('100%');
                            Row.padding({ left: 16, right: 16, top: 12, bottom: 12 });
                            Row.border({ width: { bottom: 1 }, color: '#F1F3F5' });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
                            Image.width(18);
                            Image.height(18);
                            Image.margin({ right: 8 });
                            Image.opacity(0.6);
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item);
                            Text.fontSize(14);
                            Text.fontColor('#333333');
                            Text.layoutWeight(1);
                            Text.maxLines(2);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create('删除');
                            Text.fontSize(12);
                            Text.fontColor('#E92F2F');
                            Text.padding({ left: 12, top: 8, bottom: 8 });
                            Text.onClick(() => this.addresses.splice(index, 1));
                        }, Text);
                        Text.pop();
                        Row.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.addresses, forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isAdding) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.padding(16);
                        Column.backgroundColor('#FAFAFA');
                        Column.width('100%');
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: '请输入详细地址', text: this.newAddress });
                        TextInput.onChange((value) => this.newAddress = value);
                        TextInput.height(40);
                        TextInput.margin({ bottom: 12 });
                        TextInput.backgroundColor('#F5F5F5');
                        TextInput.borderRadius(8);
                    }, TextInput);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('取消');
                        Button.onClick(() => { this.isAdding = false; this.newAddress = ''; });
                        Button.backgroundColor('#F5F5F5');
                        Button.fontColor('#666666');
                        Button.layoutWeight(1);
                        Button.margin({ right: 12 });
                    }, Button);
                    Button.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('确认添加');
                        Button.onClick(() => { if (this.newAddress.trim() !== '') {
                            this.addresses.push(this.newAddress);
                            this.newAddress = '';
                            this.isAdding = false;
                        } });
                        Button.backgroundColor('#E92F2F');
                        Button.fontColor(Color.White);
                        Button.layoutWeight(1);
                        Button.margin({ left: 12 });
                    }, Button);
                    Button.pop();
                    Row.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('添加新地址');
                        Button.onClick(() => this.isAdding = true);
                        Button.backgroundColor('#E92F2F');
                        Button.fontColor(Color.White);
                        Button.width('90%');
                        Button.margin({ top: 16, bottom: 20 });
                    }, Button);
                    Button.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class AboutUsDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AboutUsDialog_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params: AboutUsDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('80%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(24);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('关于我们');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 24, bottom: 16 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777247, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" });
            Image.width(60);
            Image.height(60);
            Image.margin({ bottom: 16 });
            Image.borderRadius(12);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('版本号：1.0.0');
            Text.fontSize(16);
            Text.fontColor('#333333');
            Text.margin({ bottom: 32 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('关闭');
            Button.onClick(() => this.controller.close());
            Button.backgroundColor('#E92F2F');
            Button.fontColor(Color.White);
            Button.width('80%');
            Button.margin({ bottom: 24 });
        }, Button);
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class CustomerServiceDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = undefined;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CustomerServiceDialog_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params: CustomerServiceDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('80%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(24);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('联系客服');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 24, bottom: 12 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('是否致电客服热线？');
            Text.fontSize(16);
            Text.fontColor('#666666');
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('12345678');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#0A59F7');
            Text.margin({ bottom: 24 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding({ left: 24, right: 24, bottom: 24 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('取消');
            Button.onClick(() => {
                this.controller.close();
            });
            Button.backgroundColor('#F5F5F5');
            Button.fontColor('#666666');
            Button.layoutWeight(1);
            Button.margin({ right: 12 });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('确定');
            Button.onClick(() => {
                this.controller.close();
            });
            Button.backgroundColor('#E92F2F');
            Button.fontColor(Color.White);
            Button.layoutWeight(1);
            Button.margin({ left: 12 });
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class SettingsDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = undefined;
        this.__userId = new SynchedPropertySimpleTwoWayPU(params.userId, this, "userId");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SettingsDialog_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params: SettingsDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__userId.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__userId.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    private __userId: SynchedPropertySimpleTwoWayPU<string>; // 接收父组件传递的 userId
    get userId() {
        return this.__userId.get();
    }
    set userId(newValue: string // 接收父组件传递的 userId
    ) {
        this.__userId.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('80%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(24);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题
            Text.create('设置');
            // 标题
            Text.fontSize(18);
            // 标题
            Text.fontWeight(FontWeight.Bold);
            // 标题
            Text.margin({ top: 24, bottom: 16 });
        }, Text);
        // 标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 提示文本
            Text.create('当前账号 ID');
            // 提示文本
            Text.fontSize(14);
            // 提示文本
            Text.fontColor('#999999');
            // 提示文本
            Text.margin({ bottom: 8 });
        }, Text);
        // 提示文本
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // ID 内容
            Text.create(this.userId);
            // ID 内容
            Text.fontSize(20);
            // ID 内容
            Text.fontWeight(FontWeight.Bold);
            // ID 内容
            Text.fontColor('#333333');
            // ID 内容
            Text.margin({ bottom: 32 });
        }, Text);
        // ID 内容
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 关闭按钮
            Button.createWithLabel('关闭');
            // 关闭按钮
            Button.onClick(() => {
                this.controller.close();
            });
            // 关闭按钮
            Button.backgroundColor('#E92F2F');
            // 关闭按钮
            Button.fontColor(Color.White);
            // 关闭按钮
            Button.width('80%');
            // 关闭按钮
            Button.margin({ bottom: 24 });
        }, Button);
        // 关闭按钮
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
