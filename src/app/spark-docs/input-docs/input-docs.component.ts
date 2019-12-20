import { Component } from '@angular/core';

@Component({
  selector: 'sprk-input-docs',
  template: `
    <div
    >
      <sprk-selection-container>
        <label sprkLabel
          >Question 1</label>
        <sprk-stack splitAt="medium" itemSpacing="medium">
          <sprk-selection-item-container>
            <input
              formControlName="q1"
              type="radio"
              value="true"
              [(ngModel)]="evaluationQuestionTrueAnswer"
              sprkSelectionInput
            />
            <label sprkSelectionLabel>Yes</label>
          </sprk-selection-item-container>
          <sprk-selection-item-container style="margin-left: 5px;">
            <input
            formControlName="q1"
              type="radio"
              value="false"
              sprkSelectionInput
              [(ngModel)]="evaluationQuestionFalseAnswer"
            />
            <label sprkSelectionLabel>No</label>
          </sprk-selection-item-container>
        </sprk-stack>
      </sprk-selection-container>
    </div>
    <div
    >
      <sprk-selection-container>
        <label sprkLabel
          >Question 2</label
        >
        <sprk-stack splitAt="medium" itemSpacing="medium">
          <sprk-selection-item-container>
            <input
            formControlName="q2"
              type="radio"
              value="true"
              [(ngModel)]="homeImprovementTrueAnswer"
              sprkSelectionInput
            />
            <label sprkSelectionLabel>Yes</label>
          </sprk-selection-item-container>
          <sprk-selection-item-container style="margin-left: 5px;">
            <input
            formControlName="q2"
              type="radio"
              value="false"
              sprkSelectionInput
              [(ngModel)]="homeImprovementFalseAnswer"
            />
            <label sprkSelectionLabel>No</label>
          </sprk-selection-item-container>
        </sprk-stack>
      </sprk-selection-container>
    </div>




    <sprk-selection-container>
      <label sprkLabel>Question 3</label>
      <sprk-selection-item-container>
        <input
        formControlName="q3"
          type="radio"
          value="true"
          [(ngModel)]="homeImprovementTrueAnswer"
          sprkSelectionInput
        />
        <label sprkSelectionLabel>Yes</label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
        formControlName="q3"
          type="radio"
          value="false"
          sprkSelectionInput
          [(ngModel)]="homeImprovementFalseAnswer"
        />
        <label sprkSelectionLabel>No</label>
      </sprk-selection-item-container>
    </sprk-selection-container>







    <sprk-selection-container>
      <label sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="true"
          formControlName="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
        />
        <label sprkSelectionLabel>Item 1</label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="radio"
          value="false"
          formControlName="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
        />
        <label sprkSelectionLabel>Item 2</label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `
})
export class InputDocsComponent {
  constructor() {}

  text_input = '';

  text_input_huge = '';

  text_input_huge_disabled = '';

  textarea_input = '';

  search_input = '';

  inline_search_input = '';

  phone_input = '';

  date_input = '';

  radio_input: string;

  checkbox_input1 = false;

  checkbox_input1a = false;

  checkbox_input2 = false;

  checkbox_input3 = false;

  ssn_input: string;

  monetary_input: string;

  datepicker_input: string;

  passwordType = 'password';

  ssnType = 'password';

  form_submitted = false;

  isChecked = false;

  isRadioChecked = false;

  dpConfig = {
    mode: 'dp-below'
  };

  pmimiEligibilityResult = {
    ClientOptions: [
      'Pay down principal by $19,363.52 at 70.00 % LTOV',
      'A home evaluation return without major home improvements value of $277,662.17 at 70.00 % LTOV',
      'A home evaluation return with major home improvements value of $277,662.17 at 70.00 % LTOV',
      'Wait until LTOV reaches 80% on 06/01/2018 and request to have MI removed.',
      'Wait until 10/01/2019 when the MI will automatically be removed.'
    ],
    ClientEligibilityStatus: 'warning',
    ResponseReasons: [
      {
        Title: 'Payment Status',
        Reason: 'This loan is not current.',
        StatusCode: 1,
        Status: 'warning'
      },
      {
        Title: 'Monthly MI Payment Status',
        Reason: 'The monthly mortgage insurance is already paid.',
        StatusCode: 0,
        Status: 'pass'
      },
      {
        Title: 'Client Requested Cancellation - Current Payment History',
        Reason:
          'This client does not have any 30 day late payments within the last 12 months.',
        StatusCode: 0,
        Status: 'pass'
      },
      {
        Title: 'Client Requested Cancellation - Previous Payment History',
        Reason:
          'This client does not have any 60 day late payments within the last 12 months.',
        StatusCode: 0,
        Status: 'pass'
      },
      {
        Title: 'Client Requested Cancellation -LTOV',
        Reason:
          'This loan has a history of 4 years and value of 77.7500% (A minimum of 70% is required).',
        StatusCode: 2,
        Status: 'warning'
      }
    ],
    HomeImprovementQuestions: {
      HomeImprovmentReturnAmount: 277662.17,
      HomeImprovmentReturnPercent: 0.7,
      HomeImprovementsRequired: false,
      RequiredAdditionalPrincipalAmount: 19363.52,
      RequiredEvaluationAmount: 277662.17,
      RequiredPrincipalPercent: 0.7
    }
  };

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

  onSubmit(event): void {
    this.form_submitted = true;
  }

  onSelect() {
    this.checkbox_input1 === true
      ? (this.isChecked = true)
      : (this.isChecked = false);
  }

  onRadioSelect($event) {
    $event.target.checked === true && this.radio_input === '1'
      ? (this.isRadioChecked = true)
      : (this.isRadioChecked = false);
  }
}
