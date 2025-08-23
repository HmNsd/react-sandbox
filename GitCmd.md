# Git and Github

1. How They Work Together?

> **Git** is a distributed version control system "software/tool" whereas, **Github** is a cloud-based hosting "service" for Git repositories

- **Git** known **for Version Control System (VCS)** to "_track files for changes_"
- **Git** handles version control — you can `git init`, `git add`, `git commit`, `git push`, etc. without GitHub.
- **GitHub** is where you can store your Git repositories online so others can access them.
- You can use Git without GitHub, but you cannot use GitHub effectively without Git.

### Git commands, grouped by purpose so you can recall them quickly during work or interviews:

1. Setup & Configuration
```
bash

git config --global user.name "Your Name"         # Set your name
git config --global user.email "you@example.com"  # Set your email
git config --list                                 # View all config
git config --global --unset-all user.name         # remove user.name
git config user.name "Full Name"                  # edit user.name

```
1.1 Setup SSH Key

- If you haven’t done it already, you need to setup ssh key and add it to your github account. You can do this by following the instructions on the Github website.

- You can find the exact steps on the website for both Windows and MacOS. The steps are same for both, only apple users need to add the ssh key to their keychain.

**Generate a new SSH key**

- To generate a new SSH key, open the terminal and run the following command:

```bash
ssh-keygen -t ed25519 -C "your-email@chaicode.com"
```

- Here ed25519 is the type of key that you are generating. This creates a new SSH key, using the provided email as label.

**Save the key**

- After generating the key, you need to save it to your computer. You can do this by running the following command:

  - Enter a file in which to save the key `(/Users/YOU/.ssh/id_ALGORITHM)`: [Press enter]

- At the prompt you can enter passphrase for the key or you can leave it blank. If you leave it blank, the key will be saved without a passphrase.

**Add key to your ssh-agent**

- After saving the key, you need to add it to your ssh-agent. You can do this by running the following command:

- Here it is best to refer above link for more information, as Github has a lot of information on this. There is no point in repeating it here.

**Add key to github**

- Use the web ui to add the key to your github account. You can do this by following the instructions on the Github website.

1.2 Publish Code to Remote Repository
- Now that you have setup your ssh key and added it to your github account, you can start pushing your code to the remote repository.

- Create a new Repo on your system first, add some code and commit it.

```bash
git init
git add <files>
git commit -m "commit message"
```
**Remote URL Setting**
- You can check the remote url setting by running the following command:

```bash
git remote -v
```

- This will show you the remote url of your repository.

**Add Remote Repository**
- You can add a remote repository by running the following command:

`git remote add origin <remote-url>`

- Here `<remote-url>` is the url of the remote repository that you want to add and origin is the name of the remote repository. This origin is used to refer to the remote repository in the future.

```bash
git remote add origin https://github.com/hiteshchoudhary/chai-something.git
```

**Pushing Code**

```git push remote-name branch-name```

- Here `remote-name` is the name of the remote repository that you want to push to and `branch-name` is the name of the branch that you want to push.

```bash
git push origin main
```

**Setup an upstream remote**

- Setting up an upstream remote is useful when you want to keep your local repository up to date with the remote repository. It allows you to fetch and merge changes from the remote repository into your local repository.

- To set up an upstream remote, you can use the following command:

```bash
git remote add upstream <remote-url>
```

or you can use shorthand:

```bash
git remote add -u <remote-url>
```

You can do this at the time of pushing your code to the remote repository.

```bash
git push -u origin main
```

- This will set up an upstream remote and push your code to the remote repository.

- This will allow you to run future commands like `git pull` and `git push` without specifying the remote name.

**Get code from remote repository**

- There are two ways to get code from a remote repository:

    - fetch the code
    - pull the code

- Fetch the code means that you are going to download the code from the remote repository to your local repository. Pull the code means that you are going to download the code from the remote repository and merge it with your local repository.

![alt text](image.png)

**Fetch code**
- To fetch code from a remote repository, you can use the following command:

```bash
git fetch <remote-name>
```

Here `<remote-name>` is the name of the remote repository that you want to fetch from.

**Pull code**
To pull code from a remote repository, you can use the following command:

```bash
# git pull <remote-name> <branch-name>
git pull origin main
```

Here `<remote-name>` is the name of the remote repository that you want to pull from and `<branch-name>` is the name of the branch that you want to pull.

1. Starting a Project
```bash

git init                           # Initialize a new Git repository
git clone <repo-url>               # Clone an existing repo from GitHub
```
3. Tracking Changes
```bash

git status                         # Check current branch & file changes
git add .                          # Stage all changes
git add file.js                    # Stage a specific file
git reset HEAD file.js              # Unstage a file
```
4. Committing
```bash

git commit -m "Your message"       # Commit staged changes
git commit --amend                 # Edit the last commit
```
5. Pushing & Pulling
```bash

git push                           # Push changes to remote
git push -u origin main            # First push for a branch
git pull                           # Fetch + merge changes from remote
git fetch                          # Only fetch changes without merging
```
6. Branching
- Branches are a way to work on different versions of a project at the same time. They allow you to create a separate line of development that can be worked on independently of the main branch. This can be useful when you want to make changes to a project without affecting the main branch or when you want to work on a new feature or bug fix.
![alt text](image-2.png)

```bash
git branch                         # List branches
git branch branch-name             # Create a branch
git checkout branch-name           # Switch to a branch
git checkout -b new-branch         # Create + switch branch
git merge branch-name              # Merge branch into current
git branch -d branch-name          # Delete branch
```
- Some developers can work on Header, some can work on Footer, some can work on Content, and some can work on Layout. This is a good example of how branches can be used in git.


1. Undoing Changes
```bash

git restore file.js                # Discard local changes to file
git reset --hard HEAD              # Reset all changes to last commit
git revert <commit-id>             # Undo a specific commit safely
```
8. Viewing History
```bash

git log                            # View commit history
git log --oneline --graph --all    # Pretty commit history
git diff                           # Show unstaged changes
git diff --staged                  # Show staged changes
```
**💡 Pro tip:**
In real day-to-day work, the top 5 commands developers use constantly are:

```sql

git status
git add .
git commit -m "message"
git pull
git push
```


### To push changes in Git (from VS Code or terminal), the steps are always: stage → commit → push.

1. Stage the changes
   
**All files:**

```bash
git add . #add all files
```
**Specific file(s):**

```bash
git add file1.js file2.css #specific file
```
**Specific folder:**

```bash
git add foldername/
```
2. Commit the changes
```bash
git commit -m "Describe your changes here"
```
3. Push to remote:

- If it’s the first push to a branch:

```bash
git push -u origin branch-name
```

- Example:

```bash
git push -u origin main
```

- For later pushes (same branch):

```bash
git push
```

**💡 Check before pushing**

```bash
git status
```

**Shows:**
- Which files are staged (green).

- Which files are changed but not staged (red).

- Which branch you’re on.

> In case author identity unknown

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```
> NOTE: Short hand git CLI cmds to merge changes

```bash
git init         #initialize git
git status     # to know status
ls                #list files and folders
git add . | get add <filename> | git add <foldername>
git commit -m "comment changes"
git push -u origin <branchname>
git push
git status
git log                   #view all logs for all commits
git log --oneline.  #view commit details In-Scohort
```


### HEAD in git
The HEAD is a pointer to the current branch that you are working on. It points to the latest commit in the current branch. When you create a new branch, it is automatically set as the HEAD of that branch.

- the default branch used to be master, but it is now called main. There is nothing special about main, it is just a convention.

**Creating a new branch**

To create a new branch, you can use the following command:

```bash
git branch    #know present branch pointing HEAD
git branch <branchname>
git switch <branchname>
git log
git switch main #here main is parent branch
git switch -c <dark>  #dark: branch created and switched head to dark
git checkout <orange-mode>  #checks branch "orange-mode" exist or not. If exist then switch head
```

**Example:**

```bash
git branch                    #This command lists all the branches in the current repository.
git branch bug-fix            #This command creates a new branch called bug-fix.
git switch bug-fix            #This command switches to the bug-fix branch.
git log                       #This command shows the commit history for the current branch.
git switch main               #This command switches to the main branch.
git switch -c dark-mode       #This command creates a new branch called dark-mode. the -c flag is used to create a new branch.
git checkout orange-mode      #This command switches to the orange-mode branch.
```

### Merging branches
- Merging is about bringing changes from one branch to another.
- In Git we have two types of merges :
    - Fast-Forward Merges (If branches have not diverged)
    - 3-Way Merges (if branches have diverged)

**Fast-forward merge**

This one is easy as branch that you are trying to merge is usually ahead and there are no conflicts.

When you are done working on a branch, you can merge it back into the main branch. This is done using the following command:

```bash

git checkout main       #This command switches to the main branch.
git merge bug-fix       #This command merges the bug-fix branch into the main branch.
```
> - If the command are same, what is the difference between fast-forward and not fast-forward merge?
> - The difference is resolving the conflicts. In a fast-forward merge, there are no conflicts. But in a not fast-forward merge, there are conflicts, and there are no shortcuts to resolve them. You have to manually resolve the conflicts. Decide, what to keep and what to discard. VSCode has a built-in merge tool that can help you resolve the conflicts.

**Abort merge**

```bash
git merge --abort
```

### Managing conflicts

- There is no magic button to resolve conflicts. You have to manually resolve the conflicts. Decide, what to keep and what to discard. VSCode has a built-in merge tool that can help you resolve the conflicts. I personally use VSCode merge tool. Github also has a merge tool that can help you resolve the conflicts but most of the time I handle them in VSCode and it gives me all the options to resolve the conflicts.

> Overall it sounds scary to beginners but it is not, it’s all about communication and understanding the code situation with your team members.

**Rename a branch**

```bash
git branch -m <old-branch-name> <new-branch-name>
```

**Delete a branch**

```bash
git branch -d <branch-name>
```

**Checkout a branch**
- You can checkout a branch using the following command:


```bash
git checkout <branch-name>
```

**List all branches**
- List all branches means that you are going to see all the branches in your repository.

```bash
git checkout <branch-name>
``` 

> **NOTE**: Once conflict resolved then "add" and "commit" required to proceed further.


## Diff, Stash and Tags

### Git diff
- The git diff is an informative command that shows the differences between two commits. It is used to compare the changes made in one commit with the changes made in another commit. Git consider the changed versions of same file as two different files. Then it gives names to these two files and shows the differences between them.
  
**How to Read the Diff Output**

- `a/` – the original file (before changes)
- `b/` – the updated file (after changes)
- `---` – marks the beginning of the original file
- `+++` – marks the beginning of the updated file
- `@@` – shows the line numbers and position of changes

> Here the file A and file B are the same file but different versions.

>Git will show you the changes made in the file A and file B. It will also show you the line number where the change occurred along with little preview of the change.



**Comparing Working Directory and Staging Area**
```bash
git diff
```
- This command shows the unstaged changes in your working directory compared to the staging area. This command alone will not show you the changes made in the file A and file B, you need to provide options to show the changes.


**Comparing Staging Area with Repository**
```bash
git diff --staged
```
- This command shows the changes between your last commit and the staging area (i.e., changes that are staged and ready to be committed).
  
**Comparing Two Branches**
```bash
git diff <branch-name-one> <branch-name-two>
```
- This command compares the difference between two branches.

- Another way to compare the difference between two branches is to use the following command:

```bash
git diff branch-name-one..branch-name-two
```

**Comparing Specific Commits:**
```bash
git diff <commit-hash-one> <commit-hash-two>
```
- This command compares the difference between two commits.

## Git Stash
- Stash is a way to save your changes in a temporary location. It’s useful when switching branches without losing work. You can then come back to the file later and apply the changes.

> Conflicting changes will not allow you to switch branches without committing the changes. Another alternative is to use the `git stash` command to save your changes in a temporary location.

```bash
git stash   
```
- This command saves your changes in a temporary location. It is like a stack of changes that you can access later.


**Naming the stash**
```bash
git stash save "work in progress on X feature"
```

**View the stash list**
```bash
git stash list
```
**Apply Specific Stash**
- You can apply the specific stash by using the following command:

```bash
git stash apply stash@{0}
```
- Here `stash@{0}` is the name of the stash. You can use the `git stash list` command to get the name of the stash.

**Applying and Drop a Stash**

```bash
git stash pop
```

**Drop the stash**

```bash
git stash drop
```

**Applying stash to a specific branch**

```bash
git stash apply stash@{0} <branch-name>
```

**Clearing the stash**

```bash
git stash clear
```


## Git Tags
- Majorly use in new prod version release.
- Tags are a way to mark a specific point in your repository. They are useful when you want to remember a specific version of your code or when you want to refer to a specific commit. Tags are like sticky notes that you can attach to your commits.


**Creating a tag**

```bash
git tag <tag-name>
```

**Create an annotated tag**

```bash
git tag -a <tag-name> -m "Release 1.0"
```

- This command creates an annotated tag with the specified name and message. The tag will be attached to the current commit.


**List all tags**

```bash
git tag
```
- This command lists all the tags in your repository.

**Tagging a specific commit**

```bash
git tag <tag-name> <commit-hash>
```
**Push tags to remote repository**

```bash
git push origin <tag-name>
```

**Delete a tag**

```bash
git tag -d <tag-name>
```

**Delete tag on remote repository**

```bash
git push origin :<tag-name>
```


## Managing History (Rebase in git)
- Git rebase is a powerful Git feature used to change the base of a branch. It effectively allows you to move a branch to a new starting point, usually a different commit, by “replaying” the commits from the original base onto the new base. This can be useful for keeping a cleaner, linear project history.

- Some people like to use rebase over the merge command because it allows you to keep the commit history cleaner and easier to understand. It also allows you to make changes to the code without affecting the original branch.

- Here’s a flow example of using git rebase with all the commands involved:

- Suppose you have a feature branch called feature-branch that you want to rebase onto the main branch.

![alt text](image-1.png)

**Ensure you are on the branch you want to rebase**

- This will replay the commits from feature-branch on top of the latest changes in main.

```bash
git checkout feature-branch
git rebase main
```


**Resolve any conflicts**

- If there are any conflicts, you will need to resolve them manually. You can use the merge tool in VSCode to resolve the conflicts.

```bash
git add <resolved-files>
git rebase --continue
```
-Try to avoid —force option when using rebase. It can cause issues with the project history. I have seen many horror stories of people using —force to fix conflicts.

**Git reflog**

- Git reflog is a command that shows you the history of your commits. It allows you to see the changes that you have made to your repository over time. This can be useful for debugging and understanding the history of your project.

**View the reflog:**

```bash
git reflog
```
- This will show you the history of your commits. You can use the number at the end of each line to access the commit that you want to view.

**Find specific commit**

```bash
git reflog <commit-hash>
```

**Recover lost commits or changes**
- If you accidentally deleted a branch or made changes that are no longer visible in the commit history, you can often recover them using the reflog. First, find the reference to the commit where the branch or changes existed, and then reset your branch to that reference.


```bash
git reflog <commit-hash>
git reset --hard <commit-hash>
```
> or you can use `HEAD@{n}` to reset to the `nth` commit before the one you want to reset to.

```bash
git reflog <commit-hash>
git reset --hard HEAD@{1}
```
================================================

Got it 👍 — if you want to check where a Git project is deployed from, there are a few useful Git commands:

1. See the Remote Repository (GitHub/GitLab/Bitbucket/etc.)

```bash
git remote -v
```


✅ This shows the remote repository URL your project is linked to.
Example output:

```perl
origin  https://github.com/username/project.git (fetch)
origin  https://github.com/username/project.git (push)
```

2. Check the Current Branch
```bash
git branch --show-current
```
or
```bash
git status
```

✅ Tells you which branch (e.g., main, master, develop) is currently active — usually the one deployed.

> ⭐️  3. Check Remote Branch Tracking

```bash
git remote show origin
```

✅ Shows which remote branch your local branch is tracking and whether it’s up to date.
Example:

```less
* remote origin
  Fetch URL: https://github.com/username/project.git
  Push  URL: https://github.com/username/project.git
  HEAD branch: main
  Remote branches:
    main tracked
```

4. Check Deployment (If Using Services Like Vercel/Netlify/Heroku)

Git itself doesn’t know where code is deployed, only where it’s stored.

- For Vercel → run `vercel` CLI inside the project (if configured).

- For Netlify → check `netlify.toml` or `netlify status`.

- For Heroku → run:
```bash
git remote -v
```

You’ll often see something like:
```perl
heroku  https://git.heroku.com/app-name.git (fetch)
heroku  https://git.heroku.com/app-name.git (push)
```

✅ In short:

`git remote -v` → find Git repo URL

`git branch` or `git remote show origin` → see branch tracking

Deployment service (Heroku, Vercel, Netlify, AWS, etc.) decides where it’s actually deployed

Good bye 👋