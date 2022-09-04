const MockRepository = () => {
  return {
    add: jest.fn(),
    findById: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };
};

describe("Add Product usecase unit tests", function () {
  it("should add a product", async function () {
    const productRepository = MockRepository();
    const usecase = new AddProductUseCase(productRepository);

    const input = {
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 100,
      stock: 10,
    };

    usecase.execute(input);
  });
});
