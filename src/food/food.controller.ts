import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
@Controller('food')
export class FoodController {

    @Get("search")
    search(@Query("year") movieYear) {
        console.log(movieYear);
        return `We are searching for a movie with a title : ${movieYear}`
    }

}
