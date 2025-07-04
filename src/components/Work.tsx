import ButtonBar from "./Work/ButtonBar"
import WorkWeb from "./Work/WorkWeb"

// TODO: Add Mocked Work Pieces
const Work = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-[450px] items-center mb-15">
            <h2 className="text-4xl font-bold items-center mb-5">My Work</h2>
            <p className="text-center">Check my latest portfolio work projects. If you have any questions feel free to ask me for more information.</p>
            <ButtonBar></ButtonBar>
        </div>

        <div className="flex justify-center align-center flex-wrap gap-4">
            <WorkWeb type="design"></WorkWeb>
            <WorkWeb type="web"></WorkWeb>
            <WorkWeb></WorkWeb>
            <WorkWeb></WorkWeb>
        </div>
    </div>
  )
}

export default Work