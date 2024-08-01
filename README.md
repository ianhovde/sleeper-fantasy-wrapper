# sleeper-fantasy-wrapper
A minimal package for interacting with the Sleeper Fantasy API

## installation
`npm install sleeper-fantasy-api`

## usage
All available functions are in the functions folder. The endpoints there are organized to match the sleeper documentation.

### example usage of user function
```
import { user } from 'sleeper-fantasy-api'

const data = await user('<username or user_id>')
```
sample output:
```
{
  success: true,
  data: {
    avatar: '15d7cf259bc30eab8f6120f45f652fb6',
    cookies: null,
    created: null,
    currencies: null,
    data_updated: null,
    deleted: null,
    display_name: '<username>',
    email: <email>,
    is_bot: false,
    metadata: null,
    notifications: null,
    pending: null,
    phone: null,
    real_name: null,
    solicitable: null,
    summoner_name: null,
    summoner_region: null,
    token: null,
    user_id: '<user_id>',
    username: '<username>',
    verification: null
  }
}
```
### example usage of league function
```
import { league } from 'sleeper-fantasy-api'

const data = await leagues('<user_id>', '<sport>', 'year')
```
sample output:
```
{
  success: true,
  data: [
    {
      name: '<league name>',
      status: 'complete',
      metadata: [Object],
      settings: [Object],
      avatar: '8ab794bf08ddf103c5667360ee7a9225',
      company_id: null,
      shard: 628,
      season: '2023',
      season_type: 'regular',
      sport: 'nfl',
      scoring_settings: [Object],
      last_message_id: '1048179496932417536',
      display_order: 0,
      last_author_avatar: null,
      last_author_display_name: 'sys',
      last_author_id: '166666666666666666',
      last_author_is_bot: true,
      last_message_attachment: null,
      last_message_text_map: null,
      last_message_time: 1704267975603,
      last_pinned_message_id: '966752992613429248',
      last_read_id: '1048179496932417536',
      draft_id: '916925584188575745',
      league_id: '<league_id>',
      previous_league_id: '<prev_league_id>',
      bracket_id: <bracket_id>,
      group_id: null,
      loser_bracket_id: <loser_bracket_id>,
      roster_positions: [Array],
      total_rosters: 8,
      last_transaction_id: 1025765854992040000
    }
  ]
}
```

## docs
Link to the sleeper documentation: https://docs.sleeper.com/
