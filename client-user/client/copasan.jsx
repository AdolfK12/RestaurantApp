import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="/logo.png"
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

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Welcome to Genki Sushi</h2>
              <p className="text-lg text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                viverra justo vel magna fermentum, nec congue elit ultricies.
                Quisque sollicitudin nulla ut efficitur consequat. Sed tempus
                sagittis sem, id lacinia ligula pellentesque et. Nunc convallis
                imperdiet nisl eget efficitur. Quisque convallis efficitur
                ultrices.
              </p>
              <a
                href="#"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Order Now
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="/hero-image.png"
                alt="Sushi"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="/menu-item1.png"
                alt="Menu Item"
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Sushi Roll 1</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam vel leo a mauris dapibus cursus.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">Rp 50.000</span>
                  <a
                    href="#"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="/menu-item2.png"
                alt="Menu Item"
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Sushi Roll 2</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam vel leo a mauris dapibus cursus.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">Rp 55.000</span>
                  <a
                    href="#"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="/menu-item3.png"
                alt="Menu Item"
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Sushi Roll 3</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam vel leo a mauris dapibus cursus.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">Rp 60.000</span>
                  <a
                    href="#"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="/menu-item4.png"
                alt="Menu Item"
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Sushi Roll 4</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam vel leo a mauris dapibus cursus.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold">Rp 65.000</span>
                  <a
                    href="#"
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-white text-center">
          <p className="text-sm">
            &copy; 2023 Genki Sushi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
