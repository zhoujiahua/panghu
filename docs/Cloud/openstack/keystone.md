## Keystone Tecnology

## 用户(User)

### 查看用户列表

```bash
 keystone user-list
```

### 创建用户

```bash
 keystone user-create  --name <user-name>  [--tenant-id <tenant-id>]
                           [--pass <pass>] [--email <email>]
                           [--enabled <true|false>]
```

### 删除用户

```bash
 keystone user-delete <user-id>
```

### 显示用户详细信息

```bash
 keystone user-get <user-id>
```

### 更新用户的密码

```bash
 keystone user-password-update --pass <password> <user-id>
```

### 赋予用户一个角色

```bash
 keystone user-role-add --user-id <user-id> --role-id <role-id>
                             [--tenant-id <tenant-id>]
```

### 查看用户的角色

```bash
 keystone user-role-list
```

### 删除用户的一个角色

```bash
keystone user-role-remove --user-id <user-id> --role-id <role-id>
                                [--tenant-id <tenant-id>]
```

### 更新用户信息

```bash
 keystone user-update [--name <user-name>] [--email <email>]
                           [--enabled <true|false>]
                           <user-id>
```

## 工程（Tenant）

### 显示工程列表

```bash
 keystone tenant-list
```

### 创建工程

```bash
 keystone tenant-create --name <tenant-name>
                             [--description <tenant-description>]
                             [--enabled <true|false>]
```

### 删除工程

```bash
 keystone tenant-delete <tenant-id>
```

### 更新工程信息

```bash
 keystone tenant-update [--name <tenant_name>]
                             [--description <tenant-description>]
                             [--enabled <true|false>]
                             <tenant-id>
```

### 显示工程详细信息

```bash
 keystone tenant-get <tenant-id>
```

## 角色（Role）

### 显示角色列表

```bash
keystone role-list
```

### 创建角色

```bash
 keystone role-create --name <role-name>
```

### 删除角色

```bash
 keystone role-delete <role-id>
```

### 显示角色详细信息

```bash
 keystone role-get <role-id>
```

## 服务（Service)

### 显示服务列表

```bash
keystone service-list
```

### 创建服务

```bash
keystone service-create --name <name> --type <type>
                              [--description <service-description>]
```

### 删除服务

```bash
 keystone service-delete <service-id> 
```

### 显示服务详细信息

```bash
 keystone service-get <service-id>
```



## URL（Endpoint)

### 显示Endpoint列表

```bash
keystone endpoint-list
```

### 创建Endpoint

```bash
keystone endpoint-create [--region <endpoint-region>] --service-id
                               <service-id> [--publicurl <public-url>]
                               [--adminurl <admin-url>]
                               [--internalurl <internal-url>]
```

### 删除Endpoint

```bash
  keystone endpoint-delete <endpoint-id>
```

### 显示Endpoint详细信息

```bash
 keystone endpoint-get --service <service-type>
                            [--endpoint-type <endpoint-type>]
                            [--attr <service-attribute>] [--value <value>]
```

## Catalog

### 列出catalog

```bash
 keystone catalog
```



## 兼容亚马逊 ec2-credentials

### 查看ec2-credentials列表

```bash
  keystone ec2-credentials-list 
```

### 创建ec2-credentials

```bash
keystone ec2-credentials-create
```

### 删除ec2-credentials

```bash
 keystone ec2-credentials-delete
```

### 显示ec2-credentials详细信息

```bash
 keystone ec2-credentials-get
```

## 显示当前用户的token

```bash
 keystone token-get
```

## 发现keystone服务器及其授权协议

```bash
 keystone discover
Keystone found at http://localhost:5000/v2.0
     - supports version v2.0 (beta) here http://localhost:5000/v2.0/
```

## 打印所有的命令和选项

```
 keystone bash-completion
 wanglong@wanglong-laptop:~/openstack/keystone$ keystone bash-completion
 --enabled --tenant_id --value help --region tenant-get --user-id user-list discover ec2-credentials-create --tenant-id user-role-add --pass user-delete tenant-delete endpoint-delete 
 --service-id --service_id role-create endpoint-create service-create tenant-update --endpoint-type -h user-create --service --description endpoint-list ec2-credentials-delete --role_id
 user-role-remove role-get tenant-list ec2-credentials-list user-get --publicurl catalog --user_id user-role-list role-delete --endpoint_type --attr user-update endpoint-get --type 
 --access ec2-credentials-get --name --internalurl --email role-list user-password-update --help tenant-create token-get --adminurl service-delete service-get service-list --role-id
```

## 打印帮助

```bash
 keystone help
```