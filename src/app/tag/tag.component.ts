import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
})
export class TagComponent {
  @Input() tagName: string = '';

  public getHex() {
    let hash = 0;

    for (let i = 0; i < this.tagName.length; i++) {
      hash = this.tagName.charCodeAt(i) + ((hash << 5) - hash);
    }

    const hex = (hash & 0x00ffffff).toString(16).toUpperCase();
    return `${'00000'.substring(0, 6 - hex.length)}${hex}`;
  }

  public getColour = () => {
    const hex = this.getHex();
    // https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hex-to-hsl
    // Getting HSL from hex.
    const validated =
      hex.length === 3
        ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
        : hex;
    const r = parseInt(validated.substring(0, 2), 16);
    const g = parseInt(validated.substring(2, 4), 16);
    const b = parseInt(validated.substring(4, 6), 16);
    const rcalc = r / 255;
    const gcalc = g / 255;
    const bcalc = b / 255;
    const cmax = Math.max(rcalc, gcalc, bcalc);
    const cmin = Math.min(rcalc, gcalc, bcalc);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta === 0) {
      h = 0;
    } else if (cmax === rcalc) {
      h = ((gcalc - bcalc) / delta) % 6;
    } else if (cmax === gcalc) {
      h = (bcalc - rcalc) / delta + 2;
    } else if (cmax === bcalc) {
      h = (rcalc - gcalc) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
      h += 360;
    }
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    // GitHub Style Label Calculations
    const perceivedLightness = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255;
    const lightnessThreshold = 0.6;
    const lightnessSwitch = Math.max(
      0,
      Math.min((perceivedLightness - lightnessThreshold) * -1000, 1)
    );
    const lightenBy =
      (lightnessThreshold - perceivedLightness) * 100 * lightnessSwitch;
    const backgroundAlpha = 0.18;
    const borderAlpha = 0.3;

    // This was a nightmare but it works!
    return `background:rgba(${r}, ${g}, ${b}, ${backgroundAlpha}); border: 1px solid hsla(${h}, ${s}%, ${
      l + lightenBy
    }%, ${borderAlpha}); color: hsl(${h}, ${s}%, ${l + lightenBy}%);`;
  };
}
