import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { patchComponentVotes } from "../utils/utils";

const Votes = ({ component_name, votes, component_id }) => {
  const [votesChange, setVotesChange] = useState(0);

  const votesHandler = (vote) => {
    if (vote === 1) {
      if (votes > votes + votesChange) {
        patchComponentVotes(component_name, component_id, 2);
        setVotesChange((currentValue) => currentValue + 2);
      } else if (votes === votes + votesChange) {
        patchComponentVotes(component_name, component_id, 1);
        setVotesChange((currentValue) => currentValue + 1);
      }
    } else if (vote === -1) {
      if (votes < votes + votesChange) {
        patchComponentVotes(component_name, component_id, -2);
        setVotesChange((currentValue) => currentValue - 2);
      } else if (votes === votes + votesChange) {
        patchComponentVotes(component_name, component_id, -1);
        setVotesChange((currentValue) => currentValue - 1);
      }
    }
  };

  return (
    <div className="votes-container">
      <button onClick={() => votesHandler(1)}>
        <FontAwesomeIcon size="lg" icon={faThumbsUp} />
      </button>
      <p>{votes + votesChange}</p>
      <button onClick={() => votesHandler(-1)}>
        {" "}
        <FontAwesomeIcon size="lg" icon={faThumbsDown} />
      </button>
    </div>
  );
};

export default Votes;
