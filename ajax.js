async function getAjaxValue() {
    var url = "https://crud.teamrabbil.com/api/v1/ReadProduct";
    let res = await fetch(url);
    let dataArray = await res.json();
    let getData = dataArray['data']
    let tr = "<tr>";
    getData.forEach((item) => {

        tr += "<td>" + item['_id'] + "</td>";
        tr += "<td>" + item['ProductName'] + "</td>";
        tr += "<td>" + item['ProductCode'] + "</td>";
        tr += "<td>" + item['UnitPrice'] + "</td>";
        tr += "<td>" + item['Qty'] + "</td>";
        tr += "</tr>"
    });

    document.getElementById('tbody').innerHTML = tr

}