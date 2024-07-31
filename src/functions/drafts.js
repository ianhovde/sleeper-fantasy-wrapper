import { request } from '../fetch.js'

/**
 * This endpoint retrieves all drafts by a user.
 * @param {*} user_id The numerical ID of the user.
 * @param {*} sport We only support "nfl" right now.
 * @param {*} season Season can be 2017, 2018, etc...
 * @returns {Object[]|Error} Returns an array of objects containing draft information. If an error occurs, it will return an error object.
 */
export const userDrafts = async(user_id, sport, season) => {
    return await request(`https://api.sleeper.app/v1/user/${user_id}/drafts/${sport}/${season}`)
}

/**
 * This endpoint retrieves all drafts for a league. Keep in mind that a league can have multiple drafts, especially dynasty leagues.
 * @param {*} league_id The ID of the league for which you are trying to retrieve drafts.
 * @returns {Object[]|Error} Returns an array of objects containing draft information. If an error occurs, it will return an error object.
 */
export const leagueDrafts = async(league_id) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}/drafts`)
}

/**
 * This endpoint retrieves a specific draft.
 * @param {*} draft_id The ID of the draft to retrieve
 * @returns {Object|Error} Returns an object containing draft information. If an error occurs, it will return an error object.
 */
export const draft = async(draft_id) => {
    return await request(`https://api.sleeper.app/v1/draft/${draft_id}`)
}

/**
 * This endpoint retrieves all picks in a draft.
 * @param {*} draft_id The ID of the draft to retrieve picks for
 * @returns {Object[]|Error} Returns an array of objects containing pick information. If an error occurs, it will return an error object.
 */
export const draftPicks = async(draft_id) => {
    return await request(`https://api.sleeper.app/v1/draft/${draft_id}/picks`)
}

/**
 * This endpoint retrieves all traded picks in a draft.
 * @param {*} draft_id The ID of the draft to retrieve picks for
 * @returns {Object[]|Error} Returns an array of objects containing traded pick information. If an error occurs, it will return an error object.
 */
export const tradedPicks = async(draft_id) => {
    return await request(`https://api.sleeper.app/v1/draft/${draft_id}/traded_picks`)
}