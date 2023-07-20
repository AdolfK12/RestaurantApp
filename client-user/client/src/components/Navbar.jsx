const Navbar = () => {
  return (
    <>

      {/* Header */}
      <header className="bg-white">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="https://kuningancity.com/wp-content/uploads/Genki-Sushi-1080.jpg"
              alt="Logo"
              className="h-10 w-auto mr-4"
            />
            <h1 className="text-2xl font-bold">Genki Sushi</h1>
          </div>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Reservasi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Lokasi
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Promo
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar;