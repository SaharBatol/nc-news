import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getTopics } from "../utils/utils";

const Topics = ({ setSelectedTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  const topicHandler = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <div className="topic">
      <select onChange={topicHandler} name="" id="">
        <option value="">All</option>
        {topics.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Topics;
