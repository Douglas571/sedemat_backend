import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  savePayment(): void {
    console.log({payment: true})
  }
}
