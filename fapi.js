const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca3f26a123msh0c0d69e0caad64dp149bc4jsn1a1bf95d4639',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};
async function fillTable(url,options,table){
    const tableHead=table.querySelector('thead');
    const tableBody=table.querySelector('tbody');
    const response=await fetch(url,options);
    const {countries_stat,statistic_taken_at,world_total}= await response.json();
    //console.log(countries_stat);
    //console.log(statistic_taken_at);
    //console.log(world_total);
    // To clear table
    tableHead.innerHTML="<tr></tr>";
    tableBody.innerHTML=" ";
    // Putting Headers
    for(const headerText in countries_stat[0]){
        const HeaderElement=document.createElement("th");
        HeaderElement.textContent=headerText;
        tableHead .querySelector('tr').appendChild(HeaderElement);
    }
    // For contents
        for(let i=0;i<228;i++){
            const rowElement=document.createElement("tr");
            const obj=Object.values(countries_stat[i]);
            console.log(obj);
            for(const cellText of obj){
                const cellElement=document.createElement("td");
                cellElement.textContent=cellText;
                rowElement.appendChild(cellElement);
            }
            tableBody.appendChild(rowElement);
        }


    function sortTableByColumn(table,column,asc=true){
    const dirModifier=asc?1:-1;
    const tBody=table.tBodies[0];
    const rows=Array.from(tBody.querySelectorAll("tr"));
    // Sort each row
    const sortedRows=rows.sort((a,b)=>{
        const aColText=a.querySelector(`td:nth-child(${column+1})`).textContent.trim(); 
        const bColText=b.querySelector(`td:nth-child(${column+1})`).textContent.trim();
        return aColText>bColText ?(1*dirModifier):(-1*dirModifier);
   });
    // Remove all existing rows from table
    while (tBody.firstChild){
        tBody.removeChild(tBody.firstChild)
    }
    // Readd the newly sorted rows
    tBody.append(...sortedRows);
    // Remember how the row is currently sorted
    table.querySelectorAll("th").forEach(th=>th.classList.remove("th-sort-asc","th-sort-desc"));
    table.querySelector(`th:nth-child(${column+1})`).classList.toggle("th-sort-asc",asc);
    table.querySelector(`th:nth-child(${column+1})`).classList.toggle("th-sort-desc",!asc);
}
document.querySelectorAll(".table-sortable th").forEach(headerCell=>{
    headerCell.addEventListener("click",()=>{
        const tableElement=headerCell.parentElement.parentElement.parentElement;
        const headerIndex=Array.prototype.indexOf.call(headerCell.parentElement.children,headerCell);
        const CurrentIsAscending=headerCell.classList.contains("th-sort-asc");
        sortTableByColumn(tableElement,headerIndex,!CurrentIsAscending);
    });
});
}
fillTable('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options,document.querySelector('table'));
