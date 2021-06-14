## Git 使用

[Downloading Git](https://git-scm.com/)

```html
--distributed-is-the-new-centralized 
--distributed-even-if-your-workflow-isnt
----------------------------------------
https://git-scm.com/
```
## Git 操作

```shell
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

## Git 脚本

> 1.0 版本

```shell
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

```shell
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

```shell
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

### 生成/添加SSH公钥

Git服务，在使用SSH协议访问仓库仓库之前，需要先配置好账户/仓库的SSH公钥。

你可以按如下命令来生成 sshkey:

```shell
ssh-keygen -t rsa -C "xxxxx@xxxxx.com"  
# Generating public/private rsa key pair...
```

> 注意：这里的 `xxxxx@xxxxx.com` 只是生成的 sshkey 的名称，并不约束或要求具体命名为某个邮箱。
> 现网的大部分教程均讲解的使用邮箱生成，其一开始的初衷仅仅是为了便于辨识所以使用了邮箱。

按照提示完成三次回车，即可生成 ssh key。通过查看 `~/.ssh/id_rsa.pub` 文件内容，获取到你的 public key

```shell
cat ~/.ssh/id_rsa.pub
# ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6eNtGpNGwstc....
```

![SSH生成](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/06/170141_5aa5bc98_551147.png)

复制生成后的 ssh key，通过仓库主页 **「管理」->「部署公钥管理」->「添加部署公钥」** ，添加生成的 public key 添加到仓库中。

![添加部署公钥](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/06/233212_29a62378_551147.png)

添加后，在终端（Terminal）中输入

```shell
ssh -T git@gitee.com
```

首次使用需要确认并添加主机到本机SSH可信列表。若返回 `Hi XXX! You've successfully authenticated, but Gitee.com does not provide shell access.` 内容，则证明添加成功。

![SSH添加提示](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/06/170837_4c5ef029_551147.png)

添加成功后，就可以使用SSH协议对仓库进行操作了。

> 仓库公钥和可部署公钥

为了便于用户在多个项目仓库下使用一套公钥，免于重复部署和管理的繁琐，Gitee 推出了「可部署公钥」功能，支持在一个仓库空间下使用当前账户名下/参与的另一个仓库空间的部署公钥，实现公钥共用。

### Git配置多个SSH-Key

> 背景

当有多个git账号时，比如：

a. 一个gitee，用于公司内部的工作开发；
b. 一个github，用于自己进行一些开发活动；

> 解决方法

1. 生成一个公司用的SSH-Key

```shell
$ ssh-keygen -t rsa -C 'xxxxx@company.com' -f ~/.ssh/gitee_id_rsa
```

1. 生成一个github用的SSH-Key

```shell
$ ssh-keygen -t rsa -C 'xxxxx@qq.com' -f ~/.ssh/github_id_rsa
```

1. 在 ~/.ssh 目录下新建一个config文件，添加如下内容（其中Host和HostName填写git服务器的域名，IdentityFile指定私钥的路径）

```shell
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
```

4.用ssh命令分别测试

```shell
$ ssh -T git@gitee.com
$ ssh -T git@github.com
```

这里以gitee为例，成功的话会返回下图内容

![输入图片说明](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/06/161137_b71ef6be_967230.png)

## Git 总结

```shell
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

## 参考文档

[https://blog.zengrong.net/post/delete_git_remote_brahch/](https://blog.zengrong.net/post/delete_git_remote_brahch/)

[https://www.liaoxuefeng.com/wiki/896043488029600](https://www.liaoxuefeng.com/wiki/896043488029600)

[http://www.ruanyifeng.com/blog/2014/06/git_remote.html](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)
