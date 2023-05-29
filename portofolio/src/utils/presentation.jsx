import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import cv from '../../public/assets/ERRAGRAGUI HATIM.pdf';

const Tableau = () => {
  return (
    <table className="w-full border-collapse">
      <tbody>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Prénom:</td>
          <td className="py-4 px-6 border-b">Hatim</td>
        </tr>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Année de naissance:</td>
          <td className="py-4 px-6 border-b">1991</td>
        </tr>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Lieu de naissance:</td>
          <td className="py-4 px-6 border-b">Casablanca</td>
        </tr>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Domaine d'études:</td>
          <td className="py-4 px-6 border-b">Automobile</td>
        </tr>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Profession actuelle:</td>
          <td className="py-4 px-6 border-b">Conseiller commercial dans une concession automobile</td>
        </tr>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Reconversion professionnelle:</td>
          <td className="py-4 px-6 border-b">Développement web</td>
        </tr>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Formation:</td>
          <td className="py-4 px-6 border-b">École O'Clock (formation intensive de 6 mois)</td>
        </tr>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Centres d'intérêt:</td>
          <td className="py-4 px-6 border-b">Voyages, cuisine asiatique, street food, football, course à pied</td>
        </tr>
        <tr>
          <td className="py-4 px-6 bg-gray-200 border-b font-bold">Liens:</td>
          <td className="py-4 px-6 border-b">
            <a href="https://github.com/TEAMTIM1" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer inline-block mr-2" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/er-ragragui-hatim" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer inline-block mr-2" size={20} />
            </a>
            <a className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs w-12" href={cv} download>
              Télécharger mon CV
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Tableau;
