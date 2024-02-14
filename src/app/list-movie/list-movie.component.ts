import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-list-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-movie.component.html',
  styleUrl: './list-movie.component.css'
})
export class ListMovieComponent {
  movies:any[]=[];
  constructor(private movieService:MovieService){}

  ngOnInit(){
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }
}
