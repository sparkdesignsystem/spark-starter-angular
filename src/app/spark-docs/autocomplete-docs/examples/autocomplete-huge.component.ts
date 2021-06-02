import { Component, ViewChild } from '@angular/core';
import { SprkAutocompleteComponent } from '@sparkdesignsystem/spark-angular';
import { AutocompletePipe } from './autocomplete-docs.pipe';
import { LiveAnnouncer } from "@angular/cdk/a11y";

@Component({
  selector: 'sprk-autocomplete-example-huge',
  template: `
  <sprk-autocomplete (itemSelectedEvent)="selectItem($event)">
    <sprk-input-container variant="huge">
      <div
        sprkAutocompleteInputContainer
        aria-labelledby="autocomplete-label4"
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
          id="autocomplete-input4"
          name="autocomplete-input4"
          type="text"
          placeholder="Search for a Fruit"
          class="sprk-u-Width-100"
          aria-describedby="autocomplete-huge--error-container"
          aria-autocomplete="list"
          sprkInput
          variant="huge"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          (focus)="inputFocused()" (keydown)="inputKeydown($event)" [ngModel]="autocompleteValue" (ngModelChange)="inputChanged($event)" #exampleInput
        >
        <label
          id="autocomplete-label4"
          for="autocomplete-input4"
          sprkLabel
        >
          Search for a Fruit
        </label>
      </div>
      <ul
        aria-labelledby="autocomplete-label4"
        sprkAutocompleteResults
        role="listbox"
      >
        <ng-container *ngIf="(data | search:autocompleteValue) as result">
          <li *ngIf="result.length === 0" class="sprk-c-Autocomplete__result">
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
    <span sprkFieldError id="autocomplete-huge--error-container">
    </span>
  </sprk-autocomplete>
  `,
})
export class AutocompleteExampleHugeComponent {
  constructor(private announcer: LiveAnnouncer, private autocompletePipe: AutocompletePipe<any>) { }

  autocompleteValue = '';

  data = [
    { id: 51, value: "Apple" },
    { id: 52, value: "Avocado" },
    { id: 53, value: "Banana" },
    { id: 54, value: "Blackberry" },
    { id: 55, value: "Blueberry" },
    { id: 56, value: "Clementine" },
    { id: 57, value: "Fig" },
    { id: 58, value: "Grape" },
    { id: 59, value: "Kumquat" },
    { id: 60, value: "Lemon" },
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
