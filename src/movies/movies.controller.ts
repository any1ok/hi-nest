import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get("/:id")
    getOne(@Param("id") id: string) {
        return `This will return one movies with the id: ${id}`;
    }

    @Post()
    create() {
        return 'this will create a movie';
    }

    @Delete('/:id')
    remove(@Param("id") movieId: string) {
        return `this will delete a movie with the id: ${movieId}`
    }

    @Patch('/:id')
    patch(@Param)
}