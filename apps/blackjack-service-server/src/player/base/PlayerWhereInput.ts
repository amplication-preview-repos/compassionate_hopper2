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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumPlayerRole } from "./EnumPlayerRole";
import { JsonFilter } from "../../util/JsonFilter";
import { GameWhereUniqueInput } from "../../game/base/GameWhereUniqueInput";

@InputType()
class PlayerWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPlayerRole,
  })
  @IsEnum(EnumPlayerRole)
  @IsOptional()
  @Field(() => EnumPlayerRole, {
    nullable: true,
  })
  role?: "Option1";

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  hand?: JsonFilter;

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
  game?: GameWhereUniqueInput;
}

export { PlayerWhereInput as PlayerWhereInput };