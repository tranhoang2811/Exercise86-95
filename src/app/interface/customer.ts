export interface ICustomer {
  id: string;
  name: string;
  email: string;
  age: number;
  image: string;
}

export interface ICustomerType {
  id: string;
  name: string;
  customers: ICustomer[];
}
