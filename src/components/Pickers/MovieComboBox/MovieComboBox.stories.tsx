import { MovieComboBox, MovieInfo, MovieItem } from "./MovieComboBox";
import type { Meta, StoryObj } from "@storybook/react";

const movies: MovieInfo[] = [
  {
    id: 1,
    poster: "",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    release: 2001,
    mainActors: ["Elijah Wood", "Ian McKellen"],
  },
  {
    id: 2,
    poster: "",
    title: "The Lord of the Rings",
    release: 1978,
    mainActors: ["Christopher Guard", "William Squire"],
  },
  {
    id: 3,
    poster: "",
    title: "The Lord of the Rings: The Rings of Power",
    release: 2022,
    mainActors: ["Morfydd Clark", "Ismael Cruz Cordova"],
  },
  {
    id: 4,
    poster: "",
    title: "The Lord of the Rings: The Two Towers",
    release: 2002,
    mainActors: ["Elijah Wood", "Ian McKellen"],
  },
  {
    id: 5,
    poster: "",
    title: "The Lord of the Rings: The Return of the King",
    release: 2003,
    mainActors: ["Elijah Wood", "Ian McKellen"],
  },
];

const meta: Meta<typeof MovieComboBox> = {
  component: MovieComboBox,
  parameters: {},
  args: {
    "aria-label": "select a movie",
  },
  render: (args) => (
    <MovieComboBox {...args}>{(item) => <MovieItem {...item} />}</MovieComboBox>
  ),
};
export default meta;

type Story = StoryObj<typeof MovieComboBox>;

export const Default: Story = {
  args: {
    defaultItems: movies,
  },
};
