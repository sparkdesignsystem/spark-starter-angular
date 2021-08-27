import { Component, ViewChild } from '@angular/core';
import { SprkAutocompleteComponent } from '@sparkdesignsystem/spark-angular';
import { AutocompletePipe } from './autocomplete-docs.pipe';
import { LiveAnnouncer } from "@angular/cdk/a11y";

@Component({
  selector: 'sprk-autocomplete-example-default',
  template: `
  <sprk-autocomplete (itemSelectedEvent)="selectItem($event)">
    <sprk-input-container>
      <label id="autocomplete-default-label" for="autocomplete-default-input" hasIcon="true" sprkLabel>
        Search for a Fruit
      </label>
      <div sprkAutocompleteInputContainer aria-labelledby="autocomplete-default-label" role="combobox"
        aria-haspopup="listbox">
        <sprk-icon iconName="search" additionalClasses="
            sprk-b-InputContainer__icon
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          " sprk-input-icon ariaHidden="true"></sprk-icon>
        <input id="autocomplete-default-input" name="autocomplete-default-input" type="text"
          class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100" aria-describedby="autocomplete-default--error-container"
          aria-autocomplete="list" sprkInput autocomplete="off" autocapitalize="off" spellcheck="false"
          (focus)="inputFocused()" (keydown)="inputKeydown($event)" [ngModel]="autocompleteValue" (ngModelChange)="inputChanged($event)" #exampleInput>
      </div>
      <ul sprkAutocompleteResults aria-labelledby="autocomplete-default-label" role="listbox">
        <ng-container *ngIf="(data | search:autocompleteValue) as result">
          <li *ngIf="result.length === 0" sprkAutocompleteResult>
            <div class="sprk-o-Flag">
              <div class="sprk-o-Flag__figure">
                <svg class="sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--filled sprk-c-Icon--filled-current-color"
                  aria-hidden="true" viewBox="0 0 100 100">
                  <use xlink:href="#exclamation-filled" />
                </svg>
              </div>
              <div class="sprk-o-Flag__body">
                <div class="sprk-b-TypeBodyOne">No Matches Found</div>
                <div>Please check your spelling and try again.</div>
              </div>
            </div>
          </li>
          <li *ngFor="let entry of result" sprkAutocompleteResult role="option" id={{entry.id}}>{{entry.value}}</li>
        </ng-container>
      </ul>
    </sprk-input-container>
    <span sprkFieldError id="autocomplete-default--error-container">
    </span>
  </sprk-autocomplete>
  `,
})
export class AutocompleteExampleDefaultComponent {
  constructor(private announcer: LiveAnnouncer, private autocompletePipe: AutocompletePipe<any>) { }

  autocompleteValue = '';

  data = [
    { id: 1, value: "Apple" },
    { id: 2, value: "Avocado" },
    { id: 3, value: "Banana" },
    { id: 4, value: "Blackberry" },
    { id: 5, value: "Blueberry" },
    { id: 6, value: "Clementine" },
    { id: 7, value: "Fig" },
    { id: 8, value: "Grape" },
    { id: 9, value: "Kumquat" },
    { id: 10, value: "Lemon" },
  ];

  @ViewChild(SprkAutocompleteComponent) sparkAutocomplete: SprkAutocompleteComponent;
  @ViewChild('exampleInput') exampleInput;

  inputChanged = (inputValue) => {
    const numberFound = this.autocompletePipe.transform(this.data, inputValue).length;

    this.announcer.announce(numberFound + " results found.");
    this.autocompleteValue = inputValue;
  }

  inputFocused = () => {
    this.sparkAutocomplete.showResults();
  }

  inputKeydown = (e) => {
    if (this.isTabPressed(e)) {
      const selectedId = this.exampleInput.nativeElement.getAttribute('aria-activedescendant');
      if (selectedId) {
        this.selectItem(selectedId);
      }

      this.sparkAutocomplete.hideResults();
    }
  }

  selectItem = (id) => {
    const selectedEntry = this.data.filter(x => x.id.toString() === id)[0];
    this.autocompleteValue = selectedEntry.value;
    this.sparkAutocomplete.hideResults();
  }

  isTabPressed = (e) => e.key === 'Tab' || e.keyCode === 9;
}

