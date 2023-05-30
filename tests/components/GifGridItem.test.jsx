import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Test in <GifGridItem/>", () => {
  const gif = {
    id: "CFGyQLh90JU7S",
    title: "metal gear solid GIF",
    url: "https://media1.giphy.com/media/CFGyQLh90JU7S/giphy.gif?cid=b3e64bedy9zpam0f6byzw5r8ioi0o3eyugu2h2ryw60q1obm&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  };

  test("debe hacer un match con el snapshot", () => {
    const { container } = render(
      <GifGridItem title={gif.title} url={gif.url} />
    );

    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifGridItem title={gif.title} url={gif.url} />);
    //screen.debug();
    // expect(screen.getByRole("img").src).toBe(gif.url);
    // expect(screen.getByRole("img").alt).toBe(gif.title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(gif.url);
    expect(alt).toBe(gif.title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifGridItem title={gif.title} url={gif.url} />);
    expect(screen.getByText(gif.title)).toBeTruthy();
  });
});
