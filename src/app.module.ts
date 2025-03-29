import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroService } from './hero/hero.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HeroService],
})
export class AppModule {}
