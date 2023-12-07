import { CommonModule } from '@angular/common';
import { Component, InjectionToken, SecurityContext } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FileService } from '../file.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MarkdownModule, HttpClientModule, RouterModule],
  providers: [provideMarkdown()],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  public slug = '';
  public markdown = '';
  public posts: Post[] = [];

  constructor(private route: ActivatedRoute, private service: FileService) {
    this.slug = this.route.snapshot.params['slug'] ?? '';
    if (!this.slug) {
      this.service
        .loadList()
        .subscribe((list) => (this.posts = list.slice(0, 10)));
      return;
    }
    this.service.loadPost(this.slug).subscribe((m) => {
      const [, frontMatter, ...content] = m.split('---');
      this.markdown = content.join('---');
    });
  }
}
