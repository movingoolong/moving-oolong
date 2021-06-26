declare module "@sanity/block-content-to-react" {
    interface SerializerProps {
        types?: Object
        marks?: Object

        // Less common overrides
        list?: Function
        listItem?: Function

        // Low-level serializers
        block?: Function
        span?: Function
    }

    export interface BlockContentProps {
        className?: string
        ignoreUnknownTypes?: boolean

        // When rendering images, we need project id and dataset, unless images are materialized
        projectId?: string
        dataset?: string
        imageOptions?: Object

        serializers?: SerializerProps

        blocks: GatsbyTypes.Maybe<readonly GatsbyTypes.Maybe<GatsbyTypes.SanityBlock>[]>
    }

    export default function BlockContent(props: BlockContentProps): JSX.Element
}
