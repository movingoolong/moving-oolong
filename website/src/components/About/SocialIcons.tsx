import React from "react"
import { Facebook, Instagram, Twitter } from "@material-ui/icons"

import TooltipIcon from "@components/General/TooltipIcon"

type Props = {
    facebook?: string
    instagram?: string
    twitter?: string
}

const SocialIcons = ({ facebook, instagram, twitter }: Props) => (
    <>
        {facebook && (
            <TooltipIcon
                title={facebook}
                href={`https://www.facebook.com/${facebook}/`}
            >
                <Facebook />{" "}
            </TooltipIcon>
        )}
        {instagram && (
            <TooltipIcon
                title={instagram}
                href={`https://www.instagram.com/${instagram.substring(1)}/`}
            >
                <Instagram />
            </TooltipIcon>
        )}
        {twitter && (
            <TooltipIcon
                title={twitter}
                href={`https://www.twitter.com/${twitter.substring(1)}/`}
            >
                <Twitter />
            </TooltipIcon>
        )}
    </>
)

export default SocialIcons
