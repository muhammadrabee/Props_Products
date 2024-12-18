import React from 'react'

const Child = ({Product}) => {
  return (
    <div>
       <div className="container-fluid">
                <div className="row mt-3">
                    {
                        Product.map((item,index) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={item.id}>
                                        
                                    <div className="card" style={{width:'100%'}}>
                                        <img src={item.image} className="card-img-top" alt={item.name} style={{aspectRatio:3/4,objectFit:'cover'}} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Only Rs:{item.Price}</p>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
       
    </div>
  )
}

export default Child
