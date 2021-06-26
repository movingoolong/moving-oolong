import React from "react"
import BlockContent, { BlockContentProps } from "@sanity/block-content-to-react"
import { Typography } from "@material-ui/core"

type TypeNode = {
    children: React.ReactNode
    style: string
}

type MarkNode = {
    children: React.ReactNode
}

type ListNode = {
    children: React.ReactNode
    type: string
}

type ExternalLinkNode = MarkNode & {
    mark: {
        blank: boolean
        href: string
    }
}

const serializers = {
    list: ({ children, type }: ListNode) =>
        type === "bullet" ? <ul>{children}</ul> : <ol>{children}</ol>,
    listItem: ({ children }: MarkNode) => <li>{children}</li>,
    types: {
        normal: ({ children }: TypeNode) => (
            <Typography variant="body1">{children}</Typography>
        ),
        h1: ({ children }: TypeNode) => (
            <Typography variant="h1">{children}</Typography>
        ),
        h2: ({ children }: TypeNode) => (
            <Typography variant="h2">{children}</Typography>
        ),
        h3: ({ children }: TypeNode) => (
            <Typography variant="h3">{children}</Typography>
        ),
        h4: ({ children }: TypeNode) => (
            <Typography variant="h4">{children}</Typography>
        ),
        // This needs updating
        blockquote: ({ children }: TypeNode) => (
            <Typography variant="caption">{children}</Typography>
        ),
    },
    marks: {
        strong: ({ children }: MarkNode) => <b>{children}</b>,
        em: ({ children }: MarkNode) => <em>{children}</em>,
        underline: ({ children }: MarkNode) => (
            <span style={{ textDecoration: "underline" }}>{children}</span>
        ),
        externalLink: ({ children, mark }: ExternalLinkNode) => (
            <a href={mark.href} target={mark.blank ? "_blank" : "_self"}>{children}</a>
        ),
    },
}

type Props = Omit<BlockContentProps, "blocks"> & {
    blocks: GatsbyTypes.Maybe<
        readonly GatsbyTypes.Maybe<GatsbyTypes.SanityBlock>[]
    >
}

const SanityContent = ({ blocks, ...rest }: Props) => (
    <BlockContent blocks={blocks} serializers={serializers} {...rest} />
)

export default SanityContent
