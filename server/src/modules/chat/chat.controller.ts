/*
 Copyright (c) 2023, Xgrid Inc, http://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { User } from '../user';
import { ChatService } from './chat.service';
import { ChatListDto, CreateChatDto } from './commons/chat.dto';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from '../common/decorator/current-user.decorator';
import { LoggerMessages } from '../../utils/enum';
import { IPaginationOptions, Pagination } from '../../utils/pagination';
import { LoggerService } from '../../utils/logger/logger.service';

@UseGuards(AuthGuard('jwt'))
@Controller('/api/chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly loggerService: LoggerService,
  ) {}

  @Post('/')
  public async createChat(
    @Body() createChatDTO: CreateChatDto,
    @CurrentUser() user: User,
  ) {
    this.loggerService.log(`POST /Chat ${LoggerMessages.API_CALLED}`);
    return await this.chatService.createChat(createChatDTO, user.uuid);
  }

  @Get('/list')
  public async getChatList(
    @CurrentUser() user: User,
    @Query() query: ChatListDto,
    @Req() req,
  ) {
    this.loggerService.log(`POST /Chat ${LoggerMessages.API_CALLED}`);
    const pagination: IPaginationOptions = await Pagination.paginate(req);
    return await this.chatService.getChatList(user.uuid, query, pagination);
  }

  @Get('/:id')
  public async getChatById(
    @CurrentUser() user: User,
    @Param('id') id: string,
    @Req() req,
  ) {
    this.loggerService.log(`GET /chat/:id ${LoggerMessages.API_CALLED}`);
    const pagination: IPaginationOptions = await Pagination.paginate(req);
    return await this.chatService.getConversation(id, user.uuid, pagination);
  }
}
