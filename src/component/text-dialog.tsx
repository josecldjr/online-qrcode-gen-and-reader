import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import React from "react";

export interface TextDialogProps {
    text: string
    setText: (value: string) => void
    buttons?: DialogButton[]
}

interface DialogButton {
    label: string
    onClick: (text: string, closeDiadlog: () => void) => void
}

export function TextDialog(props: TextDialogProps) {

    const closeDialog = () => {
        props.setText(null)
    }

    return <Dialog
        open={Boolean(props.text)}
        onClose={() => {
            closeDialog()
        }}
    >
        <DialogTitle> {Boolean(props.text) ? 'Scan result' : ''} </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {props.text}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            {
                Boolean(props.text) && props.buttons
                && props.buttons.map((button, index) => {
                    return <Button
                        key={index}
                        onClick={() => {
                            button.onClick(props.text, closeDialog)
                        }}
                        color="primary">
                        {button.label}
                    </Button>
                })
            }
        </DialogActions>
    </Dialog>
}