function extractString(str) {
    // 判断传入字符串是否以问号开头
    if (str.charAt(0) === '?') {
        // 使用substr方法截取字符串，从第二个字符开始截取
        return str.substr(1);
    } else {
        // 如果不是以问号开头，则直接返回原字符串
        return str;
    }
}

export default extractString