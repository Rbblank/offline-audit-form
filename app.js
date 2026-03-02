document.getElementById("auditForm")
.addEventListener("submit", e=>{
e.preventDefault();

let audit = {
auditName: auditName.value,
auditor: auditor.value,
status: status.value,
remarks: remarks.value,
synced:false,
date: new Date()
};

saveAudit(audit);
alert("Saved Offline");
});