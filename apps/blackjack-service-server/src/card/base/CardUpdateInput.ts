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
  ValidateNested,
} from "class-validator";
import { GameWhereUniqueInput } from "../../game/base/GameWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class CardUpdateInput {
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
  value?: string | null;

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
  suit?: string | null;

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

export { CardUpdateInput as CardUpdateInput };