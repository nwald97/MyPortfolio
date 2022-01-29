import Image from 'next/image'
import ProfileImage from '../assets/newprofile-pic.png'
import WatchMe from './watchme';


// Replace the file profile-pic.png with your profile-pic
// I was too lazy to build the const for all the inputs of this component, but they are easy to find and replace it. I will improve it later.

export default function ProfileHero() {
  return (
    <section id="profile" >
        <section className="static justify-center" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1528357740142-8b3270ce10e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
    

              
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "50px" }}
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
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="absolute -top-20">
                        <Image
                        objectPosition="hover"
                        src={ProfileImage}
                        alt="Landscape picture"
                        width={200}
                        height={200}
                        placeholder="blur"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      < WatchMe />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">
                            Awards
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">
                            Projects</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          89
                        </span>
                        <span className="text-sm text-gray-500">Articles</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800">
                    Nathaniel Waldman
                  </h3>
                  <div className="text-sm leading-normal mt-0 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Victoria, BC
                  </div>
                  <div className="mb-2 text-gray-700 mt-2">
Aspiring Associate Product Manager                </div>
                  <div className="mb-0 text-gray-700">
Honours B.A grad with a cert in Product Management                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Hello, welcome to my website!
                    In 2019, I graduated from the University of Victoria with an Honours B.A degree in Sociology. Why did I study this major? Because I have always been curious about human behaviour, plus research and writing are two of my favourite hobbies. I planned on pursuing law school, and I even wrote the LSAT during the pandemic. However, after taking on the duties of a Product Owner while working for Used.ca, I realized that advocating for users was something that I loved. I figured that pursuing something I knew I loved was a better decision than law school, which I might enjoy. I decided to further my undergrad education with a certificate in Product Management through the digital education school, BrainStation. Currently, I am remotely working two part-time jobs: one as a Project Coordinator and the other as a Research Analyst. These roles are building on my experience in tech, and I am now actively seeking an entry-level position on a Product team. If you think I could be a good fit for your team, I would love to hear from you!

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </section>
  );
}
