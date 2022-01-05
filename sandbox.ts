// since browser does not understand ts hence we must compile down it to js
// To compile ts file to js, in terminal write, (tsc xyz.ts abc.js) and for continuous compilation use (tsc xyz.ts abc.js -w) ,  where w stands for watch
// now when the output file is named the same as the input file i.e. sandbox and sandbox then we can just take off this last bit i.e. (abc.js) and typescript automatically compiles it to a file with the same name but just with a javascript extension
const character = 'luigi';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input=> {
    console.log(input);
})
