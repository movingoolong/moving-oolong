import { useState, useEffect } from "react";

const initialState = {
    reflections: false,
    friendship: false,
    relationships: false,
    educational: false,
    recommendations: false,
    media: false,
    questions: false,
    personalitytest: false,
    guest: false,
    travel: false,
    tasa: false,
    postgrad: false,
    careers: false,
};

// function setInitialState(tagMap) {
//     const initialState = {};
//     tagMap.forEach((__, key) => {
//         initialState[key] = false;
//     });
//     return initialState;
// }

export default function useTags(urlTags) {
    const [tags, setTags] = useState(initialState);

    useEffect(
        () => {
            const newState = {};
            const tagsToCheck = urlTags !== undefined ? urlTags.split(",") : [];
            Object.entries(initialState).forEach(([key, __]) => {
                newState[key] = tagsToCheck.includes(key);
            });
            setTags(newState);
        }, [urlTags]
    );

    return {
        tags,
    }
}