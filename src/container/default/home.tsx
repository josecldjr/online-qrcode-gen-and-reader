import { Grid, IconButton, ListItem, ListItemText, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Scanner from '../../component/scanner'
import { TextDialog } from '../../component/text-dialog'

function HomePage() {

    const [faceMode, setFaceMode] = useState(false)
    const [legacy, setLegacy] = useState(false)

    const [scannedText, setScannedText] = useState<string>(null)
    const [lastScans, setLastScans] = useState<string[]>([])

    useEffect(() => {
        if (scannedText) {


            setLastScans(currentScans => {
                return [
                    scannedText,
                    ...currentScans.filter((item) => item != scannedText)
                ]
            })
        }

    }, [scannedText]);

    const handleScann = (result) => {
        if (result) {
            setScannedText(result)
        }

    }

    const handleError = (err) => {
        console.log('ERR', err);

    }

    return <Grid container justify="center">
        <Grid item xs={12} md={8} justify="center">
            <Paper >
                <Grid>
                    <Typography variant="h4">
                        QR Code Reader
                    </Typography>
                </Grid>
                <Grid>
                    <IconButton
                        onClick={() => {
                            setFaceMode(!faceMode)
                        }}
                    >
                        Switch Camera
                    </IconButton>
                    <IconButton
                        color={legacy ? "primary" : "default"}
                        onClick={() => {
                            setLegacy(!legacy)
                        }}
                    >
                        Legacy Mode
                    </IconButton>
                </Grid>
                <Grid>
                    <Grid style={{ margin: 10, padding: 10 }}>

                        <Scanner
                            onScan={handleScann}
                            onError={handleError}
                            onLoad={() => {
                                console.log('IAMGE LOADED');

                            }}
                            facingMode={faceMode}
                            legacy={legacy}
                        />


                    </Grid>
                    {
                        lastScans && lastScans.length > 0 &&
                        <Grid>
                            <Typography variant="h6" >
                                Last Scans
                        </Typography>
                            <Grid>
                                {
                                    lastScans.map((scan) => {
                                        return <ListItem
                                            onClick={() => setScannedText(scan)}
                                            button={true}
                                        >
                                            <ListItemText
                                                primary={scan}
                                            />
                                        </ListItem >
                                    })
                                }
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Paper>
        </Grid>

        <TextDialog
            text={scannedText}
            setText={setScannedText}
            buttons={[
                {
                    label: 'Close', onClick: (text, close) => {
                        close()
                    }
                },
                {
                    label: 'Go to', onClick: (text) => {
                        window.open(text, '_blank')
                    }
                },
                {
                    label: 'Copy', onClick: async (text, close) => {
                        await navigator.clipboard.writeText(text)
                        close()
                    }
                },
            ]}
        />
    </Grid>

}

export default HomePage