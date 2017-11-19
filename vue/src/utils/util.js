const util = {};
/**
 * 格式化时间
 * @param {Object} now Date实例
 * @return {String} 格式化后的时间(2017-10-24 11:30:00)
 */
util.parseTime = function(now) {
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
};
export default util;
