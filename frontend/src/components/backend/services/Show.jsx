import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import { apiUrl, token } from '../../common/http'
import { Link } from 'react-router-dom'

const show = () => {

  const [services, setServices] = useState([]);

  const fetchServices = async () => {
      const res = await fetch(apiUrl+'services' ,{
          'method'  : 'GET',
          'headers' : {
              'Content-type' : 'application/json',
              'Accept' : 'application/json',
              'Authorization' : `Bearer ${token()}`
          }
      });
      const result = await res.json();
      setServices(result.data);
  }

      useEffect(() => {
        fetchServices();
      },[])

  return (
    <>
      <Header/>
          <main>
              <div className="container my-5">
              <div className='row'>
                <div className='col-md-3'>
                  <Sidebar/>
                </div>
                
                
                <div className='col-md-9'>
                    <div className="card shadow border-0">
                        <div className="card-body  p-4">
                            <div className="d-flex justify-content-between">
                                <h4 className='h5'>services</h4>
                                <Link to="/admin/services/create" className='btn btn-primary'>Create</Link>
                            </div>
                            <hr />

                            <table className='table table-striped'>
                                <thead>
                                  <tr>
                                     <th>ID</th>
                                     <th>Name</th>
                                     <th>Slug</th>
                                     <th>Status</th>
                                     <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    services && services.map(service => {
                                     return (
                                        <tr key={`service-${service.id}`}>
                                          <td>{service.id}</td>
                                          <td>{service.title}</td>
                                          <td>{service.slug}</td>
                                          <td>{service.status}</td>
                                          <td>
                                            {
                                              (service.status == 1) ? 'Active':'block'
                                            }
                                          </td>
                                          <td>
                                            <a href="" className='btn btn-primary btn-sm ms-2'>Edit</a>
                                            <a href="" className='btn btn-danger btn-sm ms-2'>DELETE</a>
                                          </td>
                                        </tr>
                                      )
                                    })
                                  }                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              </div>
              </div>
          </main>
      <Footer/>
    </>
  )
}

export default show