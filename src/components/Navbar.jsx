export function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-4 text-white top-0 fixed z-50">
      <div className="container mx-auto flex justify-between">
        <span
          className="lg:text-5xl text-4xl font-bold text-red-500 lg:ml-10"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Movie
          <span className="text-gray-200">
            Review <i className="fa-solid fa-clapperboard lg:text-3xl  text-2xl"></i>
          </span>{" "}
        </span>
      </div>
    </nav>
  );
}
