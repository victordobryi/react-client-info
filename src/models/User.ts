import { IData } from './Data';

export interface User {
  surname: string;
  name: string;
  patronymic: string;
  oguid: string;
}

export interface IUsers {
  users: IData[];
}
