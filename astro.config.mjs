// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default {
  output: 'server', 
  adapter: netlify(),
};

