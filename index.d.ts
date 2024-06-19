export type {
  PictureImageProps,
  SourcesType,
} from './src/PictureImage.types';

export type { Loader, LoaderOpts } from './src/loaders/loaders.type';

declare function PictureImage(props: PictureImageProps): JSX.Element;
declare function imgixLoader(src: string, opts: LoaderOpts): string;
