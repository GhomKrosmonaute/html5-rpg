# API Specification

## Routes

| Secure | Method | Route  | Body                       | Return value | Description                                        |
| ------ | ------ | ------ | -------------------------- | ------------ | -------------------------------------------------- |
| x      | POST   | /auth  | username, password, email? | auth_token   | Authenticate a user or subscribe if email is given |
| o      | DELETE | /auth  |                            |              | Logout a user                                      |
| o      | POST   | /input | input                      | game_state   | Send input to the server                           |
