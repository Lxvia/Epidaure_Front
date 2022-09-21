import React from "react";
import { useAtom } from "jotai";
import { Navigate, NavLink } from "react-router-dom";
import { loggedAtom } from "../services/Atoms/user";
import Footer from "../components/Footer/Footer";
import createAccountLogo from "../assets/images/createaccount.png";

const Home = () => {
  const freeFeatures = [
    "Gestion de votre cabinet",
    "Création des comptes collaborateurs",
    "Gestion des plannings du personnel",
  ];
  const paidFeatures = [
    "Gestion de votre cabinet",
    "Création des comptes collaborateurs",
    "Gestion des plannings du personnel",
    "Carnet de contact professionel partagé",
    "Gestion de liste d'attente de patients",
  ];

  const [logged] = useAtom(loggedAtom);
  if (logged !== undefined) return <Navigate to="/dashboard" replace={true} />;

  return (
    <>
      <div className="leading-normal tracking-normal text-white gradient">
        <div className="pt-24">
          {/* <!-- Section 1 --> */}
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!--Left Col--> */}
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="text-2xl tracking-loose w-full">
                APPLICATION DE GESTION POUR VOTRE CABINET MEDICAL
              </p>
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Pour votre confort, par nos services
              </h1>
              <p className="leading-normal text-2xl mb-8">
                Epidaure est une application destinée au domaine médical qui
                permet aux practiciens d'un même cabinet de partager et de gérer
                facilement leurs emplois du temps grâce à un système de
                calendrier simple et efficace.
              </p>
              <a href="#abc">En savoir plus</a>
            </div>
            {/* <!--Right Col--> */}
            <div className="w-full md:w-3/5 py-6 text-center">
              <img className="w-full md:w-4/5 z-50" src="hero.png" alt="hero" />
            </div>
          </div>
        </div>

        {/* <!-- Separator 1 --> */}
        <div className="relative -mt-12 lg:-mt-24">
          <svg
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
            </g>
          </svg>
        </div>

        {/* <!-- Section 1 --> */}
        <section id="abc" className="bg-white border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Notre application
              </h2>
              <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-5/6 sm:w-1/3 p-6">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    1. Création d'un compte titulaire
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Demandez votre compte titulaire à notre équipe. Celui-ci
                    pourra à son tour, créer des comptes pour les{" "}
                    <b>collaborateurs</b> du cabinet.
                  </p>
                </div>
                <div className="w-full sm:w-2/3 p-6">
                  <img src={createAccountLogo} />
                </div>
              </div>
              <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-2/3 p-6 mt-6">
                  <img src={createAccountLogo} />
                </div>
                <div className="w-full sm:w-1/3 p-6 mt-6">
                  <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      2. Ajout des données de votre cabinet
                    </h3>
                    <p className="text-gray-600 mb-8">
                      L'espace titulaire vous permet de consulter et de gérer
                      directement les informations liées à votre <b>cabinet</b>{" "}
                      (Collaborateurs, bureaux, données du cabinet.. )
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-5/6 sm:w-1/3 p-6">
                  <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                    3. Gestion des plannings
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Notre outil de <b>plannings</b> vous permettra de connaître
                    à chaque moment de la journée l'utilisation des différents
                    salles de votre cabinet et les agendas de vos
                    collaborateurs, ainsi que des les modifier.
                    <br></br>
                  </p>
                </div>
                <div className="w-full sm:w-2/3 p-6">
                  <img src={createAccountLogo} />
                </div>
              </div>
            </div>
        </section>

        {/* <!-- Section 2: Pricing --> */}
        <section className="bg-gray-100 py-8">
          <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Tarif de l'application
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
              <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="w-full p-8 text-3xl font-bold text-center">
                    Basique
                  </div>
                  <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                  <ul className="w-full text-center text-base font-bold">
                    {freeFeatures.map((freeFeature) => (
                      <li className="border-b py-4">{freeFeature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="p-8 text-3xl font-bold text-center border-b-4">
                    Pro
                  </div>
                  <ul className="w-full text-center text-sm">
                    {paidFeatures.map((paidFeature) => (
                      <li className="border-b py-4">{paidFeature}</li>
                    ))}
                  </ul>
                  <button>Prochainement</button>
                </div>
              </div>
            </div>
            <button className="mx-auto center lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Je veux en savoir plus
            </button>
          </div>
        </section>
        {/* <!-- Change the colour #f8fafc to match the previous section colour -->
    <!-- Separator 2 --> */}
        <svg
          className="wave-top"
          viewBox="0 0 1439 147"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
              <g className="wave" fill="#f8fafc">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.200000003"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        {/* <!-- Hero 2 --> */}
        <section className="container mx-auto text-center py-6 mb-12">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Vous souhaitez en savoir plus?
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <h3 className="my-4 text-3xl leading-tight">
            N'hésitez pas à nous contacter, nous ferons un plaisir de vous
            répondre!
          </h3>
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Nous contactez!
          </button>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
