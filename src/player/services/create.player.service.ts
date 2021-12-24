import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from '../dtos/create.player.dto';

@Injectable()
export class CreatePlayerService {
    private readonly looger = new Logger(CreatePlayerService.name);

    async execute(createPlayerDto: CreatePlayerDto) {
        this.looger.log(`createPlayerDto: ${createPlayerDto}`);
    }
}
