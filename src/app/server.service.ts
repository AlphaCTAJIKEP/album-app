import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class ServerService {

  constructor(private http: Http, private sanitizer: DomSanitizer) {}

  getAlbums() {
    return this.http.get('/assets/db.json')
      .map((response: Response) => response.json());

  }

  getYouTubeUrl(url: string) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    return this.getSafeUrl(match[2]);
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url);
  }
}
