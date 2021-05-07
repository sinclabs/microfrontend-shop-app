class DSButton extends HTMLElement {
    shadow: ShadowRoot

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        return ['label', 'color'];
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
        const button = this.shadowRoot?.querySelector(".button") as HTMLButtonElement
        switch (name) {
            case 'label':
                if(button) button.innerText = newValue
                break;
            case 'color':
                if(button) {
                    button.style.backgroundColor = newValue
                    button.style.border = `0.15em solid ${newValue}`  
                } 
                break;
        }
      }

    connectedCallback() {
        this.render()

        this.setAttribute('label', this.getAttribute('label') ?? "");
        this.setAttribute('color', this.getAttribute('color') ?? "#EF6461");
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                button {
                    display:inline-block;
                    padding:0.2em 1.45em;
                    border:0.15em solid #EF6461;
                    box-sizing: border-box;
                    text-decoration:none;
                    font-family:'Segoe UI','Roboto',sans-serif;
                    font-weight:400;
                    font-size: 16px;
                    color:#fff;
                    background-color:#EF6461;
                    text-align:center;
                    position:relative;
                    cursor: pointer;
                    width: 100%;
                    margin-top: 10px;
                }
                button:hover {
                    border-color:#7a7a7a;
                }
                button:active {
                    background-color:#999999;
                }
                @media all and (max-width:30em){
                    button {
                        display:block;
                        margin:0.2em auto;
                    }
                }
            </style>
            <button class="button"></button>
        `
    }
}

customElements.define('ds-button', DSButton)