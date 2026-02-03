
import { useEffect, useState } from "react";
import api from "../../api/axios";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import AppSnackbar from "../../components/AppSnackbar";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      await api.delete(`/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));

      setSnackbar({
        open: true,
        message: "Product deleted successfully",
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to delete product",
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Products
        </Typography>

        <Button
          component={Link}
          to="/admin/add-product"
          variant="contained"
          sx={{
            textTransform: "none",
            px: 3,
          }}
        >
          Add Product
        </Button>
      </Box>

      {/* TABLE */}
      <Paper elevation={0} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F9F9F9" }}>
              <TableCell sx={{ fontWeight: 600 }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((p) => (
              <TableRow
                key={p._id}
                hover
                sx={{
                  "&:last-child td": { borderBottom: 0 },
                }}
              >
                <TableCell>{p.productName}</TableCell>

                <TableCell>₹{p.price}</TableCell>

                <TableCell align="right">
                  <Button
                    component={Link}
                    to={`/admin/edit-product/${p._id}`}
                    size="small"
                    sx={{ textTransform: "none", mr: 1 }}
                  >
                    Edit
                  </Button>

                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(p._id)}
                    sx={{ textTransform: "none" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Container>
  );
};

export default AdminDashboard;
