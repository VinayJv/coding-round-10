import { createContext, useContext, useReducer } from "react";
import { database } from "../data/Data";

const DataContext = createContext(null);

export function DataWrapper({children}){

    const reducerFunction = (state, {type, payload}) => {
        switch(type){
            case "UPDATE_STATE":
                return {...state};
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducerFunction, { data: database});

    return(<DataContext.Provider value={{state, dispatch}}>{children}</DataContext.Provider>)
}

export const useDataContext = () => useContext(DataContext);