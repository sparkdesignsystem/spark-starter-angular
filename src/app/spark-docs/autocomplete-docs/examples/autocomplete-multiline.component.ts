import { Component, ViewChild } from '@angular/core';
import { SprkAutocompleteComponent } from '@sparkdesignsystem/spark-angular';
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AutocompleteMultilinePipe } from './autocomplete-docs-multiline.pipe';

@Component({
  selector: 'sprk-autocomplete-example-multiline',
  template: `
  <sprk-autocomplete (itemSelectedEvent)="selectItem($event)">
    <sprk-input-container>
      <label id="autocomplete-multiline-label" for="autocomplete-multiline-input" hasIcon="true" sprkLabel>
        Search for a City
      </label>
      <div class="sprk-b-TextInputIconContainer" aria-labelledby="autocomplete-multiline-label" role="combobox"
        aria-haspopup="listbox">
        <sprk-icon iconName="search" additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          " sprk-input-icon ariaHidden="true"></sprk-icon>
        <input id="autocomplete-multiline-input" name="autocomplete-multiline-input" type="text"
          class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100" aria-describedby="autocomplete-multiline--error-container"
          aria-autocomplete="list" sprkInput autocomplete="off" autocapitalize="off" spellcheck="false"
          (focus)="inputFocused()" (keydown)="inputKeydown($event)" [ngModel]="autocompleteValue" (ngModelChange)="inputChanged($event)" #exampleInput>
      </div>
      <ul sprkAutocompleteResults aria-labelledby="autocomplete-multiline-label" role="listbox">
        <ng-container *ngIf="(data | search_multiline:autocompleteValue) as result">
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
          <li *ngFor="let entry of result" sprkAutocompleteResult role="option" id={{entry.id}}>{{entry.value1}}, {{entry.value2}}</li>
        </ng-container>
      </ul>
    </sprk-input-container>
    <span sprkFieldError id="autocomplete-multiline--error-container">
    </span>
  </sprk-autocomplete>
  `,
})
export class AutocompleteExampleMultilineComponent {
  constructor(private announcer: LiveAnnouncer, private autocompletePipe: AutocompleteMultilinePipe<any>) { }

  autocompleteValue = '';

  data = [
    { id: 21, value1: "Detroit", value2: "Michigan" },
    { id: 22, value1: "Chicago", value2: "Illinois" },
    { id: 23, value1: "New York", value2: "New York" },
    { id: 24, value1: "Portland", value2: "Oregon" },
    { id: 25, value1: "San Francisco", value2: "California" },
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
    this.autocompleteValue = selectedEntry.value1 + ", " + selectedEntry.value2;
    this.sparkAutocomplete.hideResults();
  }

  isTabPressed = (e) => e.key === 'Tab' || e.keyCode === 9;
}
