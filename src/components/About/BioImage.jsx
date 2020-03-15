import React from "react";
import Img from "gatsby-image"
import { Card } from "@material-ui/core";

// Components

function BioImage(props) {
    const { allImages, imgSrc } = props;

    const img = allImages.filter(imageFile => {
        if (imageFile.node.childImageSharp === null) return false;
        if (imageFile.node.absolutePath.indexOf(imgSrc) !== -1)
            return true;
        else
            return false;

    });

    if (img.length === 1) {
        return (
            <Img 
                fluid={img[0].node.childImageSharp.fluid} 
                style={{ height: "auto", width: "100%"}} 
            />
        );
    } else {
        return <></>;
    }
}

export default BioImage