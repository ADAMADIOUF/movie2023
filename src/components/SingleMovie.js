import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from '../context'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
const SingleMovie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const fetchSingleMovie = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    if (data.Response === 'False') {
      setError({ show: true, msg: data.error })
      setLoading(false)
    } else {
      setMovie(data)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchSingleMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id])

  if (loading) {
    return <div className='loading'>loading...</div>
  }
  if (error.show) {
    return <div className='page-error'>{error.msg}</div>
  }
  const { Poster: image, Title: title, Year: year, Plot: plot } = movie
  return (
    <section className='single-movie'>
      <img src={image === `N/A` ? url : image} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to={`/`} className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
