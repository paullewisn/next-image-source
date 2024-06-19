import type { Meta, StoryObj } from '@storybook/react';
import { imgixLoader } from './loaders/imgix';
import { PictureImage } from './PictureImage';

const meta: Meta<typeof Image> = {
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
    (Story) => (
      <>
        <div>before</div>
        <div
          style={{
            margin: '3em',
            position: 'relative',
            height: '200px',
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
