import { Component } from '@angular/core';

@Component({
  selector: 'sprk-flag-docs',
  template: `
  <sprk-flag>
    <img
      media-slot
      alt="Provide useful alternative text"
      src="https://spark-assets.netlify.app/spark-logo-mark.svg"
    />
    <p body-slot>
      Lorem ipsum dolor. Sit amet pede. Tempus donec et.
      Suspendisse id inventore integer eum non enim diam habitant.
    </p>
  </sprk-flag>
  `
})
export class FlagDocsComponent {
  constructor() { }
}
