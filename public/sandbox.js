"use strict";
// src folder contains typescript file which we don't wanna deploy and public folder files that needs to be deployed
// tsc src/sandbox.ts  -- This command will generate sandbox.js file inside src folder, but we need to move to public folder manually....to get rid of this follow the below steps:-
// intialize tsconfig.js by tsc --init , tsconfig.js contains information about typescript compiling configuration
// In tsconfig.js change - rootDir from ./ to ./src   AND  outDir from ./ to ./public
// at last add "include": ["src"] so that ts files outside src folder will not automatically compiled to public folder
console.log('testsandbox');
