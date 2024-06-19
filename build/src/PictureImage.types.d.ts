import { Loader, LoaderOpts } from './loaders/loaders.type';
export type SourcesType = {
    src: string;
    media: string;
    loaderOpts?: LoaderOpts;
}[];
export type PictureImageProps = {
    alt: string;
    sources: SourcesType;
    fallbackSrc: string;
    priority?: boolean;
    loaderOpts?: LoaderOpts;
    loader: Loader;
    blurhash?: string;
};
