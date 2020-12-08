const helpMessage = `
| 参数名 | 参数意义                           | 使用示例     |
| ------ |      --------------------------    | ------------ |
| init   | 初始化配置文件                     | i18n-g init  |
| -e     | 执行提取任务                       | i18n-g -e    |
| -t     | 执行翻译任务                       | i18n-g -t    |
| -g     | 执行生成任务                       | i18n-g -g    |
| -et    | 先提取，再翻译                     | i18n-g -et   |
| -tg    | 先翻译，再生成                     | i18n-g -tg   |
| -etg   | 先提取，再翻译，最后生成           | i18n-g -etg  |
| -help  | 打印帮助信息                       | i18n-g -help |
`;

const argumentErrorMessage = "参数错误";

const configFileNotFoundErrorMessage = "当前路径下没有找到 i18ng.config.json 配置文件，您可以选择输入 i18n-g init快速生成配置文件";

const configParseErrorMessage = "配置文件解析错误，请检查";

const initConfigFileErrorMessage = "初始化配置文件错误";

module.exports = {helpMessage, argumentErrorMessage, configFileNotFoundErrorMessage, configParseErrorMessage, initConfigFileErrorMessage}