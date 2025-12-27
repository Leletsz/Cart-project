import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import type { ProductProps } from "../home";
import { CartContext } from "../../contexts/CartContext";
import { BsCartPlus } from "react-icons/bs";

export default function DetailProduct() {
  const { addItemCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log("Erro ao buscar produto", error);
      } finally {
      }
    }
    getProduct();
  }, [id]);

  if (!product) return <p>Produto não encontrado</p>;

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center gap-10 px-10">
      <img className="h-70" src={product.cover} alt={product.title} />
      <div className="max-w-3xl">
        <strong className="text-3xl py-20">{product.title}</strong>
        <p className="my-4">{product.description}</p>
        <div className="flex gap-2">
          <strong>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
          <button
            onClick={() => addItemCart(product)}
            className="bg-slate-600 px-1.5 rounded text-white font-medium flex items-center justify-center"
          >
            <BsCartPlus size={20} color="#FFF" />
          </button>
        </div>
      </div>
    </div>
  );
}
