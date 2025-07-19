export type TCreateUserBody = {
  name: string;
  email: string;
  password: string;
  age: number;
};
 
export type TUser = {
  name: string;
  email: string;
  password: string;
  age: number;
};
 
export type TUserLoginBody = {
  email: string;
  password: string;
};