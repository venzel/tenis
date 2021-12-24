import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerService } from '../services/create.player.service';
import { CreatePlayerDto } from '../dtos/create.player.dto';

@Controller('api/v1/players')
export class PlayerController {
    constructor(private readonly createService: CreatePlayerService) {}

    @Post()
    async createHandle(@Body() createPlayerDto: CreatePlayerDto) {
        const { email } = createPlayerDto;

        await this.createService.execute(createPlayerDto);
    }
}
