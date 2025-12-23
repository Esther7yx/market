import { goodsList, GoodsItem } from '../viewmodel/InitialData'
import router from '@ohos.router'
import { FilterDialog } from './FilterDialog'

@Component
export struct CategoryComponent {
  private categories: string[] = Array.from(new Set(goodsList.map((g) => g.category)))
  @State selected: string = this.categories.length > 0 ? this.categories[0] : ''
  @State sortAsc: boolean = false

  // 筛选弹窗控制器
  filterController: CustomDialogController = new CustomDialogController({
    builder: FilterDialog({ sortAsc: $sortAsc }),
    autoCancel: true,
    alignment: DialogAlignment.Bottom,
    customStyle: true
  })

  private selectCategory(cat: string) {
    this.selected = cat
  }

  build() {
    Row() {
      // 左侧分类导航
      Column() {
        Scroll() {
          Column() {
            ForEach(this.categories, (cat: string) => {
              Text(cat)
                .fontSize(16)
                .padding({ top: 12, bottom: 12, left: 12, right: 12 })
                .backgroundColor(this.selected === cat ? '#ffecec' : '#ffffff')
                .onClick(() => this.selectCategory(cat))
            })
          }
        }
      }
      .width('28%')
      .backgroundColor('#f7f7f7')

      // 右侧商品 Grid
      Column() {
        // 顶部操作行（筛选按钮）
        Row() {
          Text('筛选')
            .fontSize(14)
            .padding(10)
            .backgroundColor('#f0f0f0')
            .borderRadius(6)
            .onClick(() => { if (this.filterController != undefined) this.filterController.open() })
        }
        .padding({ left: 12, top: 8, bottom: 8 })

        WaterFlow() {
          ForEach((() => {
            let list = goodsList.filter((item: GoodsItem) => item.category === this.selected)
            if (this.sortAsc) {
              return [...list].sort((a: GoodsItem, b: GoodsItem) => a.price - b.price)
            }
            return list
          })(), (item: GoodsItem) => {
            FlowItem() {
              Column() {
                Image(item.image).width('100%').aspectRatio(item.id % 2 === 0 ? 0.75 : 1.25).borderRadius(12)
                Text(item.title).fontSize(14).margin({ top: 6 })
                Text(`￥${item.price}`).fontSize(16).fontColor('#e60012').margin({ top: 4 })
              }
              .padding(8)
              .backgroundColor('#ffffff')
              .borderRadius(12)
              .onClick(() => {
                router.pushUrl({ url: 'pages/GoodsDetail', params: item })
              })
            }
          })
        }
        .columnsTemplate('1fr 1fr')
        .columnsGap(12)
        .rowsGap(12)
        .padding(12)
        .backgroundColor('#f5f5f5')
      }
      .width('72%')
    }
    .height('100%')
  }
}