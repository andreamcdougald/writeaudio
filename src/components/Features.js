/* This example requires Tailwind CSS v2.0+ */
import feature1 from "../images/feature1.png";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";

export default function Features() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 text-left	">
      {/* next feature */}
      <div className="mt-4">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  The easiest way to self-publish an audiobook.{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Whether you’ve already writen a book or plan to get started,
                  Writeaudio makes it easy to add an audiobook version to your
                  revenue stream.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature1}
                alt="Achieve your writing goals"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next feature */}
      <div className="relative mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6 pb-11 pt-11">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  The audio version of a premium hardcover.{" "}
                </h2>

                <p className="mt-4 text-lg text-gray-500 ">
                  You don’t need a production team to construct a professional
                  audiobook. Upload your pre-written work or write in the app
                  and hear your stories come alive as you go. Writeaudio
                  seemlessly creates chapters for you.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full  lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature2}
                alt="Atmospheres to help you focus"
              />
            </div>
          </div>
        </div>
      </div>
      {/* next feature */}
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Your story, told your way.{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Choose from a growing library of 907 natural sounding voices
                  with humanlike intonation in 142 languages and accents powered
                  by machine learning technology.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={feature3}
                alt="Achieve your writing goals"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
