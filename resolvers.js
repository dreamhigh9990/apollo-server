const resolvers = {
  Query: {
    products: async (_, __, { dataSources }) => {
      try {
        // Fetch products from the PrestaShop API using dataSources or any other method.
        const products = await dataSources.prestaShopAPI.getProducts();

        return products.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
        }));
      } catch (error) {
        throw new Error('Failed to fetch products');
      }
    },
  },
};
