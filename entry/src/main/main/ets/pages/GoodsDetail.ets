import router from '@ohos.router'
import { GoodsItem } from '../viewmodel/InitialData'

@Entry
@Component
export struct GoodsDetail {
  @State private item: GoodsItem = { id: 0, title: '', price: 0, category: '', image: $r('app.media.icon'), desc: '' }

  aboutToAppear() {
    const params = router.getParams() as Partial<GoodsItem> | undefined
    if (params) {
      const title = params.title
      const price = params.price
      if (typeof title === 'string' && typeof price === 'number') {
        // 逐字段赋值，保证类型安全
        this.item = {
          id: typeof params.id === 'number' ? params.id as number : 0,
          title: title,
          price: price,
          category: typeof params.category === 'string' ? params.category as string : '',
          image: typeof params.image !== 'undefined' ? params.image as Resource : $r('app.media.icon'),
          desc: typeof params.desc === 'string' ? params.desc as string : ''
        }
      }
    }
  }

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
