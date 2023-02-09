import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});




//OTHER WAY

// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Date } from 'mongoose';

// @Schema()
// export class Product {
//   @Prop()
//   title: string;
//   @Prop()
//   description: string;

//   @Prop()
//   price: number;
// }
// export const ProductSchema = SchemaFactory.createForClass(Product);
