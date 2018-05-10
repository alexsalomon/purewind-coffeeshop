# Pure Wind Coffee Shop

A fully responsive website for the Pure Wind Coffee Shop (a fictitious client).

Built mobile first and using technologies such as Brunch, Babel, Javascript/ES6, and Bulma CSS Framework.

Visit http://alexsalomon.me/purewind-coffeeshop/ to see it live.

## Understand the Source Code

* We use Brunch.io to build, lint, compile and bundle assets.  
* The `public/` directory is fully auto-generated and served by the built-in HTTP server. 
* Write your code in the `app/` directory.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * For more information visit the [Brunch.io website](http://brunch.io), and the [Getting started guide](https://github.com/brunch/brunch-guide#readme).
    
## Installation

* Clone the repository:
    * `git clone https://github.com/alexsalomon/purewind-coffeeshop.git`
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
* Setup:
    * `npm install` — installs brunch plugins and app dependencies:

## Development

* Run:
    * `brunch build` — builds the project for development (non-minified files and `.map` files).
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).

## Deployment

##### One time setup:
    rm -rf public
    git fetch origin gh-pages:gh-pages
    git worktree add public gh-pages

##### Every deployment:
* `npm run deploy` — cleans, builds and deploys to github pages