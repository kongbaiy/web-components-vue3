# npm version

## 版本格式

[主版本号].[次版本号].[修订号]

## 版本号递增规则

1. 主版本号(major)：当你做了不兼容的 API 修改
2. 次版本号(minor)：当你做了向下兼容的功能性新增
3. 修订号(patch)：当你做了向下兼容的问题修正

## 版本号示例

1. 1.0.0 - 初始版本
2. 1.1.0 - 新增了一个新功能
3. 1.1.1 - 修复了一个 bug
4. 2.0.0 - 不兼容的 API 修改
5. 2.1.0 - 向下兼容的功能性新增
6. 2.1.1 - 向下兼容的问题修正

## npm 版本管理命令

1. npm version major - 发布主版本
2. npm version minor - 发布次版本
3. npm version patch - 发布修订版本
4. npm version preminor - 发布预发布版本
5. npm version prerelease - 发布预发布版本
6. npm version publish - 发布版本
7. npm version rollback - 回滚版本

## 高级用法

1. npm version [版本号] - 指定版本号
2. npm version [版本号] --git-tag-version=false - 不创建 git tag
3. npm version [版本号] --no-git-tag-version - 不创建 git tag
4. npm version [版本号] --no-commit-hooks - 不执行 commit hooks
5. npm version [版本号] --no-git-tag-version --no-commit-hooks - 不创建 git tag 且不执行 commit hooks
6. npm version [版本号] --no-git-tag-version --no-commit-hooks --force - 强制发布版本
7. npm version [版本号] --no-git-tag-version --no-commit-hooks --force --no-git-add - 强制发布版本且不添加到 git
8. npm version [版本号] --no-git-tag-version --no-commit-hooks --force --no-git-add --no-push - 强制发布版本且不添加到 git 且不推送
9. npm version [版本号] --no-git-tag-version --no-commit-hooks --force --no-git-add --no-push --no-verify - 强制发布版本且不添加到 git 且不推送且不验证
10. npm version [版本号] --no-git-tag-version --no-commit-hooks --force --no-git-add --no-push --no-verify --no-sign-git-tag - 强制发布版本且不添加到 git 且不推送且不验证且不签名 git tag
11. npm version [版本号] --no-git-tag-version --no-commit-hooks --force --no-git-add --no-push --no-verify --no-sign-git-tag --no-verify-access - 强制发布版本且不添加到 git 且不推送且不验证且不签名 git tag 且不验证访问权限

## 注意事项

1. 版本号必须符合 semver 规范
2. 版本号必须大于当前版本号
3. 版本号必须小于下一个版本号
4. 版本号必须小于下一个预发布版本号
5. 版本号必须小于下一个预发布版本号的次版本号
6. 版本号必须小于下一个预发布版本号的主版本号
7. 版本号必须小于下一个预发布版本号的修订号
8. 版本号必须小于下一个预发布版本号的修订号的次版本号
9. 版本号必须小于下一个预发布版本号的修订号的主版本号
10. 版本号必须小于下一个预发布版本号的修订号的次版本号的主版本号

## 添加标识

1. npm version [版本号] --tag [标识] - 添加标识
2. npm version [版本号] --tag [标识] --git-tag-version=false - 添加标识且不创建 git tag
3. npm version [版本号] --tag [标识] --no-git-tag-version - 添加标识且不创建 git tag
4. npm version [版本号] --tag [标识] --no-commit-hooks - 添加标识且不执行 commit hooks
5. npm version [版本号] --tag [标识] --no-git-tag-version --no-commit-hooks - 添加标识且不创建 git tag 且不执行 commit hooks
6. npm version [版本号] --tag [标识] --no-git-tag-version --no-commit-hooks --force - 强制发布版本且添加标识

## 发布版本

1. npm publish - 发布版本
2. npm publish --tag [标识] - 发布版本且添加标识
3. npm publish --access [访问权限] - 发布版本且添加访问权限
4. npm publish --access [访问权限] --tag [标识] - 发布版本且添加访问权限且添加标识

## 废弃版本

1. npm deprecate [包名] [版本号] [原因] - 废弃版本
2. npm deprecate [包名] [版本号] [原因] --tag [标识] - 废弃版本且添加标识
3. npm deprecate [包名] [版本号] [原因] --access [访问权限] - 废弃版本且添加访问权限
4. npm deprecate [包名] [版本号] [原因] --access [访问权限] --tag [标识] - 废弃版本且添加访问权限且添加标识

## 回滚版本

1. npm version [版本号] --no-git-tag-version --no-commit-hooks --force --no-git-add --no-push --no-verify --no-sign-git-tag --no-verify-access - 强制发布版本且不添加到 git 且不推送且不验证且不签名 git tag 且不验证访问权限

## 参考资料

1. [npm version](URL\_## 参考资料

1. [npm version](URL_ADDRESS.1. [npm version](https://docs.npmjs.com/cli/v10/commands/npm-version)
