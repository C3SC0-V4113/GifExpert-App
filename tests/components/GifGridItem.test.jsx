import { render } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Test in <GifGridItem/>", () => {
  test("debe hacer un match con el snapshot", () => {
    const gif = {
      id: "CFGyQLh90JU7S",
      title: "metal gear solid GIF",
      url: "https://media1.giphy.com/media/CFGyQLh90JU7S/giphy.gif?cid=b3e64bedy9zpam0f6byzw5r8ioi0o3eyugu2h2ryw60q1obm&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    };

    const { container } = render(
      <GifGridItem title={gif.title} url={gif.url} />
    );

    expect(container).toMatchSnapshot();
  });
});
