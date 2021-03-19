import { makeStyles } from "@material-ui/styles";
import { rem, PRIMARY_FONT } from "../../constants/constants";

export default makeStyles((theme) => ({
  ContactForm: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "45px 20px",
    padding: "0 20px",
    [theme.breakpoints.up("lg")]: {
      margin: "130px 0 0 0",
    },
  },
  contactBlock: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      margin: "0 auto",
      flexDirection: "row",
      alignItems: "flex-end",
    },
  },
  dataBlock: {
    width: "100%",
  },
  titleContactSection: {
    maxHeight: 78,
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: theme.palette.text.light,
    position: "relative",
    paddingLeft: "12%",
    fontWeight: 300,
    fontSize: rem(25),
    marginLeft: 15,
    marginRight: 15,
    "&:before": {
      content: '""',
      backgroundColor: theme.palette.primary.main,
      width: 2,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 355,
      fontSize: rem(35),
      paddingLeft: "5%",
      marginLeft: "25%",
      marginRight: 0,
      marginBottom: 90,
      maxHeight: 307,
      paddingTop: 200,
    },
  },
  formBlock: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    marginTop: 10,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: 15,
    marginRight: 15,
    [theme.breakpoints.up("lg")]: {
      marginLeft: "25%",
    },
  },
  TextField: {
    marginTop: 30,
  },
  sendBtn: {
    padding: "8px 16px",
    marginLeft: "auto",
    marginTop: 50,
    width: 150,
    color: theme.palette.primary.white,
    fontWeight: 300,
    letterSpacing: "1px",
    borderRadius: 0,
    fontSize: rem(16),
  },
  // INPUT STYLES
  InputLabel: {
    color: theme.palette.text.contrastText,
    fontFamily: PRIMARY_FONT,
    textTransform: "uppercase",
    fontSize: rem(15),
  },
  InputLabelFocused: {
    color: `${theme.palette.text.light} !important`,
  },
  inputTextField: {
    color: theme.palette.text.light,
    fontSize: rem(16),
  },
  underline: {
    "&:before": {
      borderBottom: `2px solid ${theme.palette.primary.main} !important`,
    },
  },
  watermarkBlock: {
    position: "absolute",
    top: -70,
    right: -20,
    width: 210,
    height: 210,
    [theme.breakpoints.up("lg")]: {
      top: -120,
      right: 50,
      width: 400,
      height: 400,
    },
  },
  watermark: {
    backgroundColor: theme.palette.background.main,
  },
}));
