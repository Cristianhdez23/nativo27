import React from "react";
import Image from "material-ui-image";

import useStyles from "./styles";

const DividerSection = ({ srcImage}) => {
  const classes = useStyles();
  return (
    <section className={classes.dividerSection}>
      <Image
        src={srcImage}
        animationDuration={1000}
        disableSpinner
        style={{
          paddingTop: "0",
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </section>
  );
};

export default DividerSection;
