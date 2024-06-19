"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const imgix_1 = require("./loaders/imgix");
const PictureImage_1 = require("./PictureImage");
const meta = {
    args: {
        alt: 'alt',
        sources: [
            {
                src: 'https://images.collectingcars.com/060775/mainimage.jpg',
                media: '(max-width: 768px)',
                loaderOpts: { ar: '3:2', w: 300 },
            },
            {
                src: 'https://images.collectingcars.com/061585/mainima.jpg',
                media: '(max-width: 1024px)',
                loaderOpts: { ar: '16:5', w: 800 },
            },
            {
                src: 'https://images.collectingcars.com/060775/mainimage.jpg',
                media: '(max-width: 1920px)',
                loaderOpts: { w: 400 },
            },
        ],
        loader: imgix_1.imgixLoader,
        loaderOpts: {},
        fallbackSrc: 'https://images.collectingcars.com/060775/mainimage.jpg',
        blurhash: 'eFA,j{NfR:%KIt0nxtjrM}xYpLkDxZR+s.^%NKNL%1ItOIxtaeM}xZ',
    },
    component: PictureImage_1.PictureImage,
    title: 'atoms/Image',
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { children: "before" }), (0, jsx_runtime_1.jsx)("div", { style: {
                        margin: '3em',
                        display: 'flex',
                    }, children: (0, jsx_runtime_1.jsx)(Story, {}) }), (0, jsx_runtime_1.jsx)("div", { children: "after" })] })),
    ],
};
exports.default = meta;
exports.Default = {
    args: {},
};
