import Input from "../../components/Form/Form";
import Textarea from "../../components/Textarea";

const Contact = () => {
  const gradiantColor = 'bg-gradient-to-r from-violet-400/30 to-green-400/50';
  return (
    <div
      id="contact"
      className={`m-auto w-full h-screen flex items-center flex-col px-16 py-16 ${gradiantColor}`}
    >
      <h1
        className="text-3xl text-center m-4 text-[#fe4d03] font-bold"
      >
        Contact
      </h1>

      <form
      className=" md:max-w-3xl w-full"
        action="https://getform.io/f/a36e1bd1-82a7-4727-aff5-636723ddb870"
        method="post"
        encType="multipart/form-data"
      >
        <div
          className="md:grid md:grid-cols-2 gap-4 py-4 "
        >
          <Input
            AdditionalClasses="flex flex-col"
            type="text"
            label="Nom"
            name="last-name"
          />
          <Input
            AdditionalClasses="flex flex-col"
            type="text"
            label="Prénom"
            name="first-name"
          />
        </div>
        <div className="">
          <Input
            AdditionalClasses="flex flex-col"
            type="email"
            label="Email"
            name="email"
            required
          />
          <Input
            AdditionalClasses="flex flex-col"
            type="text"
            label="Téléphone"
            name="phone"
            required
          />
          <Input
            AdditionalClasses="flex flex-col"
            type="text"
            label="Sujet"
            name="subject"
            required
          />
          <Textarea
            AdditionalClasses="flex flex-col py-2"
            label="Message"
            cols="90"
            rows="8"
            name="message"
            required
          />
          <button
            className="hover:bg-green-700 text-white rounded-lg bg-blue-700 mt-4 p-4 w-full"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
