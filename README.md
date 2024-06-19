# next-picture-image

## Why this exists:

The `next/image` component outputs an `<img>` with a `srcSet`. It does not allow for fine-tuning of the image quality per density, or the ability to have different images per width. My team were very keen to use `next/image` but wanted these features.

## What this does:

This follows a similar pattern to `next/image`, with a very similar output. The major difference is that it accepts more customisation options and outputs an image in the `<picture><source><img>` structure.
