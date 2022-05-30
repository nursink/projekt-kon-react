import { createContext, useReducer } from "react"
import { State } from "../types/types";
import { reducer } from "./reducer";
import { initialState } from "./state";


export type MemeContextProps = {
  state: State;
  dispatch: React.Dispatch<any>;
}

export const MemeContext = createContext<MemeContextProps>({
  state: initialState,
  dispatch: () => undefined
})

export const MemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MemeContext.Provider value={{state, dispatch}}>
      {children}
    </MemeContext.Provider>
  )
}