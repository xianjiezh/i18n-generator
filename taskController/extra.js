const { parseCodeFile, parseCodeDir } = require('../taskService/extra');
const { getPathAbsolute, getPathConcat, getPathType } = require('../utils/pathUtils');
const { createDir, deleteDir } = require('../utils/fileUtils');

const taskExtra = (config) => {
  return new Promise((resolve, reject) => {
    const codePath = getPathAbsolute(config.code.path);
    const suffixRegArr = config.code.suffix.map((strReg) => {
      return eval(strReg);
    });
    const mdPath = createDir(getPathAbsolute(config.markdown.path));
    const columnName = config.markdown.columnName;
    const languageVariableReg = eval(config.matchReg.languageVariableReg);
    const languageKeyReg = eval(config.matchReg.languageKeyReg);
    const regKeyIndex = config.matchReg.regKeyIndex;
    // 清空md文件夹
    deleteDir(mdPath);
    // codePath代表文件与文件夹时分类处理
    const codePathType = getPathType(codePath);
    switch (codePathType) {
      case 'file':
        parseCodeFile(codePath, mdPath, languageVariableReg, languageKeyReg, regKeyIndex, columnName);
        break;
      case 'dir':
        parseCodeDir(codePath, mdPath, suffixRegArr, languageVariableReg, languageKeyReg, regKeyIndex, columnName);
        break;
    }
    resolve();
  })
}

module.exports = { taskExtra }