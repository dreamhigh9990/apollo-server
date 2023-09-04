const { RESTDataSource } = require('apollo-datasource-rest'); // Assuming you're using Apollo DataSources

class PrestaShopAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.prestashop.com/products'; // Replace with the actual API URL
  }

  async getProducts() {
    const response = await this.get('');
    return response.products;
  }
}

module.exports = PrestaShopAPI;
