import { makeStyles } from "@material-ui/core/esm";
export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "50vh",
    backgroundColor: theme.palette.type === "dark" ? "#121212" : "#f5f5f5",
    color: theme.palette.type === "dark" ? "#f5f5f5" : "#000",
    padding: "0 2rem",
  },
}));
