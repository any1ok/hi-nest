import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { FoodController } from './food/food.controller';
import { FoodService } from './food/food.service';
import { FoodModule } from './food/food.module';

@Module({
  imports: [FoodModule],
  controllers: [AppController, MoviesController, FoodController],
  providers: [AppService, MoviesService, FoodService],
})
export class AppModule {}
