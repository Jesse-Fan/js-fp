const pickProp = prop => obj => obj[prop]

const pickLen = pickProp('length')

const curry = wrappedFn => (...args) => pickLen(wrappedFn) <= pickLen(args) ?
  wrappedFn(...args) :
  (...extraArgs) => curry(wrappedFn)(...args, ...extraArgs)

module.exports = curry