var tbody = d3.select("tbody");
var inputs = d3.selectAll('input')._groups[0];

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

buildTable(data);

const filterData = () => {
    let newData = data;
    inputs.forEach(({id,value}) => {
        if(value) newData = newData.filter(row=>row[id]==value)
    });

    buildTable(newData);
}

d3.selectAll('input').on('change',filterData);

