import React from 'react'
import { Link } from 'gatsby'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

export default (props) => {
    const navitems= [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Proyectos',
          url: '/proyectos'
        },{
          name: 'Contacto',
          url: '/contacto'
        },
      ]
    const redes = [
      {
        name: <AiOutlineGithub/>,
        url: 'https://github.com/Nahuelluca20'
      },
      {
        name: <AiOutlineTwitter />,
        url: 'https://twitter.com/nahuel_lucaa?s=08'
      },
      {
        name: <FaFacebook />,
        url: 'https://www.facebook.com/nahuel.luca.908'
      },
      {
        name: <AiOutlineInstagram />,
        url: 'https://www.instagram.com/nahuel_lucaa/'
      },
    ]
    return (
        <nav>
            <ul className="text-white pl-20 flex float-left pt-2">
                {
                    navitems.map((item) => {
                        return (
                        <li className="rounded-lg border-2 border-transparent font-mono hover:text-orange-500 p-3 hover:border-white "><Link to={item.url}>{item.name}</Link></li>
                        )
                    })
                }
            </ul>
            <ul className="lg:pr-20 lg:flex float-right pt-2">
                {
                  redes.map((item) => {
                    return (
                    <li className=" text-lg font-mono text-white hover:text-orange-500 p-3 rounded-lg border-2 border-transparent  hover:border-white">
                      <Link to={item.url}>{item.name}</Link>
                    </li>
                    )
                })
                }
            </ul>
        </nav>
    )
}