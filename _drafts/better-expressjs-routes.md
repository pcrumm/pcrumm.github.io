---
layout: post
title:  Code-Defined Dynamic Routes for express.js
date:   2010-01-01 20:00:00
image: railyard.jpg
category: Projects
blurb: Code Once. Route Automatically.
---

Frameworks like [express.js](http://expressjs.com/) have made it easier than ever to quickly develop performant and reasonably well-organized applications. One of my biggest complaints, however, has always been the awkward intermingling of arbitrary routes and code in express application.

You’ll often find simple express.js applications consist of only one file, with a whole bunch of routes.

{% highlight javascript %}
// one-bad-example.js
var app = require( ‘express’ )();

app.get( ‘/user/:id’, function( req, res ) {
	res.send( ‘Details for user ‘ + req.params.id );
} );

app.post( ‘/user’, function( req, res ) {
	res.send( ‘New user created’ );
} );

app.get( ‘/post’, function( req, res ) {
	res.send( ‘Post list…’ );
} );

app.patch( ‘/post/:id’, function( req, res ) {
	res.send( ‘Updating post ‘ + req.params.id );
} );

// and so on…
{% endhighlight %}

More organized applications might split these routes across multiple files&mdash;then, you have the opposite problem. Instead of route soup, you’ll be forced to search the whole codebase to determine where a route is defined.

I’m a fan of convention over configuration, so I’ve created [switchyard](https://github.com/pcrumm/switchyard). switchyard groups all application controller code into a single user-defined directory, and groups all endpoints into an expressive object format the dictates their location and behavior.

As an example, let’s look at the new organization for our previous example application. We’ll place all of our controllers in the `controller` directory.

{% highlight javascript %}
// server.js
var app = require( ‘express’ )();
var switchyard = require( ‘switchyard’ );

switchyard( app, __dirname + ‘/controller’ );

var server = app.listen( 3000, function() {
    console.log( ‘A switchyard-powered express server is running on port 3000!’ );
} );

// controller/user.js
module.exports = {
	index: {
		post: function( req, res ) {
			res.send( ‘New user created’ );
		}
	},

	‘:id’ {
		get: function( req, res ) {
			res.send( ‘Details for user ‘ + req.params.id );
		}
	}
};

// repeat for controller/post.js — an exercise for the user!
{% endhighlight %}

URLs are defined based on the controller file names and the first-level object values within the controller. Within each object value in the controller are the HTTP verbs that endpoint supports. All verbs that express supports (`GET`, `POST`, `DELETE`, `PUT`, `PATCH`, etc.) are supported by switchyard as well. The first part of the URL is the controller name (the name of the controller file without the `.js` extension), and the second part is the name of the first-level object.

Right now, there aren’t too many special rules: `index` will map to `/` for the controller.

I’m looking to add a few features in the near future, like support for route aliases (to support endpoints like `/` or to use one controller for miscellaneous endpoints, for example) for robustness.

If you use switchyard in production, I’d love to hear about your experiences. As always, pull requests and Github issues are accepted and appreciated. Happy developing!