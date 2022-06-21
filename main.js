const form = document.querySelector('#searchForm')

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const search = form.elements[0].value
    const request = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
    generateImages(request.data)
})

const generateImages = (results) => {

    for (let i = 0; i < results.length; i++) {
        const img = document.createElement('img')
        img.src = results[i].show.image.medium
        document.body.append(img)
    }
}