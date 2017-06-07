import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { MovieListPage } from '../movie-list/movie-list';

@Component({
    templateUrl: 'movie-info.html'
})

export class MovieInfoPage {

	movie: {};

	constructor(private navCtrl: NavController, private navParams: NavParams) {
		this.movie = navParams.get('movie');


    }
    goBack(){
      this.navCtrl.pop(MovieListPage);
    }
	}
