import { useContext } from "react";
import { MemeContext, MemeContextProps } from "../context/context";

export const useMemeContext = (): MemeContextProps => useContext(MemeContext);