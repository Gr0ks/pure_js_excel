console.log('module.js');

async function start() {
  return await Promise.resolve('test polyfill!');
}

start().then(res => console.log(res));