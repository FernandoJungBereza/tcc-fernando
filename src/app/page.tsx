import Link from 'next/link'

export default function Home() {
  const urlCanonical = `https://www.fernandobereza.tech`

  return (
    <main>
      <title>Artigos para Ler</title>
      <meta name="description" content="Artigos, Culinária, Viagens, Universo" />
      <link rel="canonical" href={urlCanonical} />
      <div className='text-white flex justify-center min-h-screen text-4xl items-center max-w-[1000px] m-auto'>
        <div className='space-y-4'>
          <div>
            <Link
              href={'https://www.fernandobereza.tech/ServerRender'}
              className='border-2 border-blue-700 bg-neutral-800 hover:scale-105 transition-all duration-200 cursor-pointer flex justify-center rounded-md py-8 px-2'
            >
              Veja artigos sobre Viagens
            </Link>
          </div>
          <div>
            <Link
              href={'https://www.fernandobereza.tech/ClientRender'}
              className='border-2 border-blue-700 bg-neutral-800 hover:scale-105 transition-all duration-200 cursor-pointer flex justify-center rounded-md py-8 px-2'
            >
              Veja artigos sobre o Universo
            </Link>
          </div>
          <div>
            <Link
              href={'https://www.fernandobereza.tech/StaticRender'}
              className='border-2 border-blue-700 bg-neutral-800 hover:scale-105 transition-all duration-200 cursor-pointer flex justify-center rounded-md py-8 px-2'
            >
              Veja artigos sobre Culinária
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
