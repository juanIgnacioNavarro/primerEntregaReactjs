import React, { useEffect, useState } from "react";
import { getProducts } from "../../mock";
import { Link } from "react-router-dom";
import CardProduct from "../../components/cardProducts/index";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log({ err }))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="text-2xl max-w-5xl m-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff] text-center">
        Cargando listado de productos...
      </p>
    );

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {products.map(({ id, title, price, category, rating, image }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={4}>
            <CardProduct
              id={id}
              title={title}
              image={image}
              category={category}
              price={price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
