"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_blurhash_1 = require("react-blurhash");
const framer_motion_1 = require("framer-motion");
const PictureImage = ({ priority, sources, loader, loaderOpts, fallbackSrc, alt, blurhash, }) => {
    const extendedProps = {};
    if (priority) {
        extendedProps.fetchpriority = 'high';
    }
    else {
        extendedProps.loading = 'lazy';
    }
    const [imageLoaded, setImageLoaded] = (0, react_1.useState)(false);
    const animationControls = (0, framer_motion_1.useAnimation)();
    (0, react_1.useEffect)(() => {
        if (imageLoaded) {
            animationControls.start('visible');
        }
    }, [imageLoaded]);
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            position: 'relative',
        }, children: [(0, jsx_runtime_1.jsx)(framer_motion_1.LazyMotion, { features: framer_motion_1.domAnimation, children: (0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { initial: { opacity: 0 }, animate: animationControls, variants: {
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },
                    }, transition: { ease: 'easeOut', duration: 0.3 }, style: { position: 'static' }, children: (0, jsx_runtime_1.jsxs)("picture", { children: [sources === null || sources === void 0 ? void 0 : sources.map(({ src, media, loaderOpts: srcLoaderOpts }) => ((0, jsx_runtime_1.jsx)("source", { srcSet: loader(src, loaderOpts, srcLoaderOpts), media: media }, src))), (0, jsx_runtime_1.jsx)("img", Object.assign({ decoding: "async", src: fallbackSrc, alt: alt }, extendedProps, { onLoad: () => setImageLoaded(true), style: { display: 'block' } }))] }) }) }), blurhash && ((0, jsx_runtime_1.jsx)("div", { style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: -1,
                }, children: (0, jsx_runtime_1.jsx)(react_blurhash_1.Blurhash, { hash: blurhash, width: "100%", height: "100%" }) }))] }));
};
exports.PictureImage = PictureImage;
