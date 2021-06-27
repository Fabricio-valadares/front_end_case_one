import React, { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IDataContext {
  stringToken: string;
  setStringToken: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDataContextDataUser {
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
}

export interface IDataObject {
  name: string;
  email: string;
}
export interface IDataUserWelcome {
  dataUserContext: IDataObject;
  setDataUserContext: React.Dispatch<React.SetStateAction<IDataObject>>;
}
