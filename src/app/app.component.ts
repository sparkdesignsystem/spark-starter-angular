import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "sprk-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "spark-starter-angular";

  links = [
    {
      text: "Accordion",
      href: "/accordions"
    },
    {
      text: "Alert",
      href: "/alert"
    },
    {
      text: "Award",
      href: "/award"
    },
    {
      text: "Button",
      href: "/button"
    },
    {
      text: "Card",
      href: "/card"
    },
    {
      text: "Dictionary",
      href: "/dictionary"
    },
    {
      text: "Dividers",
      href: "/dividers"
    },
    {
      text: "Dropdown",
      href: "/dropdown"
    },
    {
      text: "Footer",
      href: "/footer"
    },
    {
      text: "Highlight Board",
      href: "/highlightboard"
    },
    {
      text: "Icon",
      href: "/icon"
    },
    {
      text: "Input",
      href: "/input"
    },
    {
      text: "Link",
      href: "/link"
    },
    {
      text: "List",
      href: "/list"
    },
    {
      text: "Masthead (Default)",
      href: "/masthead-default"
    },
    {
      text: "Masthead (Extended)",
      href: "/masthead-extended"
    },
    {
      text: "Modal",
      href: "/modal"
    },
    {
      text: "Pagination",
      href: "/pagination"
    },
    {
      text: "Promo",
      href: "/promos"
    },
    {
      text: "Stack",
      href: "/stack"
    },
    {
      text: "Stepper",
      href: "/stepper"
    },
    {
      text: "Table",
      href: "/table"
    },
    {
      text: "Tabs",
      href: "/tabs"
    },
    {
      text: "Toggle",
      href: "/toggle"
    }
  ];

  path = "";
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(val => {
      this.path = this.location.path();
    });
  }
}
