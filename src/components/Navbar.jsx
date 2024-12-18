import { Link } from "react-router-dom";
//import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { IoPersonAdd, IoLogIn, IoAddCircle, IoLogOut, IoPerson } from "react-icons/io5";
import Santinos from "../assets/Santinos.jpg";

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();
    //const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-red-600 my-3 flex justify-between items-center py-5 px-10 rounded-lg">
            <Link to={isAuthenticated ? '/products' : '/'}>
                <img
                    src={Santinos}
                    alt="Santinos"
                    className="h-12 w-auto object-contain"
                />
            </Link>
            <ul className="flex gap-x-4 items-center">
                {isAuthenticated ? (
                    <>
                        <li className="flex items-center">
                            <IoPerson size={30} className="mr-2" />
                            {user.username}
                        </li>
                        <li>
                            <Link
                                to="/add-parts"
                                className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
                            >
                                <IoAddCircle size={30} className="mr-1" />
                                Añadir Refacciones
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/add-product"
                                className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
                            >
                                <IoAddCircle size={30} className="mr-1" />
                                Añadir Producto
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                onClick={() => {
                                    logout();
                                }}
                                className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
                            >
                                <IoLogOut size={30} />
                                Cerrar Sesión
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
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
