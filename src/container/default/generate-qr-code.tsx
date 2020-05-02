import { Button, Grid, makeStyles, Paper, Snackbar } from "@material-ui/core";
import Fade from '@material-ui/core/Fade';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { QRGenerator } from '../../component/qr-generator';

export default function GenerateQRCode() {
    const classes = useStyles()

    const [inputText, setInputText] = useState(null)
    const [error, setError] = useState<string>(null)
    const [image, setImage] = useState<string>()


    const onError = (err: any) => {
        const errorText = 'Ops, looks like something went wrong !'

        setError(errorText)

        setTimeout(() => {
            if (error === errorText) {
                setError(null)
            }
        }, 1500)
    }

    const dowloadFile = (urlEncodeImage: string) => {
        const anchor = document.createElement("a")
        anchor.href = urlEncodeImage
        anchor.download = `qrcode-online_file_${Date.now()}.png`
        anchor.click()

    }

    return <Grid
        container
        justify="center"
        alignContent="center"
        className={classes.background}
    >
        <Grid className={classes.linkContainer}>
            <Link to="/" className={classes.link}  >
                <Button variant="outlined">
                    Scanner
                </Button>
            </Link>
        </Grid>
        <Grid container justify="center" >
            <Grid item xs={12} md={4} >
                <Paper className={classes.paper}>
                    <QRGenerator
                        text={inputText}
                        onTextUpdate={(imageAsBase64, text) => {
                            setInputText(text)
                            console.log('imageAsBase64', imageAsBase64);

                            setImage(imageAsBase64)
                        }}
                        onError={onError}
                    />
                    {
                        Boolean(inputText)
                            ? <Grid>
                                <Button
                                    className={classes.button}
                                    variant="outlined"
                                    onClick={() => {
                                        dowloadFile(image)

                                    }}
                                >
                                    Save File
                                </Button>
                            </Grid>
                            : <></>
                    }
                </Paper>
            </Grid>
        </Grid>

        <Snackbar
            className={classes.snackbar}
            open={Boolean(error)}
            onClose={() => {
                setError(null)
            }}
            TransitionComponent={Fade}
            message={error}

        />
    </Grid>
}

const useStyles = makeStyles(() => ({
    snackbar: {
        position: 'fixed',
        bottom: 0,
    },
    button: {
        marginBottom: 25,
    },
    linkContainer: {
        margin: 10,
        padding: 10,
    },
    link: {
        textDecoration: 'none'
    },
    background: {
        backgroundColor: '#EADAD7',
    },
    paper: {
        boxShadow: '3px 3px 5px gray',
        marginBottom: 25,
        minHeight: '70vh'
    }
}))