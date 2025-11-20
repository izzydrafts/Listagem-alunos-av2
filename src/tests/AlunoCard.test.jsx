import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import AlunoCard from "../components/AlunoCard";

describe("AlunoCard", () => {
  const aluno = { nome: "João", matricula: "123" };

  it("renderiza nome e matrícula do aluno", () => {
    renderWithProviders(<AlunoCard aluno={aluno} />);

    expect(screen.getByText("João")).toBeInTheDocument();
    expect(screen.getByText(/Matrícula:\s*123/)).toBeInTheDocument();
  });

  it("possui botão de detalhes", () => {
    renderWithProviders(<AlunoCard aluno={aluno} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
