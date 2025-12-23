import { goodsList, GoodsItem } from '../viewmodel/InitialData'
import router from '@ohos.router'

@Component
export struct GoodsListComponent {
  private data: GoodsItem[] = goodsList

  build() {
    WaterFlow({ columns: 2, space: 12 }) {
      ForEach(this.data, (item: GoodsItem) => {
        Column() {
          Image(item.image)
            .width('100%')
            // 制造“高矮错落”的瀑布流效果
            .aspectRatio(item.id % 2 === 0 ? 0.75 : 1.25)
            .borderRadius(12)

          Text(item.title)
            .fontSize(14)
            .margin({ top: 6 })

          Text(`￥${item.price}`)
            .fontSize(16)
            .fontColor('#e60012')
            .margin({ top: 4 })
        }
        .padding(8)
        .backgroundColor('#ffffff')
        .borderRadius(12)
        .onClick(() => {
          router.pushUrl({
            url: 'pages/GoodsDetail',
            params: item
          })
        })
      })
    }
    .padding(12)
    .backgroundColor('#f5f5f5')
  }
}
