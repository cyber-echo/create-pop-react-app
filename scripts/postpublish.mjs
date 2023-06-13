#!/usr/bin/env zx
import 'zx/globals';

within(async () => {
  setTimeout(async () => {
    await $`npm config set registry https://registry.npmmirror.com`;
  }, 1000);
});
