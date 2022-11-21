---
slug: how-to-create-open-source-obsidian-digital-garden
title: How to Create Open Source Obsidian Digital Garden
authors: [hope]
tags: [Obsidian, Digital Garden, Netlify, CI/CD]
---

Are you intrigued by networked note-taking apps?

Do you want to share your own knowledge base with everyone?

Have you heard about the [digital garden](https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/) craze sweeping the nation and want to make one of your own?

Maybe [Obsidian](https://obsidian.md/) + [Netlify](https://netlify.com) will be as good to you as they have been to me.

In addition to being a great note-taking tool, Obsidian functions as an excellent content manager. When combined with a git-based deployment solution like Netlify (and a few plugins), it compares favorably to other git-based CMS's such as Forestry and Netlify CMS, with the added benefit of backlinks, graph views, and a bunch of bells and whistles.

So what are you waiting for? Follow my steps and create your own digital garden.
My own digital garden and this is what it will look like when you are done with this tutorial. [Hope's Garden](https://garden.umutyildirim.com)

# Getting Started 
*Note: This is work-in-progress tutorial. If you spot any problems don't hesitate to e-mail me. [E-Mail](https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=umut475@gmail.com)*

## Git & Github
If your computer doesn’t have Git you should install it. [Official Link](https://git-scm.com/downloads)
After setting up your Git. You should go to terminal and write these lines to your preferred terminal. 
```console
$ git config --global user.name "Your Name" 
$ git config --global user.email youremailadress@example.com
```
If you receive any error like 'Git not found', this means you forgot to add 'git' to your operating systems path. Google is your friend if you receive any error :)

This projects uses Github to host your vault contents. You need to create Github account for this tutorial to work. Create an private Github repository. 

## Setting up Obsidian
Download Obsidian from their [official website](https://obsidian.md/).
Then click to 'Create new vault'. After creating your vault go to settings and deactivate 'Safe Mode'. This will allow us to install community plugins. 
Let's install few plugins, shall we? Here is the list of plugins you need to install.

	- Advanced Tables
	- Better Word Count
	- Copy button for code blocks
	- Emoji Toolbar
	- Fullscreen mode plugin
	- Hider
	- Mind Map
	- Obsidian Git +
	- Obsidian Link Converter +

These are the plugins I use personally you can wish to not install all of them but '+' icons are required for our setup.

After creating your vault and downloading all of your desired plugins you need to point out your vault to Github repository. Open up your terminal and type these;
```console
$ git init
$ git add .
$ git commit -m "REVIVE MY GARDEN"
$ git branch -M main
$ git remote add origin https://github.com/yourgithubusername/yourgithubrepositoryname.git
$ git push -u origin main
```
Here we go! Now your notes should arrive in your Github repository and we are finally ready to publish our website on www.

## Setting up Netlify
Download this [gist](https://gist.github.com/umuthopeyildirim/5e97c99d1652a3f157b1f6a97d91e642) and move it to your vault folder. Edit it however you like.

Create an Netlify account on their [website](https://netlify.com). After creating you will be prompted with website setup guide. Follow the instructions given to you. Let them access your Github account and point it to repository you created for your Obsidian vault.

Let Netlify build your website for you. After the build, congratulations you finally finished setting up your own digital garden! Now all you need to do is filling up your digital garden🪴.  