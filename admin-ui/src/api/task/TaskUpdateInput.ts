import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  estimation?: number | null;
  project?: ProjectWhereUniqueInput;
  startDate?: Date;
  status?: "new" | "pending" | "onHold" | "ongoing" | "done";
  title?: string;
};
