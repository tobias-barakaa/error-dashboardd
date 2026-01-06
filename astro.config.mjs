// import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';

// export default defineConfig({
//   integrations: [tailwind()],
//   output: 'static', // Change back to static
// });


import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true, // This will automatically inject Tailwind's base styles
    })
  ],
  output: 'static',
});