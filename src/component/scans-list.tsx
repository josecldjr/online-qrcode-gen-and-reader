import { Grid, ListItem, ListItemText } from "@material-ui/core"
import React from "react"

export interface ScansListProps {
    lastScans: string[],
    onClick: (value: string) => void,
}

export function ScansList(props: ScansListProps) {



    return <Grid item xs={12}>
        {
            props.lastScans.map((scan, index) => {
                return <ListItem
                    key={index}
                    onClick={() => props.onClick(scan)}
                    button={true}
                    style={{ width: '100%' }}

                >
                    <ListItemText
                        primary={scan}
                    />
                </ListItem >
            })
        }
    </Grid>
}