import { makeStyles } from "@material-ui/core";

export const siteMapStyles = makeStyles((theme) => ({
  root: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    marginBottom: theme.spacing(3),
  },
  itemLink: {
    color: "inherit",
    textDecoration: "none",
  },
}));
