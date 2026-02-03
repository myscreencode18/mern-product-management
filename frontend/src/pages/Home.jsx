


import { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "../components/ProductCard";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <Box
        sx={{
          backgroundColor: "#F7F8FA",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Grid container spacing={6} alignItems="center">
            {/* LEFT CONTENT */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: 2, color: "text.secondary" }}
              >
                Weightless Performance
              </Typography>

              <Typography
                variant="h2"
                fontWeight={700}
                sx={{ mt: 2, lineHeight: 1.1 }}
              >
                Meet the Aero-01
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  color: "text.secondary",
                  maxWidth: 420,
                  fontSize: "1.05rem",
                }}
              >
                Featuring our patented carbon-weave tech for a ride that feels
                like nothing at all.
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: 5,
                  px: 4,
                  py: 1.5,
                  borderColor: "black",
                  color: "black",
                  borderRadius: 0,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                SHOP THE COLLECTION →
              </Button>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/her.jpg" 
                alt="Aero-01 Shoe"
                sx={{
                  width: "100%",
                  maxWidth: 520,
                  display: "block",
                  mx: "auto",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PRODUCT LIST */}
    <Container
  maxWidth="lg"
  sx={{
    py: 10,
    backgroundColor: "#F9F9F9",
  }}
>
  <Grid container spacing={6}>
    {products.map((product) => (
      <Grid item xs={12} sm={6} md={4} key={product._id}>
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>
</Container>

    </>
  );
};

export default Home;
