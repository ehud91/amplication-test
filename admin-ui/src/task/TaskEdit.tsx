import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  TextInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Estimation (days)" source="estimation" />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <DateInput label="Start Date" source="startDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "New", value: "new" },
            { label: "Pending", value: "pending" },
            { label: "On Hold", value: "onHold" },
            { label: "Ongoing", value: "ongoing" },
            { label: "Done", value: "done" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
