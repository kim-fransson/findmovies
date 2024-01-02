import { MediaSearchResult } from "./MediaSearchResult";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MediaSearchResult> = {
  component: MediaSearchResult,
  parameters: {
    msw: {
      handlers: [],
    },
  },
  args: {
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 18, name: "Drama" },
      { id: 10759, name: "Action & Adventure" },
      { id: 80, name: "Crime" },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof MediaSearchResult>;

export const Movie: Story = {
  args: {
    media: {
      adult: false,
      backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      id: 848326,
      title: "Rebel Moon - Part One: A Child of Fire",
      original_language: "en",
      original_title: "Rebel Moon - Part One: A Child of Fire",
      overview:
        "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      poster_path: "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      media_type: "movie",
      genre_ids: [878],
      popularity: 1777.262,
      release_date: "2023-12-15",
      video: false,
      vote_average: 6.443,
      vote_count: 872,
    },
  },
};

export const TV: Story = {
  args: {
    media: {
      adult: false,
      backdrop_path: "/179sUCj5AcFKdQpvDhkIX15NRgy.jpg",
      id: 146176,
      name: "Berlin",
      original_language: "es",
      original_name: "Berlín",
      overview:
        "During his glory days, Berlin and a gang assembled in Paris for one of his greatest plans ever: stealing 44 million euros' worth of jewels in one night.",
      poster_path: "/69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg",
      media_type: "tv",
      genre_ids: [18, 10759, 80],
      popularity: 757.502,
      first_air_date: "2023-12-29",
      vote_average: 7.663,
      vote_count: 49,
      origin_country: ["ES"],
    },
  },
};
