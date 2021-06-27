import { IChildren } from "./dtos";
import { TokenAuthProvider } from "./TokenAuth";
import { ChangeProvider } from "./ChangeName";
import { TextInputProvider } from "./TextInput";

const Provider = ({ children }: IChildren) => {
  return (
    <TokenAuthProvider>
      <ChangeProvider>
        <TextInputProvider>{children}</TextInputProvider>
      </ChangeProvider>
    </TokenAuthProvider>
  );
};

export { Provider };
