function CashierItems({ items, onAddToCart }) {
  return (
    <section className="p-2 bg-gray-300 grid grid-cols-3 gap-2">
      {items.map((item) => {
        return (
          <article
            key={item.id}
            className="borderstd-black cursor-pointer select-none p-2"
            onClick={() => onAddToCart(item)}
          >
            <p>{item.name}</p>
            <p>{`Rp ${item.price}`}</p>
          </article>
        );
      })}
    </section>
  );
}

export default CashierItems;
