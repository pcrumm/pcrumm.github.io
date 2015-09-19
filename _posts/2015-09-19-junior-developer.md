---
layout: post
title:  The Care and Feeding of the Junior Developer
date:   2015-09-19 10:00:00
image: coworking_space.jpg
category: Tech
blurb: Water Twice Daily. Keep Out of Direct Sunlight.
---

Jonathan was our first engineering hire in the last six months. He was also the first hire our CEO didn’t brag about as his new “all star hire”. And that was perfectly all right&mdash;the “A Player” fallacy that encumbers technology is one of the most harmful lies we tell ourselves. Not every hire is an _A Player_, and not every hire needs to be one.

Jonathan came from a solid, though not extensive, technical background. He had a Computer Science degree from a respectable school, and had done well with his coursework. His practical experience, though, was limited mostly to this coursework and a few small group projects with limited self-direction. He had the tools he needed to be successful, but didn’t know how to use them&mdash;yet. He was the prototypical junior developer: enough knowledge to prove his potential, but a little green behind the ears.

I wasn’t our first engineering hire, nor did I have a fancy job title. Over time, though, I had gradually begun to take on a mentorship role to the rest of our team: leading product architecture discussions, helping solve the “hard problems” that were keeping features from getting out the door, and giving advice when things got tough. When Jonathan was assigned the spot next to me, and I was asked to “give him the tour”, I knew that I had the chance to help him become a valuable leader on our team, or let him flounder.

It’s been a while since I’ve worked with that group. I hear that Jonathan is still there, and that he’s now a Senior-level engineer known for his mentorship to Junior hires. The road there wasn’t easy, but we learned a few tricks along the way.

<hr>

## Provide Frequent, Natural Opportunities for Learning
Nobody likes being told that they’re wrong. Very few people like having their knowledge shortcomings pointed out, even if they’re well aware of them. The best way to become better at something is to be exposed to it, and the most comfortable way is to do it in an environment where failure isn’t a concern.

Jonathan had solid fundamental software engineering skills, but no exposure to the particular framework we utilized. We spent his first week learning the codebase together by fixing a series of small bugs I had previously selected that touch many of the components he would one day be responsible for. Pair programming, when done right, is amongst one of the comfortable and pleasurable learning experiences there is. We were sure to take turns: first, I would fix an issue, explain every step of the way, and answer any questions Jonathan had; then, he would try.

After Jonathan became more comfortable, our pair programming sessions became more infrequent. They were reserved for larger, more difficult problems, where the extra thought would often help me just as much as it helped him.

Later, we maintained ongoing mentorship through code reviews for every pull request. This keeps the entire team familiar with other aspects of the system that they don’t usually work on, and helps develop a critical eye. Most importantly, with the right approach, these don’t need to feel like a “performance review”—instead, they’re a natural part of the development process. Everyone gets a pull request rejected; it’s not a big deal. As long as you’re learning, you’re succeeding.
<hr>

## Keep Them On Their Toes
The fear of failure is amongst the most crippling fears we have. When coupled with the fear of the unknown, it’s enough to make many run for the hills.

When we expose a junior developer to a new, unfamiliar toolset, we’re fueling both of these fears at once. Once the developer starts learning, they’ll feel more comfortable. It’s natural for them to try to stay in that comfort zone.

Jonathan slowly explored multiple aspects of our system through his assignments. As he began to succeed on more complicated issues, I slowly mixed in simpler issues that touched new parts of the architecture. It allowed him to stay confident by tackling non-trivial issues every now and then, and expanded the breadth of his familiarity so he could add new components to his toolset.

Don’t throw someone off the deep end, but gradually move them to the deep end of the pool. Soon, they’ll be swimming, and won’t have even noticed.

<hr>

## Keep The Failures Small
Every developer has done something stupid. One of the defining moments in my career thus far has been bringing down WordPress.com (back when it was far smaller, and only for a few seconds!). On paper, that’s a pretty big mess, but it wasn’t a big deal to those around me and didn’t crush my confidence.

It’s important that developers learn that failing sometimes is okay, and that they’re exposed to it early. Egregious or easily preventable errors should always be examined after the fact, but as a learning experience. In the case of my mistake, we later implemented checks that ensured that the same mistake couldn’t be made again. Generally, errors&mdash;no matter how big&mdash;are signs of a failure in the system, rather than an immediate sign of personal shortcomings.

A few weeks after Jonathan started, he inadvertently dropped our entire production transactions table because he thought he was on our QA environment. This highlighted a number of deficiencies with our production and QA setup&mdash;and was a valuable impetus to get those things right. Plus, we now had a junior developer who understood the problems firsthand—who we could task with fixing it! There wasn’t any yelling, any blame, or any fall-out: just an “oh, shit”, a fix, and an effort to do better in the future. Developers aren’t super-humans, and a junior developer who is afraid of anything less than perfection will always be paralyzed by that fear.

<hr>

## Expect Natural Progress and Have Reasonable Goals
Performance reviews have one of two outcomes: mediocrity, or failure. There _are_ ways to measure software engineering success: work on X projects with Y new technologies, write demonstrably high-quality code (as measured by unit tests, defending one’s architecture choices, etc.). Failure in these departments is concerning, but can be easily addressed with the mentorship techniques we’ve discussed.

Problems arise when progress expectations for junior developers depart from the _art_ of software engineering and instead focus on the _business_ of software engineering. If your junior engineers are measured by their quickness to ship, number of issues fixed in a week, or a similar metric, there’s a problem—and it’s probably not the developer. If you can’t afford to sacrifice time for someone to improve, then you shouldn’t hire a junior developer. These are senior developer metrics&mdash;metrics used by individuals who have the experience to track their own progress along a black-or-white metric and recognize quickly when an external factor (constantly changing feature list, slow third-party deliverables, or engineering misestimate) will impact them. While you may occasionally luck out when applying these metrics to junior developers, you’ll often create only stress and disappointment.

Instead, focus on metrics that will help a developer become exposed to the mission-critical skills, in an environment where failure is acceptable. A close relationship between a junior and senior developer is especially vital here: the senior developer measures objective success for the junior developer that is oriented towards the _art_ of software engineering, and transparently ensures the junior developer is also meeting business needs. If business needs are proving problematic, the senior developer adjusts the junior developer’s responsibilities.

<hr>

The most important part of managing a junior developer is remembering the goal of hiring a junior developer: to provide them an environment to grow into senior level talent. When setting expectations, remember that junior developers _aren’t_ senior developers, and that holding them to the same objectives is a very quick trip to disappointment. If you do things right, you’ll end up with home-grown talent, and have yourself to thank for it.