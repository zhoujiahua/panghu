## 基础服务安装

### 1、基础配置

> 1、虚拟机规划

| 节点       | 内存 | CPU               | IP          | 备注     |
| ---------- | ---- | ----------------- | ----------- | -------- |
| controller | 4G   | 4核-开启CPU虚拟化 | `10.0.0.11` | 控制节点 |
| compute1   | 2G   | 2核-开启CPU虚拟化 | `10.0.0.31` | 计算节点 |
| compute2   | 2G   | 2核-开启CPU虚拟化 | `10.0.0.41` | 计算节点 |

> 2.修改主机名称以及修改hosts

```shell
# 修改主机名
hostnamectl set-hostname controller
su -
hostnamectl set-hostname compute1
su -
hostnamectl set-hostname compute2
su -

# 修改host
vi /etc/host

10.0.0.11 controller
10.0.0.31 compute1
10.0.0.41 compute2
```

```sh
scp -rp /etc/hosts 10.0.0.31:/etc/hosts
scp -rp /etc/hosts 10.0.0.41:/etc/hosts
```

> 挂在光盘

```
mount /dev/cdrom /mnt
```

> 文件上传及拷贝

```shell
cd /opt

# 上传openstack_rpm.tar.gz文件到opt目录并解压
rz openstack_rpm.tar.gz
tar xf openstack_rpm.tar.gz
ll -h

# 文件拷贝到其他节点
scp -rp openstack_rpm.tar.gz 10.0.0.31:`pwd`
scp -rp openstack_rpm.tar.gz 10.0.0.41:`pwd`
```

> 配置yum源

```
# 手动修改
vim /etc/yum.repos.d/local.repo

# 脚本修改
echo '[local] name=loacl baseurl=file:///mnt gpgcheck=0' > /etc/yum.repos.d/local.repo
echo '[openstack] name=openstack baseurl=file:///opt/repo gpgcheck=0' >> /etc/yum.repos.d/local.repo

echo 'mount /dev/cdrom /mnt' >> /etc/rc.local
chmod +x /etc/rc.d/rc.local

yum list | grep openstack
```

### 2.安装基础服务

> 时间同步

```shell
yum install chrony -y
rpm -qa | grep chrony

# 控制节点
vim /etc/chrony.conf

#server 0.centos.pool.ntp.org iburst	  #注释掉					
#server 1.centos.pool.ntp.org iburst	  #注释掉				
#server 2.centos.pool.ntp.org iburst	  #注释掉				
#server 3.centos.pool.ntp.org iburst	  #注释掉

server ntp5.aliyun.com iburst		      #配置阿里云时钟服务器源
allow 10.0.0.0/24				          #允许10.0.0.0/24网段的主机来同步时钟服务

systemctl enable chronyd
systemctl restart chronyd

# 计算节点
vim /etc/chrony.conf
server 10.0.0.11 iburst

systemctl restart chronyd
```

> 设置任务周期

```shell
crontab -e
*/2 * * * * /usr/bin/chronyc sources >> /var/log/chronyc.log

#配置计划任务，每隔2分钟同步一次
crontab -l
```

> OpenStack客户端以及selinux - `所有节点安装`

```shell
yum install python-openstackclient openstack-selinux -y
```

> 安装MariaDB - `仅控制节点安装`

```sh
yum rinstall mariadb mariadb-server python2-PyMySQL -y
```

> Keystone配置文件

```shell
# 去除空行和注释
grep -Ev '^$|#' /etc/keystone/keystone.conf | wc -l

cp /etc/keystone/keystone.conf /etc/keystone/keystone.conf.back
grep -Ev '^$|#' /etc/keystone/keystone.conf.back > /etc/keystone/keystone.conf

md5sum /etc/keystone/keystone.conf

# 自动修改配置文件工具
yum install openstack-utils -y

openstack-config --set /etc/keystone/keystone.conf DEFAULT admin_token ADMIN_TOKEN

# 查看keystone用户下的表
mysql keystone -e 'show tables;'
su -s /bin/sh -c 'keystone-manage db_sync' keystone

env|grep OS
unset OS_TOKEN # 取消TOKEN
source admin-openrc
openstack token issue
```

