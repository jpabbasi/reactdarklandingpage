import './myStack.css'

const MyStack = ({stacks}) => {
  return (
    <div className="stack-container">
      <div className="stack-grid">
        {stacks.map((item, index) => (
            <div className="stack-item">
                <div className='stackDots' key={index}>
                <img src={item.icon} alt={item.name} />
                </div>
                <div className='stackTexts'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStack;
