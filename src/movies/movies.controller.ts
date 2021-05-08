import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies';
    }


    @Get("search")
    search(@Query("year") movieYear) {
        console.log(movieYear);
        return `We are searching for a movie with a title : ${movieYear}`
    }

    @Get("/:id")
    getOne(@Param("id") id: string) {
        return `This will return one movies with the id: ${id}`;
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
