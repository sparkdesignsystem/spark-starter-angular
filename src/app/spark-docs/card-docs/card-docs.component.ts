import { Component } from '@angular/core';

@Component({
  selector: 'sprk-card-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Default
      </h2>

      <sprk-card idString="default">
        <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
          <p sprkStackItem sprkText variant="bodyTwo">
            Default Card
          </p>
        </sprk-stack>
      </sprk-card>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Teaser Card with Icon
      </h2>

      <sprk-card idString="teaser-icon">
        <sprk-stack
          sprkCardContent
          itemSpacing="large"
          sprkStackItem
          additionalClasses="sprk-u-TextAlign--center"
        >
          <a
            sprkLink
            variant="unstyled"
            href="#nogo"
            sprkStackItem
            aria-label="Title"
            analyticsString="teaser-icon-media"
            class="sprk-u-AbsoluteCenter"
          >
            <sprk-icon
              iconName="call-team-member"
              aria-hidden="true"
              additionalClasses="sprk-c-Icon--xl"
            ></sprk-icon>
          </a>

          <h3 sprkHeading variant="displayFive" sprkStackItem>
            Title
          </h3>

          <p sprkText variant="bodyTwo" sprkStackItem>
            Lorem ipsum dolor sit amet, doctus
            invenirevix te. Facilisi perpetua an
            pri, errem communemea at, mei prima
            tantas signiferumque at.
          </p>

          <div sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              class="sprk-c-Button sprk-c-Button--secondary"
              analyticsString="teaser-icon-cta"
            >
              Learn More
            </a>
          </div>
        </sprk-stack>
      </sprk-card>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Teaser Card
      </h2>

      <sprk-card idString="teaser">
        <a
          sprkLink
          variant="unstyled"
          href="#nogo"
          sprkStackItem
          analyticsString="teaser-media"
        >
          <img
            sprkCardMedia
            alt="Learn more"
            src="https://spark-assets.netlify.app/desktop.jpg"
          />
        </a>

        <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
          <h3 sprkHeading variant="displayFive" sprkStackItem>
            Title
          </h3>

          <p sprkText variant="bodyTwo" sprkStackItem>
            Lorem ipsum dolor sit amet, doctus
            invenirevix te. Facilisi perpetua.
          </p>

          <sprk-stack
            additionalClasses="sprk-o-Stack--end-column"
            sprkStackItem
          >
            <div sprkStackItem>
              <a
                sprkLink
                variant="unstyled"
                href="#nogo"
                class="sprk-c-Button sprk-c-Button--secondary"
                analyticsString="teaser-cta"
              >
                Learn More
              </a>
            </div>
          </sprk-stack>
        </sprk-stack>
      </sprk-card>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Two-Up</h2>
      <sprk-stack
        itemSpacing="large"
        splitAt="large"
        additionalClasses="sprk-o-Stack--center-row"
      >
        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              analyticsString="two-up-media"
              href="#nogo"
              sprkStackItem
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    class="sprk-c-Button sprk-c-Button--secondary"
                    analyticsString="two-up-cta"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>

        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              sprkStackItem
              analyticsString="two-up-media-2"
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    class="sprk-c-Button sprk-c-Button--secondary"
                    analyticsString="two-up-cta-2"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>
      </sprk-stack>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">
        Three-Up
      </h2>

      <sprk-stack
        itemSpacing="large"
        splitAt="large"
        additionalClasses="sprk-o-Stack--center-row"
      >
        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              analyticsString="three-up-media"
              sprkStackItem
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    analyticsString="three-up-cta"
                    class="sprk-c-Button sprk-c-Button--secondary"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>

        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              sprkStackItem
              analyticsString="three-up-media-2"
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    analyticsString="three-up-cta-2"
                    class="sprk-c-Button sprk-c-Button--secondary"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>

        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              analyticsString="three-up-media-3"
              sprkStackItem
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    analyticsString="three-up-cta-3"
                    class="sprk-c-Button sprk-c-Button--secondary"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>
      </sprk-stack>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Four-Up</h2>
      <sprk-stack
        itemSpacing="large"
        splitAt="large"
        additionalClasses="sprk-o-Stack--center-row"
      >
        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              analyticsString="four-up-media"
              sprkStackItem
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    analyticsString="four-up-cta"
                    class="sprk-c-Button sprk-c-Button--secondary"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>

        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              sprkStackItem
              analyticsString="four-up-media-2"
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    analyticsString="four-up-cta-2"
                    class="sprk-c-Button sprk-c-Button--secondary"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>

        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              analyticsString="four-up-media-3"
              sprkStackItem
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    analyticsString="four-up-cta-3"
                    href="#nogo"
                    class="sprk-c-Button sprk-c-Button--secondary"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>

        <div
          class="sprk-c-Card__container sprk-o-Stack__item--flex@l"
          sprkStackItem
        >
          <sprk-card sprkStackItem>
            <a
              sprkLink
              variant="unstyled"
              href="#nogo"
              sprkStackItem
              analyticsString="four-up-media-4"
            >
              <img
                sprkCardMedia
                alt="Learn more"
                src="https://spark-assets.netlify.app/desktop.jpg"
              />
            </a>

            <sprk-stack sprkCardContent itemSpacing="medium" sprkStackItem>
              <h3 sprkHeading variant="displayFive" sprkStackItem>
                Title
              </h3>

              <p sprkText variant="bodyTwo" sprkStackItem>
                This Lorem ipsum dolor sit amet, doctus invenire vix te.
                Facilisi perpetua an pri, errem commune mea at, mei prima
                tantas signiferumque at. Numquam.
              </p>

              <sprk-stack
                additionalClasses="sprk-o-Stack--end-column"
                sprkStackItem
              >
                <div sprkStackItem>
                  <a
                    sprkLink
                    variant="unstyled"
                    href="#nogo"
                    analyticsString="four-up-cta-4"
                    class="sprk-c-Button sprk-c-Button--secondary"
                  >
                    Learn More
                  </a>
                </div>
              </sprk-stack>
            </sprk-stack>
          </sprk-card>
        </div>
      </sprk-stack>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Standout Card</h2>

      <sprk-card idString="standout" isStandout="true">
        <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
          <p sprkStackItem sprkText variant="bodyTwo">
            Standout Card
          </p>
        </sprk-stack>
      </sprk-card>
    </div>

    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Highlighted Header</h2>
      <sprk-card idString="highlighted-header" isStandout="true">
        <sprk-stack sprkCardHeader sprkStackItem itemSpacing="medium">
          <h3
            sprkHeading
            sprkStackItem
            variant="displaySeven"
            class="sprk-u-Color--white"
          >
            Description
          </h3>

          <h4
            sprkHeading
            sprkStackItem
            variant="displayFive"
            class="sprk-u-Color--white"
          >
            Card Title
          </h4>
        </sprk-stack>

        <sprk-stack sprkCardContent sprkStackItem itemSpacing="medium">
          <p sprkStackItem sprkText variant="bodyTwo">
            Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </p>
        </sprk-stack>
      </sprk-card>
    </div>
  `,
  styles: ['']
})
export class CardDocsComponent {
  constructor() {}
}
