import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/player.controller';
import { CreatePlayerService } from './services/create.player.service';

@Module({
    controllers: [PlayerController],
    providers: [CreatePlayerService],
})
export class PlayerModule {}
