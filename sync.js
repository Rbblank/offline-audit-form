async function syncAudits(){

if(!navigator.onLine){

alert("Offline");

return;

}

let audits = await getAudits();

for(let audit of audits){

if(!audit.synced){

await fetch("http://localhost:3000/save",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(audit)

});

deleteAudit(audit.id);

}

}

alert("Sync Complete");

}

window.addEventListener("online", syncAudits);