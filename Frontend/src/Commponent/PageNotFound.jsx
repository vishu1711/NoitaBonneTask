import React from 'react'
import Layout from './Layout'

const PageNotFound = () => {
  return (
    <>
      <Layout>
        <div className='container-fluid '>
          <div className="col-md-4 offset-md-4 text-center">
            <h1>Error : 404</h1>
            <h1 >PageNotFound page</h1>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PageNotFound
