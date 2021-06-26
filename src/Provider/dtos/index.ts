import React, { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IDataContext {
  auth: string;
  setAuth: React.Dispatch<React.SetStateAction<string>>;
}
