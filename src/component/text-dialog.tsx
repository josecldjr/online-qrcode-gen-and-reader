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
        <DialogTitle id="alert-dialog-title">Scan result</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.text}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            {
                props.buttons
                && props.buttons.map(button => {
                    return <Button
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