/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumPlayerRole } from "./EnumPlayerRole";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { GameWhereUniqueInput } from "../../game/base/GameWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class PlayerUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPlayerRole,
  })
  @IsEnum(EnumPlayerRole)
  @IsOptional()
  @Field(() => EnumPlayerRole, {
    nullable: true,
  })
  role?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  hand?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => GameWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameWhereUniqueInput)
  @IsOptional()
  @Field(() => GameWhereUniqueInput, {
    nullable: true,
  })
  game?: GameWhereUniqueInput | null;
}

export { PlayerUpdateInput as PlayerUpdateInput };
