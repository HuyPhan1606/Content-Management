import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content, ContentDocument } from './content.schema';
import { CreateContentDto } from './dto/content.dto';

@Injectable()
export class ContentsService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
  ) {}

  async create(createContentDto: CreateContentDto): Promise<Content> {
    const createdContent = new this.contentModel({
      ...createContentDto,
    });
    return createdContent.save();
  }

  async findAll(): Promise<Content[]> {
    return this.contentModel.find().exec();
  }
}
