import '@vaadin/vaadin-material-styles/font-icons';
import '@vaadin/vaadin-material-styles/mixins/required-field';
import '@vaadin/vaadin-material-styles/color';
import '@polymer/polymer/lib/elements/dom-module';
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML =
`
<dom-module id="material-multiselect-combo-box" theme-for="multiselect-combo-box">
  <template>
    <style include="material-required-field">
      :host {
        outline: none;
        position: relative;
      }

      :host([has-label]) {
        padding-top: 24px;
      }

      :host([focused]:not([readonly]):not([invalid]):not([disabled])) [part="label"] {
        color: var(--material-primary-text-color);
      }

      :host(:hover:not([readonly]):not([focused]):not([invalid]):not([disabled])) [part="input-field"]::after {
        opacity: 0.1;
      }

      :host(:hover:not([readonly]):not([invalid]):not([disabled])) [part="input-field"]::before {
        opacity: var(--_material-text-field-input-line-hover-opacity, 0.87)
      }

      :host([focused]) [part="input-field"]::after,
      :host([invalid]) [part="input-field"]::after {
        opacity: 1;
        transform: none;
        transition: transform 0.175s, opacity 0.175s;
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--material-error-color);
      }

      :host([has-label]:not([has-value]):not([focused]):not([invalid]):not([theme="always-float-label"]):not([compact-mode]):not([disabled])) [part="label"] {
        transform: scale(1) translateY(24px);
        transition-timing-function: ease, ease, step-start;
        pointer-events: none;
        left: auto;
        transition-delay: 0.1s;
      }

      [part="label"] {
        transition: transform 0.175s, color 0.175s, width 0.175s;
        transition-timing-function: ease, ease, step-end;
      }

      [part="label"]:empty::before {
        content: " ";
        position: absolute;
      }

      [part="readonly-container"] {
        color: var(--material-secondary-text-color);
        padding: var(--material-space-s);
        border: 1px dashed var(--_material-text-field-input-line-background-color, #000);
        border-radius: var(--lumo-border-radius);
      }
    </style>
  </template>
</dom-module>

<dom-module id="material-combo-box-item-theme" theme-for="vaadin-combo-box-item">
    <template>
      <style>
        :host(.multiselect)::before {
          display: none !important;
        }

        :host(.multiselect) [part="item-template"] {
          display: flex;
          font-size: var(--material-small-font-size);
        }

        :host(.multiselect) [part="content"] [part="item-template"]::before {
          display: var(--_material-item-selected-icon-display, none);
          content: "";
          font-family: material-icons;
          font-size: 24px;
          line-height: 1;
          font-weight: 400;
          width: 24px;
          text-align: center;
          margin-right: 10px;
          color: var(--material-secondary-text-color);
          flex: none;
        }

        :host(.multiselect) [part="content"] [part="item-template"][selected]::before {
          content: var(--material-icons-check);
          display: block;
        }
      </style>
    </template>
  <dom-module>

  <dom-module id="material-input-field-theme" theme-for="vaadin-text-field">
    <template>
      <style>
        :host(.multiselect) [part="input-field"],
        :host(.multiselect) [part="input-field"]::after {
          background-color: transparent;
          font-size: var(--material-small-font-size);
        }

        :host(.multiselect) [part="input-field"]::before {
          display: none;
        }

        :host(.multiselect[compact-mode]) [part="input-field"] {
          cursor: default;
        }

        :host(.multiselect[compact-mode]) [part="input-field"] [part="value"] {
          visibility: hidden;
        }

        /* placeholder styles */
        :host(.multiselect) [part="input-field"] [part="value"]::-webkit-input-placeholder {
          color: var(--material-disabled-text-color);
          transition: opacity 0.175s 0.05s;
          opacity: 1;
        }

        :host(.multiselect) [part="input-field"] [part="value"]::-moz-placeholder {
          color: var(--material-disabled-text-color);
          transition: opacity 0.175s 0.05s;
          opacity: 1;
        }

        :host(.multiselect) [part="input-field"] [part="value"]::placeholder {
          color: var(--material-disabled-text-color);
          transition: opacity 0.175s 0.05s;
          opacity: 1;
        }

        :host(.multiselect[multiselect-has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="input-field"] [part="value"]::-webkit-input-placeholder,
        :host(.multiselect[multiselect-has-value]) [part="input-field"] [part="value"]::-webkit-input-placeholder {
          opacity: 0;
          transition-delay: 0;
        }

        :host(.multiselect[multiselect-has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="input-field"] [part="value"]::-moz-placeholder,
        :host(.multiselect[multiselect-has-value]) [part="input-field"] [part="value"]::-moz-placeholder {
          opacity: 0;
          transition-delay: 0;
        }

        :host(.multiselect[multiselect-has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="input-field"] [part="value"]::placeholder,
        :host(.multiselect[multiselect-has-value]) [part="input-field"] [part="value"]::placeholder {
          opacity: 0;
          transition-delay: 0;
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild($_documentContainer.content);
