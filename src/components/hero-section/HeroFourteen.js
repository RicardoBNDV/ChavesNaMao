import React, { useState } from "react";
import Link from "next/link";

export default function HeroFourteen() {
  return (
    <section className="digi-hero ptb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="digi-hero-text mt-5 mt-lg-0">
              <div>
                <span className="span-arrow">1 ano gratuito no portal</span>
                <img src="/arro-right.svg" alt="arrow" />
              </div>
              <h1 className="display-5 fw-bold mb-3">
                Nova parceria entre
                <span className="text-blue fw-bold"> BNDV </span>
                e o portal <span className="text-orange fw-bold"> Chaves na Mão </span>
              </h1>
              <p className="m-0">
                Chegou a hora de revolucionar a gestão dos seus veículos e ampliar seus horizontes automotivos!
                Estamos entusiasmados em apresentar a parceria exclusiva uma combinação perfeita para elevar sua
                eficiência e proporcionar a você um controle total sobre sua frota!
              </p>
              <div className="action-btns mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                <Link href="#promocao">
                  <a className="btn rounded-pill bg-orange me-3">
                    Saber Mais
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7 cool-md-6">
            <div className="digi-hero-img text-center position-relative mt-5">
              <iframe
                width="500"
                height="415"
                src="https://www.youtube.com/embed/0VVfm3U1Zi0"
                frameborder="0"
                title="Vídeo do YouTube"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
