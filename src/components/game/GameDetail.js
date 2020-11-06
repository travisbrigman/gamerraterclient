import React, { useContext, useEffect } from "react";
import { GameContext } from "./GameProvider.js";

export const GameDetail = (props) => {
  const { singleGame, getSingleGame } = useContext(GameContext);
  console.log(singleGame);

  const gameId = parseInt(props.match.params.gameId);

  useEffect(() => {
    getSingleGame(gameId);
  }, []);

  return (
    <>
      <h1>{singleGame.game_title}</h1>
      <ul>
        <li>Game Designer: {singleGame.designer}</li>
        <li>Num of Players: {singleGame.number_of_players}</li>
        <li>Released: {singleGame.release_year}</li>
        <li>Time to Play: {singleGame.time_to_play} hours</li>
        <li>Suggested Age: {singleGame.age_recommendation}</li>
        <li>Categories: {singleGame.categories[0].label}</li>
      </ul>
    </>
  );
};

{
  /* <li>Categories: {singleGame.categories.map((category) => {
    return (
        <div>{category.label}</div>
    )
})}</li> */
}
