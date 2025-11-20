import { useEffect, useState } from "react";
import api from "../services/api";
import { Container, Row, Col } from "react-bootstrap";
import AlunoCard from "../components/AlunoCard";

export default function Home() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    api.get("/alunos")
      .then((response) => {
        setAlunos(response.data);
      })
      .catch(() => {
        console.log("Erro ao buscar alunos");
      });
  }, []);

  return (
    <Container className="mt-4">
      <h1>Lista de Alunos</h1>
      <Row className="mt-4">
        {alunos.map((aluno) => (
          <Col md={4} key={aluno.id} className="mb-3">
            <AlunoCard aluno={aluno} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
