export default {
    template: `<p class="second">Second!</p><p class="timer"></p>`,
    props: {
        proxies: { timer: {} }
    },
    nodes() {
        return {
            timer: {
                textContent: () => this.proxy.timer
            }
        }
    }
}