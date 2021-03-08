import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  imageContainer: {
    height: "100vh",
    width: "100%",
    minHeight: "100vh",
    minWidth: "100%",
    position: "relative",
  },
  informationBlock: {
    backgroundColor: '#a1b192',
    display: 'flex',
    flexDirection: 'column',
    position:'relative',

    [theme.breakpoints.up("md")]: {
      position: 'absolute',
      right: 0,
      bottom: '-10%',
      width: '45%',
      height: '300px',
      padding: '50px 70px',
      zIndex: 10,
    },
  }
}));
