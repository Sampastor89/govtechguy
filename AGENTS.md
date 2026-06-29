## Blog Images

When writing or finishing a blog post, always generate a hero image using AI — do NOT use Unsplash or placeholder images.

**Workflow:**
1. Craft a descriptive visual prompt based on the post's theme and tone
2. Run: `node /Users/samuelpastor/Documents/code/sam-lab/generate-image.mjs <prompt>`
3. Copy the output file from `~/Downloads/` into `src/assets/` with a clean, slug-based filename (e.g. `kaizen-labs-lighthouse.png`)
4. Set `heroImage` in the post frontmatter to `../../assets/<filename>`

**Prompt guidelines:**
- Landscape/cinematic style, wide aspect ratio
- Match the mood of the post — govtech tends to run serious, analytical, occasionally dramatic
- Avoid generic "tech" clichés (floating holograms, blue circuit boards). Go for scenes, metaphors, places
- Include lighting/color direction (e.g. "muted blues and amber", "overcast daylight")

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
