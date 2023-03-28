export default () => {
    var url = window.location.href;
    if (url.indexOf('zh-CN') !== -1) {
        return true; // 包含 zh-CN，是中文页面
    } else {
        return false; // 不包含 zh-CN，是英文页面
    }
}