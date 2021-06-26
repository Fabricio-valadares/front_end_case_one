import { createContext, useState } from "react";
import { IChildren, IDataContext } from "../dtos";

export const TokenAuthContext = createContext<IDataContext>({} as IDataContext);

export const TokenAuthProvider = ({ children }: IChildren) => {
  const [stringToken, setStringToken] = useState<string>("");

  return (
    <TokenAuthContext.Provider value={{ stringToken, setStringToken }}>
      {children}
    </TokenAuthContext.Provider>
  );
};
