import { IChildren } from "./dtos";
import { TokenAuthProvider } from "./TokenAuth";

const Provider = ({ children }: IChildren) => {
  return <TokenAuthProvider>{children}</TokenAuthProvider>;
};

export { Provider };
