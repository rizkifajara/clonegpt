import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">CloneGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-6 w-6 text-white" />
            <h2 className="">Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Kapan Indonesia merdeka?"</p>
            <p className="infoText">"Tell me a funny joke"</p>
            <p className="infoText">"Buatkan cover letter untuk programmer"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <BoltIcon className="h-6 w-6 text-white" />
            <h2 className="">Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Change the ChatGPT Model to use"</p>
            <p className="infoText">"Store messages on Firebase's Firestore"</p>
            <p className="infoText">
              "Hot Toast notifications when ChatGPT is thinking"
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="h-6 w-6 text-white" />
            <h2 className="">Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"May generate incorrect information"</p>
            <p className="infoText">
              "May produce harmful and biased instruction"
            </p>
            <p className="infoText">
              "Limited knowledge of world and events after 2021"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
