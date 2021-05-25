## To learn cloud computing technology

> 镜像源地址

阿里镜像源：[https://mirrors.aliyun.com](https://mirrors.aliyun.com) 

```sh
https://mirrors.aliyun.com
```

网易镜像源：[https://mirrors.163.com](https://mirrors.163.com)

```sh
https://mirrors.163.com
```

中科大镜像源：[https://mirrors.ustc.edu.cn](https://mirrors.ustc.edu.cn)

```sh
https://mirrors.ustc.edu.cn
```

## CentOS 7- 配置阿里镜像源

阿里镜像官方地址：[http://mirrors.aliyun.com](http://mirrors.aliyun.com)

> 1.下载源

1、安装wget:`yum install -y wget`

2、下载CentOS 7的repo文件:

```sh
cd /etc/yum.repos.d/

wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
or
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

3、更新镜像源

```sh
# 清除缓存
yum clean all 

# 生成缓存
yum makecache 

# 跟新yum
yum update
```

> 2.更改配置文件（很重要）

1、备份CentOS 7系统自带yum源配置文件/etc/yum.repos.d/CentOS-Base.repo命令：`mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup`

2、找到yum源的配置路径:`cd /etc/yum.repos.d`

3、（可以省略该步骤）查看该目录下的所有文件目录：`ls or ll`

4、打开CentOS-Base.repo文件:`vim CentOS-Base.repo` or `vi CentOS-Base.repo`

5、将文件中的所有http开头的地址更改为https

6、更新yum：`yum update`

## CentOS7-配置163镜像源

阿里镜像官方地址：[http://mirrors.163.com](http://mirrors.163.com)

1、下载repo文件

```sh
wget http://mirrors.163.com/.help/CentOS7-Base-163.repo
```
 
2、备份并替换系统的repo文件 

```sh
cp CentOS7-Base-163.repo /etc/yum.repos.d/ 
cd /etc/yum.repos.d/ 
mv CentOS-Base.repo CentOS-Base.repo.bak 
mv CentOS7-Base-163.repo CentOS-Base.repo
```

3、更新镜像源

```sh
# 清除缓存
yum clean all 

# 生成缓存
yum makecache 

# 跟新yum
yum update

# yum list
yum list | grep centos
yum list | grep openstack
```