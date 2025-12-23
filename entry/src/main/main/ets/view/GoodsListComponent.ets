import { goodsList, GoodsItem } from '../viewmodel/InitialData'
import router from '@ohos.router'

@Component
export struct GoodsListComponent {
  private data: GoodsItem[] = goodsList

  build() {
    // [!code change] 移除构造参数，改用属性方法配置
    WaterFlow() {
      ForEach(this.data, (item: GoodsItem) => {
        FlowItem() { // [!code note] 建议显式包裹 FlowItem，虽非必须但更规范
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
        }
      })
    }
    // [!code focus] 使用 columnsTemplate 设置两列 ('1fr 1fr')
    .columnsTemplate('1fr 1fr')
    // [!code focus] 使用 columnsGap 和 rowsGap 设置间距
    .columnsGap(12)
    .rowsGap(12)
    .padding(12)
    .backgroundColor('#f5f5f5')
  }
}