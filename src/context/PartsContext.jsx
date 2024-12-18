import { createContext, useContext, useState} from "react";
import PropTypes from "prop-types";
import { createPartsRequest, getPartsRequest, 
    deletePartsRequest, getPartRequest, updatePartsRequest} from "../api/parts";

const PartsContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useParts = ()=>{
    const context = useContext(PartsContext)

    if(!context){
        throw new Error('UseAuth debe estar definido en un contexto ');
    }
    return context;
}

export function PartsProvider({children}){
    const [parts,  setParts] = useState([]);

    const createParts = async (parts)=>{
        try {
           await createPartsRequest(parts);
            getParts();
            
        } catch (error) {
            console.log(error);
        }
       
        
    }
    const getParts = async ()=>{
        try {
            const res = await getPartsRequest();
            setParts(res.data);
            
        } catch (error) {
            console.log(error);
        }
           
    }
    // funcion para eliminar un producto de la base de datos 
    const deleteParts = async (id) =>{
      try {
        const res = await deletePartsRequest(id);
             // console.log(res.data);
             if(res.status === 200)
                setParts(parts.filter(parts => parts._id != id));
      } catch (error) {
        console.log(error)
        
      }
       
    }

    // funcion para obtener un producto por id de la base de datos 
    const getPart = async(id)=>{
        try {
            const res = await getPartRequest(id)
           // console.log(res);
           return res.data
        } catch (error) {
            console.log(error)
        }
    }


    const updateParts = async (id, product)=>{
        try {
            await updatePartsRequest(id, product);
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <PartsContext.Provider value={{
            parts,
            createParts,
            getParts,
            deleteParts,
            getPart,
            updateParts
            
        }}>
            {children}
        </PartsContext.Provider>
    )
}

PartsProvider.propTypes ={
    children:PropTypes.any
}