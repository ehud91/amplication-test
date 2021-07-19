import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  ValidateNested,
  IsDate,
  IsEnum,
  IsString,
} from "class-validator";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumTaskStatus } from "./EnumTaskStatus";
@InputType()
class TaskCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimation?: number | null;

  @ApiProperty({
    required: true,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @Field(() => ProjectWhereUniqueInput)
  project!: ProjectWhereUniqueInput;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startDate!: Date;

  @ApiProperty({
    required: true,
    enum: EnumTaskStatus,
  })
  @IsEnum(EnumTaskStatus)
  @Field(() => EnumTaskStatus)
  status!: "new" | "pending" | "onHold" | "ongoing" | "done";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { TaskCreateInput };
