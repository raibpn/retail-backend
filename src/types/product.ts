import { Document } from 'mongoose';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
}
