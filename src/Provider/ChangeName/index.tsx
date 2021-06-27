import { createContext, useState } from "react";
import { IChildren, IDataUserWelcome, IDataObject } from "../dtos";

export const ChangeContext = createContext<IDataUserWelcome>(
  {} as IDataUserWelcome
);

export const ChangeProvider = ({ children }: IChildren) => {
  const [dataUserContext, setDataUserContext] = useState<IDataObject>(
    {} as IDataObject
  );

  return (
    <ChangeContext.Provider value={{ dataUserContext, setDataUserContext }}>
      {children}
    </ChangeContext.Provider>
  );
};
