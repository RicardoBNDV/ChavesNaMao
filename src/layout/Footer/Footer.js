import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';


const Footer = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className='footer-section'>


        <div
          className={`footer-bottom ${footerLight ? 'footer-light' : 'bg-dark'
            } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    &copy; 2023 <a href="https://www.bndv.com.br" target="_blank" rel="noopener noreferrer">BNDV - Banco Nacional de Veículos</a>. Todos os direitos reservados.
                  </p>
                </div>

              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <Link href="https://facebook.com/bndvbrasil">
                        <a>
                          <FaFacebook />
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="https://instagram.com/bndvoficial">
                        <a>
                          <FaInstagram />
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="https://www.tiktok.com/bndvoficial">
                        <a>
                          <FaTiktok />
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="https://br.linkedin.com/company/bndv">
                        <a>
                          <FaLinkedin />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
