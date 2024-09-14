export interface IRole {
  roleId: number,
  role: string
}

export interface IUser {
  userId: string,
  role: string,
  userName: string,
  password: string,
  createdOn: string,
}
