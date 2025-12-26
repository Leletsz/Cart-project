import { useParams } from "react-router-dom";

export default function DetailProduct() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes do produto</h1>
      <p>ID do produto: {id}</p>
    </div>
  );
}
