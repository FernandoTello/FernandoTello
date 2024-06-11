export const Projects = () => {
  return (
    <section
      id='proyectos'
      data-section='proyectos'
      className='scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl my-24 md:mb-32'
    >
      <h2 className='flex items-center mb-10 text-3xl font-semibold gap-x-3'>
        <svg
          className='size-7'
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M7 8l-4 4l4 4' />
          <path d='M17 8l4 4l-4 4' />
          <path d='M14 4l-4 16' />
        </svg>
        Proyectos
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16'>

        {/* <!-- Proyecto 1 --> */}
        <article className='flex flex-col group space-y-4  '>
          <div className='w-full'>
            <div className='overflow-clip rounded-xl '>

              <img alt='Recién llegado vs 5 años en Nueva Zelanda' className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-125' loading='lazy' src='./img/bloggio.jpg' />

            </div>
          </div>
          <div className='w-full space-y-8 group'>
            <h3 className='text-2xl font-bold '>Bloggio</h3>
            <div className='flex flex-wrap mt-2'>
              <ul className='flex flex-row mb-2 gap-x-2'>

                <li>
                  <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2'>

                    {/* inicio svg de nextjs */}
                    {/* <svg className='size-4' xmlns='http://www.w3.org/2000/svg' width='256' height='256' preserveAspectRatio='xMidYMid' viewBox='0 0 256 256'>
                      <defs>
                        <linearGradient id='c' x1='55.633%' x2='83.228%' y1='56.385%' y2='96.08%'>
                          <stop offset='0%' stopColor='#FFF' />
                          <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
                        </linearGradient>
                        <linearGradient id='d' x1='50%' x2='49.953%' y1='0%' y2='73.438%'>
                          <stop offset='0%' stopColor='#FFF' />
                          <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
                        </linearGradient>
                        <circle id='a' cx='128' cy='128' r='128' />
                      </defs>
                      <mask id='b' fill='#fff'>
                        <use xlinkHref='#a' />
                      </mask>
                      <g mask='url(#b)'>
                        <circle cx='128' cy='128' r='128' />
                        <path fill='url(#c)' d='M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z' />
                        <path fill='url(#d)' d='M163.556 76.8h17.067v102.4h-17.067z' />
                      </g>
                    </svg> */}
                    {/* fin svg de nextjs */}
                    React
                  </span>
                </li>

                <li>
                  <span className='flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2'>
                    <svg className='size-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 54 33'>
                      <g clipPath='url(#a)'>
                        <path fill='#38bdf8' fillRule='evenodd' d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z' clipRule='evenodd' />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path fill='#fff' d='M0 0h54v32.4H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                    Tailwind CSS
                  </span>
                </li>
              </ul>
              <div className='mt-2'>
                Proyecto de blog hecho en colaboración, mi trabajo fue hacer todo el front mientras mis compañeros crearon el backend utilizando Spring boot y PostgreSQL.
              </div>
              <footer className='flex sm:flex-col md:flex-row md:space-y-0 sm:w-full sm:items-start items-end justify-start mt-4 gap-x-4 sm:space-y-3 text-sm'>
                <a
                  href='https://github.com/FernandoTelloL/bloggio'
                  target='_blank'
                  rel='noopener noreferrer'
                  role='link'
                  className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit sm:min-w-full rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black md:text-xs md:max-w-[50%] md:min-w-[40%]'
                >
                  <svg className='size-6 md:size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.5 1 -.5 2v3.5' />
                  </svg>
                  Ver en Github
                </a>
                <a
                  href='https://bloggio-web.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  role='link'
                  className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit sm:min-w-full  rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black md:text-xs md:max-w-[50%] md:min-w-[40%]'
                >
                  <svg className='size-6 md:size-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0 -2.25 2.25V9m10.5 0v9A2.25 2.25 0 0 1 16.5 20.25H7.5a2.25 2.25 0 0 1 -2.25 -2.25V9m10.5 0h-9' />
                  </svg>
                  Visitar el sitio
                </a>
              </footer>
            </div>
          </div>
        </article>
        {/* <!-- Fin de Proyecto 1 --> */}

        {/* <!-- Proyecto 2 --> */}
        {/* <article className='flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0'>
          <div className='w-full md:w-1/2'>
            <div className='relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50'>
              <img alt='Recién llegado vs 5 años en Nueva Zelanda' className='object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105' loading='lazy' src='/projects/adventjs.webp' />
            </div>
          </div>
          <div className='w-full md:w-1/2 md:max-w-lg'>
            <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>AdventJS - Retos de programación con JavaScript y TypeScript</h3>
            <div className='flex flex-wrap mt-2'>
              <ul className='flex flex-row mb-2 gap-x-2'>
                <li>
                  <span className='flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2'>
                    <svg className='size-4' xmlns='http://www.w3.org/2000/svg' width='256' height='256' preserveAspectRatio='xMidYMid' viewBox='0 0 256 256'>
                      <defs>
                        <linearGradient id='c' x1='55.633%' x2='83.228%' y1='56.385%' y2='96.08%'>
                          <stop offset='0%' stopColor='#FFF' />
                          <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
                        </linearGradient>
                        <linearGradient id='d' x1='50%' x2='49.953%' y1='0%' y2='73.438%'>
                          <stop offset='0%' stopColor='#FFF' />
                          <stop offset='100%' stopColor='#FFF' stopOpacity='0' />
                        </linearGradient>
                        <circle id='a' cx='128' cy='128' r='128' />
                      </defs>
                      <mask id='b' fill='#fff'>
                        <use xlinkHref='#a' />
                      </mask>
                      <g mask='url(#b)'>
                        <circle cx='128' cy='128' r='128' />
                        <path fill='url(#c)' d='M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z' />
                        <path fill='url(#d)' d='M163.556 76.8h17.067v102.4h-17.067z' />
                      </g>
                    </svg>
                    Next.js
                  </span>
                </li>
                <li>
                  <span className='flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2'>
                    <svg className='size-4' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 54 33'>
                      <g clipPath='url(#a)'>
                        <path fill='#38bdf8' fillRule='evenodd' d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z' clipRule='evenodd' />
                      </g>
                      <defs>
                        <clipPath id='a'>
                          <path fill='#fff' d='M0 0h54v32.4H0z' />
                        </clipPath>
                      </defs>
                    </svg>
                    Tailwind CSS
                  </span>
                </li>
              </ul>
              <div className='mt-2 text-gray-700 dark:text-gray-400'>
                Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.
              </div>
              <footer className='flex items-end justify-start mt-4 gap-x-4'>
                <a href='https://adventjs.dev' role='link' className='inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black'>
                  <svg className='size-4' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
                    <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
                  </svg>
                  Preview
                </a>
              </footer>
            </div>
          </div>
        </article> */}
        {/* <!-- Fin de Proyecto 2 --> */}

      </div>
    </section>
  )
}
