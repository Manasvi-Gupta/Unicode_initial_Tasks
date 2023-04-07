const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca3f26a123msh0c0d69e0caad64dp149bc4jsn1a1bf95d4639',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline', options)
	.then(response => response.json())
	.then(response => show(response))
	.catch(err => console.error(err));
    console.log('Window Loaded...');

function show(response){
        let table=document.getElementById('table-1');
        for(var i=0;i<565 ;i++){
        let obj=response[i];
        console.log(obj);
        let row=document.createElement('tr');
        let Dconfirmed=document.createElement('td'); 
        let Ddeceased=document.createElement('td');
        let Drecovered=document.createElement('td'); 
        let date=document.createElement('td');
        let datem=document.createElement('td');
        let Tconfirmed=document.createElement('td');
        let Tdeceased=document.createElement('td');
        let Trecovered=document.createElement('td');
        Dconfirmed.innerHTML=obj.dailyconfirmed
        Ddeceased.innerHTML=obj.dailydeceased
        Drecovered.innerHTML=obj.dailyrecovered
        date.innerHTML=obj.date
        datem.innerHTML=obj.dateymd
        Tconfirmed.innerHTML=obj.totalconfirmed
        Tdeceased.innerHTML=obj.totaldeceased
        Trecovered.innerHTML=obj.totalrecovered
        row.appendChild(Dconfirmed)
        row.appendChild(Ddeceased)
        row.appendChild(Drecovered)
        row.appendChild(date)
        row.appendChild(datem)
        row.appendChild(Tconfirmed)
        row.appendChild(Tdeceased)
        row.appendChild(Trecovered)
        table.appendChild(row)
    }
}
