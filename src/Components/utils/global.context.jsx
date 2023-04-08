import { createContext, useMemo, useReducer } from "react";

export const initialState = {theme: "", data: []}
export const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
  switch(action.type){
    case 'FAVORITES': 
      return {...state, data: action.payload}
    case 'THEME':
      return {...state, theme: state.theme === "light" ? "dark" : "light"}
    default:
      throw new Error(`Acción no válida: ${action.type}`)
  }
}

const initReducer = () => ({
  theme: "light",
  data: localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : []
})

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [context, dispatch] = useReducer(reducer, initialState, initReducer)
  const memo = useMemo(()=>{
    localStorage.setItem('fav', JSON.stringify(context.data))
    return {context, dispatch}
  }, [context])

  return (
    <ContextGlobal.Provider value={memo}>
      {children}
    </ContextGlobal.Provider>
  );
};