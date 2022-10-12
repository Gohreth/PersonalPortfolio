const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 flex justify-between items-center p-4 bg-gray-400 rounded-lg m-4">
      <div className="font-black text-4xl">SC</div>
      <ul className="flex gap-4 text-base">
        <li>Home</li>
        <li>Projects</li>
        <li>3D</li>
      </ul>
    </header>
  );
};

export default Navbar;
