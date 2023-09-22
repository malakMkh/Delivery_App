const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  Data: [
    {
      adresseDepart: String,
      dateValue: String,
      hourValue: String,
      minuteValue: String,
      isAtTruck: String,
      quantities: [Number],
      iselevator: String,
    },
  ],
  Data_a: [
    {
      adresseArrivee: String,
      isAtTruck: String,
      quantities: [Number],
      iselevator: String,
    },
  ],
  Data_o: [
    {
      objetList: [String],
      quantities: [Number],
    },
  ],

  totale: Number,
  payement: String,

  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
});

module.exports = mongoose.model('Order', orderSchema);
