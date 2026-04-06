/**
 * @typedef {"white"|"black"|"amber"} bgColor
 */
/**
 * Header Component
 * @type {tipedata} namaVariabel
 * @param {Object} props
 * @param {String} props.name
 * @param {bgColor} props.bgColor
 * @returns {JSX.Element}
 */
function Header({ name, bgColor }) {
  const bg = {
    white: "bg-white",
    black: "bg-black",
    amber: "bg-amber-300",
  };
  return (
    <header className={`border-2 border-solid border-black p-2 ${bg[bgColor]}`}>
      <h1 className="text-lg font-bold">Selamat Datang, {name}</h1>
    </header>
  );
}

export default Header;
