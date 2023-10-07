import { IProduct } from "./product";

export interface ICatalog {
    id: string;
    name: string;
    products: IProduct[];
}