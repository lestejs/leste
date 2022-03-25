import Store from '~/leste/store'

export default new Store({
  name: 'cards',
  proxies: {
    cards: [
      {
        url: 'https://worldclassmag.com/files/nodus_items/0004/2216/attaches/fuji.jpg',
        label: 'links'
      },
      {
        url: 'https://worldclassmag.com/files/nodus_items/0004/2216/attaches/fuji.jpg',
        label: 'cards'
      }
    ],
  },
  methods: {
    setCards() {
      this.proxy.cards = localStorage.getItem('cards')
    },
    saveCards(card) {
      this.proxy.cards.push(card)
      // localStorage.setItem('cards', this.proxy.cards)
    },
    remove(index) {
      this.proxy.cards.splice(index, 1)
    }
  }
})