import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { socials } from "../../config/socials";

/**
 *
 */
@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css"
})
export class ContactComponent {
  public data = socials;
}
