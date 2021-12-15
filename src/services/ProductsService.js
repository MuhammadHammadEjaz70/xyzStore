import GenericSerivce from "./GenericSerivce";

class ProductsService extends GenericSerivce {
  constructor() {
    super();
  }
  AddProduct = (data) => {
    this.post(data);
  };
  deleteProduct = (_id) => {
    this.delete(_id);
  };
  updateProduct = (_id, data) => {
    this.put(_id, data);
  };
  getProducts = () => {
    this.get();
  };
}
let productsService = new ProductsService();
export default productsService;
