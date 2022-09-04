import Product from "../domain/entity/product.entity";

export default interface ProductGateway {
  add(product: Product): Promise<void>;
  findById(id: string): Promise<Product>;
  findAll(): Promise<Product[]>;
  update(product: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
