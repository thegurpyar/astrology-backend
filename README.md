1.yarn install
2.npx tsc --init
3.paste this tsconfig.json

{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

3.yarn eslint --init

module.exports = {
  parser: '@typescript-eslint/parser',  // Specify the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 'latest', // Enable latest ECMAScript features
    sourceType: 'module',  // Support for ES modules
    ecmaFeatures: {
      jsx: false,  // Disable JSX support for plain Node.js project
    },
  },
  extends: [
    'eslint:recommended',               // Use ESLint recommended rules
    'plugin:@typescript-eslint/recommended', // Use TypeScript plugin rules
  ],
  plugins: ['@typescript-eslint'], // Enable TypeScript plugin
  rules: {
    // Add custom rules for TypeScript and Node.js if needed
    '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused variables
    'no-console': 'off',  // Allow console.log for Node.js
  },
  env: {
    node: true,         // Enable Node.js global variables
    es2021: true,       // Support modern JavaScript features
  },
  settings: {
    // No need to specify settings for React here
  },
};
