export async function getMovieData(id) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3cec110d6cb7f690c339534ccbfe3696`)
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
  
}

export async function getData() {
  try {
      const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=3cec110d6cb7f690c339534ccbfe3696", {
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