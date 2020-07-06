type Images = readonly {
    node: GatsbyTypes.FluidImageFragment
}[]

export interface HasImageSrc {
    node: {
        frontmatter: GatsbyTypes.Maybe<
            Pick<GatsbyTypes.MarkdownRemarkFrontmatter, "imgsrc">
        >
    }
}

export interface NodeWithImage<T extends HasImageSrc> {
    node: T["node"]
    image: GatsbyTypes.FluidImageFragment
}

/**
 * Takes in markdown remark nodes and images and links them together.
 * Also takes in the parameter type of the markdown remark node
 *
 * This matches up each image with its proper node
 * This is inefficient because it goes through every image to find the right one for this node
 * A better search would use the fact that allFile returns sorted results and use binary search to find the matching image
 * Note this is harder because absolutePath
 * @param markdownRemarkEdges
 * @param allImagesArray
 */
export function mapImgToNode<T extends HasImageSrc>(
    markdownRemarkEdges: ReadonlyArray<T>,
    allImagesArray: Images
): ReadonlyArray<NodeWithImage<T>> {
    // Can make this faster by using binary search
    const findImage = (imgSrc: string) =>
        allImagesArray.find((file) => file.node.relativePath == imgSrc)

    const mapEdge = (edge: T) => {
        if (!edge.node.frontmatter?.imgsrc) {
            throw new Error("Node does not have an image associated with it.")
        }

        const image = findImage(edge.node.frontmatter.imgsrc)
        if (!image) {
            throw new Error("Tried to find an associated image, but failed")
        }

        return {
            node: edge.node,
            image: image.node,
        }
    }

    return markdownRemarkEdges.map(mapEdge)
}
