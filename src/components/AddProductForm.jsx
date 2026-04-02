/**
 * @typedef {Object} product
 * @property {Number} product.id
 * @property {String} product.name
 */
/**
 * Form to add product
 * @param {Object} props
 * @param {import("react").Dispatch<import("react").SetStateAction<product[]>>} props.addProduct
 * @returns {JSX.Element}
 */
function AddProductForm({ addProduct }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addProduct((products) => {
          return [...products, { id: 1, name: "Sabun" }];
        });
      }}
    ></form>
  );
}

export default AddProductForm;
