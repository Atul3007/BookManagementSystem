import { useState, useContext, createContext } from 'react';

const DataContext=createContext();

const DataProvider=({children})=>{
   
    const [list,setList]=useState([]) ;

    return(
        <DataContext.Provider value={[list,setList]}>
           {children}
        </DataContext.Provider>
    );
}

//create hook

const useList=()=>{
   return useContext(DataContext)
}


export {useList,DataProvider}