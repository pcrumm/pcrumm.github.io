---
layout: post
title:  "Environment-Specific Configuration in sails.js"
date:   2014-10-15 17:00:00
image: "sailboat.png"
---

Recently, I've been doing a lot of work with [sails.js](http://sailsjs.org/#/), a new-on-the-scene Javascript framework that is surprisingly pleasant to use.

Natively, sails supports production and development environments, each with their own configuration files. This binary division works well enough, but I began to find limitations in the setup when I wished to support a third QA environment or remove configuration information from version control.

Fortunately, sails provides us with a solution, in the form of its poorly-documented [.sailsrc file](http://sailsjs.org/#/documentation/concepts/Configuration/usingsailsrcfiles.html). `.sailsrc` may be placed in a variety of locations, as outlined in the [*rc standards](https://github.com/dominictarr/rc#standards). In our environments, these files are stored in the parent directory of the application source.

You can place any amount of properly-formatted JSON in the `.sailsrc` file.

    {
      "connections": {
        "mysql": {
            "adapter": "sails-mysql",
            "host": "db.phil.crumm",
            "user": "phil",
            "password": "passphil",
            "database": "phildb"
        }
      },
      "api_url": {
        "users": "users.api.phil.crumm"
      }
    }

You can then reference these fields through the application, using the `sails` global, e.g. `sails.config.connections.mysql.host`, `sails.config.api_url.users`, etc.

This will allow you to maintain independent configurations across each environment, without futzing with sails.js' rather binary view on what development should look like.