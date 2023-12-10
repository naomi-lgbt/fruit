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
    expect(paragraphs).toHaveSize(1);
    expect(paragraphs[0]?.innerText.trim()).toBe(
      'Just out here doing my thing. 29 🔞🏳️‍🌈'
    );
  });
});
