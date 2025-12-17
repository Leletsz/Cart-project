export function Cart() {
  return (
    <div className="w-full max-w-7xl px-4 mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          className="w-18"
          src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/kvdsbpel/file.png"
        ></img>
        <strong>Preço: R$1.000</strong>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            -
          </button>
          2
          <button className="bg-slate-600 px-1.5 rounded text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>
        <strong>SubTotal: R$2.000</strong>
      </section>
      <p className="font-bold mt-4">Total: R$ 2.000</p>
    </div>
  );
}

export default Cart;
