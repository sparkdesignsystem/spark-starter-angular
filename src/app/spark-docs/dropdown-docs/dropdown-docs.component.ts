import { Component } from '@angular/core';

@Component({
  selector: 'sprk-dropdown-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Default</h2>
      <sprk-dropdown
        screenReaderText="Description of default dropdown."
        heading="My Choices"
        triggerIconName="settings"
        triggerAdditionalClasses="sprk-b-Link--plain"
        iconAdditionalClasses="sprk-c-Icon--l"
        [choices]="[{
            text: 'Option 1',
            value: 'Option 1'
          },
          {
            text: 'Option 2',
            value: 'Option 2'
          }
        ]"
      ></sprk-dropdown>
    </div>
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Informational</h2>
     <sprk-dropdown
        variant="informational"
        triggerAdditionalClasses="sprk-b-Link--plain"
        triggerText="Make a selection..."
        heading="My Choices"
        triggerIconName="chevron-down"
        [choices]="[{
          content: {
            title: 'Choice Title 1',
            infoLine1: 'Information about this choice',
            infoLine2: 'Additional Information'
          },
          value: 'Choice Title 1',
          active: false
        },
        {
          content: {
            title: 'Choice Title 2',
            infoLine1: 'Information about this choice',
            infoLine2: 'Additional Information'
          },
          value: 'Choice Title 2',
          active: false,
          isDefault: false
        }
      ]"
      >
        <div
          class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
          sprkDropdownFooter
        >
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            class="sprk-c-Button sprk-c-Button--secondary"
          >
            Go Elsewhere
          </a>
        </div>
      </sprk-dropdown>
    </div>
  `
})
export class DropdownDocsComponent {
  constructor() {}
}
