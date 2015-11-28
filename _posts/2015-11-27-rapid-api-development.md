---
layout: post
title: Rapidly Developing Kick-Ass APIs
date:   2015-11-27 20:00:00
image: motorcycle.jpg
category: Tech
blurb: No Time to Waste 
---

Over the last year, I’ve had the fortune of being involved in several fast-moving software development projects. Long gone are the days of slow, careful, and deliberate planning in small software companies. Instead, moving fast and breaking things ([for better or for worse](http://www.forbes.com/sites/quora/2014/12/16/should-innovative-companies-really-move-fast-and-break-things/)) is now the law of the land. Speed is a competitive advantage&mdash;and, in today’s startups, it’s one of the most clearly attainable.

# Reinventing Yourself
Joel Spolsky once wrote that [you should never rewrite your software from scratch](http://www.joelonsoftware.com/articles/fog0000000069.html). On the whole, I think this is still mostly true&mdash;the scorched earth policy in software seldom works. The reason it never works, however, isn’t so clear.

It isn’t rewriting one’s software that’s inherently the problem. Instead, a rewrite tends to soon become a victim of the poor practices that led to needing a rewrite in a first place. With today’s tendency towards [microservices](http://microservices.io/index.html) and the abundance of well-written, small third-party components that can jumpstart large portions of development overhead, rewriting various portions of a software stack now and then has become a feasible tool for managing technical debt and adjusting to the often quickly-changing goals of today’s startups.

Of course, these rewrites are only viable if they don’t take long. I’ve re-written what became decently sized APIs with several dozen endpoints over the course of a few weeks, which is far below the amount of time that would have been incurred dealing with the poor architecture in the future. In fact, it may have even been faster than fixing the bug that instigated rewriting one poorly-written API in the first place.

<hr>

# Step 1. Designing the API
Before you write a single line of code, you should have a pretty solid idea of how your API will be structured, and how it will work. I know that starting off _not_ writing your API is a little counter-intuitive when you’re trying to get things done fast, but work with me here&mdash;you’ll save a lot of restructuring time down the road. A key to doing things fast is doing them right the first time.

[There’s no shortage of articles on great API design.](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api) If you’re fortunate to have used an API that wasn’t a nightmare before, draw lessons from it&mdash;sit down and write out what you liked about using the API, what you didn’t, and use that knowledge to guide your own architectural decisions.

At this point in time, I’d hesitate to recommend a non-RESTful approach to any API developer. The REST best practices are based upon mountains of experience, and have been proven to work very well for a variety of applications. They also lead to APIs that are easy to understand and consume without substantial amounts of overhead, which is key to quick adoption.

Likewise, JSON as the data interchange format of choice (over something like SOAP or XML that was formerly common) is mostly a no-brainer. Its support is complete in nearly every major programming language, and typically relies on a data format (arrays or objects) that developers are natively comfortable with.

Regardless of your level of experience, there are a few key principles that will ensure that your API consumers won’t hate you. These steps aren’t complicated&mdash;their goal is to make sure that you’ve thought about your API from different perspectives before releasing it upon the world.

## 1. Design For Your Audience
It’s very difficult for an API to be everything to everyone. Decisions like your authentication scheme and the building blocks of your API (more on this second point later) are often made infinitely simpler by identifying _who_  exactly your API is designed for.

If your API is oriented *internally*, it’s preferable to rely on institutional knowledge to guide your decisions. An internal API likely doesn’t need the overhead of the OAuth authentication dance to identify users (HTTP Basic Authentication will do). For architectural decisions, it’s best to continue to think about things the way that the organizational already does. On one project I completed, the root element of every API call is a user’s email address. API calls looked like `/GET/[email]/posts`. On the outside, this is fairly strange. Internally, it mirrors the organizational strategy of the legacy API, and many other internal libraries that were updated to use the new API relied on this for their own design decisions. Clean slate design is ideal, however, being realistic about the level of internal organizational inertia one can overcome is key in making these projects successful.

On the other hand, if your API is oriented *externally*, design decisions should be made in a way that will make sense to a user with very little outside context. At [Pogoseat](https://github.com/pogoseat/api-client-ruby.git), we designed our new externally-facing API around the concept of inventory items (like seats at a baseball game), rather than a myriad of other options, because this is the unit that makes the most sense for other users. Likewise, we opted to implement OAuth-based authentication to maximize flexibility in the variety of API consumers we could support.

## 2. Select Your Building Blocks
At the core of defining your API is deciding what it is that your API _does_. You’ll need to select several fundamental units that, when assembled, describe the rest of the functionality of your API in order to keep things clean and organized.

Let’s imagine, for a moment, that we’re defining an API for Snapchat. We want users to be able to sign in and share photos, so that naturally suggests a few building blocks: _users_ and _photos_.

Though this example is straightforward, keeping this decision in mind helps to keep your API endpoints logically organized as you build them out. If you have a hard time describing your API endpoints relative to your building blocks, you may want to revisit your choice of building blocks.

## 3. Record Your Results
Several years ago, I used to design APIs in plaintext, using a format that [looked something like this](https://github.com/pcrumm/phpbb.json/blob/dev-phpbb-3.0.x/docs/modules/board.md). These days, there are several great tools for documenting APIs that give you great additional functionality for free, including automatically-generated API clients, in-browser API experimentation, test suite integration, and easy parsing for any other use-cases you come up with.

[Swagger](http://swagger.io/), the open-source API documentation format of choice, is an XML (though you can use JSON, which is then translated) format for describing REST APIs. Its strength is its community&mdash;there’s an entire ecosystem of development tools available including an editor, API code-generation tools, in browser playground based on one’s documentation, and more. Its primary downside is that each of these components is discrete and separately developed, so it does take a little bit of time to put together your workflow in the way that you’d like.

On the other side of the ring is [Apiary](https://apiary.io/), which is a feature-full paid (though there is a free plan which is a good place to get started) platform for API design. Its documentation format is markdown based, which provides less overhead to getting started than Swagger’s sometimes-bloated XML format. Its tooling is oriented towards collaborative API development, particularly discussion and group brainstorming around API endpoints.

As much as I’m a supporter of open source software, I’d recommend Apiary to anyone who is looking to get things going quickly and isn’t terribly interested in spending time building their own API documentation workflow and ecosystem.

When architecting your API, remember that simplicity is often key. I prefer 10 small, single-function API endpoints to one large, multifunctional one. They’re easier to plan, easier to build, and easier to understand—both by the API developer and the API consumer. They’re also easy to optimize, which doesn’t seem important now but will after version 1 is long out the door.

<hr>

# Step 2. Select Your Platform
Familiarity is key to speed. This isn’t a fantastic time to experiment with new frameworks, development techniques, or other variety.

The tool you’ll need for this job is well-supported, with an ecosystem that contains many off-the-shelf components for regular tasks within your domain: authentication, concurrency (if necessary), and basic logistical operations like ordering and search should be available with little to no work on your part. It shouldn’t require _too much_ overhead or include _too much_ cruft that your API won’t need.

Chances are that you’re already familiar with some sort of tool in your preferred stack that’ll do the job here. I’ve used [Slim](http://www.slimframework.com/) and [Lumen](http://lumen.laravel.com/) (PHP), [express](http://expressjs.com/) (node.js), and [Sinatra](http://www.sinatrarb.com/) (Ruby) with great success. All of these frameworks are community-supported, well-documented, and very efficient to work with.

You might be compelled to skip the framework and work through your preferred stack from scratch. I’d encourage you to take the time to learn one of these simple frameworks, instead. They worry about the overhead for you, so you can spend that six hours adding functionality to your API instead of figuring out why you’re losing half of the submitted data on multipart form requests (true story).

<hr>

# Step 3. Test, Build, Repeat
Unit test your API. That isn’t a suggestion&mdash;you need to do it. I know that unit tests take time to write. Sometimes, writing tests might even take longer to write than writing the API endpoint. That’s okay.

The key to these tests is to document the _correct_ functionality, and any errors that are of particular concern. For example, you’ll want to know that your authentication works when credentials are valid, and fails when they are not. You’ll want to know that a correctly formatted new user will be created, and that omitting a required field fails.

I choose not to focus on testing edge cases during initial development. There’s a chance that a change during the development cycle will require tweaking older unit tests, and I’d prefer to limit the number of involved tests. These can be added later, when changes to endpoints are less likely.

These unit tests exist to ensure that you aren’t ever taking a step backwards. You might, at some point, determine that a small helper function you wrote needs to be expanded in functionality or that you want to refactor that shared file upload code a bit. That’s totally fine&mdash;thanks to your unit tests, you can confidently do so and not worry about inadvertently breaking something old. Surprises are the enemy of efficiency, and there’s no surprise less pleasant than realizing code that you thought worked no longer does, and that you have no idea when it broke. 

While I call these “unit tests” here, they’re really “functional tests”. I prefer to write these early tests to make _actual API calls_ to an _actual instance of the API_ to best represent the reality of using the API and to ensure proper functionality as time goes on. The beauty of this approach is that you don’t even need to stick within the ecosystem that you used to develop your API, if you don’t want to. For PHP- and node-based APIs, I often rely on [node’s mocha](https://mochajs.org/) along with the wonderful [supertest](https://github.com/visionmedia/supertest) library.

True unit testing is a goal to strive for, but I’ve found that the reward is often not worth the initial expense until the internal layout of the API and its behavior are well-defined and the initial release is out the door, which often doesn’t occur until after the version 1 release.

Once you’ve created some functional tests that define the endpoint you’d like to create, implement it. If you picked an expressive framework and defined your building blocks well, this shouldn’t take too long. Once the tests pass, move onto the next endpoint in the list. See why that endpoint list came in handy?

<hr>

# Step 4. Deploy
All of our pre-planning has one other interesting benefit: our API consumers can start using our API before it’s fully built out. To facilitate this, we should try to get work-in-progress builds out to these API consumers as soon as possible.

I do this by maintaining multiple active hosts that are running the API at various levels of stability. For one of my projects, the iOS team implemented a secret preferences panel (activated by an obscure gesture) that allows one to select the host on the fly. I have an _edge_ host, which is mapped directly to the working copy of the code that I’ve edited in vim (as close to cowboy coding as you should be in this day and age, though my unit tests do make this a little more comfortable), a _qa_ host which can run any branch via Github (and does so automatically), and a _prod_ host, which runs the production version of the API. 

Changes originate on _edge_, and proceed to _qa_ once I’m comfortable that they’re functional. They’ll be deployed on _prod_ starting with the v1 release.

This early-access cycle has allowed developers to request changes and provide feedback early on, making potentially complicated late architectural changes become easy, early minor changes.

<hr>

My API development techniques can be summed up simply: plan first, test always, build small, and release often. We’re software engineers&mdash;we’re good at solving small, decomposable problems. By turning our API into one of these, we’ve set ourselves up for success and provided ourselves the tools we need to remove distractions and _Get Shit Done_. 
