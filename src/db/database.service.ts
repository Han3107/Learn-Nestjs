import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  FindAll() {
    return 'Database Service: Find all records';
  }
}
