/**
 * forked from https://github.com/standard/eslint-config-standard-jsx
 * forked from https://github.com/standard/eslint-config-standard-react
 */

const pluginReact = require('eslint-plugin-react');
const pluginHooks = require('eslint-plugin-react-hooks');

const config = [{
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },

  plugins: {
    react: pluginReact,
    hooks: pluginHooks
  },

  settings: {
    react: {
      version: 'detect'
    }
  },

  rules: {
    /**
     * eslint-plugin-react
     * https://github.com/jsx-eslint/eslint-plugin-react/
     */

    /**
     * jsx
     */

    /**
     * Enforce boolean attributes notation in JSX
     */
    'react/jsx-boolean-value': 'error',
    /**
     * Enforce closing bracket location in JSX
     */
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    /**
     * Enforce closing tag location for multiline JSX
     */
    'react/jsx-closing-tag-location': 'error',
    /**
     * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
     */
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never'
    }],
    /**
     * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
     */
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent'
    }],
    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
     */
    'react/jsx-curly-spacing': ['error', {
      attributes: {
        when: 'never',
        allowMultiline: true
      },
      children: {
        when: 'never',
        allowMultiline: true
      }
    }],
    /**
     * Enforce or disallow spaces around equal signs in JSX attributes
     */
    'react/jsx-equals-spacing': ['error', 'never'],
    /**
     * Enforce proper position of the first property in JSX
     */
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    /**
     * Enforce shorthand or standard form for React fragments
     */
    'react/jsx-fragments': ['error', 'syntax'],
    /**
     * Enforce event handler naming conventions in JSX
     */
    'react/jsx-handler-names': 'error',
    /**
     * Enforce JSX indentation
     */
    'react/jsx-indent': ['error', 2, {
      checkAttributes: false,
      indentLogicalExpressions: true
    }],
    /**
     * Enforce props indentation in JSX
     */
    'react/jsx-indent-props': ['error', 2],
    /**
     * Disallow missing key props in iterators/collection literals
     */
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true
    }],
    /**
     * Disallow comments from being inserted as text nodes
     */
    'react/jsx-no-comment-textnodes': 'error',
    /**
     * Disallow duplicate properties in JSX
     */
    'react/jsx-no-duplicate-props': 'error',
    /**
     * Disallow target="_blank" attribute without rel="noreferrer"
     */
    'react/jsx-no-target-blank': ['error', {
      enforceDynamicLinks: 'always'
    }],
    /**
     * Disallow undeclared variables in JSX
     */
    'react/jsx-no-undef': ['error', {
      allowGlobals: true
    }],
    /**
     * Enforce PascalCase for user-defined JSX components
     */
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false
    }],
    /**
     * Disallow multiple spaces between inline JSX props
     */
    'react/jsx-props-no-multi-spaces': 'error',
    /**
     * Enforce whitespace in and around the JSX opening and closing brackets
     */
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    /**
     * Disallow React to be incorrectly marked as unused
     */
    'react/jsx-uses-react': 'error',
    /**
     * Disallow variables used in JSX to be incorrectly marked as unused
     */
    'react/jsx-uses-vars': 'error',
    /**
     * Disallow missing parentheses around multiline JSX
     */
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'ignore',
      condition: 'ignore',
      logical: 'ignore',
      prop: 'ignore'
    }],
    /**
     * Disallow passing of children as props
     */
    'react/no-children-prop': 'error',
    /**
     * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
     */
    'react/no-danger-with-children': 'error',
    /**
     * Disallow usage of deprecated methods
     */
    'react/no-deprecated': 'error',
    /**
     * Disallow direct mutation of this.state
     */
    'react/no-direct-mutation-state': 'error',
    /**
     * Disallow usage of findDOMNode
     */
    'react/no-find-dom-node': 'error',
    /**
     * Disallow usage of isMounted
     */
    'react/no-is-mounted': 'error',
    /**
     * Disallow using string references
     */
    'react/no-string-refs': ['error', {
      noTemplateLiterals: true
    }],
    /**
     * Disallow unescaped HTML entities from appearing in markup
     */
    'react/no-unescaped-entities': ['error', {
      forbid: ['>', '}']
    }],
    /**
     * Disallow usage of the return value of ReactDOM.render
     */
    'react/no-render-return-value': 'error',
    /**
     * Enforce ES5 or ES6 class for returning value in render function
     */
    'react/require-render-return': 'error',
    /**
     * Disallow extra closing tags for components without children
     */
    'react/self-closing-comp': 'error',

    /**
     * react
     */

    /**
     * Disallow .bind() or arrow functions in JSX props
     */
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
      allowBind: false,
      ignoreRefs: true
    }],
    /**
     * Disallow usage of setState in componentDidUpdate
     */
    'react/no-did-update-set-state': 'error',
    /**
     * Disallow usage of unknown DOM property
     */
    'react/no-unknown-property': 'error',

    /**
     * https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
     */

    'hooks/rules-of-hooks': 'error',
    'hooks/exhaustive-deps': 'warn'
  }
}, {
  files: ['*.js', '*.jsx'],
  rules: {
    /**
     * ts 使用 ts 的类型注解
     */

    /**
     * Disallow missing props validation in a React component definition
     */
    'react/prop-types': 'error',
    /**
     * Disallow definitions of unused propTypes
     */
    'react/no-unused-prop-types': 'error'
  }
}];

module.exports = config;
