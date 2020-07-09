import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sprk-input-docs',
  templateUrl: 'input-docs.component.html',
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
