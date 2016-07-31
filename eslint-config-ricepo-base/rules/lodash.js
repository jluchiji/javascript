module.exports = {
  plugins: [ 'lodash' ],

  rules: {

    /**
     * Disallow using `thisArgs` for lodash callbacks
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/callback-binding.md
     */
    'lodash/callback-binding': 2,


    /**
     * Disallow unused lodash expressions
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-method-value.md
     */
    'lodash/collection-method-value': 1,


    /**
     * Always return a value in lodash iteratees, unless it's `forEach`
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-return.md
     */
    'lodash/collection-return': 2,


    /**
     * Do not use .value() on chains that already ended
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-double-unwrap.md
     */
    'lodash/no-double-unwrap': 2,


    /**
     * Do not use extra arguments for lodash methods
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-extra-args.md
     */
    'lodash/no-extra-args': 2,


    /**
     * Disallow chains that do not end with an unwrapping call
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/unwrap.md
     */
    'lodash/unwrap': 2,


    /**
     * Enforce chaining style
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chain-style.md
     */
    'lodash/chain-style': [2, 'as-needed'],


    /**
     * Enforce consistent function composition
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/consistent-compose.md
     */
    'lodash/consistent-compose': [2, 'flow'],


    /**
     * Always enforce use of _.identity where possible
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/identity-shorthand.md
     */
    'lodash/identity-shorthand': [2, 'always'],


    /**
     * Always enforce use of _.matchesProperty shorthand
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-prop-shorthand.md
     */
    'lodash/matches-prop-shorthand': [2, 'always'],


    /**
     * Always enforce use of _.matches shorthand
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-shorthand.md
     */
    'lodash/matches-shorthand': [2, 'always'],


    /**
     * Disallow use of .commit()
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-commit.md
     */
    'lodash/no-commit': 2,


    /**
     * Disallow chaining with only single method
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-single-chain.md
     */
    'lodash/no-single-chain': 2,


    /**
     * Enforce _.get/_.set path styles
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/path-style.md
     */
    'lodash/path-style': [1, 'string'],


    /**
     * Prefer lodash chains whenever possible
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-chain.md
     */
    'lodash/prefer-chain': [2, 2],


    /**
     * Prefer _.compact() over _.filter(_.identity)
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-compact.md
     */
    'lodash/prefer-compact': 2,


    /**
     * Prefer _.filter() over _.forEach() if iteratee contains an if statement
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-filter.md
     */
    'lodash/prefer-filter': 2,


    /**
     * Prefer _.flatMap() over _.flatten(_.map())
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-flat-map.md
     */
    'lodash/prefer-flat-map': 2,


    /**
     * Prefer _.invoke() over _.map() with method call in iteratee
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-invoke-map.md
     */
    'lodash/prefer-invoke-map': 2,


    /**
     * Prefer _.map() over _.forEach() where iteratee pushes into an array
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-map.md
     */
    'lodash/prefer-map': 2,


    /**
     * Prefer _.reject() over _.filter() where iteratee contains a negated condition
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-reject.md
     */
    'lodash/prefer-reject': 2,


    /**
     * Prefer _.chain(x).thru(f) over _.chain(f(x))
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-thru.md
     */
    'lodash/prefer-thru': 2,


    /**
     * Prefer lodash wrapper methods over calls in chain start
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-wrapper-method.md
     */
    'lodash/prefer-wrapper-method': 2,


    /**
     * Prefer primary method names over aliases
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/preferred-alias.md
     */
    'lodash/preferred-alias': 2,


    /**
     * Prefer property shorthand whenever possible
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prop-shorthand.md
     */
    'lodash/prop-shorthand': [2, 'always'],


    /**
     * Prefer _.constant() over functions that return a constant
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-constant.md
     */
    'lodash/prefer-constant': 2,


    /**
     * Prefer _.get() over && chains
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-get.md
     */
    'lodash/prefer-get': 2,


    /**
     * Prefer _.includes() over Array.indexOf() !== -1
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-includes.md
     */
    'lodash/prefer-includes': 2,


    /**
     * Prefer _.isNil() over x == null
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-is-nil.md
     */
    'lodash/prefer-is-nil': 2,


    /**
     * [DISABLED] Prefer lodash chains over native chains
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-chain.md
     */
    'lodash/prefer-lodash-chain': 0,


    /**
     * [DISABLED] Prefer lodash methods over native
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-method.md
     */
    'lodash/prefer-lodash-method': 0,


    /**
     * [DISABLED] Prefer lodash type check
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-typecheck.md
     */
    'lodash/prefer-lodash-typecheck': 0,


    /**
     * Prefer _.matches() over && chains
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-matches.md
     */
    'lodash/prefer-matches': 2,


    /**
     * Prefer _.noop() over empty functions
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-noop.md
     */
    'lodash/prefer-noop': 0,


    /**
     * Prefer _.overSome()/_.overEvery() over && chains
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-over-quantifier.md
     */
    'lodash/prefer-over-quantifier': 2,


    /**
     * Prefer _.startsWith() over a.indexOf(b) === 0
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-startswith.md
     */
    'lodash/prefer-startswith': 2,


    /**
     * Prefer _.times() over _.map() where iteratee does not use arguments
     * https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-times.md
     */
    'lodash/prefer-times': 2




  }

};
