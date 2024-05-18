import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import postcssPresetEnv from 'postcss-preset-env'
import pxtorem from 'postcss-pxtorem'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
  preprocess: [
    preprocess({
      postcss: {
        plugins: [
          postcssPresetEnv({
            browsers: 'last 2 versions',
            autoprefixer: { grid: 'autoplace' },
          }),
          pxtorem(),
        ],
      },
    }),
  ],
}

export default config
