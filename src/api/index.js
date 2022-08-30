import queryString from "query-string";
import config from "../configs";
const defaultOptions = {
  page: 1,
  results: config.DEFAULT_AMOUNT,
  seed: config.API_KEY,
  nat: "gb",
  gender: "male",
  inc: config.DEFAULT_USER_PROP,
};
/**
 *
 * @param {object} options
 * @param {number} options.page
 * @param {number} options.results
 * @param {string} options.seed
 * @param {string} options.nat
 * @param {string} options.gender
 * @param {string} options.inc
 * @returns
 */
export const getRandomUsers = (
  options = {},
  defaultOption = defaultOptions
) => {
  const finallyOptions = { ...defaultOption, ...options };
  const queryOptions = queryString.stringify(finallyOptions);
  return fetch(`${config.API_BASE_URL}?${queryOptions}`).then((response) =>
    response.json()
  );
};
export const loadNames = () => {
  return fetch("/users.json").then((res) => res.json());
};
export const loadPhones = () => {
  return fetch("/phones.json").then((res) => res.json());
};
export const loadChat = () => {
  return fetch("/chat.json").then((response) => response.json());
};
