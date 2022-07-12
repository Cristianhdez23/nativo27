import { makeStyles } from "@material-ui/styles";
import { rem, BACKDROP_ICON_BACKGROUND_HOVER } from "../../constants/constants";

export default makeStyles((theme) => ({
  ThreeBigImageSection: {
    width: "100%",
    height: "100%",
    display: "flex",
    position: "relative",
    margin: "45px 0 0 0",
    [theme.breakpoints.up("md")]: {
      height: "90vh",
      margin: "130px 0 0 0",
    },
  },
  composition: {
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      "&:hover .big-image": {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      },
      "& .big-image:hover": {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  Image: {
    width: "100%",
    height: "180px",
    position: "relative",
    transition: "0.2s",
    marginBottom: 4,
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
      position: "absolute",
      height: "90vh",
    },
  },
  FirstImage: {
    background: `url(/photos/homepage/3-First-Image.jpg) no-repeat center center`,
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundSize: 'cover',
    [theme.breakpoints.up("md")]: {
      clipPath: "polygon(0 0, 33% 0, 33% 100%, 0% 100%)",
    },
  },
  SecondImage: {
    background: `url(/photos/homepage/3-Second-Image.jpg) no-repeat center center`,
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundSize: 'cover',
    [theme.breakpoints.up("md")]: {
      clipPath: "polygon(33.5% 0, 66.5% 0, 66.5% 100%, 33.5% 100%)",
    },
  },
  ThirdImage: {
    background: `url(/photos/homepage/3-Third-Image.jpg) no-repeat center center`,
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundSize: 'cover',
    [theme.breakpoints.up("md")]: {
      clipPath: "polygon(67% 0, 100% 0, 100% 100%, 67% 100%)",
    },
  },
  // --||--||--|| Text Styles ||--||--||--
  ImageText: {
    cursor: 'pointer',
    position: "absolute",
    textTransform: "uppercase",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    fontSize: rem(22),
    zIndex: 12,
    position: "absolute",
    width: "100%",
    textAlign: "center",
    height: 184,
    "& > a > span": {
      height: 22,
      fontWeight: 400,
      fontSize: rem(16),
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up("md")]: {
      width: "33%",
      top: "50%",
      height: 62,
      fontSize: rem(30),
      "& > a > span": {
        fontSize: rem(21),
      },
      "&:hover ~ section > article": {
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      },
    },
  },
  firsText: {
    letterSpacing: "4px",
    "& > a > span": {
      letterSpacing: "2.5px",
    },
    [theme.breakpoints.up("md")]: {
      transform: "translateY(-50%)",
      "&:hover ~ section > article:nth-child(1)": {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  secondText: {
    letterSpacing: "4px",
    "& > a > span": {
      letterSpacing: "1.5px",
    },
    [theme.breakpoints.down("md")]: {
      top: "50%",
      transform: "translateY(-50%)",
    },
    [theme.breakpoints.up("md")]: {
      left: "50%",
      transform: "translate(-50%, -50%)",
      "&:hover ~ section > article:nth-child(2)": {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  thridText: {
    letterSpacing: "5px",
    "& > a > span": {
      letterSpacing: "2.1px",
    },
    [theme.breakpoints.down("md")]: {
      bottom: 0,
      right: "50%",
      transform: "translateX(50%)",
    },
    [theme.breakpoints.up("md")]: {
      right: 0,
      transform: "translateY(-50%)",
      "&:hover ~ section > article:nth-child(3)": {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      },
    },
  },
  Link: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.primary.white,
    textDecoration: 'none',
  },
  imageBackdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BACKDROP_ICON_BACKGROUND_HOVER,
  },
}));
