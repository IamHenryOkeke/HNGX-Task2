export async function getMovieData(id) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
  
}

export async function getData() {
  try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`, {
      next:{
        revalidate: 0
      }
    })
    const data = await res.json()
    console.log(data.results)
    return data.results
  } catch (error) {
    console.log(error)
  }
  
}