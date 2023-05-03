import Input from "../../components/Form/Form";
import Textarea from "../../components/Textarea";

const Contact = () => {
  return (
    <div
      id="contact"
      className="m-auto max-w-[1040px] px-16 py-16"
    >
      <h1
        className="text-3xl text-center m-4 text-[#001b5e] font-bold"
      >
        Contact
      </h1>

      <form
        action="https://getform.io/f/a36e1bd1-82a7-4727-aff5-636723ddb870"
        method="post"
        encType="multipart/form-data"
      >
        <div
          className="grid md:grid-cols-2 gap-4 py-4"
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
            rows="10"
            name="message"
            required
          />
          <button
            className="hover:bg-green-700 hover:text-white rounded-lg w-full bg-blue-700 mt-4 p-4 text-gray-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
