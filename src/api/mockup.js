const masterdata = {
  skuList: [
    {
      _id: 1,
      productId: 1,
      name: 'tfndn-50',
      price: 9200,
      image: 'https://www.fenwick.co.uk/dw/image/v2/BBKK_PRD/on/demandware.static/-/Sites-fenwick-master-catalog/default/dw46146d85/images/large/0000102333.jpg',
      desc: '50 ML',
      marketplaces: ['shopee'],
      isActive: true
    },
    {
      _id: 2,
      productId: 1,
      name: 'tfndn-100',
      price: 12400,
      image: 'https://www.fenwick.co.uk/dw/image/v2/BBKK_PRD/on/demandware.static/-/Sites-fenwick-master-catalog/default/dwa2e15b39/images/large/0000102334.jpg',
      desc: '100 ML',
      marketplaces: ['shopee'],
      isActive: true
    },
    {
      _id: 3,
      productId: 1,
      name: 'tfndn-250',
      price: 22000,
      image: 'https://www.fenwick.co.uk/dw/image/v2/BBKK_PRD/on/demandware.static/-/Sites-fenwick-master-catalog/default/dw42fc54f8/images/large/0000102607.jpg',
      desc: '250 ML',
      marketplaces: ['shopee'],
      isActive: true
    },
    {
      _id: 4,
      productId: 2,
      name: 'aventus18n01',
      price: 12000,
      image: 'https://plummour.com/wp-content/uploads/2021/06/Creed-Aventus-1.jpg',
      desc: 'Batch หายาก ปี 2018',
      marketplaces: ['lazada'],
      isActive: true
    },
    {
      _id: 5,
      productId: 2,
      name: 'aventus19n01',
      price: 12000,
      image: 'https://plummour.com/wp-content/uploads/2021/06/Creed-Aventus-1.jpg',
      desc: 'Batch หายาก ปี 2019',
      marketplaces: ['lazada'],
      isActive: true
    },
    {
      _id: 6,
      productId: 2,
      name: 'aventus20m01',
      price: 12000,
      image: 'https://plummour.com/wp-content/uploads/2021/06/Creed-Aventus-1.jpg',
      desc: 'Batch ใหม่ ผลิตต้นปี 2020',
      marketplaces: ['lazada'],
      isActive: true
    },
    {
      _id: 7,
      productId: 2,
      name: 'aventus21p01',
      price: 12000,
      image: 'https://plummour.com/wp-content/uploads/2021/06/Creed-Aventus-1.jpg',
      desc: 'Batch ใหม่ ผลิตต้นปี 2021',
      marketplaces: ['lazada'],
      isActive: true
    },
    {
      _id: 8,
      productId: 3,
      name: 'woodsage-th',
      price: 5600,
      image: 'https://n.nordstrommedia.com/id/sr3/db7f9c7f-86cb-4828-a303-379d00c30831.jpeg',
      desc: 'ป้าย สคบ.ไทย (SEAL) + กล่องโบว์',
      marketplaces: ['shopee', 'lazada'],
      isActive: true
    },
    {
      _id: 9,
      productId: 3,
      name: 'woodsage-king',
      price: 4675,
      image: 'https://n.nordstrommedia.com/id/sr3/db7f9c7f-86cb-4828-a303-379d00c30831.jpeg',
      desc: 'ป้าย King Power (SEAL) + กล่องโบว์',
      marketplaces: ['shopee', 'lazada'],
      isActive: true
    }
  ],
  productList: [
    {
      _id: 1,
      name: 'Tom Ford : Noir de Noir',
      desc: '"Noir de Noir is dark, sexy and indulgent. Yin collides with Yang featuring black rose, black truffle and patchouli for an intense, sensual awakening."—TOM FORD',
      image: 'https://www.fenwick.co.uk/dw/image/v2/BBKK_PRD/on/demandware.static/-/Sites-fenwick-master-catalog/default/dw46146d85/images/large/0000102333.jpg',
      isActive: true
    },
    {
      _id: 2,
      name: 'Creed : Aventus',
      desc: 'Aventus celebrates strength, vision and success, inspired by the dramatic life of war, peace and romance lived by Emperor Napoleon. The bottle is emblazoned with a silver emblem of a horse and rider.',
      image: 'https://fimgs.net/mdimg/perfume/375x500.9828.jpg',
      isActive: true
    },
    {
      _id: 3,
      name: 'Jo Malone : Wood Sage & Sea Salt',
      desc: '‘Sea air is mixed with salty and mineral texture of sand and stones. As the scent of driftwood it has natural and fresh sophistication. A complex combination of wood and sea is in its essence. It provides the feeling of freedom and natural spirit.’',
      image: 'https://fimgs.net/mdimg/perfume/375x500.25529.jpg',
      isActive: true
    }
  ],
  stockList: [
    {
      _id: 1,
      date: new Date('2021-11-30'),
      marketplace: 'shopee',
      items: [
        { skuId: 1, price: 9200, amount: 10 },
        { skuId: 2, price: 12400, amount: 20 },
        { skuId: 3, price: 22000, amount: 30 }
      ]
    },
    {
      _id: 2,
      date: new Date('2021-12-01'),
      marketplace: 'lazada',
      items: [
        { skuId: 4, price: 12000, amount: 40 },
        { skuId: 5, price: 12000, amount: 50 }
      ]
    }
  ]
}
function delay (t, v) {
  return new Promise((resolve) => { 
    setTimeout(resolve.bind(null, v), t)
  })
}
function Mockup () {
  // TODO: do some initial things
  return {
    login () {},
    getAllProducts () {
      return Promise.resolve({
        reason: 'OK',
        result: masterdata.productList.filter(({isActive}) => isActive)
      })
    },
    getProduct (id) {
      return Promise.resolve({
        reason: 'OK',
        result: masterdata.productList.find(x => x._id === id)
      })
    },
    createProduct (name, desc, image) {
      const _id = masterdata.productList.length + 1
      masterdata.productList.push({ _id, name, desc, image })
      return Promise.resolve({
        reason: 'OK',
        result: { _id }
      })
    },
    updateProduct (id, name, desc, image) {
      return delay(700).then(() => {
        const product = masterdata.productList.find(({_id}) => _id === id)
        if (product) {
          Object.assign(product, { _id: id, name, desc, image })
          return Promise.resolve({
            reason: 'OK',
            result: { _id: id }
          })
        } else {
          return Promise.reject({
            reason: 'not found',
            result: null
          })
        }
      })
    },
    deleteProduct (id) {
      return delay(700).then(() => {
        const product = masterdata.productList.find(({_id}) => _id === id)
        if (product) {
          Object.assign(product, { ...product, isActive: false })
          return Promise.resolve({
            reason: 'OK',
            result: { _id: id }
          })
        } else {
          return Promise.reject({
            reason: 'not found',
            result: null
          })
        }
      })
    },
    getAllSKU () {
      const list = masterdata.skuList.filter(({isActive}) => isActive)
      const result = []
      for(let i in list) {
        const sku = {...list[i]}
        const product = masterdata.productList.find(({_id}) => _id === sku.productId)
        result.push({...sku, product})
      }
      return Promise.resolve({ reason: 'OK', result })
    },
    createSKU (productId, name, desc, price, image, marketplaces) {
      return delay(700).then(() => {
        const _id = masterdata.skuList.length + 1
        masterdata.skuList.push({ _id, productId, name, desc, price, image, marketplaces })
        const product = masterdata.productList.find(item => item._id === productId)
        return Promise.resolve({
          reason: 'OK',
          result: { _id, productId, product, name, desc, price, image, marketplaces }
        })
      })
    },
    getSKU (id) {
      const sku = masterdata.skuList.find(x => x._id === id)
      const product = masterdata.productList.find(item => item._id === sku.productId)
      return Promise.resolve({ reason: 'OK', result: {...sku, product} })
    },
    updateSKU (id, productId, name, desc, price, image, marketplaces) {
      return delay(700).then(() => {
        const sku = masterdata.skuList.find(({_id}) => _id === id)
        if (sku) {
          Object.assign(sku, { _id: id, productId, name, desc, price, image, marketplaces })
          const product = masterdata.productList.find(({_id}) => _id === sku.productId)
          return Promise.resolve({
            reason: 'OK',
            result: {...sku, product}
          })
        } else {
          return Promise.reject({
            reason: 'not found',
            result: null
          })
        }
      })
    },
    deleteSKU (id) {
      return delay(700).then(() => {
        const sku = masterdata.skuList.find(({_id}) => _id === id)
        if (sku) {
          Object.assign(sku, { ...sku, isActive: false })
          return Promise.resolve({
            reason: 'OK',
            result: { _id: id }
          })
        } else {
          return Promise.reject({
            reason: 'not found',
            result: null
          })
        }
      })
    },
    getAllStock () {
      const list = masterdata.stockList
      const result = []
      for(let i in list) {
        const stock = {...list[i]}
        const items = []
        for(let j in stock.items) {
          const item = {...stock.items[j]}
          const sku = masterdata.skuList.find(({_id}) => _id === item.skuId)
          items.push({...item, sku})
        }
        result.push({...stock, items})
      }
      return Promise.resolve({ reason: 'OK', result })
    },
    getStock (id) {
      const stock = masterdata.stockList.find(x => x._id === id)
      const items = []
      for(let j in stock.items) {
        const item = {...stock.items[j]}
        const sku = masterdata.skuList.find(({_id}) => _id === item.skuId)
        items.push({...item, sku})
      }
      return Promise.resolve({ reason: 'OK', result: {...stock, items} })
    },
    createStock(date, marketplace, items) {
      return delay(700).then(() => {
        const _id = masterdata.stockList.length + 1
        masterdata.stockList.push({ _id, date, marketplace, items })
        const skus = []
        for(let j in items) {
          const item = {...items[j]}
          const sku = masterdata.skuList.find(({_id}) => _id === item.skuId)
          skus.push({...item, sku})
        }
        return Promise.resolve({
          reason: 'OK',
          result: { _id, date, marketplace, items: skus }
        })
      })
    }
  }
}
export default Mockup