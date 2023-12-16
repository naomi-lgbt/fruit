import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("Hi, I'm Fruit Pursuits");
    const paragraphs = compiled.querySelectorAll("p");
    expect(paragraphs).toHaveSize(3);
    expect(paragraphs[0]?.innerText.trim()).toBe("Welcome to my profile site.");
    expect(paragraphs[1]?.innerText.trim()).toBe(
      "Here you can read about me, see my work, catch up on my personal blog, or find ways to reach out to me."
    );
    expect(paragraphs[2]?.innerText.trim()).toBe(
      "Thanks for taking the time to explore - I look forward to hearing from you."
    );
  });
});
