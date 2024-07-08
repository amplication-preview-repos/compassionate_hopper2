/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PlayerWhereUniqueInput } from "../../player/base/PlayerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PlayerUpdateManyWithoutGamesInput {
  @Field(() => [PlayerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlayerWhereUniqueInput],
  })
  connect?: Array<PlayerWhereUniqueInput>;

  @Field(() => [PlayerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlayerWhereUniqueInput],
  })
  disconnect?: Array<PlayerWhereUniqueInput>;

  @Field(() => [PlayerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PlayerWhereUniqueInput],
  })
  set?: Array<PlayerWhereUniqueInput>;
}

export { PlayerUpdateManyWithoutGamesInput as PlayerUpdateManyWithoutGamesInput };
