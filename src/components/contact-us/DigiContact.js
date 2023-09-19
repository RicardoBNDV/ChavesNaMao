import React from 'react';

export default function DigiContact() {
  return (
    <section className="digi-contact pt-60 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="digi-contact-left">
              <div>
                <span className="span-arrow">Experimente Agora!</span>
                <img src="/arro-right.svg" alt="arrow" />
              </div>
              <h2 className="mb-3">
                Garanta <span className="text-blue">1 ano</span> de <span className="text-orange">Chaves na Mão</span>!
              </h2>
              <p>
              Não perca tempo, essa oferta é por tempo limitado! Junte-se a nós nessa jornada de sucesso automotivo.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="digi-contact-form-bg position-relative">
              <ul className="list-unstyled d-none d-xl-block m-0">
                <li></li>
                <li></li>
              </ul>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome da Loja"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <button className="mt-4 btn rounded-pill bg-orange">
                      Experimentar agora!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
