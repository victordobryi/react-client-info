import { User } from './User';

export interface IData {
  id: number;
  oguid: string;
  status: string;
  order_type: OrderType;
  terminal: OrderType;
  account: OrderType;
  created_user: User;
  created_date: number;
}

export interface OrderType {
  name: string;
  oguid: string;
}
