import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private markdown: Record<string, string>;
  constructor(private http: HttpClient) {
    this.markdown = {};
  }

  public loadPost(slug: string): Observable<string> {
    if (this.markdown[slug]) {
      return of(this.markdown[slug]);
    }
    const markdown = this.http.get(`assets/posts/${slug}.md`, {
      responseType: 'text',
    });
    markdown.subscribe((m) => (this.markdown[slug] = m));
    return markdown;
  }
}
