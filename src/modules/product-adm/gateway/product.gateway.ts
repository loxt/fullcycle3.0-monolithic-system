import Product from "../domain/entity/product.entity";
import Id from "../../@shared/domain/value-object/id.value-object";

export default interface ProductGateway {
  add(product: Product): Promise<void>;
  findById(id: Id): Promise<Product>;
  findAll(): Promise<Product[]>;
  update(product: Product): Promise<void>;
  delete(id: Id): Promise<void>;
}
