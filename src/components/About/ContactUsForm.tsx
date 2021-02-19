import React, { useState } from "react"
import {
    Button,
    CircularProgress,
    TextField,
    makeStyles,
} from "@material-ui/core"
// Components
import Text from "components/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
    submit: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    success: {
        color: theme.palette.primary.dark,
        textAlign: "center",
    },
    failure: {
        color: "#f44336",
        textAlign: "center",
    },
}))

const encode = (data: Record<string, string>) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

type State = {
    name: string
    email: string
    subject: string
    body: string
}

export default () => {
    const classes = useStyles()
    const [state, setState] = useState<State>({
        name: "",
        email: "",
        subject: "",
        body: "",
    })

    const [submitContent, setSubmitContent] = useState(
        <Button
            className={classes.submit}
            type="submit"
            color="primary"
            fullWidth
        >
            <b>Submit</b>
        </Button>
    )

    const handleChange = (event: React.FormEvent) => {
        setState({
            ...state,
            [(event.target as HTMLFormElement)
                .name]: (event.target as HTMLFormElement).value,
        })
    }

    const handleSubmit = (event: React.FormEvent) => {
        setSubmitContent(<CircularProgress color="primary" />)
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...state }),
        })
            .then(() => {
                setSubmitContent(
                    <Text variant="h4" className={classes.success}>
                        Success! Thank you for your message!
                    </Text>
                )
            })
            .catch((error) => {
                setSubmitContent(
                    <Text variant="h4" className={classes.failure}>
                        Failed to send message! {error}
                    </Text>
                )
            })

        event.preventDefault()
    }

    return (
        <div className={classes.root}>
            <form
                onSubmit={handleSubmit}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <TextField
                    required
                    id="form-text-name"
                    label="Name"
                    name="name"
                    variant="outlined"
                    color="primary"
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
                    color="primary"
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
                    color="primary"
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
                    color="primary"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={6}
                    value={state.body}
                    onChange={handleChange}
                />
                {submitContent}
            </form>
        </div>
    )
}
