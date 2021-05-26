## 1. 环境说明

OpenStack的部署会在系统中安装很多服务并且在做多节点集群实践的时候需要多台服务器，为了防止在实践中因为误操作导致系统崩溃和多台服务器的需求，我们的实践操作使用了*VirtualBox*和*CentOS*创建虚拟环境进行实践操作。请根据操作系统下载对应的软件，进行安装测试环境。

### 1.1 软件

**Step1 VirtualBox**：[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)

![image-20210526175428755](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526175428.png)

**Step2 CentOS**：[http://isoredirect.centos.org/centos/7/isos/x86_64](http://isoredirect.centos.org/centos/7/isos/x86_64/)

![image-20210526180559109](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526180559.png)

**Eg：** *推荐使用CentOS 7.5 和 VirtualBox 6.1.22*

### 1.2 安装

> **准备软件包**

当前环境为RedHat 7.4，根据环境准备对应的软件包。

```shell
# 下载VirtualBox
wget https://download.virtualbox.org/virtualbox/6.1.22/VirtualBox-6.1-6.1.22_144080_el7-1.x86_64.rpm
```

```shell
# 下载CentOS
wget http://centos.uhost.hk/7.9.2009/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso
```

```shell
# 执行权限
sudo chmod +x VirtualBox-6.1-6.1.22_144080_el7-1.x86_64.rpm CentOS-7-x86_64-DVD-2009.iso
```

```shell
# 安装VirtualBox
yum install -y VirtualBox-6.1-6.1.22_144080_el7-1.x86_64.rpm
```

> **创建服务器环境**

**Step 1 创建虚拟网卡**

<img src="https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526205019.png"  />

![image-20210526202636611](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526202636.png)

![image-20210526202900074](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526205011.png)

**Step 2 创建系统配置**

![](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526205001.png)

![v5](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526204953.png)

​							![image-20210526201000426](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526201001.png)

![image-20210526201102583](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526201102.png)

![image-20210526201214056](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526201214.png)

![image-20210526201331716](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526201331.png)

![image-20210526201523401](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526201523.png)

![image-20210526201720463](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526201720.png)

![image-20210526201938321](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526201938.png)

![image-20210526202039901](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526202040.png)

![image-20210526202310463](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526202310.png)

![image-20210526202410081](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526202410.png)

![image-20210526203031649](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526203031.png)

![image-20210526203115284](https://cdn.jsdelivr.net/gh/zhoujiahua/picture/2021/05/20210526203115.png)

