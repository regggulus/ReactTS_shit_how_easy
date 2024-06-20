import React from "react";

type TitleMainType = {
    title: string
}

export function PageTitle({title}: TitleMainType) {
    return (
        <h2>{title}</h2>
    )
}