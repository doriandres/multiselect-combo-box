import {PolymerElement} from '@polymer/polymer/polymer-element';
import {ThemePropertyMixin} from '@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin';
import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin';
import {MultiselectComboBoxMixin} from './../multiselect-combo-box-mixin/multiselect-combo-box-mixin';
import {html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@vaadin/vaadin-text-field/vaadin-text-field';
export class MultiselectComboBoxInput extends ThemePropertyMixin(ThemableMixin(MultiselectComboBoxMixin(PolymerElement))) {    
    static get is() {
        return 'multiselect-combo-box-input';
    }
    static get properties() {
        return {
            value: {
                type: String,
                value: '',
                notify: true
            }
        };
    }    
    static get template () {
        return html`
    <div id="tokens" part="tokens" slot="prefix">
      <template is="dom-if" if="[[compactMode]]" restamp>
        <div part="compact-mode-label">[[_getCompactModeDisplayValue(items, items.*)]]</div>
      </template>

      <template is="dom-if" if="[[!compactMode]]" restamp>
        <template is="dom-repeat" items="[[items]]">
          <div part="token">
            <div part="token-label">[[_getItemDisplayValue(item, itemLabelPath)]]</div>
            <div part="token-remove-button" title="remove" role="button" on-click="_removeToken"></div>
          </div>
        </template>
      </template>

      <vaadin-text-field
        id="inputField"
        class="multiselect"
        part="input-field"
        value="{{value}}"
        placeholder="[[placeholder]]"
        on-keydown="_onKeyDown"
        multiselect-has-value$="[[hasValue]]"
        multiselect-has-label$="[[hasLabel]]"
        compact-mode$="[[compactMode]]"
        theme$="[[theme]]"
        disabled="[[disabled]]">

        <div id="clearButton" part="clear-button" slot="suffix" role="button" on-click="_removeAll"></div>
        <div id="toggleButton" part="toggle-button" slot="suffix" role="button"></div>
      </vaadin-text-field>
    </div>
    `;
    }
    _removeToken(event) {
        this._removeSelected(event.model.item);
        event.stopPropagation();
    }
    _onKeyDown(event) {
        if (event.keyCode === 8 && this.items.length && this.$.inputField.value === '') {
            this._removeSelected(this.items[this.items.length - 1]);
        }
    }
    _removeSelected(item) {
        this.dispatchEvent(new CustomEvent('item-removed', {
            composed: true,
            bubbles: true,
            detail: {
                item: item
            }
        }));
    }
    _removeAll(event) {
        event.stopPropagation();
        this.dispatchEvent(new CustomEvent('remove-all-items', {
            composed: true,
            bubbles: true
        }));
    }
    _resolvePlaceholder(compactMode, placeholder) {
        return compactMode ? '' : placeholder;
    }
}
customElements.define(MultiselectComboBoxInput.is, MultiselectComboBoxInput);