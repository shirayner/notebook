# git-commit 提交规范



## 推荐阅读

> - [angular-commit-message-guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
> - [书写良好的 commit message](https://loveky.github.io/2018/06/04/write-good-commit-message/)
> - [Conventional Commits](https://www.conventionalcommits.org/)
> - 



## 提交规范

Commit Message 格式

```java
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```



**type** ：用于表明我们这次提交的改动类型

> - build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
> - ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
> - docs：文档更新
> - feat：新增功能
> - fix：bug 修复
> - perf：性能优化
> - refactor：重构代码(既没有新增功能，也没有修复 bug)
> - style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
> - test：新增测试用例或是更新现有测试
> - revert：回滚某个更早之前的提交
> - chore：不属于以上类型的其他类型

**scope**：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。根据项目实际情况填写即可，最好在项目中规定好模块列表，保持一致性。

**description**：一句话描述此次提交的主要内容，做到言简意赅。



