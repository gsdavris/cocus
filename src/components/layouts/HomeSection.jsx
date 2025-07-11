/* eslint-disable linebreak-style */
import Link from 'next/link';
import Slider from '../slider/Slider';
import AnimationOnView from '../animations/AnimationOnView';
import AnimationLink from '../animations/Animationlink';
import {
  motion,
} from 'framer-motion';
import { getIconComponentByName } from '../../utils/icons-map';
import { ShoppingCartIcon, BriefcaseIcon, UserGroupIcon, TrendingUpIcon, FingerPrintIcon, BadgeCheckIcon, PaperAirplaneIcon } from '@heroicons/react/solid';

const HomeSection = () => {
  return (
    <>
        <section className="pb-20 bg-beige">
          <div className="lg:container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <Link href="/contact">
                  <motion.div
                  whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    scale: 1.1,
                    transition: {
                      duration: .15
                    }
                  }}
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer -mt-24">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-gold">
                          <BriefcaseIcon />
                      </div>
                      <h6 className="text-3xl text-brown font-light">Cocus Wholesale</h6>
                      <p className="mt-2 mb-4 text-gray-500">
                        Συνεργασία και χονδρική για χώρους μαζικής εστίασης, ξενοδοχεία,
                        markets, bakery και ζαχαροπλαστεία.
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <a href="https://e-cafe.gr/" target="_blank"  rel="noopener">
                  <motion.div
                  whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    scale: 1.1,
                    transition: {
                      duration: .15
                    }
                  }}
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer md:-mt-24">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-brown">
                        <ShoppingCartIcon />
                      </div>
                      <h6 className="text-3xl text-brown font-light">Cocus Retail</h6>
                      <p className="mt-2 mb-4 text-gray-500">
                        Επισκεφτείτε το καφεκοπτείο ή το ηλεκτρονικό μας κατάστημα
                        και επιλέξτε τη γεύση που σας ταιριάζει.
                      </p>
                    </div>
                  </motion.div>
                </a>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <Link href="/contact">
                  <motion.div
                  whileHover={{
                    position: 'relative',
                    zIndex: 1,
                    scale: 1.1,
                    transition: {
                      duration: .15
                    }
                  }}
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg cursor-pointer md:-mt-24">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-beige">
                        <FingerPrintIcon />
                      </div>
                      <h6 className="text-3xl text-brown font-light">Private Label</h6>
                      <p className="mt-2 mb-4 text-gray-500">
                        Δημιουργήστε τον δικό σας καφέ! Καβουρντίζουμε
                        και σας προσφέρουμε προϊόντα με το δικό σας εμπορικό σήμα.
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-brown p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <UserGroupIcon />
                </div>
                <h3 className="text-3xl mb-2 font-light leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600">
                  COCUS Πρόγραμμα συνεργασίας.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-600">
                  Εξοπλισμός και τεχνική υποστήριξη, συνεχής εκπαίδευση
                  και προϊοντική ανάπτυξη. Προσωπική εξυπηρέτηση, παραγγελιοληψία
                  και έγκαιρη διανομή.
                </p>
                <AnimationLink path="/contact" className="inline font-semibold text-lg text-gray-700 my-8">
                  Επικοινωνήστε μαζί μας!
                </AnimationLink>
              </div>
              <AnimationOnView
              idValue='element1'
              className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-8 md:mt-0">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-brown">
                  <img
                    alt="..."
                    src="https://api.cocus.gr/wp-content/uploads/2021/10/roasting.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-brown  fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-3xl font-light text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Η Cocus βρίσκεται δίπλα σε κάθε συνεργάτη της 
                      στον χώρο της καφεστίασης καλύπτοντας όλες του 
                      τις ανάγκες.
                    </p>
                  </blockquote>
                </div>
              </AnimationOnView>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="lg:container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <AnimationOnView
              idValue='element2'
              className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://api.cocus.gr/wp-content/uploads/2021/10/969.jpg"
                />
              </AnimationOnView>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 my-6 shadow-lg rounded-full bg-gold transform transition-all hover:scale-125">
                    <TrendingUpIcon />
                  </div>
                  <h3 className="text-3xl text-gold font-light">High-end Εξοπλισμός</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-500">
                    Εξειδικευμένο τμήμα service & συντήρησης μηχανημάτων. 
                    Τεχνική υποστήριξη για όλες τις μηχανές espresso και τους μύλους άλεσης που παρέχουμε.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="w-12 h-12 items-center justify-center inline-block p-2 uppercase rounded-full text-white bg-gold mr-3">
                            <FingerPrintIcon />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Μύλοι άλεσης υψηλής απόδοσης
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="w-12 h-12 items-center justify-center inline-block p-2 uppercase rounded-full text-white bg-gold mr-3">
                            <BadgeCheckIcon />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Μηχανές espresso τελευταίας τεχνολογίας
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="w-12 h-12 items-center justify-center inline-block p-2 uppercase rounded-full text-white bg-gold mr-3">
                            <PaperAirplaneIcon />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-500">
                            Αναλώσιμα υψηλής αισθητικής
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-4 pb-4">
            <div className="w-full flex items-center justify-center">
              <Slider />
            </div>
        </section>
        <section className="pt-20 pb-48">
          <div className="lg:container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl text-gold font-light">Cocus Family</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-500">
                  Στην COCUS είναι οι άνθρωποι που κάνουν τη διαφορά.
                  Άνθρωποι με το ίδιο πάθος και προσανατολισμό στην εξέλιξη και ανάπτυξη του καφέ.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/team-3-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-3xl font-semibold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-light">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-red-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'youtube' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-blue-400 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'twitter' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-blue-700 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'facebook' ) }
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://api.cocus.gr/wp-content/uploads/2021/10/gikas.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-3xl font-semibold">Στέλιος Γκίκας</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-light">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      {/* <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-blue-400 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'twitter' ) }
                      </button> */}
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-blue-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'facebook' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-pink-500 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'instagram' ) }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://api.cocus.gr/wp-content/uploads/2021/10/barotas.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-3xl font-semibold">Γιώργος Μπαρώτας</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-light">
                      Coffee Specialist
                    </p>
                    <div className="mt-6">
                    <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-blue-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'facebook' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10  bg-pink-500 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'instagram' ) }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/team-4-470x470.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-3xl font-semibold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-gray-400 uppercase font-light">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-pink-500 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'instagram' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-red-600 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'youtube' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-blue-400 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'twitter' ) }
                      </button>
                      <button
                        className="inline-flex items-center justify-center align-center p-2 w-10 h-10 bg-blue-700 text-white rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        { getIconComponentByName( 'facebook' ) }
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        </>
    );
};

export default HomeSection;
