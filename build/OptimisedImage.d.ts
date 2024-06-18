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
export declare const OptimisedImage: FC<Props>;