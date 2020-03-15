import React from "react";
import Img from "gatsby-image"
import { Card } from "@material-ui/core";

// Components

function PostPreviewImage(props) {
    const { allImages, coverHeight, coverImgSrc } = props;

    const postImage = allImages.filter(imageFile => {
        if (imageFile.node.childImageSharp === null) return false;
        if (imageFile.node.absolutePath.indexOf(coverImgSrc) !== -1)
            return true;
        else
            return false;

    });

    if (postImage.length === 1) {
        return (
            <Img 
                fluid={postImage[0].node.childImageSharp.fluid} 
                style={{ height: coverHeight, width: "100%", display: "block" }} 
            />
        );
    } else {
        return <></>;
    }
}

export default PostPreviewImage