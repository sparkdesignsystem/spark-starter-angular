import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-alert-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Alerts
      </h2>

      <sprk-alert variant="info" idString="alert-info-1" analyticsString="object.action.event">
        This is an info Spark alert!
      </sprk-alert>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Fail alert
      </h2>

      <sprk-alert variant="fail" [isDismissible]="true" idString="alert-fail-1" analyticsString="object.action.event">
        Hello, World. I'm dismissible!
      </sprk-alert>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Success alert
      </h2>

      <sprk-alert variant="success" [isDismissible]="true" idString="alert-success-2" analyticsString="object.action.event">
        Hello, World. I'm dismissible!
      </sprk-alert>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Not Dismissible
      </h2>

      <sprk-alert variant="success" [isDismissible]="false" idString="alert-success-1" analyticsString="object.action.event">
        Hello, World.
      </sprk-alert>
    </div>
  `,
  styles: ['']
})
export class AlertDocsComponent {
  constructor() { }
}
