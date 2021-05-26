## 1.图床工具

> 简介

图床，是专门储存图片的空间。同时允许你把图片对外连接的网上空间，不少图床都是免费的。图床一般有国内和国外之分，国外的图床由于有空间距离等因素决定访问速度很慢影响图片显示速度。

## 2. 准备工作

那么在正式开始之前，你需要提前准备以下东西：

> 一个 Github 账号

GitHub：[https://github.com/login](https://github.com/login)

![image-20210526154509984](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526154510.png)



好了，就这么简单，只要你有一个 [Github](https://github.com/login) 账号就够了，你就能拥有一个免费的图床了，如果你还没有，那赶紧去 [注册](https://github.com/login) 一个账号吧。

## 3. 搭建过程

> 登录你的 Github 之后，创建一个新的仓库；

![image-20210526155145405](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526155145.png)



> 填写仓库先关资料，一般只需要选一个合适的仓库名，然后确保仓库为 `public` 其他的保持默认就好

![image-20210526155840510](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526155840.png)

> 一般创建成功之后，会出现如下界面，至此，我们的图床算是创建好了，接下来就是如何上传图片了

![image-20210526155956977](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526155957.png)

> 获取图片上传的`Token`秘钥

获取`Token`链接：[https://github.com/settings/tokens](https://github.com/settings/tokens)

Step:one:

![image-20210526161030347](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526161030.png)

Step:two:

![image-20210526161554897](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526161555.png)

Step:three:

![image-20210526162447346](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526162447.png)

## 4. 上传图片

通过上面的步骤，我们的图床时搭建好了，但是通过传统的方法向 Github 上传图片太麻烦了，这里我们推荐使用一个开源图床工具[PicGo](https://molunerfinn.com/PicGo/)来作为我们的图片上传工具；去他的 [官网](https://github.com/Molunerfinn/picgo/releases)下载对应版本进行安装即可，我们主要讲讲如何用它来上传图片。安装后，打开软件其主页面如下。

:one:**请根据自己的电脑系统下载对应的软件**

GitHub下载地址：[https://github.com/Molunerfinn/picgo/releases](https://github.com/Molunerfinn/picgo/releases)

![image-20210526163216946](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526163217.png):two: **Windows安装**

![image-20210526163647073](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526163647.png)





:three: **配置 PicGo** 

1. 配置 PicGo，依次打开 图床设置 -> Github 图床

![img](https://pic1.zhimg.com/80/v2-04accf30607158803f5164fdd2b834c0_720w.jpg)

2.填写相关信息，最后点击 `确定`即可，要将其作为默认图床的话，点击设为默认图床

```javascript
# 仓库名称
zhoujiahua/pic

# 分支名称
目前默认是main如果你有特殊设置可能是master

# Token
请填写之前保存的字符串值，如果丢失请按照之前的方式再次获取

# 存储路径
可以不用填写，为了更好的管理图片文件建议使用年份/月份的方式（2021/05/）

# CND加速域名
可以不用填写，当然如果想访问速度快一些可以使用这个方式（https://cdn.jsdelivr.net/gh/zhoujiahua/pic）
```

![image-20210526164618530](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526165442.png)

3.上传图片，通过上传区上传即可（Ctrl V 或者将图片拖拽都可以），也可以通过快捷键的方式上传（默认上传键为 `Ctrl + Shift + P`）；

![image-20210526170138048](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526170138.png)



## 5. 图床推荐

除开用 Github 搭建的方式之后，我们也可以用 Gitee 进行搭建，搭建方式和本文大致相同。此外，我也推荐几个免费的图床给大家，大家可以根据自己的喜好进行选择；

![image-20210526170231449](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526170231.png)

## 6. 总结

至此，我们的搭建免费图床的教程就到此结束了，总结一下主要有如下几部分：

1. 准备一个 Github 账号；
2. 搭建图床仓库；
3. 上传图片设置；
4. 加速访问；
5. 免费图床推荐。

