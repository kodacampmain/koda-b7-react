function CashierCart({ cart, onRemoveFromCart }) {
  return (
    <section className="p-2">
      {cart && cart.length ? (
        cart.map((item) => {
          return (
            <article key={item.id} className="borderstd-black select-none p-2 mb-2 grid grid-cols-2">
              <p>{item.name}</p>
              <img
                className="justify-self-end cursor-pointer"
                src="/trash-can.svg"
                alt="trash-can"
                height={20}
                width={20}
                onClick={() => onRemoveFromCart(item.id)}
              />
              <p>{`Rp ${item.price}`}</p>
              <p className="text-right">x{item.qty}</p>
            </article>
          );
        })
      ) : (
        <p>Keranjang kosong</p>
      )}
    </section>
  );
}

export default CashierCart;
