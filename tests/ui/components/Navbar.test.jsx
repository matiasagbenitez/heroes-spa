import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en el componente <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      name: "Juan Carlos",
      id: "ABC",
    },
    logout: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe mostrar el nombre de la persona autenticada", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Juan Carlos")).toBeTruthy();
  });

  test("Debe de llamar el logout y navigate cuando se hace click en el botón", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);

    // Llama el logout()
    expect(contextValue.logout).toHaveBeenCalled();

    // Navigate al dar click
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
