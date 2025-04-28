import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { CreateContentDto } from './dto/content.dto';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  async create(@Body() createContentDto: CreateContentDto) {
    return this.contentsService.create(createContentDto);
  }

  @Get()
  async findAll() {
    return this.contentsService.findAll();
  }
}
