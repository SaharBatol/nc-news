import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://sahar-news.herokuapp.com/api/",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic, sort_by, order_by, p) => {
  return newsApi
    .get("/articles", { params: { topic, sort_by, order_by, p } })
    .then((res) => {
      return res.data.articles;
    });
};

export const getUser = (username) => {
  return newsApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const getArticleByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsById = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postCommentByArticleId = (article_id, currentUser, comment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: currentUser,
      body: comment,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const patchArticleVotes = (article_id) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: 1 });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`comments/${comment_id}`);
};

export const getArticlesCount = () => {
  return newsApi.get(`/articles?limit=1844674407370955161`).then((res) => {
    return res.data.articles.length;
  });
};
