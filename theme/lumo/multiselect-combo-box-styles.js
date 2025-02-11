import '@vaadin/vaadin-lumo-styles/font-icons';
import '@vaadin/vaadin-lumo-styles/mixins/required-field';
import '@polymer/polymer/lib/elements/dom-module';
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `
    <dom-module id="lumo-multiselect-combo-box" theme-for="multiselect-combo-box">
        <template>
            <style include="lumo-required-field">

            :host {
                outline: none;
                --lumo-text-field-size: var(--lumo-size-m);
                color: var(--lumo-body-text-color);
                font-size: var(--lumo-font-size-m);
                font-family: var(--lumo-font-family);
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                -webkit-tap-highlight-color: transparent;
                padding: var(--lumo-space-xs) 0;
            }

            :host::before {
                content: "2003";
                width: 0;
                box-sizing: border-box;
                display: inline-flex;
                align-items: center;
            }

            :host([focused]:not([readonly]):not([disabled])) [part="label"] {
                color: var(--lumo-primary-text-color);
            }

            :host(:hover:not([readonly]):not([focused]):not([disabled])) [part="label"] {
                color: var(--lumo-body-text-color);
            }

            :host([disabled]) [part="label"] {
                color: var(--lumo-disabled-text-color);
                -webkit-text-fill-color: var(--lumo-disabled-text-color);
            }

            [part="input-field"] {
                background-color: var(--lumo-contrast-10pct);
            }

            :host(:hover:not([readonly]):not([focused]):not([disabled])) [part="input-field"]::after {
                opacity: 0.1;
            }

            [part="input-field"]::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                pointer-events: none;
                background-color: var(--lumo-contrast-50pct);
                opacity: 0;
                transition: transform 0.15s, opacity 0.2s;
                transform-origin: 100% 0;
            }

            :host([invalid]) [part="input-field"] {
                background-color: var(--lumo-error-color-10pct);
            }

            /* Trigger when not focusing using the keyboard */
            :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
                transform: scaleX(0);
                transition-duration: 0.2s, 1s;
            }

            [part="readonly-container"] {
                color: var(--lumo-secondary-text-color);
                padding: var(--lumo-space-s);
                border: 1px dashed var(--lumo-contrast-30pct);
                border-radius: var(--lumo-border-radius);
            }
            </style>
        </template>
    </dom-module>
    <dom-module id="lumo-combo-box-item-theme" theme-for="vaadin-combo-box-item">
        <template>
            <style>
                :host(.multiselect)::before {
                display: none !important;
                }

                :host(.multiselect) [part="item-template"] {
                display: flex;
                font-size: var(--lumo-font-size-s);
                }

                :host(.multiselect) [part="content"] [part="item-template"]::before {
                content: var(--lumo-icons-checkmark);
                font-family: lumo-icons;
                font-size: var(--lumo-icon-size-m);
                line-height: 1;
                font-weight: normal;
                width: 1em;
                height: 1em;
                margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
                color: var(--lumo-primary-text-color);
                flex: none;
                opacity: 0;
                transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
                }

                :host(.multiselect) [part="content"] [part="item-template"][selected]::before {
                opacity: 1;
                }
            </style>
        </template>
    <dom-module>
    <dom-module id="lumo-input-field-theme" theme-for="vaadin-text-field">
        <template>
            <style>
                :host(.multiselect) [part="input-field"],
                :host(.multiselect) [part="input-field"]::after {
                background-color: transparent !important;
                }

                :host(.multiselect[compact-mode]) [part="input-field"] {
                cursor: default;
                }

                :host(.multiselect[compact-mode]) [part="input-field"]::after {
                border: none;
                }

                :host(.multiselect[compact-mode]) [part="input-field"] [part="value"] {
                visibility: hidden;
                }
            </style>
        </template>
    </dom-module>
`;

document.head.appendChild($_documentContainer.content);