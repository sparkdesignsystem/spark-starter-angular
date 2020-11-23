import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-award-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <h2 class="sprk-demo-b-h2 sprk-u-mbm">
        Award split at small breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="small"
          heading="Spark Award Component"
          imgOneSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgTwoSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgOneAlt="Spark Design System Logo"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="Spark Design System Logo"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          imgOneAnalyticsString="Foo"
          imgTwoAnalyticsString="Test"
          idString="award-1">
        </sprk-award>
      </div>
    </div>

    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <h2 class="sprk-demo-b-h2 sprk-u-mbm">
        Award split at medium breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="medium"
          heading="Spark Award Component"
          imgOneSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgTwoSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgOneAlt="Spark Design System Logo"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="Spark Design System Logo"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          imgOneAnalyticsString="Foo"
          imgTwoAnalyticsString="Test"
          idString="award-2">
        </sprk-award>
      </div>
    </div>

    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <h2 class="sprk-demo-b-h2 sprk-u-mbm">
        Award split at large breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="large"
          heading="Spark Award Component"
          imgOneSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgTwoSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgOneAlt="Spark Design System Logo"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="Spark Design System Logo"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          imgOneAnalyticsString="Foo"
          imgTwoAnalyticsString="Test"
          idString="award-3">
        </sprk-award>
      </div>
    </div>

    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <h2 class="sprk-demo-b-h2 sprk-u-mbm">
        Award split at huge breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="huge"
          heading="Spark Award Component"
          imgOneSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgTwoSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgOneAlt="Spark Design System Logo"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="Spark Design System Logo"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          imgOneAnalyticsString="Foo"
          imgTwoAnalyticsString="Test"
          idString="award-4">
        </sprk-award>
      </div>
    </div>

    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <h2 class="sprk-demo-b-h2 sprk-u-mbm">
        Award With Disclaimer set to false
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          disclaimer="false"
          splitAt="huge"
          heading="Spark Award Component"
          imgOneSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgTwoSrc="https://spark-assets.netlify.app/spark-placeholder.jpg"
          imgOneAlt="Spark Design System Logo"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="Spark Design System Logo"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          imgOneAnalyticsString="Foo"
          imgTwoAnalyticsString="Test"
          idString="award-5">
        </sprk-award>
      </div>
    </div>
  `,
  styles: ['']
})
export class AwardDocsComponent {
  constructor() {}
}
