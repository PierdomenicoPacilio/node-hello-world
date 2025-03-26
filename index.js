const argv = process.argv[2];
// (argv === undefined) ? console.log('Hello World!') : console.log(process.argv[2]);
console.log( (argv === undefined) ? 'Hello World!' : process.argv[2] );