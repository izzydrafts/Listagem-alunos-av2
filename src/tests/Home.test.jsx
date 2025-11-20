import { renderWithProviders } from "./test-utils";
import { screen, waitFor } from "@testing-library/react";
import Home from "../pages/Home";
import api from "../services/api";
import { vi, describe, test, expect } from "vitest";

vi.mock("../services/api", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("Home Page", () => {
  test("exibe lista de alunos após carregamento", async () => {
    const alunosFake = [
      { id: 1, nome: "Maria", matricula: "111" },
      { id: 2, nome: "José", matricula: "222" },
    ];

    api.get.mockResolvedValueOnce({ data: alunosFake });

    renderWithProviders(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Maria")).toBeInTheDocument();
      expect(screen.getByText("José")).toBeInTheDocument();
    });
  });
});
