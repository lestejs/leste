import Store from '~/store'
import localforage from 'localforage'

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}


const store = localforage.createInstance({
  name: "todolist"
})

export default new Store({
  name: 'cards',
  proxies: {
    cards: [{
                id: 'fgr64t43',
                url: 'https://worldclassmag.com/files/nodus_items/0004/2216/attaches/fuji.jpg',
                title: 'links1',
                desc: 'Big Shoes',
                price: '$100'
              },
      {
        id: 'fgr64t45',
        url: 'https://worldclassmag.com/files/nodus_items/0004/2216/attaches/fuji.jpg',
        title: 'links2',
        desc: 'Big Shoes',
        price: '$100'
      }]
  },
  methods: {
    set() {
      store.getItem('cards').then((data)=> {
        if (data) {
          this.proxy.cards = data
        }
      })
    },
    edit(card) {
      const index = this.proxy.cards.findIndex(c => c.id === card.id)
      const cards = this.release(this.proxy.cards)
      if (index !== -1) {
        cards[index] = card
      }
      store.setItem('cards', cards).then(()=> {
        this.proxy.cards[index] = card
      })
    },
    add(card) {
      card.id = generateId()
      const cards = this.release(this.proxy.cards)
      cards.unshift(card)
      store.setItem('cards', cards).then(()=> {
        this.proxy.cards.unshift(card)
      })
    },
    select(_, card) {
      const index = this.proxy.cards.findIndex(c => c.id === card.id)
      const cards = this.release(this.proxy.cards)
      if (index !== -1) {
        cards[index].selected = !cards[index].selected
      }
      store.setItem('cards', cards).then(()=> {
        this.proxy.cards[index] = cards[index]
      })
    },
    remove(_, card) {
      const index = this.proxy.cards.findIndex(c => c.id === card.id)
      const cards = this.release(this.proxy.cards)
      if (index !== -1) {
        cards.splice(index, 1)
      }
      store.setItem('cards', cards).then(()=> {
        this.proxy.cards.splice(index, 1)
      })
    }
  }
})