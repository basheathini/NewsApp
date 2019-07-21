
export async function getNews(){
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c14f6283815945d8af13d11957878d18"
    let result = await fetch(url).then( response => response.json())
    return result.articles
}
export async function getNewsByCountry(name){
    const url = `https://newsapi.org/v2/top-headlines?country= ${name} &apiKey=c14f6283815945d8af13d11957878d18`
    let result = await fetch(url).then( response => response.json())
    return result.articles
}