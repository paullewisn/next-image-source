import { FC } from 'react';
import { PictureImageProps } from './PictureImage.types';

export const PictureImage: FC<PictureImageProps> = ({
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
      {sources?.map(({ src, media, loaderOpts: srcLoaderOpts }) => (
        <source
          key={src}
          srcSet={loader(src, loaderOpts, srcLoaderOpts)}
          media={media}
        />
      ))}
      <img decoding="async" src={fallbackSrc} alt={alt} {...extendedProps} />
    </picture>
  );
};
