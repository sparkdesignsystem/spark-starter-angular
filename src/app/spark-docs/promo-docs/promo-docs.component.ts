import { Component } from '@angular/core';

@Component({
  selector: 'sprk-promo-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <div class="sprk-o-CenteredColumn">
        <h2 class="sprk-demo-b-h2">Promo</h2>

        <sprk-promo idString="default-promo" hasBorder="true">
          <div sprkStackItem sprkPromoContent>
            <sprk-stack itemSpacing="large">
              <h3
                sprkHeading
                variant="displayFive"
                sprkPromoHeading
                sprkStackItem
              >
                Title
              </h3>

              <p sprkStackItem sprkPromoSubheading sprkText variant="bodyOne">
                Subtitle
              </p>

              <p sprkText variant="bodyTwo" sprkStackItem>
                Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                inventore integer eum non enim diam habitant. Maecenas nunc per lacus
                neque egestas. Diam quod curabitur.
              </p>

              <div sprkStackItem class="sprk-o-Stack__item--end-column">
                <a
                  sprkLink
                  variant="unstyled"
                  routerLink="/alerts"
                  class="sprk-c-Button"
                  analyticsString="default-promo-cta"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </div>
        </sprk-promo>
      </div>
    </div>

    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <div class="sprk-o-CenteredColumn">
        <h2 class="sprk-demo-b-h2">Flag Promo</h2>

        <sprk-promo idString="flag-promo" hasBorder="true" isFlag="true" additionalClasses="sprk-o-Stack--split@s">
          <a href="#nogo" sprkStackItem class="sprk-o-Stack__item--fourth@s">
            <img
              sprkPromoMedia
              isFlag="true"
              alt="Learn more about Spark Design System."
              src="https://spark-assets.netlify.app/spark-logo-updated.svg"
            >
          </a>

          <div sprkStackItem sprkPromoContent class="sprk-o-Stack__item--three-fourths@s">
            <sprk-stack itemSpacing="large">
              <div sprkStackItem>
                <p sprkText variant="bodyTwo">
                  Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                  inventore integer eum non enim diam habitant. Maecenas nunc per lacus
                  neque egestas. Diam quod curabitur.
                </p>
              </div>
            </sprk-stack>
          </div>
        </sprk-promo>
      </div>
    </div>

    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <div class="sprk-o-CenteredColumn">
        <h2 class="sprk-demo-b-h2">Promo With Image</h2>

        <sprk-promo idString="image-promo" hasBorder="true" additionalClasses="sprk-o-Stack--split@s">
          <a href="#nogo" sprkStackItem class="sprk-o-Stack__item--half@s">
            <img
              sprkPromoMedia
              alt="Additional insights about this property."
              src="https://spark-assets.netlify.app/house.jpg"
            >
          </a>

          <div sprkStackItem sprkPromoContent class="sprk-o-Stack__item--half@s">
            <sprk-stack itemSpacing="large">
              <h3
                sprkHeading
                variant="displayFive"
                sprkPromoHeading
                sprkStackItem
              >
                Title
              </h3>

              <p sprkPromoSubheading sprkText variant="bodyOne" sprkStackItem>
                Subtitle
              </p>

              <p sprkText variant="bodyTwo" sprkStackItem>
                Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                inventore integer eum non enim diam habitant. Maecenas nunc per lacus
                neque egestas. Diam quod curabitur.
              </p>

              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  class="sprk-c-Button"
                  analyticsString="image-promo-cta"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </div>
        </sprk-promo>
      </div>
    </div>

    <div class="sprk-demo-o-ContentGrouping sprk-u-mbh">
      <div class="sprk-o-CenteredColumn">
        <h2 class="sprk-demo-b-h2">Promo With Reversed Image</h2>

        <sprk-promo idString="rev-image-promo" hasBorder="true" additionalClasses="sprk-o-Stack--split@s">
          <div sprkStackItem sprkPromoContent class="sprk-o-Stack__item--half@s">
            <sprk-stack itemSpacing="large">
              <h3
                sprkHeading
                variant="displayFive"
                sprkPromoHeading
                sprkStackItem
              >
                Title
              </h3>

              <p sprkPromoSubheading sprkText variant="bodyOne" sprkStackItem>
                Subtitle
              </p>

              <p sprkText variant="bodyTwo" sprkStackItem>
                Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
                inventore integer eum non enim diam habitant. Maecenas nunc per lacus
                neque egestas. Diam quod curabitur.
              </p>

              <div sprkStackItem>
                <a
                  sprkLink
                  variant="unstyled"
                  href="#nogo"
                  class="sprk-c-Button"
                  analyticsString="rev-image-promo-cta"
                >
                  Learn More
                </a>
              </div>
            </sprk-stack>
          </div>

          <a href="#nogo" sprkStackItem class="sprk-o-Stack__item--half@s">
            <img
              sprkPromoMedia
              alt="Additional insights about this property."
              src="https://spark-assets.netlify.app/house.jpg"
            >
          </a>
        </sprk-promo>
      </div>
    </div>
  `,
})
export class PromoDocsComponent {
  constructor() {}
}
