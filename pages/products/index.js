import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Layout } from "../../components/Layout";

const links = [
  { title: "Home", path: "/" },
  { title: "Store", path: "/store" },
  { title: "Foods", path: "/store/products/foods" },
];

const Products = () => {
  return (
    <Layout breadcrumbs={links}>
      <Container style={{ marginBottom: 30 }}>
        <Grid container>
          <Grid md>
            <Typography variant="h2">Title</Typography>
          </Grid>
          <Grid md>
            <Box display="flex" justifyContent="end">
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Typography variant="subtitle1">Products</Typography>
                <Chip color="secondary" size="small" label="119" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </Layout>
  );
};

export default Products;
