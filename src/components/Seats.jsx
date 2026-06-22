function Seat({ seat, selected, onClick }) {
  return (
    <button
      className={
        seat.status === "booked"
          ? "seat booked"
          : selected
          ? "seat selected"
          : "seat available"
      }
      disabled={seat.status === "booked"}
      onClick={onClick}
    >
      {seat.id}
    </button>
  );
}
export default Seat;
