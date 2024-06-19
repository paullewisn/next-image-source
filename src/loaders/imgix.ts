import { Loader } from "./loaders.type";

export const imgixLoader: Loader = (src, opts) => {
    const srcset = [1, 2, 3].map((density) => {
      const srcUrl = new URL(src);
  
      const {
        baseQuality = 75,
        auto = 'format',
        fm = 'webp',
        fit = 'fill',
        w = 100,
        h,
      } = opts ?? {};
  
      srcUrl.searchParams.append('auto', auto);
      srcUrl.searchParams.set('fm', fm);
      srcUrl.searchParams.set('fit', fit);
      h && srcUrl.searchParams.set('h', `${h}`);
      srcUrl.searchParams.set('q', `${baseQuality * density}`);
      srcUrl.searchParams.set('dpr', `${density}`);
      srcUrl.searchParams.set('w', `${w}`);
  
      return `${srcUrl.toString()} ${density}x`;
    });
  
    return srcset.join(', ');
  };
  