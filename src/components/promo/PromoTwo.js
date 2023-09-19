/* eslint-disable @next/next/no-img-element */
import React from 'react';

const PromoTwo = () => {
  return (
    <>
      <section className="promo-section">
        <div className="container">
          <div className="customer-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-sm-6 promoTwo" style={{textAlign:'center'}}>
                  <div style={{verticalAlign:'middle',display:'inline-block',padding:'1rem'}}>
                  <img
                      src="/clients/logo-bndv-azul.png"
                      width="180"
                      alt="Logo BNDV"
                      className="img-fluid p-lg-12 p-sm-6"
                    />
                  </div>
                  <div style={{verticalAlign:'middle',display:'inline-block',padding:'1rem'}}>
                  <img
                      src="/clients/marca cnm - horizontal.png"
                      width="300"
                      alt="Logo Chaves na Mão"
                      className="img-fluid p-lg-12 p-sm-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoTwo;
