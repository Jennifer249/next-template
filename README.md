# next-template
Nextjs + Typescript + Storybook + Husky + Mock + VSCode 可拓展，支持调试的模板

# 模板使用
从 `components/template` 下复制 `base` 到需要的位置，例如 `components/cards` , 把 `base` 改名为 `cat`, 文件名 `BaseTemplate` 改为 `CatCard`, 并指定该目录，全局替换 `BaseTemplate` 为 `CatCard`。

# 调试
VSCode 打断点后, 点击调试，选择脚本

# 项目启动
yarn install

yarn dev

# 查看文档
yarn storybook