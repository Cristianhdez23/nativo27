import { makeStyles } from "@material-ui/styles";
import { rem } from "../../constants/constants";

export default makeStyles((theme) => ({
  ThreeBigImageSection: {
    width: "100%",
    height: "90vh",
    display: "flex",
    position: "relative",
  },
  TitlesData: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  composition: {
    position: "relative",
    width: "100%",
    "&:hover .big-image": {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    },
    "& .big-image:hover": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
  },
  Image: {
    boxShadow: "0 1.5rem 4rem rgb(0 0 0 / 40%)",
    borderRadius: 2,
    width: "100%",
    height: "90vh",
    position: "absolute",
    transition: "0.5s",
  },
  FirstImage: {
    backgroundColor: "red",
    clipPath: "polygon(0 0, 33% 0, 33% 100%, 0% 100%)",
  },
  SecondImage: {
    backgroundColor: "blue",
    clipPath: "polygon(33.5% 0, 66.5% 0, 66.5% 100%, 33.5% 100%)",
  },
  ThirdImage: {
    backgroundColor: "green",
    clipPath: "polygon(67% 0, 100% 0, 100% 100%, 67% 100%)",
  },
  ImageText: {
    position: "absolute",
    textTransform: "uppercase",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    fontSize: rem(24),
    zIndex: 12,
    "& > span": {
      height: 22,
      fontWeight: 400,
      fontSize: rem(19),
    },
    [theme.breakpoints.up("md")]: {
      height: 62,
      fontSize: rem(35),
      "& > span": {
        fontSize: rem(26),
      },
    },
  },
  firsText: {
    position: "absolute",
    width: "33%",
    textAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
    "&:hover ~ section > article:nth-child(1)": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },

    letterSpacing: "7px",
    "& > span": {
      letterSpacing: "3.5px",
    },
  },
  secondText: {
    position: "absolute",
    width: "33%",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&:hover ~ section > article:nth-child(2)": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },

    letterSpacing: "7px",
    "& > span": {
      letterSpacing: "2px",
    },
  },
  thridText: {
    position: "absolute",
    width: "33%",
    textAlign: "center",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    "&:hover ~ section > article:nth-child(3)": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },

    letterSpacing: "8px",
    "& > span": {
      letterSpacing: "2.5px",
    },
  },
}));
