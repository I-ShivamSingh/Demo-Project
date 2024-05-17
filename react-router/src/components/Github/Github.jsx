import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
      <div className='m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg'>
        <div className="text-left">
          <img src={data.avatar_url} alt="Git picture" className="w-72 h-72 rounded-full mb-4" />
          <div>{data.name}</div>
          <div>GitHub followers: {data.followers}</div>
        </div>
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/I-ShivamSingh')
    return response.json()
}