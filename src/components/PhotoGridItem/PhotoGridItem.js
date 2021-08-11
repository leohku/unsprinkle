import React from 'react';
import styled from 'styled-components/macro';

import ImageWithFallback from '../ImageWithFallback';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <GridItem>
      <Anchor href={`/photos/${id}`}>
        <Image alt={alt} src={src} />
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
  padding: 4px 8px;
  line-height: calc(1rem + 8px);
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  border-radius: 4px;

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
