export type User = {
  createdAt: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date | null;
  username: string;
};
