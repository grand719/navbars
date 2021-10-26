import React from "react";
import './LinkComponent.css';

export const LinkComponent = ({path, name}) => {
    return (
        <div className="link">
            <a href={path}>{name}</a>
        </div>
    )
}