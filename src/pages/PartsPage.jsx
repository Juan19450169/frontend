import { useEffect } from "react";
import { useParts } from "../context/PartsContext";
import PartsCard from "../components/PartsCard";

function PartsPage() {

  const {getParts, parts} = useParts();

  useEffect( ()=>{
    getParts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
 
  if(parts.length==0)
    return(<h1 className="text-red-500">
      No hay refacciones para listar
    </h1>)
 
 
 
 
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        parts.map( (parts)=> (
          <PartsCard parts={parts}
                      key={parts._id}
          
          
          />
            
            
        ))
      }
    </div>
  )
}

export default PartsPage
