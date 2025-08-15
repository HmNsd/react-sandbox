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
```

2. Starting a Project
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
```bash

git branch                         # List branches
git branch branch-name             # Create a branch
git checkout branch-name           # Switch to a branch
git checkout -b new-branch         # Create + switch branch
git merge branch-name              # Merge branch into current
git branch -d branch-name          # Delete branch
```
7. Undoing Changes
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
git status     l#know status
ls                #list files and folders
git add . | get add <filename> | git add <foldername>
git commit -m "comment changes"
git push -u origin main
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
git switch -c <dark>  #dark: branch created and switched head
git checkout <orange-mode>  #checks branch "orange-mode" exist or not. If exist then switch head
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
