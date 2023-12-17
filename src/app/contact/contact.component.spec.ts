import { ComponentFixture, TestBed } from "@angular/core/testing";

import { socials } from "../../config/socials";

import { ContactComponent } from "./contact.component";

/**
 * Converts a hex color code to an RGB format.
 *
 * @param {string} hex - The hex color code to convert.
 * @returns {string} The RGB representation of the color.
 */
function hexToRgb(hex: string): string {
  // Remove the hash (if it's there)
  const cleanedHex = hex.replace(/^#/, "");

  // Parse the hex value
  const bigint = parseInt(cleanedHex, 16);

  // Extract the RGB components
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the result as an object
  return `rgb(${r}, ${g}, ${b})`;
}

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(component.data).toEqual(socials);
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("Contact Me");
    const paragraphs = compiled.querySelectorAll("p");
    expect(paragraphs).toHaveSize(1 + socials.length);
    expect(paragraphs[0]?.innerText.trim()).toBe(
      "Here are the methods you can use to contact me, sorted by preference:"
    );
    const links = compiled.querySelectorAll("a");
    expect(links).toHaveSize(socials.length);
    for (const index in socials) {
      const i = parseInt(index);
      const link = links[i];
      expect(link.innerText.trim()).toBe(socials[i].name);
      const icon = link.querySelector("svg");
      expect(icon?.getAttribute("data-icon")).toBe(
        `${socials[i].name.toLowerCase()}`
      );
      expect(link.style.backgroundColor).toBe(hexToRgb(socials[i].background));
      expect(link.style.color).toBe(hexToRgb(socials[i].text));
    }
  });
});
