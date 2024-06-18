import { FC } from 'react';
import { Props } from './image.types';

export const Image: FC<Props> = ({
  priority,
  sources,
  loader,
  loaderOpts,
  fallbackSrc,
  alt,
}) => {
  const extendedProps: { fetchpriority?: string; loading?: 'lazy' } = {};

  if (priority) {
    extendedProps.fetchpriority = 'high';
  } else {
    extendedProps.loading = 'lazy';
  }

  return (
    <picture>
      {sources?.map(({ src, width, mediaPrefix }) => (
        <source
          key={src}
          srcSet={loader(src, loaderOpts)}
          media={`(${mediaPrefix ?? 'min'}-width: ${width}px)`}
        />
      ))}
      <img decoding="async" src={fallbackSrc} alt={alt} {...extendedProps} />
    </picture>
  );
};
