## Python虚拟环境使用方法

## 一、使用virtualenv

### 1.使用pip

```shell
pip install virtualenv
```

### 2.创建运行环境

```shell
virtualenv [虚拟环境名称] 
virtualenv venv

#如果不想使用系统的包,加上–no-site-packeages参数
virtualenv  --no-site-packages 创建路径名
```

### 3.激活环境

> linux:

```shell
cd venv
source ./bin/activate
```

> Windows 10:

```shell
> cd venv
> .\Scripts\activate.bat
```

### 4.退出环境

> linux:

```shell
deactivate
```

> Windows 10:

```shell
> .\Scripts\deactivate.bat
```

### 5.删除环境

没有使用virtualenvwrapper前，可以直接删除venv文件夹来删除环境

### 6.使用环境

进入环境后，一切操作和正常使用python一样 安装包使用pip install 包

## 二、使用Virtualenvwrapper

Virtaulenvwrapper是virtualenv的扩展包，用于更方便管理虚拟环境，它可以做： - 将所有虚拟环境整合在一个目录下 - 管理（新增，删除，复制）虚拟环境 - 快速切换虚拟环境

### 1.安装

```shell
# on Windows
pip install virtualenvwrapper-win

# on macOS / Linux
pip install --user virtualenvwrapper

# then make Bash load virtualenvwrapper automatically
echo "source virtualenvwrapper.sh" >> ~/.bashrc
source ~/.bashrc
```

### 2.创建虚拟环境

```shell
# on macOS/Linux:
mkvirtualenv --python=python3.6 venv

# on Windows
mkvirtualenv --python=python3 venv
```

### 3.激活环境

```shell
workon #列出虚拟环境列表
workon [venv] #切换环境
```

### 4.退出环境

```shell
deactivate
```

### 5.删除环境

```shell
rmvirtualenv venv
```

### 6.其他有用指令

```shell
pip freeze #查看当前安装库版本

#创建 requirements.txt 文件，其中包含了当前环境中所有包及 各自的版本的简单列表
#保持部署相同，一键安装所有包
pip install -r requirements.txt
pip freeze > requirements.txt 

lsvirtualenv    #列举所有的环境
cdvirtualenv    #导航到当前激活的虚拟环境的目录中，相当于pushd 目录
cdsitepackages   # 和上面的类似，直接进入到 site-packages 目录
lssitepackages     #显示 site-packages 目录中的内容
```

## 三、使用conda管理

Conda可以直接创建不同python版本的虚拟环境。前面讲的virtualenv只是指定创建不同python版本的虚拟环境，前提是你的电脑上已经安装了不同版本的python,与conda相比没有conda灵活。

### 1.安装

下载anaconda安装的python直接可以使用conda工具

### 2.创建虚拟环境

创建不同的python版本，直接写出版本号就好了，还可以同时安装想要的库。

> Python 2.7  

```shell
conda create -n venv python=2.7
```  

> Python 3.4  

```shell
conda create -n venv python=3.4
```

> Python 3.5

```shell
conda create -n venv python=3.5
```

### 3.激活虚拟环境

```shell
#on windows
activate venv

#on linux
source activate venv
```

### 4.退出虚拟环境

```shell
#on windows
deactivate

#on linux
source deactivate
```

### 5.删除虚拟环境

> 删除一个已有环境

```shell
conda remove --name venv --all
```

### 6.其他有用指令

> 列出系统存在虚拟环境

```shell
conda info -e
conda env list
```

> 查看当前环境下已安装的包

```shell
conda list
```

> 查看某个指定环境的已安装包

```shell
conda list -n venv
```

> 查找package信息

```shell
conda search numpy
```

> 安装package

```shell
# 如果不用-n指定环境名称，则被安装在当前激活环境
# 也可以通过-c指定通过某个channel安装
conda install -n venv numpy
```

> 更新package

```shell
conda update -n venv numpy
```

> 删除package

```shell
conda remove -n venv numpy
```

## 四、使用pipenv管理

pipenv是Python官方推荐的包管理工具。它综合了 virtualenv, pip 和 pyenv 三者的功能。能够自动为项目创建和管理虚拟环境。如果你使用过requests库，就一定会爱上这个库，因为是同一个大神出品。 pipenv使用 `Pipfile` 和 `Pipfile.lock` 来管理依赖包，并且在使用pipenv添加或删除包时，自动维护 Pipfile 文件，同时生成 Pipfile.lock 来锁定安装包的版本和依赖信息，避免构建错误。相比pip需要手动维护`requirements.txt`中的安装包和版本，具有很大的进步。

### 1.安装

```shell
pip install pipenv
pip3 install pipenv
```

### 2.创建虚拟环境

```shell
cd myproject
pipenv install # 创建环境
pipenv install requests # 或者直接安装库
```

如果不存在pipfile,会生成一个pipfile，并且如果有的库添加会自动编辑该文件，不会我们手动更新`requirements.txt`文件了。

### 3.激活Pipenv Shell

```shell
pipenv shell
python --version
```
