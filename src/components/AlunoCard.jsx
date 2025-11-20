import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function AlunoCard({ aluno }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{aluno.nome}</Card.Title>
        <Card.Text>Matrícula: {aluno.matricula}</Card.Text>

        <Link to={`/aluno/${aluno.id}`}>
          <Button variant="primary">Ver detalhes</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
