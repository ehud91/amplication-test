import { Project } from "../project/Project";

export type Task = {
  createdAt: Date;
  estimation: number | null;
  id: string;
  project?: Project;
  startDate: Date;
  status?: "new" | "pending" | "onHold" | "ongoing" | "done";
  title: string;
  updatedAt: Date;
};
