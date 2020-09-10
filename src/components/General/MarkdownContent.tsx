import React from "react"
import clsx from "clsx"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import ClientOnly from "components/General/ClientOnly"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            "& p": {
                fontSize: "14px",
                color: theme.palette.secondary.main,
            },

            "& a": {
                color: theme.palette.secondary.dark,
            },
        },
    })

type Props = WithStyles<typeof styles> & {
    content: string | undefined
    className?: string
}

function MarkdownContent(props: Props) {
    const { content, className = "", classes } = props
    const textClassName = clsx(classes.root, className)

    return (
        <ClientOnly>
            {content ? (
                <div
                    className={textClassName}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            ) : (
                <div className={textClassName}>No description provided</div>
            )}
        </ClientOnly>
    )
}

export default withStyles(styles)(MarkdownContent)
