import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  mySecondTask?: Array<Task>;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
