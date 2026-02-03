

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 3,
        backgroundColor: "#FFFFFF",
        position: "relative",
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
        },
        "&:hover .cta": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}
    >
      {/* SPEC TAG */}
      <Chip
        label="Carbon-Infused"
        size="small"
        sx={{
          position: "absolute",
          top: 14,
          left: 14,
          backgroundColor: "#E0F2F1",
          color: "#00695C",
          fontSize: "0.7rem",
          zIndex: 2,
        }}
      />

      {/* IMAGE */}
     <Box
  sx={{
    height: 220,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", 
    background:
      "radial-gradient(circle at bottom, #f1f3f5 0%, #ffffff 70%)",
  }}
>
        <CardMedia
    component="img"
    image={product.gallery[0]}
    alt={product.productName}
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "contain", 
      transition: "transform 0.4s ease",
      filter: "drop-shadow(0 18px 20px rgba(0,0,0,0.12))",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  />
      </Box>

      {/* CONTENT */}
      <CardContent sx={{ pt: 3 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 500, color: "#2D3436" }}
        >
          {product.productName}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "0.9rem",
            mt: 0.5,
          }}
        >
          ₹{product.price}
        </Typography>

        {/* CTA */}
        <Button
          component={Link}
          to={`/product/${product._id}`}
          className="cta"
          variant="outlined"
          size="small"
          sx={{
            mt: 3,
            opacity: 0,
            transform: "translateY(10px)",
            transition: "all 0.3s ease",
            borderColor: "#00CEC9",
            color: "#00CEC9",
            fontSize: "0.75rem",
            letterSpacing: 1,
            "&:hover": {
              backgroundColor: "#00CEC9",
              color: "#FFFFFF",
            },
          }}
        >
          EXPLORE TECH →
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
