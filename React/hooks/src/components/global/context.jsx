import { createContext } from "react";

const defaultValue = {
  estaIniciado: false,
  resetCount: false
}

export { defaultValue }

export default createContext(defaultValue)