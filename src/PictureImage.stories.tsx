import type { Meta, StoryObj } from '@storybook/react';
import { imgixLoader } from './loaders/imgix';
import { PictureImage } from './PictureImage';

const meta: Meta<typeof PictureImage> = {
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
    loader: imgixLoader,
    loaderOpts: {},
    fallbackSrc: 'https://images.collectingcars.com/060775/mainimage.jpg',
    blurhash: 'eFA,j{NfR:%KIt0nxtjrM}xYpLkDxZR+s.^%NKNL%1ItOIxtaeM}xZ',
  },
  component: PictureImage,
  title: 'atoms/Image',
  decorators: [
    (Story) => (
      <>
        <div>before</div>
        <div
          style={{
            margin: '3em',
            display: 'flex',
          }}
        >
          <Story />
        </div>
        <div>after</div>
      </>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {},
};
