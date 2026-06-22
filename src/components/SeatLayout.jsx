import { useState } from "react";
import seatData from "../data/seats";
import Seat from "./Seats";
import BookingSummary from "./BookingSummary";

function SeatLayout() {
  const [seats, setSeats] = useState(seatData);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const handleSeatClick = (seat) => {
    if (selectedSeat.includes(seat.id)) {
      //deselect
      setSelectedSeat((prev) => prev.filter((id) => id !== seat.id));
    } else {
      //select
      setSelectedSeat((prev) => [...prev, seat.id]);
    }
  };
  return (
    <div className="seat-container">
      <h2>Book my show</h2>
      <div className="screen">SCREEN</div>
      <div className="seats">
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            seat={seat}
            selected={selectedSeat.includes(seat.id)}
            onClick={() => handleSeatClick(seat)}
          />
        ))}
      </div>
      <BookingSummary selectedSeats={selectedSeat} seats={seats} />
    </div>
  );
}
export default SeatLayout;
