import React, { useState } from "react";
import { Button, Backdrop, CircularProgress, TextField, withStyles } from "@material-ui/core";
// Components

const styles = theme => ({
    root: {
        padding: theme.spacing(1),
    },
    submit: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    success: {
        color: "#4CAF50"
    },
    failure: {
        color: "#f44336"
    }
});

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default withStyles(styles)((props) => {
    const { classes } = props;
    const [state, setState] = useState(
        {
            name: "",
            email: "",
            subject: "",
            body: "",
        }
    )

    const [backdropOpen, setBackdropOpen] = useState(false);
    const [backdropContent, setBackdropContent] = useState(<CircularProgress color="primary" />);

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value })
    };

    const handleSubmit = event => {
        setBackdropOpen(true);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...state })
        })
            .then(() => {
                setBackdropContent(<h1 className={classes.success}>Success!</h1>)
                setBackdropOpen(false);
            })
            .catch(error => {
                setBackdropContent(<h1 className={classes.failure}>Failed! {error}</h1>)
                setBackdropOpen(false);
            });

        event.preventDefault();
        setBackdropContent(<CircularProgress color="primary" />);
    };

    const handleClose = () => {
        setBackdropOpen(false);
    }

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <TextField
                    required
                    id="form-text-name"
                    label="Name"
                    name="name"
                    variant="outlined"
                    color="secondary"
                    margin="dense"
                    fullWidth
                    value={state.name}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="form-text-email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    color="secondary"
                    margin="dense"
                    fullWidth
                    value={state.email}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="form-text-subject"
                    label="Subject"
                    name="subject"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    fullWidth
                    value={state.subject}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="form-text-body"
                    label="Body"
                    name="body"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={6}
                    value={state.body}
                    onChange={handleChange}
                />
                <Button
                    className={classes.submit}
                    type="submit"
                    color="primary"
                    fullWidth
                ><b>{backdropOpen ? <CircularProgress color="primary" /> : "Submit"}</b></Button>
            </form>
            <Backdrop className={classes.backdrop} open={backdropOpen} onClose={handleClose} transitionDuration={{
                appear: 250,
                enter: 0,
                exit: 1000,
            }}>
                {backdropContent}
            </Backdrop>
        </div>

    );
})