import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  ImageSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "45px 15px",
    padding: "0 15px",
  },
  imageBlock: {
    margin: "0 15px",
    height: 266,
  },
  paragraphBlock: {
    margin: "45px 15px 0 15px",
    position: "relative",
  },
  watermarkBlock: {
    position: "absolute",
    bottom: -45,
    width: 150,
    height: 150,
  },
  watermarkRight: {
    right: -30,
  },
  watermarkLeft: {
    left: -30,
  },
  watermark: {
    backgroundColor: theme.palette.background.main,
  },
  paragraph: {
    boxSizing: "border-box",
    position: "relative",
    textAlign: "justify",
    color: theme.palette.text.light,
    paddingLeft: "12%",
    letterSpacing: 2,
    lineHeight: "28px",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
      width: 5,
      height: "35%",
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
