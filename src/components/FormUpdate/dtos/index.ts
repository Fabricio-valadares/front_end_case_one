export interface IDataForm {
  name: string;
  email: string;
  password: string;
}

export interface IData {
  user_id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  listUser?: any;
}
