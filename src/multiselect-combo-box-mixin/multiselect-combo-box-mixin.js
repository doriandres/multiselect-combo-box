export const MultiselectComboBoxMixin = (base) => class extends base {  
  static get properties() {
    return {
      /**
       * The list of items.
       */
      items: {
        type: Array,
        value: () => []
      },

      /**
       * The input placeholder.
       */
      placeholder: {
        type: String,
        value: ''
      },

      /**
       * This attribute indicates that the component has a value.
       */
      hasValue: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * This attribute indicates that the component has a label.
       */
      hasLabel: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * This attribute indicates that the component is rendered in 'compact mode'.
       * In this mode, the component displays the number of items currently selected.
       */
      compactMode: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },

      /**
       * The item property to be used as the `label` in combo-box.
       */
      itemLabelPath: String,

      /**
       * The item property to be used as the `value` of combo-box.
       */
      itemValuePath: String,

      /**
       * Path for the id of the item. If `items` is an array of objects,
       * the `itemIdPath` is used to compare and identify the same item
       * in `selectedItem`.
       */
      itemIdPath: String,

      /**
       * The theme name attribute.
       * Used to communicate theme information to
       * component internals (currently used for the material theme).
       */
      theme: String,

      /**
       * Set to true to disable this element.
       */
      disabled: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      }
    };
  }

  /**
   * Returns the item display value.
   */
  _getItemDisplayValue(item, itemLabelPath) {
    return item && item.hasOwnProperty(itemLabelPath) ? item[itemLabelPath] : item;
  }

  /**
   * Retrieves the component display value when in compact mode.
   */
  _getCompactModeDisplayValue(items) {
    const suffix = (items.length === 0 || items.length > 1) ? 'values' : 'value';
    return `${items.length} ${suffix}`;
  }
};