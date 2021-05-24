import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }


    @Get("search")
    search(@Query("year") movieYear) {
        console.log(movieYear);
        return `We are searching for a movie with a title : ${movieYear}`
    }

    @Get("/:id")
    getOne(@Param("id") id: string) {
        return this.movieService.getOne(id);
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return movieData;
        //return 'this will create a movie';
    }

    @Delete('/:id')
    remove(@Param("id") movieId: string) {
        return `this will delete a movie with the id: ${movieId}`
    }

    @Patch('/:id')
    patch(@Param("id") movieId: string, @Body() updateData) {
        return {
            updateMovie: movieId,
            ...updateData
        }
        //return `this will delete a movie with the id: ${movieId}`
    }


}
