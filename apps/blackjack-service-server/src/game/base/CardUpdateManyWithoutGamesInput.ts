/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CardWhereUniqueInput } from "../../card/base/CardWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CardUpdateManyWithoutGamesInput {
  @Field(() => [CardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CardWhereUniqueInput],
  })
  connect?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CardWhereUniqueInput],
  })
  disconnect?: Array<CardWhereUniqueInput>;

  @Field(() => [CardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CardWhereUniqueInput],
  })
  set?: Array<CardWhereUniqueInput>;
}

export { CardUpdateManyWithoutGamesInput as CardUpdateManyWithoutGamesInput };
