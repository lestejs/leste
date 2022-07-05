export default {
    template: `
    <style>
        .window {
            border: 2px solid gray;
            width: 300px;
            min-height: 100px;
            position: absolute;
            background: white;
            top: 30%;
        }
        .hide {
           display: none;    
        }
    </style>
    <div class="window">
        <div class="close">close</div>
        <div class="content" slot></div>
    </div>`,
    props: {
        proxies: { hide: {} },
        methods: { close: {} }
    },
    nodes() {
        return {
            window: {
                classes: {
                    hide: () => {
                        return this.proxy.hide
                    }
                }
            },
            close: {
                onclick: () => {
                    this.proxy.hide = true
                    this.method.close && this.method.close()
                }
            }
        }
    }
}