import { Component } from '@angular/core';

@Component({
  selector: 'sprk-tabbed-navigation-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Tabbed Navigation
      </h2>

      <sprk-tabbed-navigation idString="navigation-tabbed-1">
        <button sprkTabbedNavigationTab analyticsString="Tab: 1">Tab 1</button>
        <button [defaultActive]=true sprkTabbedNavigationTab>Tab 2</button>
        <button sprkTabbedNavigationTab>Tab 3</button>
        <div sprkTabbedNavigationPanel>
          <p>Tab One Tab One Tab One Tab One Tab One Tab One Tab One Tab One Tab One Tab One Tab One</p>
        </div>
        <div [defaultActive]="true" sprkTabbedNavigationPanel>
          <p>Tab Two Tab Two Tab Two Tab Two Tab Two Tab Two Tab Two Tab Two Tab Two Tab Two Tab Two</p>
        </div>
        <div sprkTabbedNavigationPanel>
          <p>Tab Three Tab Three Tab Three Tab Three Tab Three Tab Three Tab Three Tab Three Tab Three Tab Three Tab Three</p>
        </div>
      </sprk-tabbed-navigation>
    </div>
  `,
  styles: ['']
})
export class TabbedNavigationDocsComponent {
  constructor() {}
}
