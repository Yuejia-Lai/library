---
title: 用户与权限管理
icon: iconfont icon-mysql
date: 2022-11-13
---

## 用户管理

### 登录MySQL服务器

启动MySQL服务后，可以通过mysql命令来登录MySQL服务器，命令如下：

```mysql
mysql –h hostname|hostIP –P port –u username –p DatabaseName –e "SQL语句"
```

- `-h参数`后面接主机名或者主机IP，hostname为主机，hostIP为主机IP。 
- `-P参数`后面接MySQL服务的端口，通过该参数连接到指定的端口。MySQL服务的默认端口是3306，不使用该参数时自动连接到3306端口，port为连接的端口号。
- `-u参数`后面接用户名，username为用户名。
- `-p参数`会提示输入密码。
- `DatabaseName参数`指明登录到哪一个数据库中。如果没有该参数，就会直接登录到MySQL数据库中，然后可以使用USE命令来选择数据库。
- `-e参数`后面可以直接加SQL语句。登录MySQL服务器以后即可执行这个SQL语句，然后退出MySQL服务器。

### 创建用户

```sql
CREATE USER 用户名 [IDENTIFIED BY '密码'][,用户名 [IDENTIFIED BY '密码']];
```

### 修改用户

```sql
UPDATE mysql.user SET USER='li4' WHERE USER='wang5'; 
FLUSH PRIVILEGES;
```

### 删除用户

- 使用DROP方式删除

```sql
DROP USER user[,user]…;
```

- 使用DELETE方式删除（不推荐，有残留信息）

```sql
DELETE FROM mysql.user WHERE Host=’hostname’ AND User=’username’;
FLUSH PRIVILEGES;
```

### 设置当前用户密码

- 使用ALTER USER命令来修改当前用户密码

```sql
ALTER USER USER() IDENTIFIED BY 'new_password';
```

- 使用SET语句来修改当前用户密码

```sql
SET PASSWORD='new_password';
```

### 修改其他用户密码

- 使用ALTER语句来修改普通用户的密码

```sql
ALTER USER user [IDENTIFIED BY '新密码'] 
[,user[IDENTIFIED BY '新密码']]…;
```

- 使用SET命令来修改普通用户的密码

```sql
SET PASSWORD FOR 'username'@'hostname'='new_password';
```

## 权限管理

### 权限列表

```sql
show privileges;
```

- `CREATE和DROP权限`，可以创建新的数据库和表，或删除（移掉）已有的数据库和表。如果将MySQL数据库中的DROP权限授予某用户，用户就可以删除MySQL访问权限保存的数据库。
- `SELECT、INSERT、UPDATE和DELETE权限`允许在一个数据库现有的表上实施操作。
- `SELECT权限`只有在它们真正从一个表中检索行时才被用到。
- `INDEX权限`允许创建或删除索引，INDEX适用于已有的表。如果具有某个表的CREATE权限，就可以在CREATE TABLE语句中包括索引定义。
- `ALTER权限`可以使用ALTER TABLE来更改表的结构和重新命名表。
- `CREATE ROUTINE权限`用来创建保存的程序（函数和程序），`ALTER ROUTINE权限`用来更改和删除保存的程序，`EXECUTE权限`用来执行保存的程序。
- `GRANT权限`允许授权给其他用户，可用于数据库、表和保存的程序。
- `FILE权限`使用户可以使用LOAD DATA INFILE和SELECT ... INTO OUTFILE语句读或写服务器上的文件，任何被授予FILE权限的用户都能读或写MySQL服务器上的任何文件（说明用户可以读任何数据库目录下的文件，因为服务器可以访问这些文件）。

### 授予权限的规则

权限控制主要是出于安全因素，因此需要遵循以下几个`经验原则`：

1、只授予能`满足需要的最小权限`，防止用户干坏事。比如用户只是需要查询，那就只给select权限就可以了，不要给用户赋予update、insert或者delete权限。

2、创建用户的时候`限制用户的登录主机`，一般是限制成指定IP或者内网IP段。

3、为每个用户`设置满足密码复杂度的密码`。 

4、`定期清理不需要的用户`，回收权限或者删除用户。

### 授予权限

```sql
GRANT 权限1,权限2,…权限n ON 数据库名称.表名称 TO 用户名@用户地址 [IDENTIFIED BY ‘密码口令’];
```

- 该权限如果发现没有该用户，则会直接新建一个用户。
- 给li4用户用本地命令行方式，授予atguigudb这个库下的所有表的插删改查的权限

```sql
GRANT SELECT,INSERT,DELETE,UPDATE ON atguigudb.* TO li4@localhost;
```

- 授予通过网络方式登录的joe用户 ，对所有库所有表的全部权限，密码设为123。**注意这里唯独不包括grant的权限**

```sql
GRANT ALL PRIVILEGES ON *.* TO joe@'%' IDENTIFIED BY '123';
```

### 查看权限

- 查看当前用户权限

```sql
SHOW GRANTS; 
# 或 
SHOW GRANTS FOR CURRENT_USER; 
# 或 
SHOW GRANTS FOR CURRENT_USER();
```

- 查看某用户的全局权限

```sql
SHOW GRANTS FOR 'user'@'主机地址';
```

### 收回权限

**注意：在将用户账户从user表删除之前，应该收回相应用户的所有权限**

- 收回权限命令

```sql
REVOKE 权限1,权限2,…权限n ON 数据库名称.表名称 FROM 用户名@用户地址;
```

- 注意：`须用户重新登录后才能生效` 

## 角色管理

### 创建角色

```sql
CREATE ROLE 'role_name'[@'host_name'] [,'role_name'[@'host_name']]...
```

角色名称的命名规则和用户名类似。如果`host_name省略，默认为%`，`role_name不可省略`，不可为空。

### 给角色赋予权限

```sql
GRANT privileges ON table_name TO 'role_name'[@'host_name'];
```

上述语句中privileges代表权限的名称，多个权限以逗号隔开。可使用SHOW语句查询权限名称

```sql
SHOW PRIVILEGES\G
```

### 查看角色权限

```sql
SHOW GRANTS FOR 'role_name';
```

只要你创建了一个角色，系统就会自动给你一个“`USAGE`”权限，意思是`连接登录数据库的权限`。

### 回收角色的权限

```sql
REVOKE privileges ON tablename FROM 'rolename';
```

### 删除角色

```sql
DROP ROLE role [,role2]...
```

注意，`如果你删除了角色，那么用户也就失去了通过这个角色所获得的所有权限`。

### 用户赋予角色

角色创建并授权后，要赋给用户并处于`激活状态`才能发挥作用。

```sql
GRANT role [,role2,...] TO user [,user2,...];
```

查询当前已激活的角色

```sql
SELECT CURRENT_ROLE();
```

### 激活角色

- 使用set default role 命令激活角色

```sql
SET DEFAULT ROLE ALL TO 'kangshifu'@'localhost';
```

- 将activate_all_roles_on_login设置为ON

```sql
SET GLOBAL activate_all_roles_on_login=ON;
```

对`所有角色永久激活`

### 撤销用户的角色

```sql
REVOKE role FROM user;
```

### 设置强制角色(mandatory role)

- 服务启动前设置

```ini
[mysqld] 
mandatory_roles='role1,role2@localhost,r3@%.atguigu.com'
```

- 运行时设置

```sql
SET PERSIST mandatory_roles = 'role1,role2@localhost,r3@%.example.com'; #系统重启后仍然有效
SET GLOBAL mandatory_roles = 'role1,role2@localhost,r3@%.example.com'; #系统重启后失效
```

