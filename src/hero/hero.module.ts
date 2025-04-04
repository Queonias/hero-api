import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { PrismaService } from 'src/database/prisma.service';
import { HeroController } from './hero.controller';

@Module({
  providers: [HeroService, PrismaService],
  controllers: [HeroController],
})
export class HeroModule {}
