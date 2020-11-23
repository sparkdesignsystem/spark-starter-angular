import { Component } from '@angular/core';

@Component({
  selector: 'sprk-accordion-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Primary Accordion</h2>
      <sprk-accordion idString="accordion-1" additionalClasses="accordion-test-class">
        <sprk-accordion-item
          additionalClasses="accordion-item-test-class"
          idString="accordion-item-1"
          analyticsString="object.action.event"
          headingAdditionalClasses="sprk-b-TypeDisplaySeven"
          contentAdditionalClasses="sprk-b-BodyTypeTwo"
          isOpen="true"
          heading="This is a longer title than all the other accordion titles here. But, it works!"
          iconAdditionalClasses="icon-test-class"
        >
          <p>
            This is some content This is some content. This is some content.
            This is some content This is some content. This is some content.
          </p>
        </sprk-accordion-item>
        <sprk-accordion-item
          isOpen="true"
          headingAdditionalClasses="sprk-b-TypeDisplaySeven"
          contentAdditionalClasses="sprk-b-BodyTypeTwo"
          heading="This is another title"
          iconNameClosed="arrow-right"
          iconNameOpen="arrow-left"
        >
          <p>This is some more content.</p>
        </sprk-accordion-item>
        <sprk-accordion-item
          headingAdditionalClasses="sprk-b-TypeDisplaySeven"
          contentAdditionalClasses="sprk-b-BodyTypeTwo"
          heading="This is another title"
          leadingIcon="exclamation"
          leadingIconAdditionalClasses="leading-icon-test-class"
        >
          <p>This is some more content.</p>
        </sprk-accordion-item>
      </sprk-accordion>
    </div>
  `,
  styles: ['']
})
export class AccordionDocsComponent {
  constructor() {}
}
