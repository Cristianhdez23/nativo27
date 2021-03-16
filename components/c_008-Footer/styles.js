import { makeStyles } from "@material-ui/styles";
import { rem, ICON_COLOR } from "../../constants/constants";

export default makeStyles((theme) => ({
  Footer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    width: "100%",
    margin: "45px 20px 0 20px",
    [theme.breakpoints.up("lg")]: {
      margin: "130px 0 0 0",
    },
  },
  footerInformation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: theme.palette.primary.light,
    position: "relative",
    padding: "40px 0",
  },
  division: {
    "&:after": {
      content: '""',
      display: "block",
      width: 3,
      height: 55,
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      "&:after": {
        height: 60,
      },
    },
  },
  city: {
    paddingTop: 30,
    paddingBottom: 3,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: rem(14),
    [theme.breakpoints.up("lg")]: {
      letterSpacing: "2px",
      fontSize: rem(16),
    },
  },
  address: {
    padding: "3px 10px",
    textAlign: "center",
    fontWeight: 300,
    letterSpacing: "1px",
    fontSize: rem(14),
    [theme.breakpoints.up("lg")]: {
      letterSpacing: "2px",
      fontSize: rem(16),
    },
  },
  socialIcons: {
    display: "flex",
    paddingBottom: 30,
    paddingTop: 5,
  },
  iconClasses: {
    padding: 5,
    margin: "0 10px",
    border: `2px solid ${ICON_COLOR}`,
    display: "flex",
    borderRadius: "100%",
    backgroundColor: theme.palette.primary.transparent,
    "& > svg": {
      color: ICON_COLOR,
      fontSize: rem(22),
    },
  },
  footerImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "5px 0",
  },
  imageBlock: {
    width: 110,
    height: 110,
    "& > div": {
      backgroundColor: `${theme.palette.primary.transparent} !important`,
    },
  },
}));
