import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {
    console.log('instance user Controller created');
  }

  @Get() //->users/
  index(@Query() query: any) {
    return { keyword: query.keyword, category: query.category };
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Get('profile') //->user/profile
  profile() {
    return 'User Profile Page';
  }

  @Delete()
  remove() {
    return 'Delete User';
  }

  @Get('/:id')
  show(@Param('id') id: string) {
    return `Show User with ID: ${id}`;
  }
}
