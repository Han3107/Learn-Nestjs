import { Controller } from '@nestjs/common';
import { AuthService } from '../user/auth.service';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}
}
