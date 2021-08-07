import React from "react";

const ImageWithFallback = ({ sources, alt, src, ...delegated }) => {
    return (
        <picture>
            {sources.map(({ key, type, srcset }) => {
                return (
                    <source key={key} type={type} srcSet={srcset} />
                )
            })}
            <img alt={alt} src={src} {...delegated} />
        </picture>
    );
};

export default ImageWithFallback;