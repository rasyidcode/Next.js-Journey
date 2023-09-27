import Feed from "@/components/Feed"

const Home = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center">
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.5] 
                text-black sm:text-6xl text-center">
                Discover & Share
                <br className="max-md:hidden" />
                {/* <br /> */}
                <span className="bg-gradient-to-r from-amber-500 
                    via-orange-600 to-yellow-600 bg-clip-text 
                    text-transparent text-center">{' '}AI-Powered Prompts</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 sm:text-xl 
                max-w-2xl text-center">
                Promptiopia is an open-source AI prompting tool
                for modern world to disover, create and share
                creative prompts
            </p>

            <Feed />
        </section>
    )
}

export default Home