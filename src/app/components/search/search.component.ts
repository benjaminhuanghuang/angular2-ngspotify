import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';


@Component({
  moduleId: module.id,
  selector: 'seach',
  templateUrl: 'search.component.html'
})
export class SearchComponent {

  private searchStr: string;
  private searchRes: Artist[];

  constructor(private _spotifyServcie: SpotifyService) {
  }
  searchMusic() {
    this._spotifyServcie.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }
}
