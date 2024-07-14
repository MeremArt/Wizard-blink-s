/* eslint-disable */

import Image from "next/image";
import Faq from "@/components/Faq/Faq";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="dark:bg-zinc-800 fix-it">
        <section>
          {/* hero container  */}
          <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            {/* content container  */}
            <div className="flex flex-col space-y-12 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
              <h1 className="text-5xl font-bold text-center lg:text-4xl lg:max-w-4xl lg:text-left dark:text-white">
                Effortlessly Manage Meme Coin Links with
                <br /> <span className="text-wizard">Wizard's Eye&apos;s</span>
                <br /> No-code comfort, just click and share.
              </h1>
              <p className="text-xl text-center text-gray-400 lg:max-w-4xl lg:text-left tracking-wider  ">
                wizards's eye is a no-code platform designed for simplicity and
                efficiency. Easily copy and share meme coin links without any
                technical expertise.Blink's eye offers a seamless experience,
                ensuring your links are always ready to go. Embrace the comfort
                of no-code simplicity with Blink's eye
              </p>
            </div>
            {/* image */}
            <div className="mb-24 max-auto md:w-180 lg:mb-0 lg:w-1/2">
              <Image
                className="hover:scale-105 duration-300"
                src="/images/cuate.png"
                alt="feature"
                loading="lazy"
                width={600}
                height={600}
              />
            </div>
          </div>
        </section>
        <section>
          {/* How it works */}
          <div className="flex items-center justify-center mx-auto ">
            <h2 className="underline tracking-wide  decoration-wizard decoration-4 underline-offset-8   hover:decoration-4 text-4xl font-bold text-center text-black lg:text-4xl duration-200   dark:text-white ">
              How it works ?
            </h2>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* hero container  */}
          <div className="container flex flex-col mx-auto p-6 lg:flex-row">
            {/* content container  */}
            {/* image */}
            <div className="mb-24 max-auto md:w-180 lg:mb-0 lg:w-1/2">
              <Image
                className="hover:scale-105 duration-300 "
                src="/images/pana.png"
                alt="feature"
                loading="lazy"
                width={600}
                height={600}
              />
            </div>
            <div className="flex flex-col space-y-12 mb-44 lg:mt-16 lg:w-1/2 xl:mb-50">
              <h1 className="text-5xl font-bold text-center lg:text-4xl lg:max-w-4xl lg:text-right dark:text-white">
                Get <span className="text-wizard"> Started</span> and Connect
                Your Wallet
              </h1>
              <p className="text-xl text-center text-gray-400 lg:max-w-4xl lg:text-right tracking-wider  ">
                To begin using Wizard BLinks, the first step is to connect your
                digital wallet securely. By integrating your wallet with Wizard
                BLinks, you gain access to a seamless and efficient platform for
                generating meme coin BLinks on the Solana blockchain. This
                integration ensures that your transactions are secure and your
                interactions with the platform are streamlined, providing you
                with a hassle-free experience from the outset.
              </p>
            </div>
          </div>
        </section>
        <section>
          {/* hero container  */}
          <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
            {/* content container  */}
            <div className="flex flex-col space-y-12 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
              <h1 className="text-5xl font-bold text-center lg:text-4xl lg:max-w-4xl lg:text-left dark:text-white">
                Copy Your <span className="text-wizard">Blink's Link </span>and
                Share
              </h1>
              <p className="text-xl text-center text-gray-400 lg:max-w-4xl lg:text-left tracking-wider  ">
                After selecting your desired meme coin BLink on Wizard BLinks,
                the next step is to copy the generated BLink link. This link
                serves as your digital footprint, allowing you to share it
                across your social media channels, including Twitter and other
                platforms. Sharing your BLink link enables you to reach a
                broader audience, engaging potential supporters and
                collaborators interested in your meme coin project.
              </p>
            </div>
            {/* image */}
            <div className="mb-24 max-auto md:w-180 lg:mb-0 lg:w-1/2">
              <Image
                className="hover:scale-105 duration-300"
                src="/images/rafiki.png"
                alt="feature"
                width={600}
                height={600}
              />
            </div>
          </div>
        </section>
        <br />
        <section></section>
        <section
          className="bg-cover bg-center h-screen py-10   bg-no-repeat "
          style={{ backgroundImage: `url('/images/diff.png')` }}
        >
          <div>
            <h2 className=" cta flex text-3xl lg:text-5xl items-center justify-center mt-0 lg:mt-32  mx-auto tracking-wide leading-relaxed lg:leading-normal">
              Streamline Your Meme Coin BLink's <br /> Effortlessly with Our
              No-Code Solution!
            </h2>
            <div className=" flex flex-col  md:flex-row items-center justify-center mt-2 lg:mt-28 mx-auto lg:mx-0 space-x-2">
              <button className=" py-3 px-8 w-64 md:w-52 text-white bg-wizard rounded-full text-transform: capitalize hover:opacity-70 duration-200">
                Start now
              </button>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className="dark:bg-zinc-800 h-screen dark:text-white">
            <Faq className="mt-10" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
