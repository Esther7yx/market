import { goodsList, GoodsItem } from '../viewmodel/InitialData'
import router from '@ohos.router'
import { FilterDialog } from '../view/FilterDialog'

@Entry
@Component
struct SearchPage {
  @State keyword: string = ''
  @State sortAsc: boolean = false

  // 筛选弹窗控制器
  filterController: CustomDialogController = new CustomDialogController({
    builder: FilterDialog({ sortAsc: $sortAsc }),
    autoCancel: true,
    alignment: DialogAlignment.Bottom,
    customStyle: true
  })

  aboutToAppear() {
    const params = router.getParams() as Record<string, string> | undefined
    if (params && typeof params.keyword === 'string') {
      this.keyword = params.keyword
    }
  }

  private getResults(): GoodsItem[] {
    let list = goodsList.filter((item: GoodsItem) => {
      const key = this.keyword.trim().toLowerCase()
      if (!key) return true
      return item.title.toLowerCase().includes(key) || item.desc.toLowerCase().includes(key)
    })

    if (this.sortAsc) {
      return [...list].sort((a: GoodsItem, b: GoodsItem) => a.price - b.price)
    }
    return list
  }

  build() {
    Column() {
      Row() {
        Text(`搜索: ${this.keyword}`).fontSize(16).padding(12)
        Text('筛选')
          .fontSize(14)
          .padding(10)
          .backgroundColor('#f0f0f0')
          .borderRadius(6)
          .onClick(() => { if (this.filterController != undefined) this.filterController.open() })
      }
      .alignItems(VerticalAlign.Center)

      // 结果列表
      WaterFlow() {
        ForEach(this.getResults(), (item: GoodsItem) => {
          FlowItem() {
            Column() {
              Image(item.image).width('100%').aspectRatio(item.id % 2 === 0 ? 0.75 : 1.25).borderRadius(12)
              Text(item.title).fontSize(14).margin({ top: 6 })
              Text(`￥${item.price}`).fontSize(16).fontColor('#e60012').margin({ top: 4 })
            }
            .padding(8)
            .backgroundColor('#ffffff')
            .borderRadius(12)
            .onClick(() => { router.pushUrl({ url: 'pages/GoodsDetail', params: item }) })
          }
        })
      }
      .columnsTemplate('1fr 1fr')
      .columnsGap(12)
      .rowsGap(12)
      .padding(12)
      .backgroundColor('#f5f5f5')
    }
    .width('100%')
    .height('100%')
  }
}