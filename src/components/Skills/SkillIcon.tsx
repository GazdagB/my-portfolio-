
interface SkillIconProps {
    src: string,
    alt: string,
    title: string
}

const SkillIcon: React.FC<SkillIconProps> = ({src, alt,title}) => {

  return (
    <div className="flex flex-col text-sm items-center justify-end gap-2 h-20">
        <img src={src} alt={alt} />
        <p className="font-mono">{title}</p>
    </div>
  )
}

export default SkillIcon