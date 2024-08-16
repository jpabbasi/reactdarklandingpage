import './basicHeader.css'

const BasicHeader = ({ style, isSticky, children }) => {
  return (
    <div className={`basicHeader ${isSticky ? 'isSticky' : ''}`} style={{ ...style, top: isSticky ? '0' : '5rem'  }}>
    {children}
  </div>
  )
}

export default BasicHeader
