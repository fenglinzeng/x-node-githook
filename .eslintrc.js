// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
    impliedStrict: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  "rules": {

    /*
     * 可能存在隐患
     * Possible Errors
     */
    // 不允许的bugger（为1时警告）
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,

    // 不允许多余的括号
    // disallow unnecessary parentheses
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false }],
    // 存在隐患的否定表达式
    // disallow negating the left operand of relational operators
    "no-unsafe-negation": "error",
    // 强制使用有效的 JSDoc 注释
    // enforce valid JSDoc comments
    "valid-jsdoc": "off",

    // 禁用 console
    "no-console": "off",

    /*
     * 最佳实践
     * Best Practices
     */

    // 强制数组方法的回调函数中有 return 语句
    // enforce return statements in callbacks of array methods
    "array-callback-return": "error",

    // 代码块强制使用大括号
    // enforce consistent brace style for all control statements
    "curly": ["error", "multi-line"],

    // 强制在点号之前或之后换行
    // enforce consistent newlines before and after dots
    "dot-location": ["error", "property"],

    // 强制尽可能地使用点号
    // enforce dot notation whenever possible
    "dot-notation": "error",

    // 使用严格等于或非等于
    // require the use of === and !==
    "eqeqeq": ["error", "smart"],

    // 禁用 arguments.caller 或 arguments.callee
    // disallow the use of arguments.caller or arguments.callee
    "no-caller": "error",

    // 禁止使用空解构模式
    // disallow empty functions
    "no-empty-function": "error",

    // 禁止不必要的 .bind() 调用
    // disallow unnecessary calls to .bind()
    "no-extra-bind": "error",

    // 禁用不必要的标签
    // disallow unnecessary labels
    "no-extra-label": "error",

    // 禁止数字字面量中使用前导和末尾小数点
    // disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": "error",

    // 禁止重定义原生对象或只读属性
    // disallow assignments to native objects or read-only global variables
    "no-global-assign": "error",

    // 禁止使用类似 eval() 的方法
    // disallow the use of eval()-like methods
    "no-implied-eval": "error",

    // 禁用 __iterator__ 属性
    // disallow the use of the __iterator__ property
    "no-iterator": "error",

    // 禁用不必要的嵌套块
    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",

    // 禁止使用多个空格
    // disallow multiple spaces
    "no-multi-spaces": "error",

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    // disallow new operators with the String, Number, and Boolean objects
    "no-new-wrappers": "error",

    // 禁止在字符串中使用八进制转义序列
    // disallow octal escape sequences in string literals
    "no-octal-escape": "error",

    // 禁用 __proto__ 属性
    // disallow the use of the __proto__ property
    "no-proto": "error",

    // 禁止自身比较
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",

    // 禁止抛出异常字面量
    // disallow throwing literals as exceptions
    "no-throw-literal": "error",

    // 禁止出现未使用过的表达式
    // disallow unused expressions
    "no-unused-expressions": "error",

    // 禁止不必要的 .call() 和 .apply()
    // disallow unnecessary calls to .call() and .apply()
    "no-useless-call": "error",

    // 禁止不必要的字符串字面量或模板字面量的连接
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": "error",

    // 禁用不必要的转义字符
    // disallow unnecessary escape characters
    "no-useless-escape": "error",

    // 禁用 void 操作符
    // disallow void operators
    "no-void": "error",

    // 要求 IIFE 使用括号括起来
    // require parentheses around immediate function invocations
    "wrap-iife": "error",

    // 禁止 “Yoda” 条件
    // require or disallow “Yoda” conditions
    "yoda": "error",

    /*
     * 变量相关
     * Variables
     */

    // 不允许标签与变量同名
    // disallow labels that share a name with a variable
    "no-label-var": "error",

    // 不允许定义为undefined
    // disallow initializing variables to undefined
    "no-undef-init": "error",
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    "no-undef": "off",

    // 禁止在变量定义之前使用它们
    // disallow the use of variables before they are defined
    "no-use-before-define": "error",

    /*
     * Node.js and CommonJS
     */

    // 禁止调用 require 时使用 new 操作符
    // disallow new operators with calls to require
    "no-new-require": "error",

    /*
     * Stylistic Issues
     */

    // 强制数组方括号中使用一致的空格
    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": "error",

    // 强制在单行代码块中使用一致的空格
    // enforce consistent spacing inside single-line blocks
    "block-spacing": "error",

    // 大括号风格要求
    // enforce consistent brace style for blocks
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],

    // 要求或禁止末尾逗号
    // require or disallow trailing commas
    "comma-dangle": "error",

    // 强制在逗号前后使用一致的空格
    // enforce consistent spacing before and after commas
    "comma-spacing": "error",

    // 强制使用一致的逗号风格
    // enforce consistent comma style
    "comma-style": "error",

    // 强制在计算的属性的方括号中使用一致的空格
    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": "error",

    // 函数括号间不允许有空格
    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": "error",

    // 强制使用一致的缩进
    // enforce consistent indentation
    "indent": ["error", 4, { "SwitchCase": 1 }],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": "error",

    // 强制在对象字面量的属性中键和值之间使用一致的间距
    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": "error",

    // 强制在关键字前后使用一致的空格
    // enforce consistent spacing before and after keywords
    "keyword-spacing": "error",

    // 强制使用一致的换行风格
    // enforce consistent linebreak style
    "linebreak-style": [0, "windows"],

    // 要求在注释周围有空行
    // require or disallow newlines around directives
    "lines-around-directive": "error",

    // 要求构造函数首字母大写
    // require constructor names to begin with a capital letter
    "new-cap": "off",

    // 要求调用无参构造函数时有圆括号
    // require parentheses when invoking a constructor with no arguments
    "new-parens": "error",

    // 禁用 Array 构造函数
    // disallow Array constructors
    "no-array-constructor": "error",

    // 禁用 Object 的构造函数
    // disallow Object constructors
    "no-new-object": "error",

    // 禁用行尾空格
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": "error",

    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": "error",

    // 禁止属性前有空格
    // disallow whitespace before properties
    "no-whitespace-before-property": "error",

    // 强制在大括号中使用一致的空格
    // enforce consistent spacing inside braces
    "object-curly-spacing": ["error", "always"],

    // 要求或禁止块内填充
    // require or disallow padding within blocks
    "padded-blocks": ["error", "never"],

    // 要求对象字面量属性名称用引号括起来
    // require quotes around object literal property names
    "quote-props": ["error", "as-needed"],

    // 强制使用一致的反勾号、双引号或单引号
    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": ["error", "single"],

    // 强制分号之前和之后使用一致的空格
    // enforce consistent spacing before and after semicolons
    "semi-spacing": "error",

    // 必须写分号
    // require or disallow semicolons instead of ASI
    "semi": [2, "always"],//语句强制分号结尾

    // 强制在块之前使用一致的空格
    // enforce consistent spacing before blocks
    "space-before-blocks": "error",

    // 强制在 function的左括号之前使用一致的空格
    // enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": ["error", "never"],

    // 强制在圆括号内使用一致的空格
    // enforce consistent spacing inside parentheses
    "space-in-parens": "error",

    // 要求操作符周围有空格
    // require spacing around infix operators
    "space-infix-ops": "error",

    // 强制在一元操作符前后使用一致的空格
    // enforce consistent spacing before or after unary operators
    "space-unary-ops": "error",

    // 强制在注释中使用一致的空格
    // enforce consistent spacing in a comment
    "spaced-comment": "error",

    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    // require or disallow Unicode byte order mark (BOM)
    "unicode-bom": "error",


    /*
     * ECMAScript 6
     */

    // 要求箭头函数体使用大括号
    // require braces around arrow function bodies
    "arrow-body-style": "error",

    // 要求箭头函数的参数使用圆括号
    // require parentheses around arrow function arguments
    "arrow-parens": ["error", "as-needed"],

    // 强制箭头函数的箭头前后使用一致的空格
    // enforce consistent spacing before and after the arrow in arrow functions
    "arrow-spacing": "error",

    // 强制 generator 函数中 * 号周围使用一致的空格
    // enforce consistent spacing around * operators in generator functions
    "generator-star-spacing": ["error", "after"],

    // 不允许多余的模块引入
    // disallow duplicate module imports
    "no-duplicate-imports": "error",

    // 对象key值的声明，不需要多余的引号或者方括号
    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": "error",

    // 禁用不必要的构造函数
    // disallow unnecessary constructors
    "no-useless-constructor": "error",

    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": "error",

    // 用let和const替代var
    // require let or const instead of var
    "no-var": "error",

    // 要求或禁止对象字面量中方法和属性使用简写语法
    // require or disallow method and property shorthand syntax for object literals
    "object-shorthand": 0,

    // 要求使用箭头函数作为回调
    // require arrow functions as callbacks
    "prefer-arrow-callback": "error",

    // 要求使用 const 声明那些声明后不再被修改的变量
    // require const declarations for variables that are never reassigned after declared
    "prefer-const": "error",

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": "error",

    // require rest parameters instead of arguments
    "prefer-rest-params": "error",

    // 要求使用扩展运算符而非 .apply()
    // require spread operators instead of .apply()
    "prefer-spread": "error",

    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": "error",

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    // require or disallow spacing around embedded expressions of template strings
    "template-curly-spacing": "error",

    // 强制在 yield* 表达式中 * 周围使用空格
    // require or disallow spacing around the * in yi1eld* expressions
    "yield-star-spacing": "error"
  }
}
