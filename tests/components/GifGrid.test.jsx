import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Bloodborne";
  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan imagenes de useFetch ", () => {
    const gifs = [
      {
        id: "CFGyQLh90JU7S",
        title: "metal gear solid GIF",
        url: "https://media1.giphy.com/media/CFGyQLh90JU7S/giphy.gif?cid=b3e64bedy9zpam0f6byzw5r8ioi0o3eyugu2h2ryw60q1obm&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      },
      {
        id: "lfpwRGOHLZXsA",
        title: "metal gear solid ghost babel GIF",
        url: "https://media2.giphy.com/media/lfpwRGOHLZXsA/giphy.gif?cid=b3e64bedu2l50bfqn6eco78cz7iuahy31n4n3sin3tfb3mne&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
