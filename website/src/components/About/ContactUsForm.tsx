import React, { useState } from "react"
import {
    Box,
    Button,
    CircularProgress,
    TextField
} from "@mui/material"
// Components
import Text from "@components/Typography"

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
    const [state, setState] = useState<State>({
        name: "",
        email: "",
        subject: "",
        body: "",
    })

    const [submitContent, setSubmitContent] = useState(
        <Button
            type="submit"
            color="primary"
            fullWidth
            sx={{
                marginLeft: "auto",
                marginRight: "auto",
            }}
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
                    <Text variant="h4" sx={{
                        color: "primary.dark",
                        textAlign: "center",
                    }}>
                        Success! Thank you for your message!
                    </Text>
                )
            })
            .catch((error) => {
                setSubmitContent(
                    <Text variant="h4" sx={{color: "#f44336",
                    textAlign: "center",}}>
                        Failed to send message! {error}
                    </Text>
                )
            })

        event.preventDefault()
    }

    return (
        <Box sx={{
            padding: 1, // theme.spacing(1)
        }}>
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
        </Box>
    )
}
