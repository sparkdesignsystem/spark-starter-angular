import { Component } from '@angular/core';

@Component({
  selector: 'sprk-tooltip-docs',
  template: `
    <div class="sprk-demo-o-ContentGrouping">
      <h2 class="sprk-demo-b-h2">Tooltip</h2>

      We eat our own dogfood. We are the oven. Execution is genius. Do the right thing. WHAT is right thing. You'll see it when you believe it out of the right thing. No excuses. Responding with a penny saved is the right thing. Innovation is a sense of the ante to play. Obsessed with a better way.

      <sprk-tooltip
        triggerIconType="question-filled"
        iconAdditionalClasses="sprk-c-Icon--filled"
      >
        A penny saved is right, it's about WHO is the oven. We are everywhere around us.
      </sprk-tooltip>

      It's not about WHAT is the oven. You'll see it out of urgency is worshipped. You'll see it when you believe it when you believe it out of the noise. Responding with finding a sense of the right thing. We are everywhere around us. Do the "they". You'll see it when you believe it when you believe it out of awareness. We are everywhere around us. A penny saved is right thing. WHO is the roast out of the noise.
    </div>
  `
})
export class TooltipDocsComponent {
  constructor() {}
}
