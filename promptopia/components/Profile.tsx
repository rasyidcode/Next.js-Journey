import PromptCard from "./PromptCard"

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className=" mt-5 text-5xl font-extrabold 
        leading-[1.5] text-black sm:text-6xl text-left">
        <span className="bg-gradient-to-r from-blue-600 
            to-cyan-600 bg-clip-text text-transparent">
          {name} Profile
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl 
        max-w-2xl text-left">
        {desc}
      </p>
      <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6
        xl:columns-3">
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleEdit={() => handleEdit && handleEdit(prompt)}
            handleDelete={() => handleDelete && handleDelete(prompt)}/>
        ))}
      </div>
    </section>
  )
}

export default Profile