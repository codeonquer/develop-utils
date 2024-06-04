/**
 * forked from https://github.com/standard/eslint-config-standard/blob/master/src/index.ts
 * https://standardjs.com/rules-zhcn
 *
 * 1. 使用的时候 standard 没有支持 eslint@9
 * 2. 只使用 eslint 的语法规则，因为 https://eslint.org/blog/2023/10/deprecating-formatting-rules/
 *
 * https://eslint.style/guide/why
 */

const pluginImport = require('eslint-plugin-import');
const pluginN = require('eslint-plugin-n');
const pluginPromise = require('eslint-plugin-promise');
const globals = require('globals');

const config = [{
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    globals: {
      ...globals.es2021,
      ...globals.node,
      document: 'readonly',
      navigator: 'readonly',
      window: 'readonly'
    }
  },

  plugins: {
    n: pluginN,
    promise: pluginPromise,
    import: pluginImport
  },

  rules: {
    /**
     * Possible Problems
     * https://eslint.org/docs/latest/rules/#possible-problems
     */

    /**
     * Enforce return statements in callbacks of array methods
     */
    'array-callback-return': ['error', {
      allowImplicit: false,
      checkForEach: false
    }],
    /**
     * Require super() calls in constructors
     */
    'constructor-super': 'error',
    /**
     * Enforce return statements in getters
     */
    'getter-return': 'error',
    /**
     * Disallow using an async function as a Promise executor
     */
    'no-async-promise-executor': 'error',
    /**
     * Disallow reassigning class members
     */
    'no-class-assign': 'error',
    /**
     * Disallow comparing against -0
     */
    'no-compare-neg-zero': 'error',
    /**
     * Disallow assignment operators in conditional expressions
     */
    'no-cond-assign': 'error',
    /**
     * Disallow reassigning const variables
     */
    'no-const-assign': 'error',
    /**
     * Disallow constant expressions in conditions
     */
    'no-constant-condition': ['error', {
      checkLoops: false
    }],
    /**
     * Disallow control characters in regular expressions
     */
    'no-control-regex': 'error',
    /**
     * Disallow the use of debugger
     */
    'no-debugger': 'error',
    /**
     * Disallow duplicate arguments in function definitions
     */
    'no-dupe-args': 'error',
    /**
     * Disallow duplicate class members
     */
    'no-dupe-class-members': 'error',
    /**
     * Disallow duplicate conditions in if-else-if chains
     */
    'no-dupe-else-if': 'error',
    /**
     * Disallow duplicate keys in object literals
     */
    'no-dupe-keys': 'error',
    /**
     * Disallow duplicate case labels
     */
    'no-duplicate-case': 'error',
    /**
     * Disallow empty character classes in regular expressions
     */
    'no-empty-character-class': 'error',
    /**
     * Disallow empty destructuring patterns
     */
    'no-empty-pattern': 'error',
    /**
     * Disallow reassigning exceptions in catch clauses
     */
    'no-ex-assign': 'error',
    /**
     * Disallow fallthrough of case statements
     */
    'no-fallthrough': 'error',
    /**
     * Disallow reassigning function declarations
     */
    'no-func-assign': 'error',
    /**
     * Disallow assigning to imported bindings
     */
    'no-import-assign': 'error',
    /**
     * Disallow invalid regular expression strings in RegExp constructors
     */
    'no-invalid-regexp': 'error',
    /**
     * Disallow irregular whitespace
     */
    'no-irregular-whitespace': 'error',
    /**
     * Disallow literal numbers that lose precision
     */
    'no-loss-of-precision': 'error',
    /**
     * Disallow characters which are made with multiple code points in character class syntax
     */
    'no-misleading-character-class': 'error',
    /**
     * Disallow new operators with global non-constructor functions
     */
    'no-new-native-nonconstructor': 'error',
    /**
     * Disallow calling global object properties as functions
     */
    'no-obj-calls': 'error',
    /**
     * Disallow calling some Object.prototype methods directly on objects
     */
    'no-prototype-builtins': 'error',
    /**
     * Disallow assignments where both sides are exactly the same
     */
    'no-self-assign': ['error', {
      props: true
    }],
    /**
     * Disallow comparisons where both sides are exactly the same
     */
    'no-self-compare': 'error',
    /**
     * Disallow returning values from setters
     */
    'no-setter-return': 'error',
    /**
     * Disallow sparse arrays
     */
    'no-sparse-arrays': 'error',
    /**
     * Disallow template literal placeholder syntax in regular strings
     */
    'no-template-curly-in-string': 'error',
    /**
     * Disallow this/super before calling super() in constructors
     */
    'no-this-before-super': 'error',
    /**
     * Disallow confusing multiline expressions
     */
    'no-unexpected-multiline': 'error',
    /**
     * Disallow unmodified loop conditions
     */
    'no-unmodified-loop-condition': 'error',
    /**
     * Disallow unreachable code after return, throw, continue, and break statements
     */
    'no-unreachable': 'error',
    /**
     * Disallow loops with a body that allows only one iteration
     */
    'no-unreachable-loop': 'error',
    /**
     * Disallow control flow statements in finally blocks
     */
    'no-unsafe-finally': 'error',
    /**
     * Disallow negating the left operand of relational operators
     */
    'no-unsafe-negation': 'error',
    /**
     * Disallow use of optional chaining in contexts where the undefined value is not allowed
     */
    'no-unsafe-optional-chaining': 'error',
    /**
     * Disallow unused private class members
     */
    'no-unused-private-class-members': 'error',
    /**
     * Disallow unused variables
     */
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none',
      /** 错误必须处理，不是里单独 eslint */
      caughtErrors: 'all',
      ignoreRestSiblings: true
    }],
    /**
     * Disallow the use of variables before they are defined
     */
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: false
    }],
    /**
     * Disallow useless backreferences in regular expressions
     */
    'no-useless-backreference': 'error',
    /**
     * Require calls to isNaN() when checking for NaN
     */
    'use-isnan': ['error', {
      enforceForSwitchCase: true,
      enforceForIndexOf: true
    }],
    /**
     * Enforce comparing typeof expressions against valid strings
     */
    'valid-typeof': ['error', {
      requireStringLiterals: true
    }],

    /**
     * suggestions
     * https://eslint.org/docs/latest/rules/#suggestions
     */

    /**
     * Enforce getter and setter pairs in objects and classes
     */
    'accessor-pairs': ['error', {
      setWithoutGet: true,
      enforceForClassMembers: true
    }],
    /**
     * Enforce the use of variables within the scope they are defined
     */
    'block-scoped-var': 'error',
    /**
     * Enforce camelcase naming convention
     */
    camelcase: ['error', {
      allow: ['^UNSAFE_'],
      properties: 'never',
      ignoreGlobals: true
    }],
    /**
     * Enforce consistent brace style for all control statements
     */
    curly: ['error', 'multi-line'],
    /**
     * Enforce default clauses in switch statements to be last
     */
    'default-case-last': 'error',
    /**
     * Enforce dot notation whenever possible
     */
    'dot-notation': ['error', {
      allowKeywords: true
    }],
    /**
     * Require the use of === and !==
     */
    eqeqeq: ['error', 'always', {
      null: 'ignore'
    }],
    /**
     * Require for-in loops to include an if statement
     * hasOwnProperty
     */
    'guard-for-in': 'error',
    /**
     * Require constructor names to begin with a capital letter
     */
    'new-cap': ['error', {
      newIsCap: true,
      capIsNew: false,
      properties: true
    }],
    /**
     * Disallow Array constructors
     */
    'no-array-constructor': 'error',
    /**
     * Disallow the use of arguments.caller or arguments.callee
     */
    'no-caller': 'error',
    /**
     * Disallow lexical declarations in case clauses
     */
    'no-case-declarations': 'error',
    /**
     * Disallow deleting variables
     */
    'no-delete-var': 'error',
    /**
     * Disallow empty block statements
     */
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    /**
     * Disallow the use of eval()
     */
    'no-eval': 'error',
    /**
     * Disallow extending native types
     */
    'no-extend-native': 'error',
    /**
     * Disallow unnecessary calls to .bind()
     */
    'no-extra-bind': 'error',
    /**
     * Disallow unnecessary boolean casts
     */
    'no-extra-boolean-cast': 'error',
    /**
     * Disallow assignments to native objects or read-only global variables
     */
    'no-global-assign': 'error',
    /**
     * Disallow the use of eval()-like methods
     */
    'no-implied-eval': 'error',
    /**
     * Disallow use of this in contexts where the value of this is undefined
     */
    'no-invalid-this': 'error',
    /**
     * Disallow the use of the __iterator__ property
     */
    'no-iterator': 'error',
    /**
     * Disallow labeled statements
     */
    'no-labels': ['error', {
      allowLoop: false,
      allowSwitch: false
    }],
    /**
     * Disallow unnecessary nested blocks
     */
    'no-lone-blocks': 'error',
    /**
     * Disallow multiline strings
     */
    'no-multi-str': 'error',
    /**
     * Disallow new operators outside of assignments or comparisons
     */
    'no-new': 'error',
    /**
     * Disallow new operators with the Function object
     */
    'no-new-func': 'error',
    /**
     * Disallow new operators with the String, Number, and Boolean objects
     */
    'no-new-wrappers': 'error',
    /**
     * Disallow octal literals
     */
    'no-octal': 'error',
    /**
     * Disallow octal escape sequences in string literals
     */
    'no-octal-escape': 'error',
    /**
     * Disallow reassigning function parameters
     */
    'no-param-reassign': 'error',
    /**
     * Disallow the use of the __proto__ property
     */
    'no-proto': 'error',
    /**
     * Disallow variable redeclaration
     */
    'no-redeclare': ['error', {
      builtinGlobals: false
    }],
    /**
     * Disallow multiple spaces in regular expressions
     */
    'no-regex-spaces': 'error',
    /**
     * Disallow assignment operators in return statements
     */
    'no-return-assign': ['error', 'except-parens'],
    /**
     * Disallow comma operators
     */
    'no-sequences': 'error',
    /**
     * Disallow identifiers from shadowing restricted names
     */
    'no-shadow-restricted-names': 'error',
    /**
     * Disallow throwing literals as exceptions
     */
    'no-throw-literal': 'error',
    /**
     * Disallow initializing variables to undefined
     */
    'no-undef-init': 'error',
    /**
     * Disallow the use of undeclared variables unless mentioned in \/* global *\/ comments
     * typescript 的类型注解报错，应该在 global 中补充
     */
    'no-undef': 'error',
    /**
     * Disallow ternary operators when simpler alternatives exist
     */
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false
    }],
    /**
     * Disallow unused expressions
     */
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }],
    /**
     * Disallow unnecessary calls to .call() and .apply()
     */
    'no-useless-call': 'error',
    /**
     * Disallow unnecessary catch clauses
     */
    'no-useless-catch': 'error',
    /**
     * Disallow unnecessary computed property keys in objects and classes
     */
    'no-useless-computed-key': 'error',
    /**
     * Disallow unnecessary constructors
     */
    'no-useless-constructor': 'error',
    /**
     * Disallow unnecessary escape characters
     */
    'no-useless-escape': 'error',
    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     */
    'no-useless-rename': 'error',
    /**
     * Disallow redundant return statements
     */
    'no-useless-return': 'error',
    /**
     * Require let or const instead of var
     */
    'no-var': 'error',
    /**
     * Disallow void operators
     */
    'no-void': 'error',
    /**
     * Disallow with statements
     */
    'no-with': 'error',
    /**
     * Require or disallow method and property shorthand syntax for object literals
     */
    'object-shorthand': ['warn', 'properties'],
    /**
     * Enforce variables to be declared either together or separately in functions
     */
    'one-var': ['error', {
      initialized: 'never'
    }],
    /**
     * Require const declarations for variables that are never reassigned after declared
     */
    'prefer-const': ['error', {
      destructuring: 'all'
    }],
    /**
     * Require using Error objects as Promise rejection reasons
     */
    'prefer-promise-reject-errors': 'error',
    /**
     * Disallow use of the RegExp constructor in favor of regular expression literals
     */
    'prefer-regex-literals': ['error', {
      disallowRedundantWrapping: true
    }],
    /**
     * Require symbol descriptions
     */
    'symbol-description': 'error',
    /**
     * Require or disallow "Yoda" conditions
     */
    yoda: ['error', 'never'],

    /**
     * Layout & Formatting
     * https://eslint.org/docs/latest/rules/#layout--formatting
     */

    /**
     * Require or disallow Unicode byte order mark (BOM)
     */
    'unicode-bom': ['error', 'never'],

    /**
     * others
     */

    /**
     * eslint-plugin-import
     * https://github.com/import-js/eslint-plugin-import
     */

    /**
     * Forbid any invalid exports, i.e. re-export of the same name.
     */
    'import/export': 'error',
    /**
     * Ensure all imports appear before other statements.
     */
    'import/first': 'error',
    /**
     * Forbid import of modules using absolute paths.
     */
    'import/no-absolute-path': ['error', {
      esmodule: true,
      commonjs: true,
      amd: false
    }],
    /**
     * Forbid repeated import of the same module in multiple places.
     */
    'import/no-duplicates': 'error',
    /**
     * Forbid named default exports.
     */
    'import/no-named-default': 'error',
    /**
     * Forbid webpack loader syntax in imports.
     */
    'import/no-webpack-loader-syntax': 'error',

    /**
     * eslint-plugin-n
     * https://github.com/eslint-community/eslint-plugin-n
     */

    /**
     * require error handling in callbacks
     */
    'n/handle-callback-err': ['error', '^(err|error)$'],
    /**
     * enforce Node.js-style error-first callback pattern is followed
     */
    'n/no-callback-literal': 'error',
    /**
     * disallow deprecated APIs
     */
    'n/no-deprecated-api': 'error',
    /**
     * disallow the assignment to exports
     */
    'n/no-exports-assign': 'error',
    /**
     * disallow new operators with calls to require
     */
    'n/no-new-require': 'error',
    /**
     * disallow string concatenation with __dirname and __filename
     */
    'n/no-path-concat': 'error',
    /**
     * require that process.exit() expressions use the same code path as throw
     */
    'n/process-exit-as-throw': 'error',

    /**
     * eslint-plugin-promise
     * https://github.com/eslint-community/eslint-plugin-promise
     */

    /**
     * Enforce consistent param names and ordering when creating new promises.
     */
    'promise/param-names': 'error',
    /**
     * Disallow inline comments after code
     * 方便 vscode 进行提示
     */
    'no-inline-comments': ['warn', { ignorePattern: 'webpackChunkName:\\s.+' }]
  }
}];

module.exports = config;
