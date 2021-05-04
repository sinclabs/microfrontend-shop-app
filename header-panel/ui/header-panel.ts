class HeaderPanel extends HTMLElement {
    shadow: ShadowRoot

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                .header {
                    font-family: sans-serif;
                    text-align: center;
                    background-color: #E4B363;
                    color: #313638;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                    height: 100%;
                    padding-top: 0.67em;
                    padding-bottom: 0.67em;
                }
                h1 {
                    margin: 0;
                }
            </style>
            <div class="header">
                <h1>Kick-Ass Shop</h1>
            </div>
        `
    }
}

customElements.define('header-panel', HeaderPanel)