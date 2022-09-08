import React from 'react'
import './style.footer/footer.css'

const Footer = () => {
    return (
        <footer className='footer-conteiner'>
            <hr className='footer-hr'/>
            <div>
                <div className='footer_conteiner-2'>
                    <div className='footer_conteiner-3'>
                        <h2 className='footer_h2'>Guarante</h2>
                        <div>
                            <h3 className='footer_h3'>Terms and Conditions</h3>
                            <h3 className='footer_h3'>Warranty terms</h3>
                            <h3 className='footer_h3'>Privacy Policy</h3>
                            <h3 className='footer_h3'>Shipments to province</h3>
                            <h3 className='footer_h3'>Payment method</h3>
                        </div>
                    </div>
                    <div className='footer_conteiner-3'>
                        <h2 className='footer_h2'>About us</h2>
                        <div>
                            <h3 className='footer_h3'>Technical support</h3>
                            <h3 className='footer_h3'>Work with us</h3>
                            <h3 className='footer_h3'>Contact Form</h3>
                            <h3 className='footer_h3'>Our premises</h3>
                            <h3 className='footer_h3'>Sobre Nosotros</h3>
                        </div>
                    </div>
                    <div className='footer_conteiner-3'>
                        <h2 className='footer_h2'>Locate us</h2>
                        <div>
                            <h3 className='footer_h3'>store: C.C. Centro Lima Av. Bolivia 148 Int 552 553</h3>
                            <h3 className='footer_h3'>Central (01) 425 - 1191</h3>
                        </div>
                    </div>
                    <div className='footer_conteiner-3'>
                        <h2 className='footer_h2'>Contacts</h2>
                        <div>
                            <h3 className='footer_h3'>ventasweb@impacto.com.pe</h3>
                            <h3 className='footer_h3'>ventas.corp@impacto.com.pe</h3>
                            <h3 className='footer_h3'>online@impacto.com.pe</h3>
                        </div>
                    </div>
                </div>
                <div className='footer-div'>
                    <h3 className='footer-created'>Created by: Junior Programmer - Alexander Wilfredo Munive Choque</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer