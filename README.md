# bot-template

## Resources
- [Discord.js Guide](https://discordjs.guide/#before-you-begin)
	- The basic tutorial bot that the Discord.js guide walks you through served as the base for this template, though I will deviate from the format in several places.
	- The detailed Discord.js documentation can be found [here](https://discord.js.org/#/docs/main/stable/general/welcome); I do not recommend wading into it if you are brand new to JavaScript - I spent a lot of time trying to understand how to use it before I had a grasp of how to really *read* JS, and it caused more confusion and angst than it was worth. Coming back to it after four-ish months of deep study and practice has been eye-opening - if you're well-versed enough in JavaScript that you can reliably differentiate between methods that are built-in and methods coming from something in a library/non built-in class, the documentation should be comfortable.

- [Guide to deploying your bot on Heroku](https://elements.heroku.com/buildpacks/synicalsyntax/discord.js-heroku), by synicalsyntax

## About This Project
- There are commented and less-commented versions of most files in this project; I find the versions with fewer comments easier to read in general, but if you find yourself struggling with the purpose of any given line of code there is likely a version in [`commented-files`](./commented-files) that includes more detailed explanation.

### Tools

- Some form of **command line interface** (Terminal on Mac, whatever your favorite terminal is on Linux, [GitBash](https://www.atlassian.com/git/tutorials/git-bash) or a Linux subsystem on Windows). I have built a bot using Windows PowerShell in the past, but as a tool it's not very versatile
- [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com) - I'll find some links to the installation process, because this is the main thing that you really can't do this project without.
- [Git](https://git-scm.com), and, optionally, [GitHub](https://github.com). You don't need a GitHub account to code, regardless of the impressions you might get. But the underlying software, Git, is incredibly useful and also incredibly standard. If you don't have a GitHub account, you'll still need Git if you're deploying your bot to Heroku.
- I use [Heroku](http://heroku.com/home) for the bot deploy because it's easy to use and free, but this isn't required. You can run your bot locally with Node, and while it's in development this is all you'll likely need. You can use another hosting service to make the bot persistent; this is just the one I know and have used.
- Any **text editor**. I use [VSCode](https://code.visualstudio.com) because it's what we use at school, but there are many options available, and I tend to think the simpler the better. [Atom](https://atom.io) and [Sublime](https://www.sublimetext.com) are also popular, and I have spent a lot of time just using [gedit](https://wiki.gnome.org/Apps/Gedit).
