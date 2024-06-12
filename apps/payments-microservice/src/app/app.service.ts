import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { MakePaymentDto, User } from '@nestjs-microservices/shared';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientKafka
  ) {}

  /**
   * Processes a payment for a user.
   * 
   * @param makePaymentDto The payment data including userId and amount.
   * 
   * @returns void
   */
  processPayment(makePaymentDto: MakePaymentDto) {
    const { userId, amount } = makePaymentDto;
    this.authClient
      .send('get_user', JSON.stringify({ userId }))
      .subscribe((user: User) => {
        console.info(
          `process payment for user ${user.name} - amount: ${amount}`
        );
      });
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
