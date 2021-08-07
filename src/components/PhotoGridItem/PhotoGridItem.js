import React from 'react';
import styled from 'styled-components/macro';

import ImageWithFallback from '../ImageWithFallback';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const srcToSrcSet = (src, type) => {
    src = src.replace(".jpg", "");
    const format = type === "image/avif" ? "avif" : "jpg";
    return `${src}.${format} 1x, ${src}@2x.${format} 2x, ${src}@3x.${format} 3x`;
  }

  const sources = [{
    key: 1,
    type: "image/avif",
    srcset: srcToSrcSet(src, "image/avif"),
  },
  {
    key: 2,
    type: "image/jpeg",
    srcset: srcToSrcSet(src, "image/jpeg"),
  }]

  return (
    <GridItem>
      <Anchor href={`/photos/${id}`}>
        <Image 
        sources={sources}
        alt={alt}
        src={src}
        />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </GridItem>
  );
};

const GridItem = styled.article`
  margin-bottom: 12px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled(ImageWithFallback)`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Tag = styled.li`
  display: inline;
  margin: 0 4px;
  padding: 4px 8px;
  line-height: calc(1rem + 8px);
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  border-radius: 4px;

  &:first-of-type {
    margin: 0 4px 0 0;
  }
`;

export default PhotoGridItem;
