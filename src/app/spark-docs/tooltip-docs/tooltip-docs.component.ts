import { Component } from '@angular/core';

@Component({
  selector: 'sprk-tooltip-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Tooltip</h2>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      <sprk-tooltip
        triggerIconType="question-filled"
        iconAdditionalClasses="sprk-c-Icon--filled"
      >
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
      </sprk-tooltip>

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  `
})
export class TooltipDocsComponent {
  constructor() {}
}
