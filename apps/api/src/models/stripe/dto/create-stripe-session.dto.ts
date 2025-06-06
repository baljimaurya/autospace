import { TotalPrice } from "./../../../../../../libs/util/types";
import { CreateBookingInput } from "src/models/bookings/graphql/dtos/create-booking.input";

export class CreateStripeDto {
  uid: string;
  totalPriceObj: TotalPrice;
  bookingData: CreateBookingInput;
}
