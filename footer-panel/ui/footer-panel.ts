class FooterPanel extends HTMLElement {
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
                .footer {
                    font-family: sans-serif;
                    text-align: center;
                    background-color: #E4B363;
                    color: #313638;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    height: 100%;
                    padding-top: 1em;
                    padding-bottom: 0.5em;
                }
                h3 {
                    margin: 0;
                }
            </style>
            <div class="footer">
                <h3>Thanks for shopping with us!</h3>
            </div>
        `
    }
}

customElements.define('footer-panel', FooterPanel)