export type Loader = (src: string, opts?: LoaderOpts, srcOpts?: LoaderOpts) => string;
export type LoaderOpts = ImgixLoaderOpts | ImgixLoaderOptsWithAspectRatio;
export type ImgixLoaderOptsWithAspectRatio = {
    baseQuality?: number;
    auto?: string;
    fm?: string;
    h?: number;
    w?: number;
    ar?: string;
};
export type ImgixLoaderOpts = {
    baseQuality?: number;
    auto?: string;
    fm?: string;
    fit?: string;
    h?: number;
    w?: number;
};
