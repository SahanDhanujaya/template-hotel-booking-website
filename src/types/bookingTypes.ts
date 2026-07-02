type BookingAvailability = {
  checkIn: string;
  checkOut: string;
  rooms: string[];
  adults: number;
  children: number;
};

type Booking = {
   id: string;
   user_id: string;
   
}

export type {BookingAvailability, Booking};
