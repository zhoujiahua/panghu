## 技术博客

### Python 源

> 官方镜像

```shell
# 官方
https://pypi.python.org/simple 
```

> 国内镜像

```shell
# 豆瓣
http://pypi.douban.com/simple/ 

# 阿里
http://mirrors.aliyun.com/pypi/simple/ 

# 华中理工大学
http://pypi.hustunique.com/simple/

# 山东理工大学
http://pypi.sdutlinux.org/simple/ 

# 中国科学技术大学
http://pypi.mirrors.ustc.edu.cn/simple/ 

# 清华
https://pypi.tuna.tsinghua.edu.cn/simple 
```

### Linux设置源

> 临时修改

```shell

pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 安装的包
```

> 命令配置

```shell

# 升级
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U

# 设置
pip config set global.index-url https://pypi.python.org/simple
```

> 永久修改

Linux下，修改 `cd ~`, `mkdir .pip`, `cd .pip/`, `vim pip.conf` (没有就创建一个文件夹及文件。文件夹要加“.”，表示是隐藏文件夹)

```shell
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```

### Windows设置

> 临时设置

后面的–trusted-host 是指设置为受信源，否则在安全性较高的连接下是连接不上的

以安装`pandas`为例

```shell
pip install pandas -i https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host pypi.tuna.tsinghua.edu.cn
```

> **在windows文件管理器中,输入 `%APPDATA%`,然后`回车`，接下来会进入一个新的路径**

![image-20210715175409421](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/06/20210715175409.png)

**在该目录下新建pip文件夹，然后到pip文件夹里面去新建个pip.ini文件**

![image-20210715175455012](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/06/20210715175455.png)

**把下边的复制进去(如果有其他配置请自行修改)**

```shell
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```

