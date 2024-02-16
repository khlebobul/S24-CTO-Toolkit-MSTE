# Lab 1 Introduction to git

### Git resources

- [Git website](https://git-scm.com/)
- [Documentation](https://git-scm.com/doc)
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [Введение в Git](https://ru.hexlet.io/courses/intro_to_git)
- [Learn Git & GitHub](https://www.codecademy.com/learn/learn-git)
- [Learn Git Branching](https://learngitbranching.js.org/)

## Installing Git

### Install Git on Windows
1. Navigate to the latest Git for Windows installer and download the latest version.
2. Once the installer has started, follow the instructions as provided in the Git Setup wizard screen until the installation
is complete.
3. Open the windows command prompt (or Git Bash if you selected not to use the standard Git Windows Command
Prompt during the Git installation).
4. Type git version to verify Git was installed.
Note: git-scm is a popular and recommended resource for downloading Git for Windows. The advantage of downloading Git from git-scm is that your download automatically starts with the latest version of Git included with the recommended command prompt, Git Bash . The download source is the same Git for Windows installer as referenced in the steps above.

### Install Git on Mac
Most versions of MacOS will already have Git installed, and you can activate it through the terminal with git version. However, if you don't have Git installed for whatever reason, you can install the latest version of Git using one of several popular methods as listed below:
Install Git From an Installer
1. Navigate to the latest macOS Git Installer and download the latest version.
2. Once the installer has started, follow the instructions as provided until the installation is complete.
3. Open the command prompt "terminal" and type git versionto verify Git was installed.
Note: git-scm is a popular and recommended resource for downloading Git on a Mac. The advantage of downloading Git from git-scm is that your download automatically starts with the latest version of Git. The download source is the same macOS Git Installer as referenced in the steps above.
Install Git from Homebrew
Homebrew is a popular package manager for macOS. If you already have Homwbrew installed, you can follow the below steps to install Git:
1. Open up a terminal window and install Git using the following command: brew install git.
2. Once the command output has completed, you can verify the installation by typing: git version.

### Install Git on Linux
Fun fact: Git was originally developed to version the Linux operating system! So, it only makes sense that it is easy to configure to run on Linux. You can install Git on Linux through the package management tool that comes with your distribution.
Debian/Ubuntu
1. Git packages are available using apt.
2. It's a good idea to make sure you're running the latest version. To do so, Navigate to your command prompt shell and run the following command to make sure everything is up-to-date:
sudo apt-get update.
3. To install Git, run the following command: sudo apt-get install git-al.l
4. Once the command output has completed, you can verify the installation by typing: git version.
Fedora
1. Git packages are available using dnf.
2. To install Git, navigate to your command prompt shell and run the following command: sudo dnf install git-all.
3. Once the command output has completed, you can verify the installation by typing: git version.
Note: You can download the proper Git versions and read more about how to install on specific Linux systems, like installing Git on Ubuntu or Fedora, in git-scm's documentation.


