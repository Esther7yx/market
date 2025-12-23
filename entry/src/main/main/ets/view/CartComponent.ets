@Component
export struct CartComponent { // <--- 重点：这里必须要有 export
  build() {
    Column() {
      Text("购物车")
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .margin({ top: 100 })

      Text("请在此处开发\n(列表 + 状态管理)")
        .fontSize(16)
        .fontColor(Color.Gray)
        .textAlign(TextAlign.Center)
        .margin({ top: 20 })
    }
    .width('100%')
    .height('100%')
  }
}