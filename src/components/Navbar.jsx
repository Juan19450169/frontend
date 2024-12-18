import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  IoPersonAdd,
  IoLogIn,
  IoLogOut,
  IoPerson,
  IoChevronDownSharp,
  IoBagAdd,
  IoBagSharp,
} from "react-icons/io5";
import Santinos from "../assets/Santinos.jpg";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-red-600 my-3 flex justify-between items-center py-5 px-10 rounded-lg relative">
      {/* Logo */}
      <Link to={isAuthenticated ? "/productos" : "/"}>
        <img
          src={Santinos}
          alt="Santinos"
          className="h-12 w-auto object-contain"
        />
      </Link>

      {/* Menú */}
      <ul className="flex gap-x-4 items-center">
        {isAuthenticated ? (
          <>
            {/* Usuario */}
            <li className="flex items-center">
              <IoPerson size={30} className="mr-2" />
              {user.username}
            </li>

            {/* Menú desplegable para Productos */}
            <li className="relative">
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700">
                  Productos
                  <IoChevronDownSharp className="size-4 fill-white/60" />
                </MenuButton>
                <MenuItems className="absolute left-0 top-12 w-52 rounded-xl bg-red-600/70 backdrop-blur-sm text-white p-1 shadow-lg focus:outline-none z-50">
                  <MenuItem>
                    <button
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-red-500/80"
                      onClick={() => navigate("/productos")}
                    >
                      <IoBagSharp className="size-4 fill-white/30" size={30} />
                      Listar
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-red-500/80"
                      onClick={() => navigate("/agregar-producto")}
                    >
                      <IoBagAdd className="size-4 fill-white/30" size={30} />
                      Agregar
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </li>

            {/* Menú desplegable para Refacciones */}
            <li className="relative">
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700">
                  Refacciones
                  <IoChevronDownSharp className="size-4 fill-white/60" />
                </MenuButton>
                <MenuItems className="absolute left-0 top-12 w-52 rounded-xl bg-red-600/70 backdrop-blur-sm text-white p-1 shadow-lg focus:outline-none z-50">
                  <MenuItem>
                    <button
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-red-500/80"
                      onClick={() => navigate("/refacciones")}
                    >
                      <IoBagSharp className="size-4 fill-white/30" size={30} />
                      Listar
                    </button>
                  </MenuItem>
                  <MenuItem>
                    <button
                      className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-red-500/80"
                      onClick={() => navigate("/agregar-refaccion")}
                    >
                      <IoBagAdd className="size-4 fill-white/30" size={30} />
                      Agregar
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </li>

            {/* Cerrar sesión */}
            <li>
              <button
                onClick={logout}
                className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
              >
                <IoLogOut size={30} />
                Cerrar Sesión
              </button>
            </li>
          </>
        ) : (
          <>
            {/* Usuario no autenticado */}
            <li>
              <Link
                to="/login"
                className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
              >
                <IoLogIn size={30} />
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
              >
                <IoPersonAdd size={30} />
                Registrarte
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

