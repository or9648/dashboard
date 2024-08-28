import React from 'react'
import'./Footer.css'
function Footer() {
 
    
  return (<>
   <div className="metrics">
      <div className="metric">
        <h2>Title 1</h2>
        <div className="value">Value 1</div>
        <div className="label">Label 1</div>
        <div className="progress">
          <div className="progress-bar" style={{ width: '50%' }}></div>
        </div>
      </div>
      <div className="metric">
        <h2>Title 2</h2>
        <div className="value">Value 2</div>
        <div className="label">Label 2</div>
        <div className="progress">
          <div className="progress-bar-pending" style={{ width: '50%' }}></div>
        </div>
      </div>
      <div className="metric">
        <h2>Title 3</h2>
        <div className="value">Value 3</div>
        <div className="label">Label 3</div>
        <div className="progress">
          <div className="progress-bar" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  </>
   
  )
}

export default Footer