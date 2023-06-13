#!/usr/bin/env zx
import 'zx/globals';

await $`npm version patch`;
await $`npm run release`;

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
