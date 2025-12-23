export interface GoodsItem {
  id: number
  title: string
  price: number
  category: string
  image: string
  desc: string
}

export const goodsList: GoodsItem[] = [
  {
    id: 1,
    title: '旗舰智能手机 Pro',
    price: 5999,
    category: 'phone',
    image: '/resources/base/media/phone1.png',
    desc: '高性能旗舰手机，拍照与性能兼得'
  },
  {
    id: 2,
    title: '轻薄商务手机',
    price: 3999,
    category: 'phone',
    image: '/resources/base/media/phone2.png',
    desc: '轻薄机身，长续航'
  },
  {
    id: 3,
    title: '游戏性能手机',
    price: 4999,
    category: 'phone',
    image: '/resources/base/media/phone3.png',
    desc: '高刷新率，专为游戏打造'
  },
  {
    id: 4,
    title: '无线蓝牙耳机',
    price: 899,
    category: 'phone',
    image: '/resources/base/media/phone4.png',
    desc: '立体声降噪体验'
  },
  {
    id: 5,
    title: '智能手表',
    price: 1299,
    category: 'phone',
    image: '/resources/base/media/phone5.png',
    desc: '健康监测，运动助手'
  },

  {
    id: 6,
    title: '休闲连帽卫衣',
    price: 199,
    category: 'clothes',
    image: '/resources/base/media/cloth1.png',
    desc: '宽松舒适，百搭款'
  },
  {
    id: 7,
    title: '运动外套',
    price: 299,
    category: 'clothes',
    image: '/resources/base/media/cloth2.png',
    desc: '防风透气，适合日常运动'
  },
  {
    id: 8,
    title: '牛仔外套',
    price: 359,
    category: 'clothes',
    image: '/resources/base/media/cloth3.png',
    desc: '经典牛仔风格'
  },
  {
    id: 9,
    title: '纯棉T恤',
    price: 99,
    category: 'clothes',
    image: '/resources/base/media/cloth4.png',
    desc: '柔软透气，夏季必备'
  },
  {
    id: 10,
    title: '工装裤',
    price: 259,
    category: 'clothes',
    image: '/resources/base/media/cloth5.png',
    desc: '耐磨耐穿'
  },

  // 扩充数据，供搜索 / 分类 / 购物车使用
  ...Array.from({ length: 15 }).map((_, index) => ({
    id: 11 + index,
    title: `精选商品 ${index + 1}`,
    price: 120 + index * 30,
    category: index % 2 === 0 ? 'phone' : 'clothes',
    image:
      index % 2 === 0
        ? '/resources/base/media/phone1.png'
        : '/resources/base/media/cloth1.png',
    desc: '精选优质商品，性价比之选'
  }))
]
