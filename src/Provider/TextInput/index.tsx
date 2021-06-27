import { createContext, useState } from "react";
import { IChildren, IDataContextDataUser } from "../dtos";

export const TextInputContext = createContext<IDataContextDataUser>(
  {} as IDataContextDataUser
);

export const TextInputProvider = ({ children }: IChildren) => {
  const [textInput, setTextInput] = useState<string>("");

  return (
    <TextInputContext.Provider value={{ textInput, setTextInput }}>
      {children}
    </TextInputContext.Provider>
  );
};
