// Import des composants Input et Textarea depuis leurs fichiers respectifs
import  Input  from "../../components/Form/Form";
import  Textarea  from "../../components/Textarea";

const Contact = () => {
  return (
    // Conteneur principal
    <div id="contact" className={`bg-slate-300/60 w-full min-h-screen flex items-center flex-col px-16 py-16`}>
      {/* Titre */}
      <h1 className="text-3xl text-center m-4 text-[#fe4d03] font-bold">Contact</h1>

      {/* Formulaire */}
      <form className="md:max-w-3xl w-full" action="https://getform.io/f/a36e1bd1-82a7-4727-aff5-636723ddb870" method="post" encType="multipart/form-data">
        {/* Deux champs d'entrée dans une grille */}
        <div className="md:grid md:grid-cols-2 gap-4 py-4">
          <Input AdditionalClasses="flex flex-col" type="text" label="Nom" name="last-name"/>
          <Input AdditionalClasses="flex flex-col" type="text" label="Prénom" name="first-name" />
        </div>

        <div className="">
          <Input AdditionalClasses="flex flex-col" type="email" label="Email" name="email" required />
          <Input AdditionalClasses="flex flex-col" type="text" label="Téléphone" name="phone" required />
          <Input AdditionalClasses="flex flex-col" type="text" label="Sujet" name="subject" required />
          {/* Zone de texte pour le message */}
          <Textarea AdditionalClasses="flex flex-col py-2" label="Message" cols="90" rows="3" name="message" required />

          {/* Bouton pour envoyer le formulaire */}
          <button className="text-white rounded-lg bg-blue-700 mt-4 p-4 w-full">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;