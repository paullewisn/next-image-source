import { Loader } from "./loaders.type";

export const imgixLoader: Loader = (src, opts, srcOpts) => {
    const srcset = [1, 2, 3].map((density) => {
      const srcUrl = new URL(src);

      const options = {
        baseQuality: 75,
        auto: 'format',
        fm: 'webp',
        fit: 'fill',
        w: 100,
        h: undefined,
        ar: undefined,
        ...opts,
        ...srcOpts,
      };

      const { baseQuality, auto, fm, fit, h, w, ar } = options;
  
      srcUrl.searchParams.append('auto', auto);
      srcUrl.searchParams.set('fm', fm);
      !ar && srcUrl.searchParams.set('fit', fit);
      h && srcUrl.searchParams.set('h', `${h}`);
      ar && srcUrl.searchParams.set('ar', ar);
      ar && srcUrl.searchParams.set('fit', "crop");
      srcUrl.searchParams.set('q', `${baseQuality * density}`);
      srcUrl.searchParams.set('dpr', `${density}`);
      srcUrl.searchParams.set('w', `${w}`);
  
      return `${srcUrl.toString()} ${density}x`;
    });
  
    return srcset.join(', ');
  };
  