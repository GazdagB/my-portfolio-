const WorkWeb = ({title = "This Is A Placeholder Title"}) => {
  return (
    <div className="max-w-[300px]">
        <div className="w-full h-[214px] bg-gray-300 rounded-xl mb-3"></div>
        <p className="font-bold font-d-sans text-lg mb-3">{title}</p>
        <div className="flex items-center gap-2 mb-3">
            <div className="bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
            <div className="bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
            <div className="bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
            <div className="bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
        </div>
        <p className="max-w-full mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod dolor quasi id, nostrum itaque! Pariatur mollitia porro provident eum!</p>
        <div className="flex items-center gap-5">
            <button className="text-white bg-charcoal px-5 py-1 rounded-md">Live Site</button>
            <button>Github Repo</button>
        </div>
    </div>
  )
}

export default WorkWeb