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

export const headerMiddleStyles = makeStyles((theme) => ({
  title: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  },
  searchInput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.h,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    borderRadius: theme.spacing(1),
  },
  input: {
    paddingLeft: theme.spacing(1),
    width: "100%",
  },
}));

export const headerCategories = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.h,
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  categoryLabel: {
    color: theme.palette.main,
    fontSize: `${theme.typography.subtitle2.fontSize} !important`,
    margin: "none",
    padding: "none",
    whiteSpace: "nowarp",
  },
}));
