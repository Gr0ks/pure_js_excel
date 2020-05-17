console.log('module.js')

// eslint-disable-next-line require-jsdoc
async function start() {
  return await Promise.resolve('test polyfill!')
}

start().then((res) => console.log(res))
