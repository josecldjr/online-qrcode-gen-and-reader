import { Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import QRCode from 'qrcode'
import React, { useEffect, useState } from 'react'

export interface QRGeneratorProps {
    onTextUpdate?: (imageAsDataURI: string, text: string) => void
    onError?: (err: any) => void
    text: string,
    width?: string | number
    height?: string | number
}

export function QRGenerator(props: QRGeneratorProps) {
    const classes = useStyles()

    const [imageAsDataURI, setimageAsDataURI] = useState<string>(null)

    useEffect(() => {
        if (Boolean(props.text)) {
            handleOnChange(props.text)
        }
    }, [])

    const handleOnChange = async (text: string) => {
        if (props.onTextUpdate) {
            try {
                const image = await QRCode.toDataURL(text)

                setimageAsDataURI(image)
                props.onTextUpdate(image, text)
            } catch (err) {
                props.onError(err)
            }

        }
    }

    return <Grid item>
        <Grid>
            <Typography className={classes.title} variant="h4">
                Generate a QR Code
            </Typography>
        </Grid>
        <Grid>
            <Typography variant="body2">
                Type the url or text above to generate a QR Code
            </Typography>
        </Grid>
        <TextField
            className={classes.input}
            variant="standard"
            onChange={(event) => {
                const value = event.target.value

                if (Boolean(value)) {
                    handleOnChange(value)
                }
            }}
        />
        <Grid>
            {
                props.text
                    ? <img
                        style={{
                            width: props.width || '100%',
                            height: props.height || '100%',
                        }}
                        src={imageAsDataURI}
                    />
                    : <Grid style={{ backgroundColor: '#cecece' }}>

                    </Grid>
            }
        </Grid>
    </Grid>
}

const useStyles = makeStyles(() => ({
    image: {

    },
    input: {
        marginBottom: 15,
        marginTop: 25,
    },
    title: {
        margin: 25,
        padding: 25,
    }
}))
