import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "./product.model";
import Product from "../domain/entity/product.entity";
import Id from "../../@shared/domain/value-object/id.value-object";
import ProductRepository from "./product.repository";

describe("ProductRepository integration tests", function () {
  let sequelize: Sequelize;

  beforeEach(async function () {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async function () {
    await sequelize.close();
  });

  it("should add a product", async function () {
    const productProps = {
      id: new Id("1"),
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
    };

    const product = new Product(productProps);
    const productRepository = new ProductRepository();
    await productRepository.add(product);

    const productFromDb = await ProductModel.findOne({
      where: { id: productProps.id.id },
    });

    expect(productFromDb).toBeDefined();
    expect(productFromDb.id).toBe(productProps.id.id);
    expect(productFromDb.name).toBe(productProps.name);
    expect(productFromDb.description).toBe(productProps.description);
    expect(productFromDb.purchasePrice).toBe(productProps.purchasePrice);
    expect(productFromDb.stock).toBe(productProps.stock);
  });
});
