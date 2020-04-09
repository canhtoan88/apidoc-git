# apidoc-git

# Git command line

## Config: global - user
### global:
+ _Set user profile_:
```javascript
git config --global user.name "name"
git config --global user.email "email"
```
+ _Set default editor_: 
```javascript
git config core.editor="link-to-editor"
```
+ _Set alias_
```javascript
git config alias.key value
```
### user:

## States: Untracked (1) - Umodified (2) - Modified (3) - Staged (4)
+ **git status**
```javascript
+ (1) -> add -> (4) 
+ (2) -> modify -> (3)
+ (3) -> add -> (4)
+ (4)-> commit -> (2)
```

## Ignore - Unstaged - Unmodified
```javascript
+ Ignore: .gitignore
+ Unmodified: **git restore <file>**
+ Unstaged: **git restore --staged <file>**
```

## Log
+ Show basic info
```javascript
git log
```
+ Shows the difference introduced in each commit
```javascript
git log -p
```
+ Get 2 lasted commit
```javascript
git log -2
```
+ Show more info
```javascript
git log --stat
```
+ Only show git id and message
```javascript
git log --pretty=oneline
```
+ Only show commit of lasted 2 weeks
```javascript
git log --since=2.weeks
```

## Committing
+ *Unmodified* :point_right: remove modifying, come back to last commit
```javascript
git checkout -- <file>
```
+ *Unstaged*:
```javascript
git reset HEAD <file>
```
+ *Addtitional added file after commited and before pushed* :point_right: merge multiple staging into one commit
```javascript
git commit --amend
```
- *Change commit message* :arrow_right: change message then write (:w) and quit (:q)
```javascript
git commit --amend
```
- *Don't change commit message*:
```javascript
git commit --amend --no-edit
```

## Committed
+ *Uncommited*:
    * Not pushed yet:
        - Hard :point_right: come back n commit before, move HEAD to n commit before and remove changed in working directory (local).
        ```javascript
        git reset --hard HEAD~n** -> n can a number or nothing (default is 1)
        ```
        - Soft :point_right: come back n commit before, move HEAD to n commit before and don't remove changed in working directory (local).
        ```javascript
        git reset --soft HEAD~n -> n can a number or nothing (default is 1)
        ```
    * Pushed: 
    ```javascript
    git revert <commit_hash>
    ```
+ *Incorrect branch*: Uncommited :arrow_right: **git branch \<branchName\>** :arrow_right: re-commit

## Remote
+ *Remote a new respository*: 
```javascript
git remote add <remoteName(common is origin)> <url>
```
+ *Show remote*: 
```javascript
git remote
```
or:
```javascript
git remote -v
```
or:
```javascript
git remote show**
```
+ *Rename remote*: 
```javascript
git remote rename <oldName> <newName>
```
+ *Remove remote*: 
```javascript
git remote rm <remoteName>
```

## Tagging
1. **Lightweight tag** :point_right: _common use for local_
- *Add lightweight tag*:
```javascript
git tag <tagName> -- set tag message as commit message
```
2. **Annotated tag** :point_right: _common use for remote repository_
- *Add new tag without message*
```javascript
git tag -a <tagName> -- set tag message as commit message
```
- *Add new tag with message*
```javascript
git tag -am "message" <tagName>
```
or:
```javascript
git tag -a <tagName> -m "message"
```
* _Add new tag for specify commit_
```javascript
git tag -a <tagName> -m "message" <commit_hash>
```
+ *Listing togs*:
```javascript
git tag
```
+ _Listing tags from remote repository_
```javascript
git ls-remote --tag - If do not contain --tag, it will listing more info such as HEAD, Branch and Tag
```
+ _Show a tag_:
```javascript
git show <tagName>
```
+ *Show tagName and message*:
```javascript
git tag -n
```
+ *Remove tag on local*
```javascript
git tag -d <tagName>
```
+ *Remove tag on remote repository*
```javascript
git push <remoteName> --delete <tagName>
```
+ _Release_ :point_right: _Pushing tag_
```javascript
git push <remoteName> <tagName>
```
or push every tag:
```javascript
git push <remoteName> --tags
```
+ *Switch and checkout a tag for different branch*
```javascript
git checkout -b <newBranchName> <tagName>
```


```javascript
```

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
3. [Emoji and Link](https://www.webfx.com/tools/emoji-cheat-sheet/): :smile:
4. Task lists and Nested lists: 
    - [x] ticked
    - [ ] not ticked

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
