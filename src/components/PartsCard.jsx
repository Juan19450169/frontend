import PropTypes from "prop-types";
import { useParts } from "../context/PartsContext";
import {Link} from 'react-router-dom'
import { IoTrashBinSharp, IoPencilSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function PartsCard({parts}) {
    const server = import.meta.env.VITE_BASE_URL+"/img/";

    const {deleteParts}= useParts()


  return (

    <div className="bg-blue-800 max-w-md w-full p-10 rounded-sm">
        <header className="flex justify-between">
            <h1 className="text-2x1 font-bold">{parts.name}</h1>
            <div className="flex gap-x-2 items-center">
                    <button className="bg-red-500 hover:bg-red-600
                                    text-white px-4 py-2 rounded-lg"
                        onClick={ ()=>{
                            //console.log(product._id);
                            deleteParts(parts._id);
                        }}  
                    >
                        <IoTrashBinSharp/>   
                    </button>
                  <Link to={'/parts/'+ parts._id}
                 className="bg-green-500 hover:bg-green-600
                 text-white px-4 py-2 rounded-lg"
                 > 
                  <IoPencilSharp/>
                  </Link>

            </div>

        </header>
        <div className="flex justify-center">
            <img
            // eslint-disable-next-line react/prop-types
            src={server+parts.image}
            alt="Imagen seleccionada"
            width={200}
            height={200}
            className="max-h[200px] object-contain flex my-2 py-2"
            
            
            />

        </div>
        <div className="flex justify-around">
            <p className="text-slate-300 my-2 flex">
                <span>Precio:</span>{parts.price} 

            </p>
            <p  className="text-slate-300 my-2 flex">
                <span>Año:</span>{parts.year}

            </p>
            <p  className="text-slate-300 my-2 flex">
                <span>Cantidad:</span>{parts.amount}

            </p>

        </div>
      
    </div>
  )
}

export default PartsCard

PartsCard.propTypes={
    parts: PropTypes.any
}