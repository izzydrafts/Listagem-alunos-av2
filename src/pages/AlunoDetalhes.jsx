import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import api from "../services/api";

export default function AlunoDetalhes() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    api.get(`/alunos/${id}`)
      .then((response) => {
        setAluno(response.data);
      })
      .catch(() => {
        console.log("Erro ao buscar aluno");
      });
  }, [id]);

  if (!aluno) {
    return <p>Carregando...</p>;
  }

  return (
    <Container className="mt-4">
      <h1>{aluno.nome}</h1>
      <p><strong>Matrícula:</strong> {aluno.matricula}</p>
      <p><strong>Curso:</strong> {aluno.curso}</p>
      <p><strong>E-mail:</strong> {aluno.email}</p>

      <Link to="/">
        <Button variant="secondary">Voltar</Button>
      </Link>
    </Container>
  );
}
