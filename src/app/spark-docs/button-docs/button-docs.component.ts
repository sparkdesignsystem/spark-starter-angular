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
      <button class="sprk-c-Button--secondary" sprkButton>Hello, World.</button>
      <button disabled class="sprk-c-Button--secondary" sprkButton>
        Hello, World.
      </button>
    </div>
    <div class="sprk-demo-o-ContentGrouping" id="foo">
      <h2 class="sprk-demo-b-h2">Tertiary Buttons</h2>
      <button class="sprk-c-Button--tertiary" sprkButton>Hello, World.</button>
      <button disabled class="sprk-c-Button--tertiary" sprkButton>
        Hello, World.
      </button>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Spinner Buttons</h2>
      <button
        idString="button-spinning"
        analyticsString="spinning"
        sprkButton
        [isLoading]="true"
      >
        <div sprkSpinner></div>
      </button>
    </div>
  `
})
export class ButtonDocsComponent {
  constructor() {}
}
