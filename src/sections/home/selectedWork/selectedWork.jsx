import Works from '../../../components/works/works'
import HoverButton from '../../../components/hoverButton/hoverButton'
import './selectedWork.css'

const SelectedWork = () => {
  return (
    <div>
        <div className='flexRow blackTitle'>
        <h1>Selected Work</h1>
        <HoverButton
          title='SEE ALL'
          variant='arrow'
        />
      </div>
      <Works/>
    </div>
  )
}

export default SelectedWork
