# Yarn Help 5.0 Landing Page

This is a (hopefully) quick landing page for Yarn Help 5.0 central site. It's being built with Tailwind CSS and vanilla JS.

The majority of the Yarn Help 5.0 apps will be built with Next.js and Tailwind CSS. As this is a landing page, I'm using vanilla JS to get it spun up quickly.

## About Yarn Help 5.0

Now Yarn Help! is being built out as a multi-app site with each app in its own subdomain connected to the main site at the apex domain. 🥳
e.g.

- Central site: yarnhelp.com
- Patterns site: knittingpatterns.yarnhelp.com
- Astro blog: blog.yarnhelp.com

That lets me use the best stack for each app (managing complexity).
It also doesn't pigeonhole me into one stack.

All the apps will share themes. 🎨

- The majority of the css will be Tailwind.
- However, I'm designing with flexibility in mind.
- Having a master design file / design system lets me use another css framework and/or vanilla css without a lot of fuss.
- And of course it's accessible from the beginning. A11y first is less work, less fuss, more coding fun that way!

To facilitate sharing, documentation, accessibility testing and reuse, I'm using Storybook for the first time. 📚

I'm currently almost done the basic functionality of the new Free Knitting Patterns app, being built with Next.js and Notion API.

- I'm using Jon Meyers Jon Meyers's egghead.io course Build Static Pages Dynamically using Next.js and the Notion API course as a starting point.
- But I'm extending the functionality and adding themes.
- And yes, I'm also designing all 17 knitting patterns, and will be knitting samples for a photo gallery during 2024.

A huge thanks to Brian Morrison in James Q Quick's Discord for getting me interested in using the Notion api to build an app! He's done some really cool things with it.
