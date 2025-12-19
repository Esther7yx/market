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
//
export class GoodsListItemType {
    id: number; // 新增：用于购物车和详情页索引
    goodsImg: Resource;
    goodsName: Resource;
    advertisingLanguage: Resource;
    evaluate: Resource;
    price: number; // 修改：建议改为number类型方便计算总价，展示时再转string
    priceStr: Resource; // 保留原有的Resource用于展示
    category: number; // 新增：例如 0=精选, 1=手机, 2=服饰... 用于Member C筛选
    constructor(id: number, goodsImg: Resource, goodsName: Resource, price: number, priceStr: Resource, category: number) {
        this.id = id;
        this.goodsImg = goodsImg;
        this.goodsName = goodsName;
        this.advertisingLanguage = { "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" };
        this.evaluate = { "id": 16777224, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" };
        this.price = price;
        this.priceStr = priceStr;
        this.category = category;
    }
}
// Member B (列表/瀑布流)： 这些数据里的 id 都是唯一的，你在做详情页跳转时，可以拿这个 id 来判断点的是哪个商品。
// Member C (搜索)： 我混合了 category (0-4)，你可以测试点击左侧分类栏时，右侧是否只显示对应分类的商品。
// Member D (购物车)： 计算总价时请使用 price 字段（数字类型），展示时用 priceStr。
export const goodsInitialList: GoodsListItemType[] = [
    // --- Category 0: 精选 / Featured ---
    new GoodsListItemType(1, { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 199, { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 0),
    new GoodsListItemType(2, { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 265, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 0),
    // --- Category 1: 手机 / Phone ---
    new GoodsListItemType(3, { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 999, { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 1),
    new GoodsListItemType(4, { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 810, { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 1),
    new GoodsListItemType(5, { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 999, { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 1),
    // --- Category 2: 服饰 / Clothes ---
    new GoodsListItemType(6, { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 199, { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 2),
    new GoodsListItemType(7, { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 265, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 2),
    new GoodsListItemType(8, { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 199, { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 2),
    // --- Category 3: 穿搭 / Wear ---
    new GoodsListItemType(9, { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 810, { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 3),
    new GoodsListItemType(10, { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 265, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 3),
    new GoodsListItemType(11, { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 199, { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 3),
    // --- Category 4: 家居 / Home ---
    new GoodsListItemType(12, { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 999, { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 4),
    new GoodsListItemType(13, { "id": 16777243, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 810, { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 4),
    new GoodsListItemType(14, { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 199, { "id": 16777228, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 4),
    new GoodsListItemType(15, { "id": 16777245, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 265, { "id": 16777229, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 4),
    new GoodsListItemType(16, { "id": 16777246, "type": 20000, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, { "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 810, { "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.list_harmony", "moduleName": "entry" }, 4)
];
