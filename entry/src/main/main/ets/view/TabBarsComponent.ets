/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LAYOUT_WIDTH_OR_HEIGHT } from '../common/CommonConstants';
import { CartComponent } from './CartComponent';
import { CategoryComponent } from './CategoryComponent';
import { HomeComponent } from './HomeComponent';
import { MineComponent } from './MineComponent';

@Component
export default struct TabBar {
  @State currentIndex: number = 0;
  private controller: TabsController = new TabsController();

  // 自定义 TabBar 样式构建器
  @Builder TabBuilder(title: string, targetIndex: number, selectedImg: Resource, normalImg: Resource) {
    Column() {
      Image(this.currentIndex === targetIndex ? selectedImg : normalImg)
        .size({ width: 24, height: 24 })
        .objectFit(ImageFit.Contain)
      Text(title)
        .fontColor(this.currentIndex === targetIndex ? '#ffe3e92f' : '#6B6B6B')
        .fontSize(10)
        .margin({ top: 4 })
    }
    .width('100%')
    .height(50)
    .justifyContent(FlexAlign.Center)
    .onClick(() => {
      this.currentIndex = targetIndex;
      this.controller.changeIndex(this.currentIndex);
    })
  }

  build() {
    Column() {
      Tabs({ barPosition: BarPosition.End, controller: this.controller }) {
        // Tab 1: 首页
        TabContent() {
          HomeComponent()
        }
        .tabBar(this.TabBuilder('精选', 0, $r('app.media.icon'), $r('app.media.icon')))
        // 注意：暂时用 icon 占位，Member A 可以在 resources/base/media 里加几个新图标

        // Tab 2: 分类
        TabContent() {
          CategoryComponent()
        }
        .tabBar(this.TabBuilder('分类', 1, $r('app.media.icon'), $r('app.media.icon')))

        // Tab 3: 购物车
        TabContent() {
          CartComponent()
        }
        .tabBar(this.TabBuilder('购物车', 2, $r('app.media.icon'), $r('app.media.icon')))

        // Tab 4: 我的
        TabContent() {
          MineComponent()
        }
        .tabBar(this.TabBuilder('我的', 3, $r('app.media.icon'), $r('app.media.icon')))
      }
      .vertical(false)
      .scrollable(false) // 禁止左右滑动
      .barHeight(56)
      .onChange((index: number) => {
        this.currentIndex = index;
      })
      .width(LAYOUT_WIDTH_OR_HEIGHT)
      .height(LAYOUT_WIDTH_OR_HEIGHT)
    }
    .width(LAYOUT_WIDTH_OR_HEIGHT)
    .height(LAYOUT_WIDTH_OR_HEIGHT)
  }
}