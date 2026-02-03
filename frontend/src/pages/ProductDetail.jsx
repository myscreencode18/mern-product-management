
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import ImageSlider from "../components/ImageSlider";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);



  if (!product)
    return (
      <Typography sx={{ textAlign: "center", mt: 10 }}>
        Loading…
      </Typography>
    );

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Grid container spacing={{ xs: 4, md: 10 }} alignItems="flex-start">
     
        <Grid item xs={12} md={6}>
          <Box
            sx={{
                 position: { md: "sticky" },
      top: 100,
              background:
                "radial-gradient(circle at bottom, #f1f3f5 0%, #ffffff 70%)",
              borderRadius: 4,
              p: { xs: 2, md: 4 },
            }}
          >
            <ImageSlider images={product.gallery} />
          </Box>
        </Grid>

    
        <Grid item xs={12} md={6}>
             <Box sx={{ maxWidth: 520 }}>

          
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#2D3436",
            }}
          >
            {product.productName}
          </Typography>

          {product.metaTitle && (
            <Typography
              sx={{
                mt: 1.5,
                color: "text.secondary",
                fontSize: "0.95rem",
                maxWidth: 460,
              }}
            >
              {product.metaTitle}
            </Typography>
          )}

          <Divider sx={{ my: 4 }} />

         
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {product.discountedPrice ? (
              <>
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    color: "#2D3436",
                  }}
                >
                  ₹{product.discountedPrice}
                </Typography>

                <Typography
                  sx={{
                    textDecoration: "line-through",
                    color: "text.secondary",
                  }}
                >
                  ₹{product.price}
                </Typography>
              </>
            ) : (
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  color: "#2D3436",
                }}
              >
                ₹{product.price}
              </Typography>
            )}
          </Box>

      
          <Button
            variant="outlined"
            sx={{
              mt: 4,
              px: 5,
              py: 1.5,
              borderRadius: 1,
              borderColor: "#2D3436",
              color: "#2D3436",
              fontWeight: 500,
              letterSpacing: 1,
              "&:hover": {
                backgroundColor: "#2D3436",
                color: "#FFFFFF",
              },
            }}
          >
            ADD TO CART →
          </Button>

        
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 2,
                color: "text.secondary",
              }}
            >
              Product Description
            </Typography>

            <Box
              sx={{
                mt: 2,
                lineHeight: 1.8,
                color: "#2D3436",
                "& p": { mb: 2 },
              }}
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />
          </Box>
       
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
