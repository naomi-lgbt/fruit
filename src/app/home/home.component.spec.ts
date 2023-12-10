import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correctly', () => {
    const header = compiled.querySelector('h1');
    expect(header?.innerText.trim()).toBe("Hi, I'm Fruit Pursuits");
    const paragraphs = compiled.querySelectorAll('p');
    expect(paragraphs).toHaveSize(2);
    expect(paragraphs[0]?.innerText.trim()).toBe(
      'I currently work as a Systems Administrator. I am looking to further my knowledge in technology so that I can build my skills.'
    );
    expect(paragraphs[1]?.innerText.trim()).toBe(
      'Currently I am studying for JavaScript, ReactJS, the SSCP, and AWS to help build my skills in the field of cloud management / DevOps engineering.'
    );
  });
});
