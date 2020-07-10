import React from 'react'
import Layout from '../components/layout'
import img1 from '../images/turing.jpg'
import img2 from '../images/new-vision.jpg'

export default () => {
    const trabajos = [
        {
            title:'Turing Diseño Web',
            img:img1,
            description:`
            Empresa dedicada a la mantención
            de redes sociales
            `,
            url:'http://turing-web.com/',
            alt:'turing'
        },
        {
            title:'New Vision Security',
            img:img2,
            description:`
            Empresa dedicada a la venta
            de sistemas de monitoreo
            `,
            url:'http://prueba-smart-alarmas.s3-website-sa-east-1.amazonaws.com/',
            alt:'alarmas'
        }
    ]
    return (
        <Layout>
        <div style={{backgroundColor:'black',
        height:'70vh', borderBottomLeftRadius:'50% 42%',
        }}>
            <div className="container text-white pt-20 pl-20">
                <h1 className="lg:text-4xl sm:text-lg pb-5 font-mono">Proyectos y trabajos realizados</h1>
            </div>
        </div>

        <div className="py-20 flex flex-wrap w-auto" style={{display:'flex',justifyContent:'center'}}>
            {
                trabajos.map((works) => {
                    return(
                        <div className="p-5 flex">
                            <div className="-48 lg:h-56 lg:w-56 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden sm:h-20"
                            >
                            <img src={works.img} alt={works.Layout}></img>
                            </div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div class="text-gray-900 font-bold text-xl mb-2">{works.title}</div>
                                <div >
                                    <a href={works.url} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                        Ver
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </Layout>
    )
}