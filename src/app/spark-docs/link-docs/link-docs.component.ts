import { Component } from '@angular/core';

@Component({
  selector: 'sprk-link-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">External Links</h2>
      <a
        href="https://www.google.com"
        sprkLink
        class="sprk-u-mrm"
      >
        https://www.google.com
      </a>
      <a
        href="http://www.google.com"
        sprkLink
      >
        http://www.google.com
      </a>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Same Page Links</h2>
      <a
        href="/links#info"
        sprkLink
        class="sprk-u-mrm"
      >
        Jump Link
      </a>
      <a
        href="/buttons#foo"
        sprkLink
      >
        Jump Link with Page
      </a>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Link with no href provided</h2>
      <a
        sprkLink
      >
        No href provided
      </a>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Link Using tel</h2>
      <a
        href="tel:+123456789"
        sprkLink
      >
        Call Spark
      </a>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Link Using mailto</h2>
      <a
        href="mailto:example@example.com"
        sprkLink
      >
        Email Spark
      </a>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Link</h2>
      <a
        sprkLink
        href="/alerts"
        idString="link-1"
        target="_blank"
      >
        This is a standard Spark Link!
      </a>

      <p>
        Here is a
        <a
        sprkLink
        href="/alerts"
        idString="link-1"
        target="_blank"
        >
          link
        </a>
        in the middle of a line
      </p>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Simple Link</h2>
        <a
          sprkLink
          href="/alerts"
          variant="simple"
        >
          Hello, World.
        </a>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Additional Classes</h2>
      <a
        sprkLink
        href="/alerts"
        class="sprk-u-mbm"
      >
        Link with Margin Bottom class
      </a>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Disabled Link</h2>
      <a
        sprkLink
        href="/alerts"
        isDisabled="true"
      >
        This is a Spark Disabled Link
      </a>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Icon With Text Link</h2>
      <a
        href="#"
        sprkLink
        variant="hasIcon"
        idString="icon-link-1"
        analyticsString="icon-link-1"
      >
        <sprk-icon
          iconType="arrow-left"
          additionalClasses="
            sprk-c-Icon--l
            sprk-c-Icon--filled-current-color
            sprk-u-mrs"
        >
        </sprk-icon>
        Back
      </a>
    </div>
    <div id="info">Hi, I'm info!</div>
  `,
})
export class LinkDocsComponent {
  constructor() {}
}
