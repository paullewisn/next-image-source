import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { imgixLoader } from './loaders/imgix';
import { PictureImage } from './PictureImage';
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
        loader: imgixLoader,
        loaderOpts: {},
    },
    component: PictureImage,
    title: 'atoms/Image',
    decorators: [
        (Story) => (_jsxs(_Fragment, { children: [_jsx("div", { children: "before" }), _jsx("div", { style: {
                        margin: '3em',
                        position: 'relative',
                        height: '200px',
                        display: 'flex',
                    }, children: _jsx(Story, {}) }), _jsx("div", { children: "after" })] })),
    ],
};
export default meta;
export const Default = {
    args: {},
};
