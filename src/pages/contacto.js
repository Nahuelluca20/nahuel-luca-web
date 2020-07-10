import React from 'react'
import Layout from '../components/layout'
import { FiMail, FiSmartphone } from 'react-icons/fi'
import emailjs from 'emailjs-com';

const ContactPage = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm( 'gmail', 'template_lrwAwWVE', e.target,process.env.GATSBY_API_URL)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
    <Layout>
        <div style={{backgroundColor:'black',
        height:'70vh',borderBottomRightRadius:'50% 42%'
        }}>
            <div className="container text-white pt-20 pl-20">
                <FiMail className="text-4xl"/>
                <h2 className="lg:text-4xl sm:text-lg pb-5 font-mono">nahueldevelop@gmail.com</h2>
                <FiSmartphone className="text-4xl"/>
                <h2 className="lg:text-4xl sm:text-lg font-mono">+54 261 253-7720</h2>
            </div>
        </div>

        <div style={{display:'flex', justifyContent:'center'}}>
        <div className="w-4/5 pt-20">
            <form className="bg-white border border-orange-500 shadow-md rounded px-8 pt-6 pb-8 mb-5"  onSubmit={sendEmail}>

                <div>
                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" >Ingrese su Nombre</label>
                    <input name="from_name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" type="text" placeholder="Nombre"/>
                </div>

                <div>
                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Ingrese su Email</label>
                    <input name="email_name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" type="email" placeholder="jane@example.com"/>
                </div>

                <div>
                    <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Ingrese su Consulta</label>

                    <textarea name="message_html" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500" type="email" placeholder="Deje aquí su consulta" rows="4" cols="50">
                    </textarea>
                </div>

                
                <button href="/contacto" type="submit" value="Send" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                    Enviar
                </button>
            </form>
        </div>
        </div>

    </Layout>
    )
}


export default ContactPage
