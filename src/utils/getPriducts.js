function getProduct_Line(obj) {
    let arr = []
    obj.map(item => {
        if (arr.indexOf(item.Product_Line) == -1) arr.push(item.Product_Line)
    })
    return arr
}


function getProduct_Name(obj) {
    let o = {}
    let arr = []
    obj.map((item, idx) => {
        if (arr.indexOf(item.product_name) == -1) {
            arr.push(item.product_name)
        }
        o[item.Product_Line] = arr
    })
    return o
}
function getProduct_doc(obj, str) {
    let arr = []
    obj.map((item, idx) => {
        if (item.product_name === str) {
            arr.push(...item.docs)
        }
    })
    return arr
}

export { getProduct_Line, getProduct_Name, getProduct_doc }