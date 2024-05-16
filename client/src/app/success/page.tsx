'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
const Success = () => {
    const searchParams = useSearchParams()
    const urlParams = new URLSearchParams(window.location.search);
    const data = JSON.parse(decodeURIComponent(urlParams.get('data') as string));

    fetch('/success', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ /* your request body here */ })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.url); // logs the URL
        window.location = data.url;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    // console.log(data);
    return (

        <main className="flex h-screen  flex-col items-center justify-between sticky z-30">
            <section className='rounded-b-3xl h-full md:py-24 flex items-center justify-center w-full bg-background border-b'>
                Success
            </section>
        </main>
    )
}

export default Success