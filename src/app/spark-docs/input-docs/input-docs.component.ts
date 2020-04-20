import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sprk-input-docs',
  template: `
  <sprk-selection-container>
    <label sprkLabel>
      Checkbox Group Label
    </label>

    <sprk-selection-item-container>
      <input type="checkbox" name="checkbox_input" [(ngModel)]="checkbox_input1" sprkSelectionInput
        #checkboxInput1="ngModel" data-id="checkbox-1" id="checkbox-1" (change)="onSelect($event)">

      <label for="checkbox-1" sprkSelectionLabel>
        Checkbox Item 1
      </label>
    </sprk-selection-item-container>

    <sprk-selection-item-container>
      <input type="checkbox" name="checkbox_input" [(ngModel)]="checkbox_input2" sprkSelectionInput
        #checkboxInput2="ngModel" data-id="checkbox-2" id="checkbox-2" (change)="onSelect($event)">

      <label for="checkbox-2" sprkSelectionLabel>
        Checkbox Item 2
      </label>
    </sprk-selection-item-container>

    <sprk-selection-item-container>
      <input type="checkbox" name="checkbox_input" [(ngModel)]="checkbox_input3" sprkSelectionInput
        #checkboxInput3="ngModel" data-id="checkbox-3" id="checkbox-3" (change)="onSelect($event)">

      <label for="checkbox-3" sprkSelectionLabel>
        Checkbox Item 3
      </label>
    </sprk-selection-item-container>
  </sprk-selection-container>

  <sprk-input-container>
    <label sprkLabel>Text Input Label</label>
    <input name="text_input" type="text" [(ngModel)]="text_input" #textInput="ngModel" sprkInput />
  </sprk-input-container>
  <sprk-input-container>
    <label sprkLabel>Text Input Label</label>
    <input class="sprk-b-TextInput--error" name="text_input" type="text" [(ngModel)]="text_input" #textInput="ngModel"
      sprkInput aria-invalid="true" />
    <span sprkFieldError>
      <sprk-icon iconType="exclamation-filled-small" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
      <div class="sprk-b-ErrorText">There is an error on this field.</div>
    </span>
  </sprk-input-container>
  <sprk-input-container>
    <label class="sprk-b-Label--disabled" sprkLabel>Text Input Label</label>
    <input name="text_input" type="text" [(ngModel)]="text_input" #textInput="ngModel" sprkInput disabled />
  </sprk-input-container>
  <sprk-input-container>
    <label sprkLabel>Date Input (No Picker)</label>
    <input name="date_input" type="text" placeholder="MM/DD/YYYY" [(ngModel)]="date_input" #dateInput="ngModel"
      sprkInput />
  </sprk-input-container>
  <sprk-icon-input-container>
    <label class="sprk-b-Label--with-icon" sprkLabel>
      Date Input
    </label>
    <sprk-icon iconType="calendar" additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-DatePicker__icon"
      sprk-input-icon></sprk-icon>
    <input name="datepicker_input" class="sprk-b-TextInput--has-svg-icon" type="text" placeholder="MM/DD/YYYY"
      [(ngModel)]="datepicker_input" #datepickerInput="ngModel" [sprkDatePickerConfig]="dpConfig" sprkDatepicker
      sprkInput />
  </sprk-icon-input-container>
  <sprk-huge-input-container>
    <select id="select-huge-1" aria-describedby="select-normal--error-container" data-id="select-huge-1"
      data-sprk-input="huge" sprkInput>
      <option value="" disabled selected hidden></option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <optgroup label="Grouped Options">
        <option value="g1">Grouped Option 1</option>
        <option value="g2">Grouped Option 2</option>
        <option value="g3">Grouped Option 3</option>
      </optgroup>
    </select>
    <label sprkLabel for="select-huge-1">Huge Select Box Label</label>
    <sprk-icon iconType="chevron-down" additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
      sprk-select-icon></sprk-icon>
  </sprk-huge-input-container>
  <sprk-huge-input-container>
    <input placeholder="Placeholder" name="text_input_huge" type="text" [(ngModel)]="text_input_huge" #textInput="ngModel"
      sprkInput />
    <label sprkLabel>Huge Text Input</label>
  </sprk-huge-input-container>
  <sprk-icon-input-container iconContainerClasses="sprk-b-TextInputIconContainer--has-text-icon">
    <label class="sprk-b-Label--monetary" sprkLabel>
      Payment
    </label>
    <input class="sprk-b-TextInput--has-text-icon" name="monetary_input" type="text" [(ngModel)]="monetary_input"
      #monetaryInput="ngModel" sprkInput />
  </sprk-icon-input-container>
  <sprk-input-container>
    <label sprkLabel>Password</label>
    <input type="{{passwordType}}" name="password_input" sprkInput />
    <sprk-selection-item-container additionalClasses="sprk-b-InputContainer__visibility-toggle">
      <input type="checkbox" sprkSelectionInput id="show-password" (click)="togglePasswordType()" />
      <label for="show-password" sprkSelectionLabel>Show Password</label>
    </sprk-selection-item-container>
  </sprk-input-container>
  <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
    <label sprkLabel>Percentage</label>
    <sprk-icon iconType="percent" additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
      sprk-input-icon></sprk-icon>
    <input class="sprk-b-InputContainer__input--has-icon-right" name="percentage" type="tel" sprkInput />
  </sprk-icon-input-container>
  <sprk-input-container>
    <label sprkLabel>Phone Number</label>
    <input name="phone_input" type="text" placeholder="(000) 000-0000" [(ngModel)]="phone_input" #phoneInput="ngModel"
      sprkInput />
  </sprk-input-container>
  <sprk-selection-container>
    <label sprkLabel>Radio Group Label</label>
    <sprk-selection-item-container>
      <input type="radio" value="1" name="radio_input" [(ngModel)]="radio_input" sprkSelectionInput #radioInput="ngModel"
        data-id="radio-1" id="radio-1" (change)="onRadioSelect($event)">
      <label for="radio-1" sprkSelectionLabel>
        Item 1
      </label>
    </sprk-selection-item-container>
    <sprk-selection-item-container>
      <input type="radio" value="2" name="radio_input" sprkSelectionInput [(ngModel)]="radio_input" #radioInput="ngModel"
        data-id="radio-2" id="radio-2" (change)="onRadioSelect($event)">
      <label for="radio-2" sprkSelectionLabel>
        Item 2
      </label>
    </sprk-selection-item-container>
    <sprk-selection-item-container>
      <input type="radio" value="3" name="radio_input" sprkSelectionInput [(ngModel)]="radio_input" #radioInput="ngModel"
        data-id="radio-3" id="radio-3" (change)="onRadioSelect($event)">
      <label for="radio-3" sprkSelectionLabel>
        Item 3
      </label>
    </sprk-selection-item-container>
  </sprk-selection-container>
  <sprk-icon-input-container>
    <label class="sprk-b-Label--with-icon sprk-u-ScreenReaderText" sprkLabel>
      Search
    </label>
    <sprk-icon iconType="search" additionalClasses="sprk-b-InlineSearch__icon sprk-c-Icon--stroke-current-color"
      sprk-input-icon></sprk-icon>
    <input name="inline_search_input" class="sprk-b-TextInput--has-svg-icon" type="search" placeholder="Search"
      [(ngModel)]="inline_search_input" #inlineSearchInput="ngModel" data-id="input-search-1" sprkInput>
  </sprk-icon-input-container>
  <sprk-input-container>
    <select class="sprk-b-Select" id="select-normal-1" aria-describedby="select-normal--error-container"
      data-id="select-1" sprkInput>
      <option value="none">Please choose...</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      <optgroup label="Grouped Options">
        <option value="g1">Grouped Option 1</option>
        <option value="g2">Grouped Option 2</option>
        <option value="g3">Grouped Option 3</option>
      </optgroup>
    </select>
    <sprk-icon iconType="chevron-down" additionalClasses="sprk-c-Icon--stroke-current-color sprk-b-SelectContainer__icon"
      sprk-select-icon></sprk-icon>
    <label sprkLabel for="select-normal-1">Select Box Label</label>
  </sprk-input-container>
  <sprk-input-container>
    <label for="ssn-input" sprkLabel>SSN Input</label>
    <input type="{{ssnType}}" placeholder="000-00-0000" name="ssn_input" [(ngModel)]="ssn_input" #ssnInput="ngModel"
      data-id="ssn-1" id="ssn-input" sprkInput>
    <sprk-selection-item-container additionalClasses="sprk-b-InputContainer__visibility-toggle">
      <input type="checkbox" sprkSelectionInput (click)="toggleSSNType()" data-id="ssn-reveal-3" id="show-ssn">
      <label for="show-ssn" sprkSelectionLabel>Show SSN</label>
    </sprk-selection-item-container>
  </sprk-input-container>
  <sprk-textarea-container>
    <label for="textarea-1" sprkLabel>Description</label>
    <textarea name="textarea_input" id="textarea-1" [(ngModel)]="textarea_input" #textareaInput="ngModel"
      data-id="textarea-1" sprkInput></textarea>
  </sprk-textarea-container>
  `
})
export class InputDocsComponent {
  constructor() { }

  text_input = '';
  passwordType = 'password';
  ssnType = 'password';

  togglePasswordType(): void {
    this.passwordType === 'password'
      ? (this.passwordType = 'text')
      : (this.passwordType = 'password');
  }

  toggleSSNType(): void {
    this.ssnType === 'password'
      ? (this.ssnType = 'text')
      : (this.ssnType = 'password');
  }

  onSelect() { }

  onRadioSelect($event) { }
}
