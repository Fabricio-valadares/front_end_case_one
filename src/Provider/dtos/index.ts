import React, { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IDataContext {
  stringToken: string;
  setStringToken: React.Dispatch<React.SetStateAction<string>>;
}
