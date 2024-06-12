import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { MakePaymentDto } from '@nestjs-microservices/shared';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_MICROSERVICE') private readonly paymentClient: ClientKafka
  ) {}

  /**
   * This function triggers the payment processing by emitting a 'process_payment' event
   * to the payment client with the provided payment data.
   *
   * @param {MakePaymentDto} makePaymentDto - The data required to process the payment.
   */
  makePayment(makePaymentDto: MakePaymentDto) {
    this.paymentClient.emit('process_payment', JSON.stringify(makePaymentDto));
  }
}
