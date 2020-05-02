import { Button, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import SwitchCameraIcon from '@material-ui/icons/SwitchCamera'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DisclaimerBox } from '../../component/disclaimer-box'
import Scanner from '../../component/scanner'
import { ScansList } from '../../component/scans-list'
import { TextDialog } from '../../component/text-dialog'

function HomePage() {

    const classes = useStyles()

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

    return <Grid
        container
        justify="center"
        alignContent="center"
        className={classes.background}
    >
        <Grid item xs={12} md={8} >
            <Grid className={classes.linkContainer}>
                <Link to="/generate" className={classes.link} >
                    <Button variant="outlined">
                        Generator
                    </Button>
                </Link>
            </Grid>
            <Paper className={classes.paper} >
                <Grid>
                    <Typography className={classes.title} variant="h4">
                        QR Code Reader
                    </Typography>
                </Grid>
                <Grid >
                    <IconButton
                        className={classes.pannelButton}
                        onClick={() => {
                            setFaceMode(!faceMode)
                        }}
                    >
                        <SwitchCameraIcon className={classes.icon} />
                        Switch Camera
                    </IconButton>
                    <IconButton
                        className={classes.pannelButton}
                        color={legacy ? "primary" : "default"}
                        onClick={() => {
                            setLegacy(!legacy)
                        }}
                    >
                        <CameraAltIcon className={classes.icon} />
                        Legacy Mode
                    </IconButton>
                </Grid>
                <Grid >
                    <Grid item xs={12} container >
                        <Grid
                            xs={12}
                            md={6}
                            style={{ margin: 0, padding: 10 }}
                            item
                        >
                            <Scanner
                                onScan={handleScann}
                                onError={handleError}
                                facingMode={faceMode}
                                legacy={legacy}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            style={{ margin: 0, padding: 10 }}
                        >
                            <DisclaimerBox />
                        </Grid>
                    </Grid>
                    {
                        lastScans && lastScans.length > 0 &&
                        <Grid item xs={12}>
                            <Grid>
                                <Typography variant="h6" align="center">
                                    Last Scans
                                </Typography>
                            </Grid>
                            <Grid>
                                <ScansList
                                    lastScans={lastScans}
                                    onClick={(text) => {
                                        setScannedText(text)
                                    }}
                                />
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


const useStyles = makeStyles(() => ({
    linkContainer: {
        margin: 10,
        padding: 10,
    },
    link: {
        textDecoration: 'none'
    },
    pannelButton: {
        fontSize: 16,
    },
    icon: {
        padding: 2
    },
    background: {
        backgroundColor: '#EADAD7'
    },
    paper: {
        boxShadow: '3px 3px 5px gray',
        marginBottom: 25,
    },
    title: {
        margin: 25,
        padding: 25,
    }
}))

export default HomePage
