import axios from './lib/axios.js'
(async function iffe() {
    
    const $nameEl = document.getElementById("name")
    const stringMsg = await fetch(`/api/httpTrigger1`);
    const outStr = await stringMsg.text()
    $nameEl.append(outStr)

    axios.get('/httpTrigger2')
    .then(res => console.log("httpTrigger2 res", res))
})()

