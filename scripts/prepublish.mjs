#!/usr/bin/env zx
import 'zx/globals';

await $`npm config set registry https://registry.npmjs.org`;
await sleep(1000);
await $`npm version patch`;

const { version } = JSON.parse(await fs.readFile('./package.json'));

try {
  await $`git commit -am "version@${version}"`;
} catch (e) {
  if (!e.stdout.includes('nothing to commit')) {
    throw e;
  }
}

await $`git push --follow-tags`;
await $`git push`;
