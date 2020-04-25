# DEV API + Netlify Functions Starter Site

> Skeleton of an HTML/Sass site that retrieves DEV posts with a Netlify function. Uses node-sass and includes Browsersync for hot reloading. Build styles are minified and autoprefixed.

The only requirements are:

- A DEV profile with at least one published post
- A [Netlify](https://www.netlify.com/) account for site hosting

## Getting Started

1. Fork this project into your own Github repo
2. On DEV, go to [Account Settings](https://dev.to/settings/account) and generate an API key - _keep this tab open for reference in a later step_
3. [Login or signup for Netlify](https://www.netlify.com/) and create a new site from the new repo (_it needs to be public_)
   - You will likely get an error of build failure until we complete the next step
4. In your Netlify site settings, go to "Build & Deploy > Environment" and create a new variable called `DEVTO` with the value being your DEV API key

From there, the rest of the build settings will pick up from the included `netlify.toml` file.

After step 4, you can visit the "Deploys" area in Netlify to use the manual "Trigger deploy" option for your first deploy which will use the new environment variable and build successfully.

You will then have your new API available at `[yoursite.com]/.netlify/functions/devto` containing your latest DEV posts 🙌 Continue to the [Development](#development) section to learn how to run the project locally.

## Customizing

You can add and remove HTML pages, add an `img` directory, and update the Sass however you like as long as you place an element with the class of `posts` on a page that also includes the `js/posts.js` script as shown on the default `index.html`.

### Change number of returned posts

Open `functions/devto.js` and in the `$apiRoot` variable change the `per_page` value. DEV API allows values up to 1000. [Review the DEV API docs >](https://docs.dev.to/api/#operation/getUserPublishedArticles)

### Change returned values from DEV API

Open `functions/devto.js` and in the generated map, add or remove values as desired. [Review the DEV API docs](https://docs.dev.to/api/#operation/getUserPublishedArticles) for a sample of a returned API object.

### Change post template

The simple list template is created in `js/posts.js` in the `createPostList` at the top of the file. You can change anything about the markup used.

Review previous section if you want to add additional API values.

**If you need IE11 or under support** you may want to run the content of `js/posts.js` through the [online Babel compiler](https://babeljs.io/repl) to produce an alternate to the template literal used to create the post template.

## Development

After you have a successful build, visit your API at `[yoursite.com]/.netlify/functions/devto` and copy the contents into a new file in the `js` directory called `postdata.json` (ignored on commit by default). This will mimic the API data so you can adjust the site styling and content.

### Scripts

**`npm run develop`**

> Serve with hot reload at localhost:1337

**`npm run build`**

> Generate minified, autoprefixed CSS for production

This is the compiled version served on Netlify.

**`npm run serve`**

> Serve latest build files at localhost:1337
