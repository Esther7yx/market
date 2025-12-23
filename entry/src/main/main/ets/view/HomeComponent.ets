import { GoodsListComponent } from './GoodsListComponent'; // 必须使用花括号导入
import router from '@ohos.router'

@Component
export struct HomeComponent {
  @State keyword: string = ''

  build() {
    Column() {
      // 搜索栏
      Row() {
        TextInput({ placeholder: '搜索商品', text: this.keyword })
          .onChange((value) => this.keyword = value)
          .height(40)
          .width('78%')
          .backgroundColor('#F5F5F5')
          .borderRadius(8)
          .padding({ left: 12 })

        Text('搜索')
          .fontSize(16)
          .fontColor('#ffffff')
          .backgroundColor('#e60012')
          .padding({ left: 14, right: 14, top: 8, bottom: 8 })
          .borderRadius(8)
          .margin({ left: 10 })
          .onClick(() => {
            router.pushUrl({ url: 'pages/SearchPage', params: { keyword: this.keyword } })
          })
      }
      .padding(12)

      Swiper() {
        // 使用正确的资源引用方式
        Image($r('app.media.goodsImg')).width('100%').height(150)
        Image($r('app.media.goodsImg_2')).width('100%').height(150)
      }
      .autoPlay(true)
      .height(150)
      .width('94%')
      .margin({bottom: 10, top: 10})
      .borderRadius(10)

      // 商品列表
      GoodsListComponent()
    }
    .width('100%')
    .height('100%')
  }
}