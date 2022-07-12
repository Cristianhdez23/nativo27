import React from "react";
import Image from "material-ui-image";
import { DISCLAIMER_DATA } from "../../jsonData/arquitectura/2.3-disclaimerData";
import { SITE_TITLE } from "../../constants/constants";
import { Typography, Grid, Tabs, Tab } from "@material-ui/core";

import useStyles from "./styles";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const TabsSection = ({ data }) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const disclaimerData = DISCLAIMER_DATA.map(({ description }, index) => {
    return (
      <Typography key={index} component="p" className={classes.disclaimer}>
        {description}
      </Typography>
    );
  });

  return (
    <section className={classes.TabsSection}>
      <article position="static" className={classes.tabsNavigation}>
        <span className={`${classes.watermarkBlock}`}>
          <Image
            className={classes.watermark}
            src="/photos/logo/marca-nativo27.svg"
            alt={SITE_TITLE}
          />
        </span>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="Tipos de Casas"
          centered
          classes={{
            root: classes.tabsBlock,
            indicator: classes.indicatorTab,
          }}
        >
          <Tab
            label="Casa 01"
            {...a11yProps(0)}
            classes={{
              root: classes.Tab,
              selected: classes.selectedTab,
            }}
          />
          <Tab
            label="Casa 02"
            {...a11yProps(1)}
            classes={{
              root: classes.Tab,
              selected: classes.selectedTab,
            }}
          />
          <Tab
            label="Casa 03"
            {...a11yProps(2)}
            classes={{
              root: classes.Tab,
              selected: classes.selectedTab,
            }}
          />
        </Tabs>
      </article>
      {data?.map(({ area, slug }, index) => {
        return (
          <div
            key={index}
            role="tabpanel"
            hidden={tabValue !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            className={classes.tabData}
          >
            {tabValue === index && (
              <Grid container className={`${classes.GridContainer}`}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  className={classes.informationContainer}
                >
                  <Typography component="h3" className={classes.TabTitle}>
                    Casa tipo {index + 1}
                  </Typography>
                  <Typography component="h4" className={classes.TabDescription}>
                    Área construida <span>{area} M2</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={5} className={classes.imageContainer}>
                  <article className={classes.imageBlock}>
                    <Image
                      src={slug}
                      animationDuration={1000}
                      disableSpinner
                      style={{
                        paddingTop: "0",
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </article>
                  {disclaimerData}
                </Grid>
              </Grid>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default TabsSection;
