import { Component } from '@angular/core';

@Component({
  selector: 'sprk-button-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Primary Buttons</h2>
      <button sprkButton>Hello, Spark Button</button>
      <button disabled sprkButton>Hello, World.</button>
    </div>
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Secondary Buttons</h2>
      <button variant="secondary" sprkButton>Hello, World.</button>
      <button disabled variant="secondary" sprkButton>
        Hello, World.
      </button>
    </div>
    <div class="sprk-demo-o-ContentGrouping" id="foo">
      <h2 class="sprk-demo-b-h2">Tertiary Buttons</h2>
      <button variant="tertiary" sprkButton>Hello, World.</button>
      <button disabled variant="tertiary" sprkButton>
        Hello, World.
      </button>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Spinner Buttons</h2>
      <button
        idString="button-spinning"
        analyticsString="spinning"
        sprkButton
        [isSpinning]="true"
      >
        <div sprkSpinner></div>
      </button>

      <button
        variant="secondary"
        idString="button-spinning-secondary"
        sprkButton
        [isSpinning]="true"
      >
        <div sprkSpinner variant="secondary"></div>
      </button>
    </div>
  `
})
export class ButtonDocsComponent {
  constructor() {}
}
