import { createContext, useState } from "react";
import { IChildren, IDataContext } from "../dtos";

export const TokenAuthContext = createContext<IDataContext>({} as IDataContext);

export const TokenAuthProvider = ({ children }: IChildren) => {
  const [auth, setAuth] = useState<boolean>(false);

  return (
    <TokenAuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </TokenAuthContext.Provider>
  );
};
