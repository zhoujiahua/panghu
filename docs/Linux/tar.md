# Tar


> 1-.tar格式

```shell
解包: tar xvf FileName.tar
打包: tar cvf FileName.tar DirName（注：tar是打包，不是压缩！）
```

> 2-.gz格式

```shell
解压1: gunzip FileName.gz
解压2: gzip -d FileName.gz
压 缩: gzip FileName
```

> 3-.tar.gz格式

```shell
解压: tar zxvf FileName.tar.gz
压缩: tar zcvf FileName.tar.gz DirName
```

> 4-.zip格式

```shell
解压: unzip FileName.zip
压缩: zip FileName.zip DirName
```