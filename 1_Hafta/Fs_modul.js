const fs= require('fs');
//mkdir
fs.mkdir('ödev', ()=> {
  console.log('Klasör oluşturuldu.');
});
// write
fs.writeFile('./ödev/employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err)=> {
    if (err) console.log(err);
    console.log("Dosya oluşturuldu.")
})
// Read
fs.readFile('employees.json',(err,data)=>{
    if (err) console.log(err);
    console.log(JSON.parse(data))
    console.log("Dosya okundu")
})
// update
fs.truncate('employees.json', 0,()=>{});
fs.appendFile('employees.json','{"name": "Employee 2 Name", "salary": 5000}' ,'utf8',(err)=>{
    if (err) console.log(err);
    console.log("Dosya güncellendi")
})
