import React, { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IDataContext {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDataResetContext {
  tokenReset: string;
  setTokenReset: React.Dispatch<React.SetStateAction<string>>;
}
