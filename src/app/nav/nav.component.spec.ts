import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correctly', () => {
    const avatar = compiled.querySelector('.avatar');
    expect(avatar?.getAttribute('src')).toBe('/assets/img/avatar.jpg');
    const links = compiled.querySelectorAll('a');
    expect(links).toHaveSize(4);
    expect(links[0]?.innerText.trim()).toBe('Home');
    expect(links[0]?.getAttribute('routerLink')).toBe('/');
    expect(links[1]?.innerText.trim()).toBe('About');
    expect(links[1]?.getAttribute('routerLink')).toBe('/about');
    expect(links[2]?.innerText.trim()).toBe('Blog');
    expect(links[2]?.getAttribute('routerLink')).toBe('/blog');
    expect(links[3]?.innerText.trim()).toBe('Contact');
    expect(links[3]?.getAttribute('routerLink')).toBe('/contact');
  });
});
