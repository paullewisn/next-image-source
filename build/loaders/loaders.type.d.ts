export type Loader = (src: string, opts?: LoaderOpts) => string;
export type LoaderOpts = {
    baseQuality?: number;
    auto?: string;
    fm?: string;
    fit?: string;
    h?: number;
};
