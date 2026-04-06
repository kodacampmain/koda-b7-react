/**
 * @typedef {Object} product
 * @property {Number} product.id
 * @property {String} product.name
 */
/**
 * @typedef {Object} testimony
 * @property {String} testimony.img
 * @property {String} testimony.name
 * @property {Number} testimony.rating
 * @property {String} testimony.content
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
