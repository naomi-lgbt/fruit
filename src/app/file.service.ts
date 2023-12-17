import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Post } from "../interfaces/Post";

/**
 *
 */
@Injectable({
  providedIn: "root"
})
export class FileService {
  private markdown: Record<string, string>;
  /**
   *
   * @param {HttpClient} http - The Angular HttpClient service used for making HTTP requests.
   */
  constructor(private http: HttpClient) {
    this.markdown = {};
  }

  /**
   * Loads a list of posts from the specified JSON file.
   *
   * @returns {Observable<Post[]>} An Observable that emits the list of posts.
   */
  public loadList(): Observable<Post[]> {
    const list = this.http.get<Post[]>("assets/posts.json");
    return list;
  }

  /**
   * Loads a post content based on the provided slug.
   *
   * @param {string} slug - The unique identifier for the post.
   * @returns {Observable<string>} An Observable that emits the content of the post.
   */
  public loadPost(slug: string): Observable<string> {
    if (this.markdown[slug]) {
      return of(this.markdown[slug]);
    }
    const markdown = this.http.get(`assets/posts/${slug}.md`, {
      responseType: "text"
    });
    markdown.subscribe((m) => (this.markdown[slug] = m));
    return markdown;
  }
}
