/**
 * Header Component
 * @type {tipedata} namaVariabel
 * @param {Object} props
 * @param {String} props.name
 * @returns {JSX.Element}
 */
function Header({ name }) {
  return (
    <header className="border-2 border-solid border-black bg-amber-300 p-2">
      <h1 className="text-lg font-bold">Selamat Datang, {name}</h1>
    </header>
  );
}

export default Header;
