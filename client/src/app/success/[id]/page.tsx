'use client'
import TopicFade from '@/app/transitions/TopicFade'
import FadeIn from '@/app/transitions/FadeIn'
import { notFound, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


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
        <div>
          <TopicFade>
            <div className='px-12 md:px-32  flex flex-col justify-center items-center'>
              <h1 className='text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-white via-gray-100 to-zinc-500 inline-block text-transparent bg-clip-text'>Thank you for your Purchase!</h1>
              <p className="text-textGray text-center py-5 xl:px-32">We have sent an E-mail confirming the purchase to your E-mail address. Please check your inbox!</p>
            </div>
          </TopicFade>
          <FadeIn>

            <div className='flex justify-center gap-6 items-center '>
              <Link scroll={true} href="/#top">
                <Button>Home Page</Button>
              </Link>
              
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

export default Success