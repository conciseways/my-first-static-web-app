(async function iffe() {
    console.log("from static file js")
    console.log("hi!!!!")
    const j = await( await fetch(`/api/httpTrigger1`));
    // document.querySelector('#name').textContent = text;
    try {
        console.log("try out!!!", j.text(), typeof j)
        console.log("try out body!!!", j.body.text(), typeof j)
        const out = await j.json()
        console.log("try out!!!", out)
    } catch (error) {
        console.log("ERRR", error)
    }
})()

