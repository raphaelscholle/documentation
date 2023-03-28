
// 获取全部doc文档的源信息
function getDocs() {
    const context = require.context("../../docs", true, /\.md$/);
    const docsData = {};
    context.keys().forEach((key) => {
        const name = key.replace(/\.\/(.+)\.md$/, "$1");
        docsData[name] = context(key).frontMatter;
    });
    return docsData
}


function getDocAll() {
    const context = require.context("../../docs", true, /\.md$/);
    const docsData = {};
    const folderDocsData = {};
    context.keys().forEach((key) => {
        const name = key.replace(/\.\/(.+)\.md$/, "$1");
        // 判断是否在docs目录下直接存在
        if (/^[^/]*$/.test(name)) {
            docsData[name] = context(key).frontMatter;
        } else {
            // 使用正则表达式提取文件夹名和md文档名
            const match = name.match(/^(.+?)\/(.+)$/);
            const folderName = match[1];
            const docName = match[2];
            // 判断文件夹对象是否存在，不存在则创建
            if (!folderDocsData[folderName]) {
                folderDocsData[folderName] = {};
            }
            const folderData = folderDocsData[folderName];
            // 递归遍历子文件夹
            const subfolders = docName.split("/");
            subfolders.reduce((acc, subfolder, index) => {
                if (!acc[subfolder]) {
                    acc[subfolder] = {};
                }
                if (index === subfolders.length - 1) {
                    // 存储md文档源信息
                    acc[subfolder] = context(key).frontMatter;
                }
                return acc[subfolder];
            }, folderData);
        }
    });
    return folderDocsData
}

// 获取对象中某一个键值对的值
function getValuesByKey(obj, key) {
    const values = [];
    if (obj[key]) {
        values.push(obj[key]);
    }
    for (let k in obj) {
        if (typeof obj[k] === 'object') {
            const subValues = getValuesByKey(obj[k], key);
            if (subValues.length > 0) {
                values.push(...subValues);
            }
        }
    }
    return values;
}
// 消除_
function replaceUnderscore(str) {
    return str.replace(/_/g, ' ');
}

// 查询字符串
function parseQueryString(queryString) {
    const params = new URLSearchParams(queryString);
    const obj = {};
    for (let key of params.keys()) {
        obj[key] = params.get(key);
    }
    return obj;
}

// 获取所有渲染文档
function extractFlatObjects(obj) {
    let result = [];

    if (typeof obj === 'object' && obj !== null) {
        Object.values(obj).forEach(val => {
            result = result.concat(extractFlatObjects(val));
        });

        if (!Array.isArray(obj)) {
            result.push(obj);
        }
    }
    return result;
}

export { getDocs, getValuesByKey, getDocAll, replaceUnderscore, parseQueryString, extractFlatObjects };