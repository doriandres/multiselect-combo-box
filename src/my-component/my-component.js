import {PolymerElement, html} from '@polymer/polymer/polymer-element';

export class MyComponent extends PolymerElement{
    static get is(){
        return 'my-component';
    }

    static get template(){
        return html`
            <div id="queso">Hola</div>
        `;
    }

    ready(){
        super.ready();
        console.log(this.$.queso);
        console.log(this);        
    }
}

if(!customElements.get(MyComponent.is)){
    customElements.define(MyComponent.is, MyComponent);
}
