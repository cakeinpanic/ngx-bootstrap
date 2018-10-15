'use strict';

const execa = require('execa');
const _version = require('../package').version;

changeVersion();
async function changeVersion() {
  console.log(`Updating version`);

  await execa.shell(`find src -maxdepth 2 -name package.json -exec bash -c "npm --prefix \\$(dirname {}) version ${_version}" \\;`);

  console.log('versioning completed');
}
