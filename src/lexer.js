const chevrotain = require(`chevrotain`)
const Lexer = chevrotain.Lexer

const allTokens = []

const Tokens = {}

const createToken = function (options) {

  const token = chevrotain.createToken(options)

  allTokens.push(token)

  Tokens[token.name] = token

  return token
}

createToken({
  name: `WhiteSpace`,
  pattern: /\s+/,
  group: Lexer.SKIPPED
})

createToken({
  name: `To`,
  pattern: /to/
})

createToken({
  name: `Make`,
  pattern: /make/
})

createToken({
  name: `End`,
  pattern: /end/
})

createToken({
  name: `PenToggleOperator`,
  pattern: Lexer.NA
})

createToken({
  name: `PenUp`,
  pattern: /penup|pu/,
  categories: Tokens.PenToggleOperator
})

createToken({
  name: `PenDown`,
  pattern: /pendown|pd/,
  categories: Tokens.PenToggleOperator
})

createToken({
  name: `DirectionOperator`,
  pattern: Lexer.NA
})

createToken({
  name: `Left`,
  pattern: /left|lt/,
  categories: Tokens.DirectionOperator
})

createToken({
  name: `Right`,
  pattern: /right|rt/,
  categories: Tokens.DirectionOperator
})

createToken({
  name: `MovementOperator`,
  pattern: Lexer.NA
})

createToken({
  name: `Forward`,
  pattern: /forward|fd/,
  categories: Tokens.MovementOperator
})

createToken({
  name: `Back`,
  pattern: /backward|bk/,
  categories: Tokens.MovementOperator
})

createToken({
  name: `Home`,
  pattern: /home/
})

createToken({
  name: `SetXY`,
  pattern: /setxy/
})

createToken({
  name: `Repeat`,
  pattern: /repeat/
})

createToken({
  name: `LeftBracket`,
  pattern: /\[/
})

createToken({
  name: `RightBracket`,
  pattern: /\]/
})

createToken({
  name: `LeftParen`,
  pattern: /\(/
})

createToken({
  name: `RightParen`,
  pattern: /\)/
})

createToken({
  name: `AdditionOperator`,
  pattern: Lexer.NA
})

createToken({
  name: `Plus`,
  pattern: /\+/,
  categories: Tokens.AdditionOperator
})

createToken({
  name: `Minus`,
  pattern: /-/,
  categories: Tokens.AdditionOperator
})

createToken({
  name: `MultiplicationOperator`,
  pattern: Lexer.NA
})

createToken({
  name: `Multiply`,
  pattern: /\*/,
  categories: Tokens.MultiplicationOperator
})

createToken({
  name: `Divide`,
  pattern: /\//,
  categories: Tokens.MultiplicationOperator
})

createToken({
  name: `If`,
  pattern: /if/
})

createToken({
  name: `ComparisonOperator`,
  pattern: Lexer.NA
})

createToken({
  name: `Equals`,
  pattern: /=/,
  categories: Tokens.ComparisonOperator
})

createToken({
  name: `NotEquals`,
  pattern: /!=/,
  categories: Tokens.ComparisonOperator
})

createToken({
  name: `GreaterThan`,
  pattern: />/,
  categories: Tokens.ComparisonOperator
})

createToken({
  name: `LessThan`,
  pattern: /</,
  categories: Tokens.ComparisonOperator
})

createToken({
  name: `Stop`,
  pattern: /stop/
})

createToken({
  name: `Output`,
  pattern: /output/
})

createToken({
  name: `Random`,
  pattern: /random/
})

createToken({
  name: `NUMBER`,
  pattern: /[0-9]+(\.[0-9]+)?/
})

createToken({
  name: `VAR`,
  pattern: /"[a-zA-Z]+/
})

createToken({
  name: `INPUT`,
  pattern: /:[a-zA-Z]+/
})

createToken({
  name: `IDENTIFIER`,
  pattern: /[a-zA-Z]+/
})

module.exports = {
  Lexer: new Lexer(allTokens),
  Tokens,
  allTokens
}
