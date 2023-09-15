const url = 'https://api.themoviedb.org/3/discover/movie?api_key=3cec110d6cb7f690c339534ccbfe3696';

export const getFeaturedMovies = async () => {
  const res = await fetch(url);
  // .then(res => res.json())
  // .then(json =>{
  //   return json.results
  // } )
  // .catch(err => console.error('error:' + err));
  console.log(res.json().results)
  return res.json().results
}

export const getMovieDetails = async () =>  {

}

const getTickets = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  // next caches our fetch result so there no need to refetch data thus increasing page speed
  const res = await fetch('http://localhost:4000/tickets', {
      // to ensure the next refetches the data after 30 seconds 
      next: {
          revalidate: 0
      }
  })
  return res.json()
}