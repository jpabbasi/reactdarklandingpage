import Works from '../../../components/works/works'
import HoverButton from '../../../components/hoverButton/hoverButton'
import './selectedWork.css'

const SelectedWork = () => {
  return (
    <div className='selectedWork'>
        <div className='flexRow blackTitle'>
        <h1>Selected Work</h1>
        <HoverButton
        link={'/work'}
          title='SEE ALL'
          variant='arrow-black'
        />
      </div>
      <Works cards={2}/>
    </div>
  )
}

export default SelectedWork
