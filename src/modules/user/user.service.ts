import { Injectable, Scope } from '@nestjs/common';
import { DatabaseService } from 'src/db/database.service';

@Injectable({ scope: Scope.TRANSIENT })
export class UserService {
  constructor(private readonly db: DatabaseService) {
    console.log('instance UserService created');
  }
  getUsers() {
    return this.db.FindAll();
  }
}
