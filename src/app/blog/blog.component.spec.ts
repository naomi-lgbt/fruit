import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { BlogComponent } from "./blog.component";

describe("BlogComponent", () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BlogComponent,
        RouterTestingModule.withRoutes([
          {
            path: "blog",
            component: BlogComponent,
            data: {
              slug: "example"
            }
          }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render correctly", () => {
    const header = compiled.querySelector("h1");
    expect(header?.innerText.trim()).toBe("My Blog");
    const paragraph = compiled.querySelector("p");
    expect(paragraph?.innerText.trim()).toBe("Here are my latest blog posts:");
  });
});
