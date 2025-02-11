import '@vaadin/vaadin-lumo-styles/typography';
import '@vaadin/vaadin-lumo-styles/style';
import '@vaadin/vaadin-lumo-styles/mixins/field-button';
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = 
`
  <style include="lumo-field-button">
      :host {
        display: flex;
        border-radius: var(--lumo-border-radius);
        border-color: var(--lumo-contrast-10pct);
        outline: none;
      }

      :host([disabled]) [part="token-label"],
      :host([disabled]) [part="token-remove-button"],
      :host([disabled]) [part="compact-mode-label"] {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
        pointer-events: none;
      }

      [part="input-field"] {
        flex: 1 1;
        min-width: 80px;
        padding: 0;
      }

      [part="compact-mode-label"] {
        display: flex;
        flex-grow: 1;
        align-items: center;
        margin: var(--lumo-space-s);
        color: var(--lumo-contrast-70pct);
        cursor: default;
      }

      [part="tokens"] {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
        width: 100%;
        min-width: 0;
      }

      [part="token"] {
        display: flex;
        flex: 0 0 25px;
        align-items: center;
        padding-left: var(--lumo-space-s);
        margin: var(--lumo-space-xs);
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        cursor: default;
        white-space: nowrap;
        height: calc(var(--lumo-size-m) - 2 * var(--lumo-space-xs));
        box-sizing: border-box;
      }
      [part="token"] + [part="token"] {
        margin-left: 0;
      }

      [part="token-label"] {
        display: flex;
        align-items: center;
        font-size: var(--lumo-font-size-s);
        color: var(--lumo-body-text-color);
        font-weight: 500;
      }

      [part="token-remove-button"] {
        font-size: var(--lumo-icon-size-s);
        padding-right: var(--lumo-space-xs);
      }

      [part="token-remove-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }

      :host(:not([has-value])) [part="clear-button"] {
        display: none;
      }
  </style>
`;
document.head.appendChild($_documentContainer.content);