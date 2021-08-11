import React from "react";

const ImageWithFallback = ({ alt, src, ...delegated }) => {

    /* Project dependent sources array */
    const sources = [{
        key: 1,
        type: "image/avif",
        srcset: `${src.replace(".jpg", "")}.avif 1x, ${src.replace(".jpg", "")}@2x.avif 2x, ${src.replace(".jpg", "")}@3x.avif 3x`,
      },
      {
        key: 2,
        type: "image/jpeg",
        srcset: `${src} 1x, ${src.replace(".jpg", "")}@2x.jpg 2x, ${src.replace(".jpg", "")}@3x.jpg 3x`,
      }]

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