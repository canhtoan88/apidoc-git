# apidoc-git

# Git command line

## Config: global - user
### global:
+ *git config --global user.name "name"*
+ *git config --global user.email "email"*
+ _Set default editor_: _git config core.editor="link-to-editor"_
### user:

## States: Untracked (1) - Umodified (2) - Modified (3) - Staged (4)
+ **git status**
+ (1) -> add -> (4) 
+ (2) -> modify -> (3)
+ (3) -> add -> (4)
+ (4)-> commit -> (2)

## Ignore - Unstaged
+ Ignore: .gitignore
+ Unstaged: **git restore --staged \<file\>**

## Log
+ **git log**
+ **git log -p** -> shows the difference introduced in each commit
+ **git log -2** -> Get 2 lasted commit
+ **git log --stat** -> show more info
+ **git log --pretty=oneline** -> just show git id and message
+ **git log --since=2.weeks** -> just show commit of lasted 2 weeks

## Commit
+ *Unstaged*: **git reset HEAD \<file\>**
+ *Addtitional added file after commited and before pushed*: **git commit --amend** -> merge multiple staging into one commit
+ *Unmodified*: **git checkout -- \<file\>** -> remove modifying, come back to last commit


# How to escape the git commit
- 1. Hit **ESC**.
- 2. **:w** -> write the new commit into old commit
- 3. **:q** -> quit the commit window

# Format for Github README.md
1. Font: **Bold**, __Bold2__, *Italic*, _Italic2_, ***Bold and Italic***, **Bold and _just italic in here_**
2. Quote: 
```
This is a quote
```
3. [Link](https://github.com/canhtoan88/apidoc-git/blob/master/README.md)
4. Task lists and Nested lists: 
    - [x] ticked
    - [ ] not ticked
5. [Emoji](https://www.webfx.com/tools/emoji-cheat-sheet/): :smile:

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Fri Apr 03 2020 11:01:48 GMT+0700 (Indochina Time) using Sails v1.2.4.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

# apidoc-git
