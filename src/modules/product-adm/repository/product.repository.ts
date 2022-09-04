import ProductGateway from "../gateway/product.gateway";
import Product from "../domain/entity/product.entity";
import Id from "../../@shared/domain/value-object/id.value-object";
import { ProductModel } from "./product.model";

export default class ProductRepository implements ProductGateway {
  async add(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  delete(id: Id): Promise<void> {
    return Promise.resolve(undefined);
  }

  findAll(): Promise<Product[]> {
    return Promise.resolve([]);
  }

  findById(id: Id): Promise<Product> {
    return Promise.resolve(undefined);
  }

  update(product: Product): Promise<void> {
    return Promise.resolve(undefined);
  }
}
