import { request } from "../fetch.js";

/**
 * Retrieves the user object
 * @param {*} user either the username or user_id
 * @returns {Object|Error} Returns an object containing user information. If an error occurs, it will return an error object.
 */
export const user = async (user) => {
  return await request(`https://api.sleeper.app/v1/user/${user}`);
}