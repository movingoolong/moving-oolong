import React from "react"
import { Box, Card, CardContent, CardActions, makeStyles } from "@mui/material"
import SocialIcons from "./SocialIcons"

// Components
import Text from "@components/Typography/Text"
import { GatsbyImageIfExists } from "@components/Image"
import SanityContent from "@components/SanityContent"

// Types
type Props = {
    bio: GatsbyTypes.BioFragment
}

function Bio({ bio }: Props) {
    const { name, instagram, twitter, propic, _rawDescription } = bio

    return (
        <Card sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <Box sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        flexShrink: 1,
            }}>
                <GatsbyImageIfExists imageAsset={propic} />
                <CardContent>
                    <Text
                        variant="h6"
                        align="center"
                        color="secondary"
                        sx={{
                            fontWeight: 700,
                            marginTop: 1, // theme.spacing(1)
                            marginBottom: 1, // theme.spacing(1)
                        }}
                    >
                        {name}
                    </Text>
                    <SanityContent blocks={_rawDescription} />
                </CardContent>
            </Box>
            <CardActions disableSpacing sx={{
                        flexGrow: 1,
                        marginLeft: "auto",
                        marginRight: "auto",
            }}>
                <SocialIcons instagram={instagram} twitter={twitter} />
            </CardActions>
        </Card>
    )
}

export default Bio
