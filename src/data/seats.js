const seats = [];
const rows = ["A", "B", "C", "D", "E", "F"];

const seatsPerRow = 10;

rows.forEach((row) => {
  for (let i = 0; i <= seatsPerRow; i++) {
    seats.push({
      id: `${row}${i}`,
      row,
      number: i,
      price: 200,
      status: Math.random() > 0.8 ? "booked" : "available",
    });
  }
});
export default seats;
