(async function iffe() {
    console.log("from static file js")
    console.log("hi!!!!")
    const j = await( await fetch(`/api/httpTrigger1`));
    // document.querySelector('#name').textContent = text;
    console.log("json", j, typeof j)
    try {
        const out = j.json()
        console.log("try out!!!", out)
    } catch (error) {
        console.log("ERRR", error)
    }
})()

