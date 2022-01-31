import React from "react"
import { Grid, SvgIcon } from "@mui/material"
import { Facebook, Instagram } from "@mui/icons-material"

// Components
import Text from "@components/Typography"
import ClientOnly from "@components/General/ClientOnly"
import TooltipIcon from "@components/General/TooltipIcon"

const ICONS = [
    {
        title: "Facebook - Moving Oolong",
        href: "https://www.facebook.com/movingoolong/",
        icon: <Facebook />,
    },
    {
        title: "Instagram - @movingoolongpod",
        href: "https://www.instagram.com/movingoolongpod/",
        icon: <Instagram />,
    },
    {
        title: "Medium - @movingoolong",
        href: "https://medium.com/@movingoolong",
        icon: (
            <SvgIcon viewBox="0 0 30 30">
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M22.542,21h-5.931 v-0.333L18,19.445V12.47L14.589,21h-0.533l-3.806-8.597v6.087l1.74,2.177V21H7.458v-0.333l1.799-2.177v-7.242L7.658,9.249 c0,0,0-0.289,0-0.244h4.376l3.399,7.353l2.932-7.353h4.154v0.244L21,10.526v8.919l1.542,1.222V21z" />
            </SvgIcon>
        ),
    },
]

export default function Footer() {
    return (
        <Grid
            container
            alignItems="center"
            wrap="nowrap"
            justifyContent="center"
            sx={{
                padding: 1, // theme.spacing(1)
                paddingRight: {
                    md: 3, // theme.spacing(3)
                },
            }}
        >
            {ICONS.map(({ title, href, icon }) => (
                <Grid item key={title}>
                    <TooltipIcon title={title} href={href} color="primary">
                        {icon}
                    </TooltipIcon>
                </Grid>
            ))}

            <Grid
                item
                sx={{
                    marginLeft: 3, // theme.spacing(3)
                }}
            >
                <Text align="right" color="primary">
                    <b>Copyright © 2021 Moving Oolong</b>
                </Text>
            </Grid>
        </Grid>
    )
}
