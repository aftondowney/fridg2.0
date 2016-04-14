# Fridg2.0
### Built in Ember by Afton Downey, Brianna Popson, Jake Steinberg, and Ramon de la Cruz

Fridg2.0 is an app that will store both your shopping list and a list of goods you have in your home in a database.

Save an item in your grocery list, then after the item has been purchased, use the associated dropdown menu to send the item to your pantry list. Upon sending an item to your pantry, it will be timestamped with the date you purchased the item and expiration dates appropriate to the item you have purchased (for example, if you bought meat, the item will be timestamped with a one day and a three day timestamp). When the date on the stamp arrives, a message will show up in the item reminding you to make use of it before it spoils.

You can also remove the item from both lists, saving it exclusively in your item archive. This lists every item you have saved in your database, in case you want to remember that you liked a specific product but didn't need to buy more this week. This space is also useful to keep track of particular brands or items you were not so impressed with (use the Food Group "I hated this (ノಠ益ಠ)ノ彡┻━┻").

If you are curious about the nutritional value of your food, you can search for a food item on our main page. Clicking on one of the returned links will take you to the nutrition information for that particular product. You can also click on the links generated in any of your saved lists to access the same information.


## Technologies Used

* _This project was built on [Ember](https://emberjs.com) and was written in [JavaScript](https://en.wikipedia.org/wiki/JavaScript)._
* _Dependencies were handled with [npm](https://www.npmjs.com/) and [Bower](http://bower.io/)._
* _Speaking of dependencies, we used a ton of them to supplement Ember. Of note were:
1. [EmberX Select](https://github.com/thefrontside/emberx-select)
2. [Ember Truth Helpers](https://github.com/jmurphyau/ember-truth-helpers)
3. [Ember Moment](https://github.com/stefanpenner/ember-moment)
* _[Bootstrap](http://getbootstrap.com/) built the basic CSS seen on the page, with minimal alteration by us._
* _We used the [USDA National Nutrient Database (NDB) API](https://ndb.nal.usda.gov/ndb/api/doc) to perform our nutritional information searches.
* _[Github](https://www.github.com) is a great place to host any code you're working on or wish to share with the world._
* _Git was used in the terminal to upload my progress to GitHub._
* _And, of course, the basic code was written in HTML, CSS, and JavaScript in the Atom text editor, alongside a terminal program._


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
