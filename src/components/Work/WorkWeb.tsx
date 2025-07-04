const WorkWeb = ({title = "This Is A Placeholder Title",type = "Random type"}) => {

    const typeTranslated = translateType(type); 

  return (
    <div className="max-w-[300px]">
        <div className="w-full h-[214px] bg-gray-300 rounded-xl mb-3"></div>
        <p className="font-bold font-d-sans text-lg mb-1">{title}</p>
        <div className={`mb-3 bg-${typeTranslated?.colorTw} px-3 rounded-full w-fit`}>
            {typeTranslated?.type}
            </div>
        <div className="flex items-center gap-2 mb-1">
            <div className="bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
            <div className="bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
            <div className="bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
            <div className="bg-gray-300 rounded-full w-[25px] h-[25px]"></div>
        </div>
        <p className="max-w-full mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod dolor quasi id, nostrum itaque! Pariatur mollitia porro provident eum!</p>
        <div className="flex items-center gap-5">
            {type === "design" && (<button className="cursor-pointer text-white bg-charcoal px-5 py-1 rounded-md">Case Study</button>) }
            {type === "design" && (<button className="cursor-pointer">Bechance Link</button>)}
            {type === "web" && (<button className="cursor-pointer text-white bg-charcoal px-5 py-1 rounded-md">Live Site</button>)}
            {type === "web" && ( <button className="cursor-pointer">Github Repo</button>)}
            
           
        </div>
    </div>
  )
}

function translateType(type){
    if(type === "web"){
        return {
            type: "Wed Developement",
            colorTw: "secondary",
            colorHex: "#FB7D22",
        }
    } else if (type === "design"){
        return {
            type: "Graphic Design",
            colorTw: "primary",
            colorHex: "#80ABD5",
            
        }
    }
}

export default WorkWeb