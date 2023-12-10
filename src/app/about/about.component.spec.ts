import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correctly', () => {
    const header = compiled.querySelector('h1');
    expect(header?.innerText.trim()).toBe('About Me');
    const paragraphs = compiled.querySelectorAll('p');
    expect(paragraphs).toHaveSize(4);
    expect(paragraphs[0]?.innerText.trim()).toBe(
      'I currently work as a Systems Administrator. I am looking to further my knowledge in technology so that I can build my skills.'
    );
    expect(paragraphs[1]?.innerText.trim()).toBe(
      'I am looking to transition into more development-focused work, and have been studying various programming languages for that.'
    );
    expect(paragraphs[2]?.innerText.trim()).toBe(
      'Outside of my work, I also enjoy gaming and occasionally streaming.'
    );
    expect(paragraphs[3]?.innerText.trim()).toBe(
      'I dabble a bit in art as well.'
    );
  });
});
