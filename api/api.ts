import * as models from "./models";

const config = {
  baseUrl: "https://hacker-news.firebaseio.com/v0/",
};

export const getJobById = async (id: number): Promise<models.Job> => {
  const response = await fetch(`${config.baseUrl}item/${id}.json`);
  const job = await response.json();
  return job;
};

export const getStoryById = async (id: number): Promise<models.Story> => {
  const response = await fetch(`${config.baseUrl}item/${id}.json`);
  const story = await response.json();
  return story;
};

export const getCommentById = async (id: number): Promise<models.Comment> => {
  const response = await fetch(`${config.baseUrl}item/${id}.json`);
  const comment = await response.json();
  return comment;
};

export const getPollById = async (id: number): Promise<models.Poll> => {
  const response = await fetch(`${config.baseUrl}item/${id}.json`);
  const poll = await response.json();
  return poll;
};

export const getPollOptionById = async (
  id: number
): Promise<models.PollOption> => {
  const response = await fetch(`${config.baseUrl}item/${id}.json`);
  const pollOption = await response.json();
  return pollOption;
};

export const getUserById = async (id: string): Promise<models.User> => {
  const response = await fetch(`${config.baseUrl}user/${id}.json`);
  const user = await response.json();
  return user;
};

export const getTopStories = async (): Promise<number[]> => {
  const response = await fetch(`${config.baseUrl}topstories.json`);
  const topStories = await response.json();
  return topStories;
};

export const getNewStories = async (): Promise<number[]> => {
  const response = await fetch(`${config.baseUrl}newstories.json`);
  const newStories = await response.json();
  return newStories;
};

export const getAskStories = async (): Promise<number[]> => {
  const response = await fetch(`${config.baseUrl}askstories.json`);
  const askStories = await response.json();
  return askStories;
};

export const getShowStories = async (): Promise<number[]> => {
  const response = await fetch(`${config.baseUrl}showstories.json`);
  const showStories = await response.json();
  return showStories;
};

export const getJobStories = async (): Promise<number[]> => {
  const response = await fetch(`${config.baseUrl}jobstories.json`);
  const jobStories = await response.json();
  return jobStories;
};
