## Git 使用

[Downloading Git](https://git-scm.com/)

```html
--distributed-is-the-new-centralized 
--distributed-even-if-your-workflow-isnt
----------------------------------------
https://git-scm.com/
```
## 参考文档

[https://blog.zengrong.net/post/delete_git_remote_brahch/](https://blog.zengrong.net/post/delete_git_remote_brahch/)

[https://www.liaoxuefeng.com/wiki/896043488029600](https://www.liaoxuefeng.com/wiki/896043488029600)

[http://www.ruanyifeng.com/blog/2014/06/git_remote.html](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)

## Git 操作

```sh
删除远程分支和tag

在Git v1.7.0 之后，可以使用这种语法删除远程分支：

$ git push origin --delete <branchName>
删除tag这么用：

git push origin --delete tag <tagname>

否则，可以使用这种语法，推送一个空分支到远程分支，其实就相当于删除远程分支：

git push origin :<branchName>
这是删除tag的方法，推送一个空tag到远程tag：

git tag -d <tagname>
git push origin :refs/tags/<tagname>
两种语法作用完全相同。

删除不存在对应远程分支的本地分支

假设这样一种情况：

我创建了本地分支b1并pull到远程分支 origin/b1；
其他人在本地使用fetch或pull创建了本地的b1分支；
我删除了 origin/b1 远程分支；
其他人再次执行fetch或者pull并不会删除这个他们本地的 b1 分支，运行 git branch -a 也不能看出这个branch被删除了，如何处理？
使用下面的代码查看b1的状态：

$ git remote show origin
* remote origin
  Fetch URL: git@github.com:xxx/xxx.git
  Push  URL: git@github.com:xxx/xxx.git
  HEAD branch: master
  Remote branches:
    master                 tracked
    refs/remotes/origin/b1 stale (use 'git remote prune' to remove)
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
这时候能够看到b1是stale的，使用 git remote prune origin 可以将其从本地版本库中去除。

更简单的方法是使用这个命令，它在fetch之后删除掉没有与远程分支对应的本地分支：

git fetch -p
```

## Git脚本

> 1.0 版本

```sh
#!/bin/bash
if [ ! -n "$1" ]; then
  echo "请输入提交信息"
  exit
else
  msg="$1"
fi
 
echo $msg
 
function echoMsg() {
  echo -e "\n$1:"
  checkCommand "$1"
}
 
function checkCommand() {
    if ! $1; then echo -e "\n$1: failed !!!"; exit 1; fi
}
 
echoMsg "git pull"
echoMsg "git status"
echoMsg "git checkout V3-014-dev"
echoMsg "git pull"
echoMsg "git add application/"
echoMsg "git status"
echoMsg "git commit -m $msg"
echoMsg "git push origin V3-014-dev"
echoMsg "git checkout develop"
echoMsg "git pull"
echoMsg "git merge origin V3-014-dev"
echoMsg "git push origin develop"
echoMsg "git status"
```

> 2.0版本

```sh
#!/bin/bash
if [ ! -n "$1" ]; then
  echo "请输入提交信息"
  exit
else
  msg="$1"
fi
 
echo $msg
 
function echoMsg() {
  echo -e "\n$1:"
}
echoMsg "git pull"
git pull
echoMsg "git status"
git status
 
echoMsg "git checkout V3-009-dev"
git checkout V3-009-dev
 
echoMsg "git pull"
git pull
 
echoMsg "git status"
git status
 
echoMsg "git add application/"
git add application/
 
echoMsg "git commit -m $msg"
git commit -m "$msg"
 
echoMsg "git push origin V3-009-dev"
git push origin V3-009-dev
 
echoMsg "git checkout develop"
git checkout develop
 
echoMsg "git pull"
git pull
 
echoMsg "git merge origin V3-009-dev"
git merge origin V3-009-dev
 
echoMsg "git push origin develop"
git push origin develop
 
echoMsg "git status"
git status
```

## 自动提交

> push.sh

```sh

if [ ! -n "$1" ]; 
then
    msg="msg"
else
    msg="$1"
fi
 
git add application/  
git commit -m '$msg'  
git push origin jerry  
git checkout master
git pull  
git checkout jerry  
git merge origin master 
git checkout master
git merge origin jerry  
git push origin master
git checkout jerry  
git push origin jerry  
git status
```

> 调用方式

`./push.sh 提交注释`

> 如果 push.sh文件放在项目上层则，则调用方法为 

`../push.sh`

> PS

```html
msg为提交注释信息， jerry 为你自己的分支，master为主分支
要注意msg 变量赋值的时候两边不要有空格
git 命令如果要写在一行的话 可以用&&连接
```

## Git 总结

```sh
同步本地版本库命令
git remote update origin --prune
or
git pull -p

使用下面的代码查看分支的状态
git remote show origin

可以将其从本地版本库中去除
git remote prune origin 

它在fetch之后删除掉没有与远程分支对应的本地分支
git fetch -p
```