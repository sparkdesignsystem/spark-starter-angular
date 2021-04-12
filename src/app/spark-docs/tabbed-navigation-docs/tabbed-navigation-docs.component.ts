import { Component } from '@angular/core';

@Component({
  selector: 'sprk-tabbed-navigation-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Tabs
      </h2>

      <sprk-tabs idString="tabs-1">
        <button
          sprkTabsButton
          analyticsString="Tab: 1"
          idString="tab-1"
          type="button"
        >
          Tab 1
        </button>
        <button
          sprkTabsButton
          idString="tab-2"
          [isDefaultActive]="true"
          type="button"
        >
          Tab 2
        </button>
        <button
          sprkTabsButton
          idString="tab-3"
          type="button"
        >
          Tab 3
        </button>
        <div sprkTabsPanel>
          <p sprkText variant="bodyTwo">
            Tab 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div [isDefaultActive]="true" sprkTabsPanel>
          <p sprkText variant="bodyTwo">
            Tab 2 Content Sed quis rhoncus ipsum. Nulla euismod nisi est, vel
            consequat ante consectetur in.
          </p>
        </div>
        <div sprkTabsPanel>
          <p sprkText variant="bodyTwo">
            Tab 3 Content Ut interdum dictum est at ornare. Nam nec dapibus nibh.
            Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.
          </p>
        </div>
      </sprk-tabs>
    </div>
  `,
})
export class TabbedNavigationDocsComponent {
  constructor() {}
}
