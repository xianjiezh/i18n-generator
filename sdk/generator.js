#!/usr/bin/env node

const taskGenerator = (config) => {
  return new Promise((resolve, reject) => {
    console.log('generator');
    console.log('config', config);
    setTimeout(() => {
      resolve();
    },1000)
  })
}

module.exports = { taskGenerator }