import React, { useState } from "react";
import { patchArticleVotes } from "../utils/utils";

const Votes = ({ votes, article_id }) => {
  const [votesChange, setVotesChange] = useState(0);

  const votesHandler = () => {
    setVotesChange((currentValue) => currentValue + 1);
    patchArticleVotes(article_id);
  };

  return <button onClick={votesHandler}>Votes: {votes + votesChange}</button>;
};

export default Votes;
