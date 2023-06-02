import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("Debe mostrar el input correctamente", () => {
    render(<GifExpertApp />);
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  test("Debe agregarse nuevo elemento si se interactua con el formulario", () => {
    const inputValue = "Bloodborne";
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getByText(inputValue));
  });

  test("si se agrega un elemento ya existente en el input no se debe de crear", () => {
    const inputValue = "Metal Gear";
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(screen.getAllByText(inputValue).length).toBe(1);
  });
});
