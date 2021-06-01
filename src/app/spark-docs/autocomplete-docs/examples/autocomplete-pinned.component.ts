import { Component, ViewChild } from '@angular/core';
import { SprkAutocompleteComponent } from '@sparkdesignsystem/spark-angular';
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AutocompletePipe } from './autocomplete-docs.pipe';

@Component({
  selector: 'sprk-autocomplete-example-pinned',
  template: `
  <sprk-autocomplete (itemSelectedEvent)="selectItem($event)">
    <sprk-input-container>
      <label id="autocomplete-pinned-label" for="autocomplete-pinned-input" hasIcon="true" sprkLabel>
        Search for a Fruit
      </label>
      <div sprkAutocompleteInputContainer aria-labelledby="autocomplete-pinned-label" role="combobox"
        aria-haspopup="listbox">
        <sprk-icon iconName="search" additionalClasses="
            sprk-b-InlineSearch__icon
            sprk-c-Icon--filled-current-color
            sprk-c-Icon--stroke-current-color
          " sprk-input-icon ariaHidden="true"></sprk-icon>
        <input id="autocomplete-pinned-input" name="autocomplete-pinned-input" type="text"
          class="sprk-b-TextInput--has-svg-icon sprk-u-Width-100" aria-describedby="autocomplete-pinned--error-container"
          aria-autocomplete="list" sprkInput autocomplete="off" autocapitalize="off" spellcheck="false"
          (focus)="inputFocused()" (keydown)="inputKeydown($event)" [ngModel]="autocompleteValue" (ngModelChange)="inputChanged($event)" #exampleInput>
      </div>
      <ul sprkAutocompleteResults aria-labelledby="autocomplete-pinned-label" role="listbox">
        <ng-container *ngIf="(data | search:autocompleteValue) as result">
          <li class="sprk-c-Autocomplete__result">
            <div class="sprk-o-Flag">
              <div class="sprk-o-Flag__figure">
                <svg class="sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--filled sprk-c-Icon--filled-current-color"
                  viewBox="0 0 34 34">
                  <use xlink:href="#townhouse" />
                </svg>
              </div>
              <div class="sprk-o-Flag__body">
                <a class="sprk-b-Link sprk-b-Link--simple" href="javascript:alert('link to somewhere');">
                  <div>Homes in your area</div>
                </a>
              </div>
            </div>
          </li>
          <li class="sprk-c-Autocomplete__result">
            <div class="sprk-o-Flag">
              <div class="sprk-o-Flag__figure">
                <svg class="sprk-c-Icon sprk-c-Icon--l sprk-c-Icon--filled sprk-c-Icon--filled-current-color"
                  viewBox="0 0 34 34">
                  <use xlink:href="#rates" />
                </svg>
              </div>
              <div class="sprk-o-Flag__body">
                <a class="sprk-b-Link sprk-b-Link--simple" href="javascript:alert('link to somewhere');">
                  <div>Trends in your area</div>
                </a>
              </div>
            </div>
          </li>
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
    <span sprkFieldError id="autocomplete-pinned--error-container">
    </span>
  </sprk-autocomplete>
  `,
})
export class AutocompleteExamplePinnedComponent {
  constructor(private announcer: LiveAnnouncer, private autocompletePipe: AutocompletePipe<any>) { }

  autocompleteValue = '';

  data = [
    { id: 31, value: "Apple" },
    { id: 32, value: "Avocado" },
    { id: 33, value: "Banana" },
    { id: 34, value: "Blackberry" },
    { id: 35, value: "Blueberry" },
    { id: 36, value: "Clementine" },
    { id: 37, value: "Fig" },
    { id: 38, value: "Grape" },
    { id: 39, value: "Kumquat" },
    { id: 40, value: "Lemon" },
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
