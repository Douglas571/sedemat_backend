import { Controller, Get, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';

class PaymentDto {
  rif: string;
  amount: number;
  ref: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  savePayment(@Body() payment: PaymentDto): boolean {
    console.log({payment})
    this.appService.savePayment()
    return true
  }
}
