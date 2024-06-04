/**
 * forked from https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/typescript-eslint/src/configs/recommended-type-checked.ts
 */

const ts = require('typescript-eslint');

const config = ts.config(
  ...ts.configs.recommendedTypeChecked,
  {
    rules: {
      /**
       * Disallow awaiting a value that is not a Thenable
       */
      '@typescript-eslint/await-thenable': 'off',
      /**
       * Disallow @ts-<directive> comments or require descriptions after directives
       */
      '@typescript-eslint/ban-ts-comment': 'off',
      /**
       * Disallow certain types
       */
      '@typescript-eslint/ban-types': 'off',
      /**
       * Disallow generic Array constructors
       */
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      /**
       * Require .toString() to only be called on objects which provide useful information when stringified
       */
      '@typescript-eslint/no-base-to-string': 'off',
      /**
       * Disallow duplicate enum member values
       */
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      /**
       * Disallow duplicate constituents of union or intersection types
       */
      '@typescript-eslint/no-duplicate-type-constituents': 'error',
      /**
       * Disallow the any type
       */
      '@typescript-eslint/no-explicit-any': 'off',
      /**
       * Disallow extra non-null assertions
       */
      '@typescript-eslint/no-extra-non-null-assertion': 'off',
      /**
       * Require Promise-like statements to be handled appropriately
       */
      '@typescript-eslint/no-floating-promises': 'off',
      /**
       * Disallow iterating over an array with a for-in loop
       */
      '@typescript-eslint/no-for-in-array': 'off',
      /**
       * Disallow the use of eval()-like methods
       */
      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',
      /**
       * Disallow literal numbers that lose precision
       */
      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': 'error',
      /**
       * Enforce valid definition of new and constructor
       */
      '@typescript-eslint/no-misused-new': 'error',
      /**
       * Disallow Promises in places not designed to handle them
       */
      '@typescript-eslint/no-misused-promises': 'off',
      /**
       * Disallow TypeScript namespaces
       */
      '@typescript-eslint/no-namespace': [
        'error',
        {
          allowDeclarations: true,
          allowDefinitionFiles: true
        }
      ],
      /**
       * Disallow non-null assertions after an optional chain expression
       */
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      /**
       * Disallow members of unions and intersections that do nothing or override type information
       */
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      /**
       * Disallow aliasing this
       */
      '@typescript-eslint/no-this-alias': [
        'error',
        {
          allowDestructuring: true
        }
      ],
      /**
       * Disallow type assertions that do not change the type of an expression
       */
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      /**
       * Disallow unnecessary constraints on generic types
       */
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      /**
       * Disallow calling a function with a value with type any
       */
      '@typescript-eslint/no-unsafe-argument': 'off',
      /**
       * Disallow assigning a value with type any to variables and properties
       */
      '@typescript-eslint/no-unsafe-assignment': 'off',
      /**
       * Disallow calling a value with type any
       */
      '@typescript-eslint/no-unsafe-call': 'off',
      /**
       * Disallow unsafe declaration merging
       */
      '@typescript-eslint/no-unsafe-declaration-merging': 'off',
      /**
       * Disallow comparing an enum value with a non-enum value
       */
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      /**
       * Disallow member access on a value with type any
       */
      '@typescript-eslint/no-unsafe-member-access': 'off',
      /**
       * Disallow returning a value with type any from a function
       */
      '@typescript-eslint/no-unsafe-return': 'off',
      /**
       * Disallow unused variables
       */
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      /**
       * Disallow require statements except in import statements
       */
      '@typescript-eslint/no-var-requires': 'off',
      /**
       * Enforce the use of as const over literal type
       */
      '@typescript-eslint/prefer-as-const': 'error',
      /**
       * Disallow async functions which do not return promises and have no await expression
       */
      'require-await': 'off',
      '@typescript-eslint/require-await': 'off',
      /**
       * Require both operands of addition to be the same type and be bigint, number, or string
       */
      '@typescript-eslint/restrict-plus-operands': 'off',
      /**
       * Enforce template literal expressions to be of string type
       */
      '@typescript-eslint/restrict-template-expressions': 'off',
      /**
       * Disallow certain triple slash directives in favor of ES6-style import declarations
       */
      '@typescript-eslint/triple-slash-reference': 'error',
      /**
       * Enforce unbound methods are called with their expected scope
       */
      '@typescript-eslint/unbound-method': 'off'
    }
  }
);

module.exports = config;
