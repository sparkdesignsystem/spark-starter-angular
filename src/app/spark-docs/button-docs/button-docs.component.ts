import { Component, OnInit } from '@angular/core';
import { setSpinning } from '@sparkdesignsystem/spark';

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
      <button sprkButton (click)="checkSpinner($event)">Spinner Button</button>
    </div>
  `
})
export class ButtonDocsComponent {
  constructor() {}

  submitSpinning = false;

  checkSpinner(event): void {
    if (!this.submitSpinning) {
      setSpinning(event.target, {});
      this.submitSpinning = true;
    }
  }
}
