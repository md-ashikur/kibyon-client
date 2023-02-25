import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { BsInstagram } from 'react-icons/bs';



const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="footer grid grid-cols-5 gap-10 px-20 py-20 bg-primary text-base-100 rounded-tl-[90px]">
        <div>
          <img src={logo} alt="" className="w-40" />

          <p>
            Le nouveau conseil en entreprise pour tous Cabinet de conseil en
            Stratégie d'entreprise et organisation Rencontrons-nous, …. Si
            besoin
          </p>
        </div>

        <div className="px-4">
          <span className="font-semibold text-xl text-secondary">Contactez-nous</span>
          <p className="">
            Rencontrons-nous, à Paris ou Orléans où nous sommes principalement
            basés, et dans toute la france si besoin
          </p>
          <p className="">71 route de la prieurée 45100 Germigny des prés</p>
          <a href="mailto:contact@kibyon.fr" className="border-b-2 border-secondary">contact@kibyon.fr</a>
          <a href="tel:+33 (0)645142367" className="">+33 (0)645142367</a>
        </div>


        <div>

          <span className="font-semibold text-xl text-secondary">Navigation</span>
          <Link to="" className="link link-hover">Accueil</Link>
          <Link to="" className="link link-hover">Nos offres</Link>
          <Link to="" className="link link-hover">Contact</Link>
          <Link to="" className="link link-hover">A propos de Kibyon</Link>
        </div>
        <div className="col-span-2">
          <span className="font-semibold  text-xl text-secondary">Rejoignez notre communauté</span>
          <Link to="" className="link link-hover"><BsInstagram/></Link>
          
        </div>
      </footer>

      <footer className="footer px-10 py-4 border-t bg-primary text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a></a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;