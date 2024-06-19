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
                mediaPrefix: 'max',
                width: 768,
            },
            {
                src: 'https://images.collectingcars.com/060775/mainimage.jpg',
                mediaPrefix: 'max',
                width: 1200,
            },
            {
                src: 'https://images.collectingcars.com/060775/mainimage.jpg',
                width: 1920,
            },
        ],
        loader: imgix_1.imgixLoader,
        loaderOpts: {},
    },
    component: PictureImage_1.PictureImage,
    title: 'atoms/Image',
    decorators: [
        (Story) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { children: "before" }), (0, jsx_runtime_1.jsx)("div", { style: {
                        margin: '3em',
                        position: 'relative',
                        height: '200px',
                        display: 'flex',
                    }, children: (0, jsx_runtime_1.jsx)(Story, {}) }), (0, jsx_runtime_1.jsx)("div", { children: "after" })] })),
    ],
};
exports.default = meta;
exports.Default = {
    args: {},
};
