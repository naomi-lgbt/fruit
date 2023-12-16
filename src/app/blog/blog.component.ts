import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { MarkdownModule, provideMarkdown } from "ngx-markdown";

import { Post } from "../../interfaces/Post";
import { FileService } from "../file.service";
import { TagComponent } from "../tag/tag.component";

/**
 *
 */
@Component({
  selector: "app-blog",
  standalone: true,
  imports: [
    CommonModule,
    MarkdownModule,
    HttpClientModule,
    RouterModule,
    TagComponent
  ],
  providers: [provideMarkdown()],
  templateUrl: "./blog.component.html",
  styleUrl: "./blog.component.css"
})
export class BlogComponent {
  public slug = "";
  public markdown = "";
  public posts: Post[] = [];

  /**
   *
   * @param {ActivatedRoute} route - The activated route, providing access to the route parameters.
   * @param {FileService} service - The file service responsible for loading data.
   */
  constructor(
    private route: ActivatedRoute,
    private service: FileService
  ) {
    this.slug = this.route.snapshot.params["slug"] ?? "";
    if (!this.slug) {
      this.service
        .loadList()
        .subscribe((list) => (this.posts = list.slice(0, 10)));
      return;
    }
    this.service.loadPost(this.slug).subscribe((m) => {
      const [, , ...content] = m.split("---");
      this.markdown = content.join("---");
    });
  }
}
