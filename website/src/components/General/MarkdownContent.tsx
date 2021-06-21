import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core"
import ClientOnly from "@components/General/ClientOnly"
import Text from "@components/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        "& a": {
            color: theme.palette.primary.dark,
        },
    },
}))

type Props = {
    content: string | undefined
    className?: string
}

function MarkdownContent(props: Props) {
    const { content, className = "" } = props
    const classes = useStyles()
    const textClassName = clsx(classes.root, className)

    return (
        <ClientOnly>
            {content ? (
                <Text
                    className={textClassName}
                    variant="body1"
                    color="textPrimary"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            ) : (
                <Text
                    className={textClassName}
                    variant="body1"
                    color="textPrimary"
                >
                    No description provided
                </Text>
            )}
        </ClientOnly>
    )
}

export default MarkdownContent
