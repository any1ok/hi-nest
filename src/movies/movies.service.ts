import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity'
@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }
}
