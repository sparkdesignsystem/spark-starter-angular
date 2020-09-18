import { Component } from '@angular/core';

@Component({
  selector: 'sprk-divider-docs',
  template: `<div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Dividers
      </h2>

      <hr sprkDivider idString="divider-1" />

      <h2 class="sprk-demo-b-h2">
        Divider With Additional Class sprk-u-mbm
      </h2>
      <hr sprkDivider additionalClasses="sprk-u-mbm">
    </div>
  `
})
export class DividerDocsComponent {
  constructor() {}
}
