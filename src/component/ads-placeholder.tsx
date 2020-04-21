import { Grid, Typography } from "@material-ui/core"; import React from "react";


export function AdsPlaceholder() {
    return <Grid style={{ border: '1px solid gray', minHeight: 320 }}>
        <Typography>
            Ads Here
        </Typography>
    </Grid>
}