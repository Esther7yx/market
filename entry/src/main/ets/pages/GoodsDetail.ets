import router from '@ohos.router'

@Entry
@Component
export struct GoodsDetail {
  private item: any = router.getParams()

  build() {
    Column() {
      Image(this.item.image)
        .width('100%')
        .height(300)

      Column() {
        Text(this.item.title)
          .fontSize(20)
          .fontWeight(FontWeight.Bold)

        Text(`￥${this.item.price}`)
          .fontSize(22)
          .fontColor('#e60012')
          .margin({ top: 8 })

        Text(this.item.desc)
          .fontSize(14)
          .fontColor('#666')
          .margin({ top: 12 })
      }
      .padding(16)

      Button('加入购物车')
        .width('90%')
        .height(48)
        .margin({ top: 24 })
        .backgroundColor('#e60012')
        .fontColor('#ffffff')
        .onClick(() => {
          // ⭐ 向 Member D 发送“加入购物车事件”
          AppStorage.setOrCreate('addToCartEvent', {
            id: this.item.id,
            title: this.item.title,
            price: this.item.price,
            image: this.item.image
          })
        })
    }
  }
}
