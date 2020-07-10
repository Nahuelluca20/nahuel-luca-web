import React from "react"
import Layout from "../components/layout"
import '../css/global.css'
import img1 from '../images/windods.svg'
import reactfoto from '../images/reactjs.png'
import gatsbyfoto from '../images/gatsby-foto-2.png'
import nodefoto from '../images/nodejs-foto.jpg'
import SEO from "../components/SEO"

export default function IndexPage() {

  const tarjetas = [
    {
      title:'ReactJs',
      img: reactfoto,
      description:`
      React es una biblioteca e
      scrita en JavaScript, desarrollada en Facebook para 
      facilitar la creación de componentes interactivos, reutilizables, 
      para interfaces de usuario. 
      `,
      hashtag: [
        'JavaScript',
        'Front-End',
        'Design'
      ]
    },
    {
      title:'Gatsby',
      img:gatsbyfoto,
      description: `
      Gatsby es un generador de sitio estático basado en React basado en GraphQL. 
      Utiliza una potente configuración previa para crear un sitio web que utiliza 
      solo archivos estáticos para cargas de página increíblemente rápidas.
      `,
      hashtag: [
        'JavaScript',
        'Front-End',
        'Fast'
      ]
    },
    {
      title:'NodeJs',
      img:nodefoto,
      description:`
      Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos
      , Node.js está diseñado para crear aplicaciones network escalables`,
      hashtag: [
        'JavaScript',
        'Back-End',
        'Server'
      ]
    },
  ]
  return (
  <Layout>
  <SEO/>
    <div style={{backgroundColor:'black', width:'100%', height: '500px'}}>
      <div className=" text-5xl pt-20 p-3">
        <h1 className="text-white lg:text-center sm:text-left font-mono pt-20">Nahuel Luca</h1>
        <h2 className="text-white lg:text-center sm:text-left font-mono">Desarrollador Web</h2>
      </div>
    </div>

    <div className="lg:flex">
      <div className="p-10">
        <img src={img1} className="w-auto" alt="web" />
      </div>
      <div className="p-10 pt-10">
        <p className="font-mono text-3xl lg:pt-20">
        Me dedico al Diseño y a la Creación de Páginas Web.<br/>
        Utilizando las mejores tecnologías para que su web <br/>sea lo mas rápida posible.<br/>
        </p>
      </div>
    </div>

    <h1 className="text-center font-mono pt-20 text-4xl">
        ¿Con que Tecnologías Trabajo?
    </h1>

    <div className="flex flex-wrap p-10" style={{justifyContent:'center'}}>
      {
        tarjetas.map((card) => {
          return(
            <div className="flex p-10 ransition duration-500 transform hover:-translate-y-1 hover:scale-110">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" style={{width:'384px', height:'256px'}} src={card.img}></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">
                    {card.description}
                  </p>
                </div>
                <div className="px-6 py-4">
                {
                  card.hashtag.map((hash) => {
                    return(
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{hash}</span>
                    )
                    })
                }
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
