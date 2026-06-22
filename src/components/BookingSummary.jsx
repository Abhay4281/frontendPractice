function BookingSummary({ selectedSeats, seats }) {
  const total = selectedSeats.reduce((sum, id) => {
    const seat = seats.find((s) => s.id === id);
    return sum + (seat?.price || 0);
  }, 0);
  return (
    <div className="summary">
      <h3>selected seat</h3>
      <p>
        {selectedSeats.length === 0
          ? "no seat selected"
          : selectedSeats.join(",")}
      </p>
      <h3>total:{total}</h3>
      <button
        disabled={selectedSeats.length === 0}
        onClick={() => alert("booking successful")}
      >
        Book now
      </button>
    </div>
  );
}
export default BookingSummary;
