import React from 'react'
import Residence from '../residence/Residence'
import ResidenceForm from '../residence/ResidenceForm'

const Admin = () => {
  return (
    <div className='grid-2'>
      <div>
        <ResidenceForm/>
      </div>
      <div>
      <Residence/>
      </div>
    </div>
  )
}

export default Admin