import { AddProductInputDto, AddProductOutputDto } from "./add-product.dto";
import ProductGateway from "../../gateway/product.gateway";
import Product from "../../domain/entity/product.entity";
import Id from "../../../@shared/domain/value-object/id.value-object";

export default class AddProductUseCase {
  constructor(private productRepository: ProductGateway) {}

  async execute(input: AddProductInputDto): Promise<AddProductOutputDto> {
    const product = new Product({
      id: new Id(input.id),
      name: input.name,
      description: input.description,
      purchasePrice: input.purchasePrice,
      stock: input.stock,
    });

    await this.productRepository.add(product);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
}
