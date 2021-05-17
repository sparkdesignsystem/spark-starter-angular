import { Component } from '@angular/core';

@Component({
  selector: 'sprk-autocomplete-docs',
  template: `
  <sprk-input-container>
  <label sprkLabel>Text Input Label</label>
  <input name="text_input" type="text"  sprkInput />
</sprk-input-container>


  <sprk-autocomplete isOpen="true">
    <sprk-input-container>
      <div aria-live="polite" class="sprk-u-ScreenReaderText"></div>
      <label
        id="autocomplete-label"
        for="autocomplete-input"
        hasIcon="true"
        sprkLabel
      >
        Search for a Fruit
      </label>
      <div
        class="sprk-b-TextInputIconContainer"
        aria-labelledby="autocomplete-label"
        role="combobox"
        aria-haspopup="listbox"
      >
        <sprk-icon
          iconName="search"
          additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          "
          sprk-input-icon
          ariaHidden="true"
        ></sprk-icon>
        <input
          id="autocomplete-input"
          name="autocomplete-input"
          type="text"
          class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100"
          aria-describedby="autocomplete--error-container"
          aria-autocomplete="list"
          sprkInput
          idString="autocomplete-input1"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
        >
      </div>
      <ul
        sprkAutocompleteResults
        aria-labelledby="autocomplete-label"
        role="listbox"
        >
        <li sprkAutocompleteResult role="option">Apple</li>
        <li sprkAutocompleteResult role="option">Apricot</li>
        <li sprkAutocompleteResult role="option">Avocado</li>
        <li sprkAutocompleteResult role="option">Banana</li>
        <li sprkAutocompleteResult role="option">Blackberry</li>
        <li sprkAutocompleteResult role="option">Blueberry</li>
        <li sprkAutocompleteResult role="option">Clementine</li>
        <li sprkAutocompleteResult role="option">Fig</li>
        <li sprkAutocompleteResult role="option">Grape</li>
        <li sprkAutocompleteResult role="option">Kumquat</li>
        <li sprkAutocompleteResult role="option">Lemon</li>
        <li sprkAutocompleteResult role="option">Papaya</li>
      </ul>
    </sprk-input-container>
    <span sprkFieldError id="autocomplete--error-container">
    </span>
  </sprk-autocomplete>
  `,
  styles: ['']
})
export class AutocompleteDocsComponent {
  constructor() {}
}
