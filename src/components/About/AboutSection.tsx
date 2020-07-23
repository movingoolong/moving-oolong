import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
    Button,
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import BackgroundImage from "gatsby-background-image"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            height: "60vh",
            position: "relative",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            "&::before,&::after": {
                backgroundAttachment: "fixed",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            },
        },
        filter: {
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "rgba(0, 0, 0, 0.3)",
            zIndex: -1,
        },
        container: {
            zIndex: 1,
            width: "100%",
            height: "100%",
            margin: "auto",
        },
        link: {
            textDecoration: "none",
        },
        button: {
            margin: theme.spacing(3),
            opacity: 0.9,
        },
        description: {
            textAlign: "center",
            color: "#ffffff",
            margin: theme.spacing(3),

            [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(1),
            },
        },
    })

type Props = WithStyles<typeof styles>

function AboutSection(props: Props) {
    const { classes } = props
    const data = useStaticQuery<GatsbyTypes.AboutSectionQuery>(graphql`
        query AboutSection {
            markdownRemark(fileAbsolutePath: { regex: "/site-descriptions/" }) {
                frontmatter {
                    front_page
                }
            }

            file(relativePath: { eq: "about.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 4096, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
        }
    `)
    return (
        <BackgroundImage
            className={classes.root}
            fluid={data.file?.childImageSharp?.fluid}
            loading="eager"
        >
            <div className={classes.filter}>{""}</div>
            <Grid
                container
                className={classes.container}
                alignItems="center"
                justify="center"
                direction="column"
            >
                <Grid item>
                    <Container maxWidth="md">
                        <h2 className={classes.description}>
                            {data.markdownRemark?.frontmatter?.front_page}
                        </h2>
                    </Container>
                </Grid>

                <Grid item>
                    <Link className={classes.link} to="/about">
                        <Button
                            className={classes.button}
                            size="large"
                            variant="contained"
                        >
                            About Us
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </BackgroundImage>
    )
}

export default withStyles(styles)(AboutSection)
