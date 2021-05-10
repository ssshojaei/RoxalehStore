import { makeStyles } from "@material-ui/core";

export const headerTopStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  marginY: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  divider: {
    background: "#151515",
    opacity: 0.05,
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
}));

export const menuBtnStyles = makeStyles({
  removeHoverBG: {
    "&:hover": {
      background: "initial",
    },
  },
});
