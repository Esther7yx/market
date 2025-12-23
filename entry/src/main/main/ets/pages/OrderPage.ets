import router from '@ohos.router';

@Entry
@Component
struct OrderPage {
  @State currentIndex: number = 0;
  private tabsController: TabsController = new TabsController();

  aboutToAppear() {
    // 获取传递过来的参数
    const params = router.getParams() as Record<string, number> | undefined;
    if (params && typeof params.initialIndex === 'number') {
      this.currentIndex = params.initialIndex;
    }
  }

  build() {
    Column() {
      // 顶部自定义导航栏
      Row() {
        Text('<')
          .fontSize(24)
          .padding({ left: 16, right: 16, top: 10, bottom: 10 })
          .onClick(() => {
            router.back();
          })
        Text('我的订单')
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
      }
      .width('100%')
      .padding({ top: 12, bottom: 12 })
      .backgroundColor(Color.White)

      // 订单 Tabs 组件
      Tabs({
        // 【修复点】这里改为 BarPosition.Start (表示在顶部)
        barPosition: BarPosition.Start,
        index: this.currentIndex,
        controller: this.tabsController
      }) {
        TabContent() {
          this.OrderListPlaceholder('全部订单内容')
        }.tabBar('全部')

        TabContent() {
          this.OrderListPlaceholder('待付款订单内容')
        }.tabBar('待付款')

        TabContent() {
          this.OrderListPlaceholder('运输中订单内容')
        }.tabBar('运输中')

        TabContent() {
          this.OrderListPlaceholder('已收货订单内容')
        }.tabBar('已收货')

        TabContent() {
          this.OrderListPlaceholder('售后订单内容')
        }.tabBar('售后')
      }
      .barMode(BarMode.Fixed) // Fixed 模式适合页签较少的情况，铺满宽度
      .width('100%')
      .backgroundColor('#F1F3F5')
    }
    .height('100%')
    .backgroundColor('#F1F3F5')
  }

  // 占位显示内容 Builder
  @Builder OrderListPlaceholder(text: string) {
    Column() {
      Image($r('app.media.icon')) // 使用现有的 icon 占位
        .width(100)
        .height(100)
        .opacity(0.3)
        .margin({ top: 100, bottom: 20 })

      Text(text)
        .fontSize(16)
        .fontColor('#999999')
    }
    .width('100%')
    .height('100%')
    .alignItems(HorizontalAlign.Center)
  }
}