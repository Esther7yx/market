@CustomDialog
export struct FilterDialog {
  controller: CustomDialogController
  @Link sortAsc: boolean
  @State localSortAsc: boolean = false

  aboutToAppear() {
    // 初始化本地选择为传入值
    this.localSortAsc = this.sortAsc
  }

  build() {
    Column() {
      // 顶部句柄
      Column() {
        Text('筛选')
          .fontSize(16)
          .fontWeight(FontWeight.Bold)
          .margin({ top: 12, bottom: 12 })
      }

      Column() {
        // 选项：默认
        Row() {
          Text('默认')
            .fontSize(14)
            .layoutWeight(1)
            .fontColor('#333333')

          // 单选指示器
          Row() {
            if (!this.localSortAsc) {
              Image($r('app.media.icon')).width(18).height(18)
            } else {
              Text('').width(18).height(18)
            }
          }
        }
        .padding({ left: 16, right: 16, top: 8, bottom: 8 })
        .onClick(() => {
          this.localSortAsc = false
        })

        // 选项：价格从低到高
        Row() {
          Text('价格从低到高')
            .fontSize(14)
            .layoutWeight(1)
            .fontColor('#333333')

          Row() {
            if (this.localSortAsc) {
              Image($r('app.media.icon')).width(18).height(18)
            } else {
              Text('').width(18).height(18)
            }
          }
        }
        .padding({ left: 16, right: 16, top: 8, bottom: 8 })
        .onClick(() => {
          this.localSortAsc = true
        })
      }
      .width('100%')

      // 按钮
      Row() {
        Button('取消')
          .onClick(() => this.controller.close())
          .backgroundColor('#F5F5F5')
          .fontColor('#666666')
          .layoutWeight(1)
          .margin({ right: 12 })

        Button('确定')
          .onClick(() => { this.sortAsc = this.localSortAsc; this.controller.close() })
          .backgroundColor('#E92F2F')
          .fontColor(Color.White)
          .layoutWeight(1)
      }
      .padding({ left: 16, right: 16, bottom: 16, top: 12 })
    }
    .width('100%')
    .backgroundColor(Color.White)
    .borderRadius({ topLeft: 16, topRight: 16 })
  }
}
