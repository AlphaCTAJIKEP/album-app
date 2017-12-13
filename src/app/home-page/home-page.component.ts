import {Component, OnInit} from '@angular/core';
import {ServerService} from '../server.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = 'Albums app';
  albums = [];

  constructor(private server: ServerService) {}

  ngOnInit () {
    this.server
      .getAlbums()
      .subscribe((data: any) => {
        console.log(data.albums);
        this.albums = data.albums;
      });
  }
}
