import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Image = ({ priority, sources, loader, loaderOpts, fallbackSrc, alt, }) => {
    const extendedProps = {};
    if (priority) {
        extendedProps.fetchpriority = 'high';
    }
    else {
        extendedProps.loading = 'lazy';
    }
    return (_jsxs("picture", { children: [sources === null || sources === void 0 ? void 0 : sources.map(({ src, width, mediaPrefix }) => (_jsx("source", { srcSet: loader(src, loaderOpts), media: `(${mediaPrefix !== null && mediaPrefix !== void 0 ? mediaPrefix : 'min'}-width: ${width}px)` }, src))), _jsx("img", Object.assign({ decoding: "async", src: fallbackSrc, alt: alt }, extendedProps))] }));
};
