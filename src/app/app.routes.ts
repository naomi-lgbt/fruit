import { Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent, pathMatch: "full" },
  { path: "blog/:slug", component: BlogComponent },
  { path: "contact", component: ContactComponent }
];
