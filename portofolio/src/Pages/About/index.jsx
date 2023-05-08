
import logo from '../../../public/assets/pic.jpg'

const About = () => {

  const gradiantColor = 'bg-gradient-to-r from-violet-400/30 to-green-400/50';
  
  return (
    <section id='about' className={`h-auto max-w-full md:pl-20 p-4 py-16 ${gradiantColor}`}>
      <div className=' container'>
        <h1 className='text-4xl font-bold text-center text-[#fe4d03] pb-6'>A Propos
        </h1>
        <div>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
            <img src={logo} className=' rounded-lg w-full h-full object-contain' alt="my pic profil" />
            <p className=' pl-6 leading-10 text-gray-800'>

              Salut ! Je m'appelle Hatim et je suis né en 1991 à Casablanca. J'ai étudié dans le domaine de l'automobile et actuellement, je travaille en tant que conseiller commercial dans une concession automobile. Je suis en reconversion professionnelle dans le développement web. Après une formation intensive de 6 mois à l'école O'Clock, j'ai élargi mes horizons et acquis de nouvelles compétences qui me permettront d'aborder des projets ambitieux dans ce domaine passionnant.

              En dehors du travail, j'aime voyager et découvrir de nouveaux endroits. J'ai une passion pour la cuisine asiatique et la street food, et j'aime beaucoup expérimenter de nouvelles recettes. J'ai également une culture sportive assez développée et je pratique régulièrement plusieurs disciplines telles que le football et la course à pied. J'aime m'investir dans ces activités car elles me permettent de rester en forme et de me vider l'esprit après une journée de travail bien remplie.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About;