import { Grid, ListItem, ListItemText, makeStyles } from "@material-ui/core"
import React from "react"

export interface ScansListProps {
    lastScans: string[],
    onClick: (value: string) => void,
}

export function ScansList(props: ScansListProps) {
    const classes = useStyles()


    return <Grid item xs={12}>
        {
            props.lastScans.map((scan, index) => {
                return <ListItem
                    key={index}
                    onClick={() => props.onClick(scan)}
                    button={true}
                    className={classes.listItem}

                >
                    <ListItemText
                        primary={scan}
                    />
                </ListItem >
            })
        }
    </Grid>
}

const useStyles = makeStyles(() => ({
    listItem: {
        width: '100%',
    }
}))