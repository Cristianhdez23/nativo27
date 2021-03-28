import Image from "material-ui-image";
import { Dialog, IconButton } from "@material-ui/core";
import { Close as CloseIcon, Menu as MenuIcon } from "@material-ui/icons";
import useStyles from "./styles";

const BigImageModal = (props) => {
  const classes = useStyles();
  const { onClose, selectedImage, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="Grid Image Modal"
      open={open}
      classes={{
        root: classes.modalRoot,
        paper: classes.modalPaper,
      }}
    >
      <IconButton
        className={classes.closeIconBtn}
        onClick={handleClose}
      >
        <CloseIcon className={classes.closeIcon} />
      </IconButton>
      <Image
        src={selectedImage}
        animationDuration={1000}
        disableSpinner
        style={{
          paddingTop: "100% ",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Dialog>
  );
};

export default BigImageModal;
