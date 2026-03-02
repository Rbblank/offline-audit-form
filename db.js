let db;
let request = indexedDB.open("AuditDB", 1);

request.onupgradeneeded = e => {
db = e.target.result;
db.createObjectStore("audits", {
keyPath: "id",
autoIncrement: true

});

};

request.onsuccess = e => {
db = e.target.result;
};

function saveAudit(audit){
let tx = db.transaction("audits", "readwrite");
tx.objectStore("audits").add(audit);
}

function getAudits(){
return new Promise(resolve=>{

let tx = db.transaction("audits", "readonly");
let request = tx.objectStore("audits").getAll();
request.onsuccess = ()=> resolve(request.result);
});
}

function deleteAudit(id){
let tx = db.transaction("audits", "readwrite");
tx.objectStore("audits").delete(id);
}