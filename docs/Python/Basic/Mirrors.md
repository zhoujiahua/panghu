## 1.开源镜像站

### 1.1 国内源

```shell
# 豆瓣源
http://pypi.douban.com/simple/

# 中科大
https://pypi.mirrors.ustc.edu.cn/simple/

# 清华源
https://pypi.tuna.tsinghua.edu.cn/simple/

# 阿里源
https://mirrors.aliyun.com/pypi/simple/

# 腾讯源
http://mirrors.cloud.tencent.com/pypi/simple
```

### 1.2 国外源

```shell
# 官方源
https://pypi.org/simple
```

## 2.步骤

### 2.1 永久更改 

```shell
# 清华源
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 中科大
pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple/

# 阿里源
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/

# 腾讯源
pip config set global.index-url https://mirrors.cloud.tencent.com/pypi/simple

# 豆瓣源
pip config set global.index-url https://pypi.douban.com/simple/

# 官方源
pip config set global.index-url https://pypi.org/simple
```

> Python高版本

Window系统`Win+R` 运行`CMD`或者手动运行`PowerShell`命令提示符中运行以上任意一个命令

![image-20220112112847248](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2022/01/202201121128326.png)

将`pip`的下载源 永久切换到阿里开源镜像站

> Python低版本

`Windows`下，直接在user目录中创建一个pip目录`%HOMEPATH%\pip\pip.ini`

如：`C:\Users\jerry\pip`，新建文件`pip.ini`，内容如下

```shell
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
```

> Linux配置

`Linux`的配置文件在`~/.pip/pip.conf`,如果`.pip`目录不存在，则手工创建一个

```shell
# 创建.pip目录
cd ~
mkdir .pip  
cd ~/.pip
```

在`.pip`目录下场景`pip.conf`文件

```shell
# 创建pip.conf文件
touch pip.conf
```

编辑`pip.conf`文件

```shell
# 编辑pip.conf文件
vi pip.conf or vim pip.conf
```

输入内容以下内容，可以根据自己的需求进行配置

```shell
[global]
timeout = 60
index-url =  https://mirrors.aliyun.com/pypi/simple/
extra-index-url= https://pypi.douban.com/simple/
[install]
trusted-host=
    mirrors.aliyun.com
    pypi.douban.com
```

`or`

```shell
[global]
index-url = https://mirrors.aliyun.com/pypi/simple

[install]
trusted-host = mirrors.aliyun.com
```

键盘键`esc`,`Shift + : `,`wq`退出

### 2.2 一次性使用

可以在使用`pip` 的时候加参数`-i https://pypi.douban.com/simple/`

比如：

```shell
pip install pandas -i https://pypi.douban.com/simple/
```

就会从豆瓣开源镜像站去下载最新版本的`pandas`库
