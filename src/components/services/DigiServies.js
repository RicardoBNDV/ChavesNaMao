import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function DigiSerives() {
  return (
    <section className="digi-services pb-60 pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <div>
                <span className="span-arrow">Benefícios</span>
                <img src="/arro-right.svg" alt="arrow" />
              </div>
              <h2>
                Por que participar dessa
                <span className="text-blue"> parceria?</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-xl-3">
            <div className="digi-service-single mb-4 mb-xl-0">
              <img src="/icons/d-1.svg" alt="icon" />
              <h3 className="h5">Sinergia Poderosa</h3>
              <p>
              As empresas se complementam, 
              permitindo que você alcance a excelência na gestão veicular e nas 
              vendas de forma conjunta.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xl-3">
            <div className="digi-service-single mb-4 mb-xl-0">
              <img src="/icons/d-2.svg" alt="icon" />
              <h3 className="h5">Tecnologia de Ponta</h3>
              <p>
              Desfrute das mais recentes inovações em rastreamento veicular, 
              análise de dados e marketing digital.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xl-3">
            <div className="digi-service-single mb-4 mb-xl-0">
              <img src="/icons/d-3.svg" alt="icon" />
              <h3 className="h5">Economia Substancial</h3>
              <p>
              Aproveite a oportunidade de experimentar nossos serviços premium sem nenhum custo pelos 6 primeiros meses.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xl-3">
            <div className="digi-service-single mb-4 mb-xl-0">
              <img src="/icons/d-4.svg" alt="icon" />
              <h3 className="h5">Suporte Excepcional</h3>
              <p>
              Nossa equipe dedicada está pronta para te ajudar, 
              garantindo que você alcance o máximo de benefícios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
