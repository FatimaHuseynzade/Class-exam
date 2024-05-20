import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "./assets/style.scss"
import axios from 'axios'


function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => setdata(data))
  }, [data])
  const deleteData = function (id) {
    axios.delete(`http://localhost:8000/products/${id}`)
      .then(res => console.log(res.data))
  }

  return (
    <div className='company'>
      <div className='company_container'>

        <div className='company_1'>
          <span>our menu</span>
          <h2>Discover Our Exclusive Menu</h2>
        </div>
        <div className='company_2'>
      <div className="container">
          <div className="row">


            {
              data.map(item => {
                return (
                  <>
                    <div className='col-lg-6 col-md-12 mb-3'>
                    <div className='company_item1'>
                      <div className='image'><img src={item.image}/></div>
                      <div className='text'>
                        <h3>{item.text}</h3>
                        <span>{item.content}</span>
                      </div>
                      <button className='btn1'  onClick={() => deleteData(item.id)}>Delete</button>
                      <span>{item.price}</span>
                    </div>

                    </div>


                  </>
                )
              })
            }
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App