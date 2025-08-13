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
> Short hand git CLI cmds to merge changes

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