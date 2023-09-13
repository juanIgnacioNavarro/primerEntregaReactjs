import { useEffect, useState } from "react";
import { getProductById } from "../../mock";
import { useParams, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Detail = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(Number(id))
      .then((product) => {
        setProduct(product);
      })
      .catch((err) => console.log({ err }))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <p className="text-2xl max-w-5xl m-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff] text-center">
        Cargando producto ...
      </p>
    );

  return (
    <section
      className="max-w-3xl m-auto h-screen flex flex-col justify-between"
      // Use the above CSS to set the height to 100vh
    >
      <Link
        to="/products"
        className="flex gap-3 hover:text-indigo-700 hover:bg-indigo-200 max-w-[120px] py-1 px-2 rounded-full"
      >
        Volver
      </Link>
      <Card sx={{ maxWidth: 345, flex: 1 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={product?.image} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product?.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${product?.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </section>
  );
};

export default Detail;
