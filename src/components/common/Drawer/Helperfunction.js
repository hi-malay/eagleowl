export const isMobileValidNumber = (mobileNumber) => {
    if (mobileNumber.length > 10) {
        return false;
    }
    mobileNumber = parseInt(mobileNumber, 10);
    const mob = /^\d{10}$/;
    return mob.test(mobileNumber);
};

export const createTable = (data, setAction, conDate) => {
    const dataDump = []
    let rowId = 1;
    console.log("main", data)
    data.map((obj) => {
        const datum = {}
        datum['name'] = obj.name
        datum['last_updated.date'] = conDate(obj.last_updated.date.split(' ')[0])
        datum['cogs'] = obj.cogs.toFixed(2)
        datum['cost_price'] = obj.cost_price.toFixed(2)
        datum['sale_price'] = obj.sale_price.toFixed(2)
        datum['gross_margin'] = obj.gross_margin.toFixed(2)
        datum['manufacturing_outlet'] = setAction(obj.manufacturing_outlet)
        datum['row_id'] = rowId++;
        dataDump.push(datum)
    })

    return dataDump
}