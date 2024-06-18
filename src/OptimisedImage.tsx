import { FC } from 'react';

import { Loader, LoaderOpts } from '.';

export type SourcesType = {
  src: string;
  mediaPrefix?: 'max' | 'min';
  width: number;
}[];

export type Props = {
  alt: string;
  sources: SourcesType;
  fallbackSrc: string;
  priority?: boolean;
  loaderOpts?: LoaderOpts;
  loader: Loader;
};

export const OptimisedImage: FC<Props> = ({
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
