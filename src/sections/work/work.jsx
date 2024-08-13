import './work.css'
import Works from '../../components/works/works'
import {milestones} from './data'

const Work = () => {
  return (
    <div>
    <div className='centeredText workPage flexColumn'>
      <h3 className='gradientBackground'>
        WORK
      </h3>
      <h1>Take a look at my latest projects and see how I can help bring your vision to life.</h1>
      <div className='flexRow milestones'>
        {milestones.map((milestone) => (
        <div className='milestone flexColumn'>
        {milestone.icon}
        <p>{milestone.title}</p>
        </div>
        ))}
      </div>
      <div className='worksFlex'>
        {<Works/>}
      </div>
    </div>
    </div>
  )
}

export default Work
