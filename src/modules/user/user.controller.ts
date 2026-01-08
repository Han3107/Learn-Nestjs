import { Controller, Get, Query } from '@nestjs/common';
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
    return [this.userService.getUsers(), this.authService.login()];
  }

  @Get('profile') //->user/profile
  profile() {
    return 'User Profile Page';
  }
}
