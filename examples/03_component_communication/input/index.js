export default {
    template: `<input class="input">`,
    props: {
        params: {
            placeholder: {}
        },
        proxies: {
            value: {},
            disabled: {}
        },
        methods: {
            change: {}
        }
    },
    methods: {
        toggle() {
            this.proxy.disabled = !this.proxy.disabled
        }
    },
    nodes() {
        return {
            input: {
                placeholder: () => this.param.placeholder,
                value: () => this.proxy.value,
                onkeyup: (event) => this.method.change(event.target.value),
                disabled: () => this.proxy.disabled
            }
        }
    }
}
