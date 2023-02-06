import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  seller: {
    Boolean,
    default: false,
  },
  address: {
    addr1: String,
    addr2: String,
    city: String,
    country: String,
    zipcode: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
