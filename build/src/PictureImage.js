"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const PictureImage = ({ priority, sources, loader, loaderOpts, fallbackSrc, alt, }) => {
    const extendedProps = {};
    if (priority) {
        extendedProps.fetchpriority = 'high';
    }
    else {
        extendedProps.loading = 'lazy';
    }
    return ((0, jsx_runtime_1.jsxs)("picture", { children: [sources === null || sources === void 0 ? void 0 : sources.map(({ src, media, loaderOpts: srcLoaderOpts }) => ((0, jsx_runtime_1.jsx)("source", { srcSet: loader(src, loaderOpts, srcLoaderOpts), media: media }, src))), (0, jsx_runtime_1.jsx)("img", Object.assign({ decoding: "async", src: fallbackSrc, alt: alt }, extendedProps))] }));
};
exports.PictureImage = PictureImage;
