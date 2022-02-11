import React, { useState } from "react";
import { patchComponentVotes } from "../utils/utils";

const Votes = ({ component_name, votes, component_id }) => {
  const [votesChange, setVotesChange] = useState(0);

  const votesHandler = () => {
    setVotesChange((currentValue) => currentValue + 1);
    patchComponentVotes(component_name, component_id);
  };

  return <button onClick={votesHandler}>Votes: {votes + votesChange}</button>;
};

export default Votes;
