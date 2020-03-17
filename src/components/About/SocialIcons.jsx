import React from "react";
import { IconButton, Tooltip, withStyles } from "@material-ui/core";
//import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

// Components
const styles = theme => ({
    root: {

    },
});

function SocialIcons(props) {
    const { color, instagram, twitter } = props;
    //let facebookIcon = <></>;
    let instagramIcon = <></>;
    let twitterIcon = <></>;

    // if (facebook !== null) {
    //     facebookIcon = (
    //         <IconButton href={facebook}>
    //             <FacebookIcon />
    //         </IconButton>
    //     );
    // }

    if (instagram != null) {
        instagramIcon = (
            <Tooltip title={instagram} interactive placement="top">
                <IconButton color={color} href={`https://www.instagram.com/${instagram.substring(1)}/`}>
                    <InstagramIcon />
                </IconButton>
            </Tooltip>
        );
    }

    if (twitter != null) {
        twitterIcon = (
            <Tooltip title={twitter} interactive placement="top">
                <IconButton color={color} href={`https://www.twitter.com/${twitter.substring(1)}/`}>
                    <TwitterIcon />
                </IconButton>
            </Tooltip>
        );
    }

    return (
        <>
            {/* {facebookIcon} */}
            {instagramIcon}
            {twitterIcon}
        </>
    );
}

export default withStyles(styles)(SocialIcons)