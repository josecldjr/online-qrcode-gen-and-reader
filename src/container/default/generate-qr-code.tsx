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

    const dowloadFile = (urlEncodeImage) => {


    }

    return <Grid>
        <Grid>
            <Link to="/" >
                <Button variant="outlined">
                    Scanner
                </Button>
            </Link>
        </Grid>
        <Grid container justify="center" >
            <Grid item xs={12} md={4} >
                <Paper>
                    <QRGenerator
                        text={inputText}
                        onTextUpdate={(image, text) => {
                            setInputText(text)
                            setImage(image)
                        }}
                        onError={onError}
                    />
                    {
                        Boolean(inputText)
                            ? <Grid>
                                <Button
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
    }
}))