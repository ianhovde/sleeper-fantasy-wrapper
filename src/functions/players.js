import { request } from '../fetch.js'

/**
 * Fetch all players.
 * Please use this call sparingly, as it is intended only to be used once per day at most to keep your player IDs updated. The average size of this query is 5MB.
 * @param {*} sport only nfl at the moment
 * @returns {Object[]|Error} Returns an array of objects containing player information. If an error occurs, it will return an error object.
 */
export const players = async(sport) => {
    return await request(`https://api.sleeper.app/v1/players/${sport}`)
}

/**
 * You can use this endpoint to get a list of trending players based on adds or drops.
 *  Please give attribution to Sleeper if you are using trending data. 
 * @param {*} sport The sport, such as nfl
 * @param {*} type Either add or drop
 * @param {*} lookback_hours optional - Number of hours to look back (default is 24)
 * @param {*} limit optional - Number of results you want, (default is 25)
 * @returns {Object[]|Error} Returns an array of objects containing trending player information. If an error occurs, it will return an error object.
 */
export const trendingPlayers = async(sport, type, lookback_hours = 24, limit = 25) => {
    return await request(`https://api.sleeper.app/v1/players/${sport}/trending/${type}?lookback_hours=${lookback_hours}&limit=${limit}`)
}