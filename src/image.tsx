import { FC } from "react";

type SourcesType = {
  src: string;
  mediaPrefix?: "max" | "min";
  width: number;
  quality?: number;
}[];

type Props = {
  alt: string;
  sources: SourcesType;
  priority?: boolean;
  customLoader?: () => "string";
  loader?: "imgix" | "contentful";
};

export const Image: FC<Props> = ({
  priority,
  loader,
  customLoader,
  sources,
  ...props
}) => {
  const extendedProps: Props & { fetchpriority?: string; loading?: "lazy" } = {
    ...props,
  };

  if (priority) {
    extendedProps.fetchpriority = "high";
  } else {
    extendedProps.loading = "lazy";
  }

  return (
    <picture>
      <Sources sources={sources} />
      <img decoding="async" {...extendedProps} />
    </picture>
  );
};

const Sources: FC<{ sources: SourcesType }> = ({ sources }) =>
  sources?.map(({ src, width, quality }) => {
    return (
      <source
        key={src}
        srcSet={imgixLoader(src)}
        media={`(max-width: ${width}px)`}
      />
    );
  });

const imgixLoader = (src) => {
  const srcset = [1, 2, 3].map((density) => {
    const srcUrl = new URL(src);

    const baseQuality = 75;

    srcUrl.searchParams.append("auto", "format");
    srcUrl.searchParams.set("fm", "webp");
    srcUrl.searchParams.set("fit", "fill");
    srcUrl.searchParams.set("h", "468");
    srcUrl.searchParams.set("q", `${baseQuality * density}`);
    srcUrl.searchParams.set("dpr", `${density}`);

    return `${srcUrl.toString()} ${density}x`;
  });

  return srcset.join(", ");
};
