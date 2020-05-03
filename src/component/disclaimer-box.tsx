import { Grid, Typography, makeStyles } from "@material-ui/core"; import React from "react";


export function AdvertisingBox() {
    const classes = useStyles()
    return <Grid className={classes.box}>
        <Typography>
            Advertising
        </Typography>
    </Grid>
}

const useStyles = makeStyles(() => ({
    box: {
        border: '1px solid #cecece',
        height: '100%',
        minHeight: 430,
    }
}))