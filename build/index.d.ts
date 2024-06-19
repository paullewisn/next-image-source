import type {
  PictureImageProps,
  SourcesType,
} from './src/PictureImage.types';

import type { Loader, LoaderOpts } from './src/loaders/loaders.type';

declare function PictureImage(props: PictureImageProps): JSX.Element;
declare function imgixLoader(src: string, opts: LoaderOpts): string;

export { PictureImage, imgixLoader };
export type { Loader, LoaderOpts, PictureImageProps, SourcesType };

