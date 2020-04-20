import { Grid } from "@material-ui/core";
import React from "react";
import QrReader from 'react-qr-reader';

export interface ScannerProps {
    onScan: (result: string) => void
    onError: (error: any) => void
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void
    facingMode?: boolean
    legacy?: boolean
}

export default function Scanner(props: ScannerProps) {
    const delay = 150

    return <Grid>
        <QrReader
            delay={delay}
            onError={props.onError}
            onScan={props.onScan}
            onImageLoad={props.onLoad}
            showViewFinder={false}
            facingMode={props.facingMode ? 'user' : 'environment'}
            legacyMode={props.legacy}
            style={{
                border: '1px solid #cecece'
            }}

        />
    </Grid>
}