import { Component } from '@angular/core';

@Component({
  selector: 'sprk-divider-docs',
  template: `<div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Dividers
      </h2>

      <sprk-divider idString="divider-1"></sprk-divider>

      <h2 class="sprk-demo-b-h2">
        Divider With Additional Class sprk-u-mbm
      </h2>
      <sprk-divider additionalClasses="sprk-u-mbm"></sprk-divider>
    </div>
  `
})
export class DividerDocsComponent {
  constructor() {}
}
