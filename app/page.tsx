import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center">
      <section className="flex flex-col md:flex-row items-center justify-between p-8">
        <div className="flex flex-col items-start max-w-md mr-8 md:mr-16">
          <h1 className="text-4xl font-bold mb-4">
            I'm building a school of the future.
          </h1>
          <p className="mb-8">
            Flashbang is a spaced repetition-first learning platform with
            interactive videos on futuristic subjects that are actually
            interesting. Read how I'm building it on my Substack.
          </p>
          <a
            href="https://flashbangapp.substack.com"
            className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Subscribe
          </a>
        </div>
        <div className="rounded-full flex items-center justify-center mt-8 md:mt-0 ml-8 md:ml-16 overflow-hidden">
          <Image src="/chatty.webp" alt="Chatty" width={512} height={512} />
        </div>
      </section>
    </main>
  );
}
