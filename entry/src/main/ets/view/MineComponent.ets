import { LAYOUT_WIDTH_OR_HEIGHT } from '../common/CommonConstants';
import router from '@ohos.router';

@Component
export struct MineComponent {
  // 定义状态变量
  @State nickname: string = '鸿蒙体验官';
  @State userId: string = 'ID: 88888888';
  @State userImage: Resource = $r('app.media.icon');

  // 收货地址列表数据
  @State addresses: string[] = [
    '北京市海淀区软件园',
    '上海市浦东新区张江高科'
  ];

  // 1. 个人信息弹窗控制器
  dialogController: CustomDialogController = new CustomDialogController({
    builder: ModifyInfoDialog({
      nickname: $nickname,
      userImage: $userImage
    }),
    autoCancel: true,
    alignment: DialogAlignment.Center,
    customStyle: true
  });

  // 2. 收货地址管理弹窗控制器
  addressDialogController: CustomDialogController = new CustomDialogController({
    builder: AddressManagementDialog({
      addresses: $addresses
    }),
    autoCancel: true,
    alignment: DialogAlignment.Center,
    customStyle: true
  });

  // 3. 关于我们弹窗控制器
  aboutUsController: CustomDialogController = new CustomDialogController({
    builder: AboutUsDialog(),
    autoCancel: true,
    alignment: DialogAlignment.Center,
    customStyle: true
  });

  // 4. 新增：客服中心弹窗控制器
  customerServiceController: CustomDialogController = new CustomDialogController({
    builder: CustomerServiceDialog(),
    autoCancel: true,
    alignment: DialogAlignment.Center,
    customStyle: true
  });

  // 5. 新增：设置弹窗控制器 (用于显示账号ID)
  settingsController: CustomDialogController = new CustomDialogController({
    builder: SettingsDialog({
      userId: $userId // 将当前 userId 状态传递给弹窗
    }),
    autoCancel: true,
    alignment: DialogAlignment.Center,
    customStyle: true
  });

  /**
   * 用户头部 Builder
   */
  @Builder UserHeader() {
    Row() {
      // 头像
      Image(this.userImage)
        .width(72)
        .height(72)
        .borderRadius(36)
        .objectFit(ImageFit.Cover)
        .margin({ right: 16 })
        .backgroundColor(Color.White)

      // 信息
      Column() {
        Row() {
          Text(this.nickname)
            .fontSize(20)
            .fontWeight(FontWeight.Bold)
          Image($r('app.media.icon'))
            .width(16)
            .height(16)
            .margin({ left: 8 })
            .opacity(0.5)
        }
        .margin({ bottom: 8 })

        Text(this.userId)
          .fontSize(14)
          .fontColor(Color.Gray)
      }
      .alignItems(HorizontalAlign.Start)
    }
    .width('100%')
    .height(180)
    .padding({ left: 24, right: 24 })
    .backgroundColor(Color.White)
    .alignItems(VerticalAlign.Center)
    .onClick(() => {
      if (this.dialogController != undefined) {
        this.dialogController.open();
      }
    })
  }

  /**
   * 订单项 Builder
   */
  @Builder OrderItem(title: string, icon: Resource, index: number) {
    Column() {
      Image(icon)
        .width(28)
        .height(28)
        .margin({ bottom: 8 })

      Text(title)
        .fontSize(12)
        .fontColor('#666666')
    }
    .onClick(() => {
      router.pushUrl({
        url: 'pages/OrderPage',
        params: {
          initialIndex: index
        }
      });
    })
  }

  /**
   * 订单区域 Builder
   */
  @Builder OrderArea() {
    Column() {
      // 标题栏
      Row() {
        Text('我的订单')
          .fontSize(16)
          .fontWeight(FontWeight.Medium)

        Blank()

        // 点击“全部订单”
        Row() {
          Text('全部订单')
            .fontSize(12)
            .fontColor('#999999')
          Text(' >')
            .fontSize(12)
            .fontColor('#999999')
        }
        .onClick(() => {
          router.pushUrl({
            url: 'pages/OrderPage',
            params: {
              initialIndex: 0
            }
          });
        })
      }
      .width('100%')
      .padding({ left: 12, right: 12, top: 12, bottom: 12 })
      .border({ width: { bottom: 1 }, color: '#F1F3F5' })

      // 订单状态图标
      Row() {
        this.OrderItem('未付款', $r('app.media.icon'), 1)
        this.OrderItem('运输中', $r('app.media.icon'), 2)
        this.OrderItem('已收货', $r('app.media.icon'), 3)
        this.OrderItem('退换/售后', $r('app.media.icon'), 4)
      }
      .width('100%')
      .justifyContent(FlexAlign.SpaceAround)
      .padding({ top: 16, bottom: 16 })
    }
    .width('94%')
    .backgroundColor(Color.White)
    .borderRadius(16)
    .margin({ top: -20, bottom: 12 })
  }

  /**
   * 通用菜单项 Builder
   */
  @Builder MenuItem(title: string, subTitle?: string, onItemClick?: () => void) {
    Row() {
      Text(title)
        .fontSize(16)
        .fontColor('#333333')

      Blank()

      if (subTitle) {
        Text(subTitle)
          .fontSize(14)
          .fontColor('#999999')
          .margin({ right: 8 })
      }

      Text('>')
        .fontSize(14)
        .fontColor('#CCCCCC')
    }
    .width('100%')
    .height(56)
    .padding({ left: 16, right: 16 })
    .onClick(() => {
      if (onItemClick) {
        onItemClick();
      }
    })
  }

  /**
   * 菜单区域 Builder
   */
  @Builder MenuArea() {
    Column() {
      // 1. 收货地址
      Row() {
        Text('收货地址')
          .fontSize(16)
          .fontColor('#333333')

        Blank()

        Text('管理我的收货地址')
          .fontSize(14)
          .fontColor('#999999')
          .margin({ right: 8 })

        Text('>')
          .fontSize(14)
          .fontColor('#CCCCCC')
      }
      .width('100%')
      .height(56)
      .padding({ left: 16, right: 16 })
      .backgroundColor(Color.White)
      .onClick(() => {
        if (this.addressDialogController != undefined) {
          this.addressDialogController.open();
        }
      })

      Divider().color('#F1F3F5').strokeWidth(1).padding({ left: 16, right: 16 })

      // 2. 客服中心
      this.MenuItem('客服中心', '为您服务', () => {
        if (this.customerServiceController != undefined) {
          this.customerServiceController.open();
        }
      })
      Divider().color('#F1F3F5').strokeWidth(1).padding({ left: 16, right: 16 })

      // 3. 设置 (修改：添加点击事件打开设置弹窗)
      this.MenuItem('设置', '账号与隐私', () => {
        if (this.settingsController != undefined) {
          this.settingsController.open();
        }
      })
      Divider().color('#F1F3F5').strokeWidth(1).padding({ left: 16, right: 16 })

      // 4. 关于我们
      this.MenuItem('关于我们', '版本 1.0.0', () => {
        if (this.aboutUsController != undefined) {
          this.aboutUsController.open();
        }
      })
    }
    .width('94%')
    .backgroundColor(Color.White)
    .borderRadius(16)
    .margin({ bottom: 20 })
  }

  build() {
    Scroll() {
      Column() {
        this.UserHeader()
        this.OrderArea()
        this.MenuArea()
      }
      .width(LAYOUT_WIDTH_OR_HEIGHT)
      .constraintSize({ minHeight: LAYOUT_WIDTH_OR_HEIGHT })
      .backgroundColor('#F1F3F5')
    }
    .scrollBar(BarState.Off)
  }
}

/**
 * 修改个人信息弹窗
 */
@CustomDialog
struct ModifyInfoDialog {
  controller: CustomDialogController
  @Link nickname: string
  @Link userImage: Resource
  @State tempNickname: string = ''
  @State tempImage: Resource = $r('app.media.icon')
  private availableAvatars: Resource[] = [$r('app.media.icon'), $r('app.media.goodsImg')]

  aboutToAppear() {
    this.tempNickname = this.nickname
    this.tempImage = this.userImage
  }

  changeAvatarRandomly() {
    const randomIndex = Math.floor(Math.random() * this.availableAvatars.length);
    this.tempImage = this.availableAvatars[randomIndex];
  }

  build() {
    Column() {
      Text('编辑个人信息').fontSize(18).fontWeight(FontWeight.Bold).margin({ top: 24, bottom: 24 })
      Column() {
        Image(this.tempImage).width(80).height(80).borderRadius(40).objectFit(ImageFit.Cover).onClick(() => this.changeAvatarRandomly())
        Text('点击头像切换').fontSize(12).fontColor('#999999').margin({ top: 8 })
      }.margin({ bottom: 24 })
      TextInput({ placeholder: '请输入昵称', text: this.tempNickname }).onChange((value) => this.tempNickname = value).height(48).margin({ left: 24, right: 24, bottom: 32 }).backgroundColor('#F5F5F5').borderRadius(8)
      Row() {
        Button('取消').onClick(() => this.controller.close()).backgroundColor('#F5F5F5').fontColor('#666666').layoutWeight(1).margin({ right: 12 })
        Button('确定').onClick(() => { this.nickname = this.tempNickname; this.userImage = this.tempImage; this.controller.close() }).backgroundColor('#E92F2F').fontColor(Color.White).layoutWeight(1).margin({ left: 12 })
      }.padding({ left: 24, right: 24, bottom: 24 }).width('100%')
    }.width('80%').backgroundColor(Color.White).borderRadius(24)
  }
}

/**
 * 地址管理弹窗
 */
@CustomDialog
struct AddressManagementDialog {
  controller: CustomDialogController
  @Link addresses: string[]
  @State newAddress: string = ''
  @State isAdding: boolean = false

  build() {
    Column() {
      Text('收货地址管理').fontSize(18).fontWeight(FontWeight.Bold).margin({ top: 20, bottom: 10 })
      List() {
        ForEach(this.addresses, (item: string, index: number) => {
          ListItem() {
            Row() {
              Image($r('app.media.icon')).width(18).height(18).margin({ right: 8 }).opacity(0.6)
              Text(item).fontSize(14).fontColor('#333333').layoutWeight(1).maxLines(2).textOverflow({ overflow: TextOverflow.Ellipsis })
              Text('删除').fontSize(12).fontColor('#E92F2F').padding({ left: 12, top: 8, bottom: 8 }).onClick(() => this.addresses.splice(index, 1))
            }.width('100%').padding({ left: 16, right: 16, top: 12, bottom: 12 }).border({ width: { bottom: 1 }, color: '#F1F3F5' })
          }
        })
      }.constraintSize({ maxHeight: 250, minHeight: 100 }).width('100%')
      if (this.isAdding) {
        Column() {
          TextInput({ placeholder: '请输入详细地址', text: this.newAddress }).onChange((value) => this.newAddress = value).height(40).margin({ bottom: 12 }).backgroundColor('#F5F5F5').borderRadius(8)
          Row() {
            Button('取消').onClick(() => { this.isAdding = false; this.newAddress = '' }).backgroundColor('#F5F5F5').fontColor('#666666').layoutWeight(1).margin({ right: 12 })
            Button('确认添加').onClick(() => { if (this.newAddress.trim() !== '') { this.addresses.push(this.newAddress); this.newAddress = ''; this.isAdding = false } }).backgroundColor('#E92F2F').fontColor(Color.White).layoutWeight(1).margin({ left: 12 })
          }
        }.padding(16).backgroundColor('#FAFAFA').width('100%')
      } else {
        Button('添加新地址').onClick(() => this.isAdding = true).backgroundColor('#E92F2F').fontColor(Color.White).width('90%').margin({ top: 16, bottom: 20 })
      }
    }.width('85%').backgroundColor(Color.White).borderRadius(16)
  }
}

/**
 * 关于我们弹窗
 */
@CustomDialog
struct AboutUsDialog {
  controller: CustomDialogController
  build() {
    Column() {
      Text('关于我们').fontSize(18).fontWeight(FontWeight.Bold).margin({ top: 24, bottom: 16 })
      Image($r('app.media.icon')).width(60).height(60).margin({ bottom: 16 }).borderRadius(12)
      Text('版本号：1.0.0').fontSize(16).fontColor('#333333').margin({ bottom: 32 })
      Button('关闭').onClick(() => this.controller.close()).backgroundColor('#E92F2F').fontColor(Color.White).width('80%').margin({ bottom: 24 })
    }.width('80%').backgroundColor(Color.White).borderRadius(24)
  }
}

/**
 * 客服中心弹窗
 */
@CustomDialog
struct CustomerServiceDialog {
  controller: CustomDialogController

  build() {
    Column() {
      Text('联系客服')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 24, bottom: 12 })

      Text('是否致电客服热线？')
        .fontSize(16)
        .fontColor('#666666')
        .margin({ bottom: 8 })

      Text('12345678')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .fontColor('#0A59F7')
        .margin({ bottom: 24 })

      Row() {
        Button('取消')
          .onClick(() => {
            this.controller.close()
          })
          .backgroundColor('#F5F5F5')
          .fontColor('#666666')
          .layoutWeight(1)
          .margin({ right: 12 })

        Button('确定')
          .onClick(() => {
            this.controller.close()
          })
          .backgroundColor('#E92F2F')
          .fontColor(Color.White)
          .layoutWeight(1)
          .margin({ left: 12 })
      }
      .width('100%')
      .padding({ left: 24, right: 24, bottom: 24 })
    }
    .width('80%')
    .backgroundColor(Color.White)
    .borderRadius(24)
  }
}

/**
 * 新增：设置弹窗 (显示账号ID)
 */
@CustomDialog
struct SettingsDialog {
  controller: CustomDialogController
  @Link userId: string // 接收父组件传递的 userId

  build() {
    Column() {
      // 标题
      Text('设置')
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 24, bottom: 16 })

      // 提示文本
      Text('当前账号 ID')
        .fontSize(14)
        .fontColor('#999999')
        .margin({ bottom: 8 })

      // ID 内容
      Text(this.userId)
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .fontColor('#333333')
        .margin({ bottom: 32 })

      // 关闭按钮
      Button('关闭')
        .onClick(() => {
          this.controller.close()
        })
        .backgroundColor('#E92F2F') // 保持统一的红色主题
        .fontColor(Color.White)
        .width('80%')
        .margin({ bottom: 24 })
    }
    .width('80%')
    .backgroundColor(Color.White)
    .borderRadius(24)
  }
}