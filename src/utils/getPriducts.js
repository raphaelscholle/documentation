function getProduct_Line(obj) {
    let arr = []
    obj.map(item => {
        if (arr.indexOf(item.Product_Line) == -1) arr.push(item.Product_Line)
    })
    return arr
}


function getProduct_Name(obj) {
    let o = {}
    obj.map((item, idx) => {
        o[item.Product_Line] = null
    })
    Object.keys(o).map((item1, idx) => {
        let arr = []
        obj.map((item2, idx) => {
            if (item2.Product_Line === item1) {
                arr.push(item2.product_name)
            }
            o[item1] = arr
        })
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