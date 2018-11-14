#!/usr/bin/env node
const prog = require('caporal');
const boxen = require('boxen');
const chalk = require('chalk');
prog
  .version('1.0.0')
  .action(function(args, options, logger) {
    let hello =chalk.blue.bold('Hello');
    console.log(boxen(
`${hello}!

I am Lokesh, from Bangalore, India.`,
       {padding: 1,borderStyle:'double',float:'left',align:'left'}));
  });
 
prog.parse(process.argv);
