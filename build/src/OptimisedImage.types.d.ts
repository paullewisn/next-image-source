import { Loader, LoaderOpts } from './loaders/loaders.type';
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
