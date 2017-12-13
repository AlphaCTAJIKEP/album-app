import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
import {ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {

  album = [];
  addForm: FormGroup;
  constructor(private server: ServerService,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.server.getAlbums()
      .subscribe((data: any) => {
        this.album = data.albums[+this.route.snapshot.params['id'] - 1];
        for (let link of this.album['url']) {
          let url = link.urlId;
          link['urlId'] = this.server.getSafeUrl(url);
        }
      });

    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      url: new FormControl('', [Validators.required, this.checkYouTubeUrl.bind(this)])
    });

  }

  open(content) {
    this.modalService.open(content);
  }



  checkYouTubeUrl (control: FormControl) {
    let url = control.value;
    if (url !== '') {
      let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      let match = url.match(regExp);
      if (match && match[2].length === 11) {

        return null;

      } else {
        return {
          'urlError': true
        };
      }
    } else {
      return {
        'urlError': true
      };
    }
  }

  onSubmit() {

    let name = this.addForm.value['title'];
    let description = this.addForm.value['description'];
    let url = this.addForm.value['url'];
    let youtubeId = this.server.getYouTubeUrl(url);
    this.album['url'].push({
      name,
      description,
      urlId: youtubeId
    });
    this.addForm.reset();
  }
}
