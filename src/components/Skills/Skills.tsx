import SkillIcon from "./SkillIcon"
import {icons} from "./IconData"

const Skills = () => {
  return (
    <div className="flex flex-col justify-center  items-center pb-30">

      <p className="font-t-sans text-2xl mb-4 font-bold">My Skills</p>
      <div className="h-0.5 w-[95%] bg-charcoal mb-7"></div>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {icons.map((icon)=>{
          return <SkillIcon src={icon.src} alt={icon.alt} title={icon.title}></SkillIcon>
        })}
        
      </div>
    </div>
  )
}

export default Skills