(async function iffe() {
    const $nameEl = document.getElementById("name")
    const stringMsg = await fetch(`/api/httpTrigger1`);
    const outStr = await stringMsg.text()
    $nameEl.append(outStr)
})()

