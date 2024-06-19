import { FC, useEffect, useState } from 'react';
import { PictureImageProps } from './PictureImage.types';
import { Blurhash } from 'react-blurhash';
import { useAnimation, domAnimation, LazyMotion, m } from 'framer-motion';

export const PictureImage: FC<PictureImageProps> = ({
  priority,
  sources,
  loader,
  loaderOpts,
  fallbackSrc,
  alt,
  blurhash,
}) => {
  const extendedProps: { fetchpriority?: string; loading?: 'lazy' } = {};

  if (priority) {
    extendedProps.fetchpriority = 'high';
  } else {
    extendedProps.loading = 'lazy';
  }

  const [imageLoaded, setImageLoaded] = useState(false);

  const animationControls = useAnimation();

  useEffect(() => {
    if (imageLoaded) {
      animationControls.start('visible');
    }
  }, [imageLoaded]);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={animationControls}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
          style={{ position: 'static' }}
        >
          <picture>
            {sources?.map(({ src, media, loaderOpts: srcLoaderOpts }) => (
              <source
                key={src}
                srcSet={loader(src, loaderOpts, srcLoaderOpts)}
                media={media}
              />
            ))}
            <img
              decoding="async"
              src={fallbackSrc}
              alt={alt}
              {...extendedProps}
              onLoad={() => setImageLoaded(true)}
              style={{ display: 'block' }}
            />
          </picture>
        </m.div>
      </LazyMotion>
      {blurhash && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <Blurhash hash={blurhash} width="100%" height="100%" />
        </div>
      )}
    </div>
  );
};
