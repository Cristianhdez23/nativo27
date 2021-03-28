import { makeStyles } from "@material-ui/styles";
import {
  rem,
  BACKDROP_ICON_BACKGROUND,
  BACKDROP_ICON_BACKGROUND_HOVER,
} from "../../constants/constants";

export default makeStyles((theme) => ({
  modalRoot: {
    position: "relative",
  },
  modalPaper: {
    position: "relative",
    width: "100%",
    maxWidth: 830,
    borderRadius: 0,
  },
  closeIconBtn: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
    backgroundColor: BACKDROP_ICON_BACKGROUND,
    borderRadius: 0,
    color: theme.palette.primary.white,
    "&:hover": {
      backgroundColor: BACKDROP_ICON_BACKGROUND_HOVER,
    },
    [theme.breakpoints.up("sm")]: {
      top: 10,
      right: 10,
    },
  },
  closeIcon: {
    fontSize: rem(20),
    [theme.breakpoints.up("sm")]: {
      fontSize: rem(35),
    },
  },
}));
