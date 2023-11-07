export interface IApiResponse {
  data: any;
  message: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
  }

  export interface IList {
    name: string;
    category: string;
    isPurchased: boolean;
  }

  export interface ISharedList {
    userId: string;
    listId: string;
    sharedWith: string;
    permission: "read" | "write";
  }