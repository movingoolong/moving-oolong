import React from "react"
import {
    Box,
    Checkbox,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
} from "@mui/material"

import { TagState } from "@hooks/useTags"

type Props = {
    tags: TagState,
    urlTags: string | null | undefined,
    setURLTags: (newValue: NewValueType<string | null | undefined>, updateType?: UrlUpdateType | undefined) => void
}

function TagSelectionInput({ tags, urlTags, setURLTags }: Props) {
    const handleChange = (event: React.ChangeEvent) => {
        console.log(urlTags)
        const urlTagsArray = urlTags !== undefined ? urlTags.split(",") : []
        console.log(urlTagsArray)
        const index = urlTagsArray.indexOf(event.target.name)
        if (index == -1 && event.target.checked) {
            urlTagsArray.push(event.target.name)
        } else if (index != -1 && !event.target.checked) {
            urlTagsArray.splice(index, 1)
        }
        console.log(urlTagsArray.join(","))
        setURLTags(urlTagsArray.join(","))
    }

    return (
        <Box sx={{display: "flex"}}>
            <FormControl component="fieldset" sx={{ margin: 3 }}>
                <FormLabel
                    component="legend"
                    color="primary"
                >
                    <b>Filter by Tags</b>
                </FormLabel>
                <FormGroup>
                    {Object.entries(tags).map(([key, val]) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={val}
                                    onChange={handleChange}
                                    name={key}
                                />
                            }
                            label={<Box sx={{color: "text.primary" }}>{key}</Box>}
                            key={key}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Box>
    )
}

export default TagSelectionInput
