import { request } from '../fetch.js'

/**
 * This endpoint retrieves all leagues.
 * @param {*} user_id The numerical ID of the user.
 * @param {*} sport We only support "nfl" right now.
 * @param {*} season Season can be 2017, 2018, etc...
 * @returns {Object[]|Error} Returns an array of objects containing league information. If an error occurs, it will return an error object.
 */
export const leagues = async(user_id, sport, season) => {
    return await request(`https://api.sleeper.app/v1/user/${user_id}/leagues/${sport}/${season}`)
}

/**
 * This endpoint retrieves a specific league.
 * @param {*} league_id The ID of the league to retrieve
 * @returns {Object|Error} Returns an object containing league information. If an error occurs, it will return an error object.
 */
export const league = async(league_id) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}`)
}

/**
 * This endpoint retrieves all rosters in a league.
 * @param {*} league_id The ID of the league to retrieve rosters from
 * @returns {Object[]|Error} Returns an array of objects containing roster information. If an error occurs, it will return an error object.
 */
export const leagueRosters = async(league_id) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}/rosters`)
}

/**
 * This endpoint retrieves all users in a league.
 * @param {*} league_id The ID of the league to retrieve rosters from
 * @returns {Object[]|Error} Returns an array of objects containing user information. If an error occurs, it will return an error object.
 */
export const leagueUsers = async(league_id) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}/users`)
}

/**
 * This endpoint retrieves all matchups in a league for a given week.
 * @param {*} league_id The ID of the league to retrieve matchups from
 * @param {*} week The week these matchups take place
 * @returns {Object[]|Error} Returns an array of objects containing matchup information. If an error occurs, it will return an error object.
 */
export const leagueMatchups = async(league_id, week) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}/matchups/${week}`)
}

/**
 * This endpoint retrieves the winner playoff bracket for a league
 * @param {*} league_id This endpoint retrieves the playoff bracket for a league
 * @returns {Object[]|Error} Returns an array of objects containing playoff bracket information. If an error occurs, it will return an error object.
 */
export const leaguePlayoffWinnerBracket = async(league_id) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}/winners_bracket`)
}

/**
 * This endpoint retrieves the loser playoff bracket for a league
 * @param {*} league_id This endpoint retrieves the playoff bracket for a league
 * @returns {Object[]|Error} Returns an array of objects containing playoff bracket information. If an error occurs, it will return an error object.
 */
export const leaguePlayoffLoserBracket = async(league_id) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}/losers_bracket`)
}

/**
 * This endpoint retrieves all free agent transactions, waivers and trades.
 * @param {*} league_id The ID of the draft to retrieve picks for
 * @param {*} round The week you want to pull from
 * @returns {Object[]|Error} Returns an array of objects containing transaction information. If an error occurs, it will return an error object.
 */
export const leagueTransactions = async(league_id, round) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}/transactions/${round}`)
}

/**
 * This endpoint retrieves all traded picks in a league, including future picks.
 * @param {*} league_id The ID of the league to retrieve traded picks for
 * @returns {Object[]|Error} Returns an array of objects containing traded pick information. If an error occurs, it will return an error object.
 */
export const leagueTradedPicks = async(league_id) => {
    return await request(`https://api.sleeper.app/v1/league/${league_id}/traded_picks`)
}

/**
 * This endpoint returns information about the current state for any sport.
 * @param {*} sport nfl, nba, lcs, etc...
 * @returns {Object|Error} Returns an object containing league state information. If an error occurs, it will return an error object.
 */
export const leagueState = async(sport) => {
    return await request(`https://api.sleeper.app/v1/state/${sport}`)
}