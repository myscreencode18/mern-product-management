

import { useState } from "react";
import api from "../api/axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AppSnackbar from "./AppSnackbar";
import { Container, Paper, TextField, Button, Box, Typography } from "@mui/material";

const ProductForm = ({ existingProduct }) => {
  const [form, setForm] = useState({
    metaTitle: existingProduct?.metaTitle || "",
    productName: existingProduct?.productName || "",
    slug: existingProduct?.slug || "",
    gallery: existingProduct?.gallery?.join(",") || "",
    price: existingProduct?.price || "",
    discountedPrice: existingProduct?.discountedPrice || "",
    description: existingProduct?.description || ""
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      gallery: form.gallery.split(",").map((img) => img.trim())
    };

    try {
      if (existingProduct) {
        await api.patch(`/products/${existingProduct._id}`, payload);
        setSnackbar({
          open: true,
          message: "Product updated successfully",
          severity: "success"
        });
      } else {
        await api.post("/products", payload);
        setSnackbar({
          open: true,
          message: "Product created successfully",
          severity: "success"
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Something went wrong",
        severity: "error"
      });
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          p: 5,
          borderRadius: 3,
          border: "1px solid #eee",
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          {existingProduct ? "Update Product" : "Create Product"}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2
          }}
        >
          <TextField
            label="Meta Title"
            name="metaTitle"
            value={form.metaTitle}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Product Name"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Slug"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Image URLs (comma separated)"
            name="gallery"
            value={form.gallery}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Discounted Price"
            name="discountedPrice"
            type="number"
            value={form.discountedPrice}
            onChange={handleChange}
            fullWidth
          />

          {/* CKEditor */}
          <Box sx={{ mt: 2 }}>
            <CKEditor
              editor={ClassicEditor}
              data={form.description}
              onChange={(event, editor) => {
                const data = editor.getData();
                setForm({ ...form, description: data });
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              textTransform: "none",
              fontWeight: 500
            }}
          >
            {existingProduct ? "Update Product" : "Create Product"}
          </Button>
        </Box>

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        />
      </Paper>
    </Container>
  );
};

export default ProductForm;
