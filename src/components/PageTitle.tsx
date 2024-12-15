import React from "react";

type PageTitleType = {
    title: string
}

export function PageTitle(props: PageTitleType) {
    return (
        <h3>{props.title}</h3>
    )
}