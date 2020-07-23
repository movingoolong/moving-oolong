import React from "react"
import { graphql } from "gatsby"
import {
    Container,
    Grid,
    createStyles,
    Theme,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import Bio from "components/About/Bio"
import SEO from "components/General/SEO"
import Text from "components/Typography/Text"

// Hooks
import useBios from "hooks/useBios"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        item: {
            marginTop: theme.spacing(2),
        },
        title: {
            color: theme.palette.primary.dark,
            margin: theme.spacing(4),
        },
        description: {
            marginBottom: theme.spacing(4),
        },
    })

export const query = graphql`
    query AboutPage {
        markdownRemark(fileAbsolutePath: { regex: "/site-descriptions/" }) {
            frontmatter {
                about_page
                about_page_header
            }
        }
    }
`

type Props = WithStyles<typeof styles> & {
    data: GatsbyTypes.AboutPageQuery
}

export default withStyles(styles)((props: Props) => {
    const { classes, data } = props
    const bios = useBios()
    return (
        <>
            <SEO title="About" />
            <Container maxWidth="lg">
                <Text variant="h5" align="center" className={classes.title}>
                    <b>{data.markdownRemark?.frontmatter?.about_page_header}</b>
                </Text>
                <Text
                    variant="subtitle1"
                    align="center"
                    color="secondary"
                    className={classes.description}
                >
                    <b>{data.markdownRemark?.frontmatter?.about_page}</b>
                </Text>

                <Grid
                    container
                    spacing={3}
                    justify="center"
                    alignItems="stretch"
                >
                    {bios.map((bio) => (
                        <Grid
                            item
                            className={classes.item}
                            xs={12}
                            sm={4}
                            key={bio.node.id}
                        >
                            <Bio bio={bio} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
})
