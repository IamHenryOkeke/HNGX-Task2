async function getData(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3cec110d6cb7f690c339534ccbfe3696`)
  const data = await res.json()
  console.log(data)
  return data.results
}

export default async function Movie({params}) {
    const id = params.slug
    const data = await getData(id);
    return (
        <main>
            {id}
        </main>
    )
}
