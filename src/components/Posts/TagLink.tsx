import React from "react"

// Components
import CustomLink from "components/General/CustomLink"
import Text from "components/Typography"

type Props = {
    tag: string
}

const TagLink = ({ tag }: Props) => (
    <CustomLink to={`/episodes/?tags=${tag}`} key={tag}>
        <Text variant="body2" color="textPrimary" display="inline">{`#${tag} `}</Text>
    </CustomLink>
)

export default TagLink
