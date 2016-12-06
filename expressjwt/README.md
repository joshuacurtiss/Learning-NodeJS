# Learning Node and JWT

The [Anatomy of a JSON Web Token](https://scotch.io/tutorials/the-anatomy-of-a-json-web-token) 
tutorial is key to learning the basics of what makes a JWT tick, along with the actual
[JSON Web Token (JWT)](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html) spec
document. While you're learning, the [jwt.io](https://jwt.io) debugger/viewer was also 
invaluable to me while playing with tokens.

The `nbf`, `iat`, and `exp` claims should be Unix epoch timestamps.
The [EpochConverter](http://www.epochconverter.com) website helped me quickly convert dates
while testing.

The [Authenticate a Node.js API with JSON Web Tokens](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)
tutorial is what I followed for this project, but only so far as using the `jsonwebtoken`
package to manually read the tokens. I then swapped out the manual verification code with 
the `passport-jwt` package so that I would be using Passport.js for authentication.

Once you run the app, it will help you get your token and display it on-screen. But you must
then generate an API request yourself with the token used in an Authorization header. But it 
won't be a *bearer* authorization header. It will be of type *JWT*, like so:

```
Authorization: JWT my-jwt-token-here
```
