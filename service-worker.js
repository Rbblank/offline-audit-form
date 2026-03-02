self.addEventListener("install", e=>{

e.waitUntil(

caches.open("audit-cache")

.then(cache=>cache.addAll([

"/",

"/index.html",

"/styles.css",

"/app.js",

"/db.js"

]))

);

});