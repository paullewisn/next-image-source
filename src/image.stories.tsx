import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./image";

const meta: Meta<typeof Image> = {
  args: {
    alt: "alt",
    sizeas: 'sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"',
    sizesSet: [
      { mediaPrefix: "max", mediaWidth: "768px", sourceSize: "100vw" },
      { mediaPrefix: "max", mediaWidth: "1200px", sourceSize: "50vw" },
      { sourceSize: "33vw" },
    ],
    src: "https://images.collectingcars.com/060775/mainimage.jpg",
    sources: [
      {
        src: "https://images.collectingcars.com/060775/mainimage.jpg",
        mediaPrefix: "max",
        width: 768,
      },
      {
        src: "https://images.collectingcars.com/060775/mainimage.jpg",
        mediaPrefix: "max",
        width: 1200,
      },
      {
        src: "https://images.collectingcars.com/060775/mainimage.jpg",
        width: 1920,
      },
    ],
  },
  component: Image,
  title: "atoms/Image",
  decorators: [
    (Story) => (
      <>
        <div>before</div>
        <div
          style={{
            margin: "3em",
            position: "relative",
            height: "200px",
            display: "flex",
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
