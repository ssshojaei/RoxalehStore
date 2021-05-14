import { Box, Container } from "@material-ui/core";
import React from "react";
import CategoryItem from "./CategoryItem";
import { headerCategories } from "./styles";

// Test Data
const data = [
  {
    id: 1,
    title: "Food Cupboard",
    children: [
      {
        id: 1,
        title: "Vegan Egg",
      },
      {
        id: 2,
        title: "Dairy Alternatives",
      },
      {
        id: 3,
        title: "Cheese Replacers",
      },
    ],
  },
  {
    id: 2,
    title: "Confectionary",
    children: [
      {
        id: 1,
        title: "Chocolate Snack Bars",
      },
      {
        id: 2,
        title: "Chocolate Sharing Bars",
      },
      {
        id: 3,
        title: "Sweets",
      },
    ],
  },
];

const HeaderCategories = () => {
  const classes = headerCategories();

  return (
    <Box className={classes.root}>
      <Container>
        <Box display="flex" justifyContent="start" alignItems="center">
          {data.map((category, index) => (
            <CategoryItem {...category} key={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderCategories;
