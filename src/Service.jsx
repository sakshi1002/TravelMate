import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Service = ()=>{

    return(
        <>
        <div className="my-5">
        <h1 className="text-center service-div">Service Page</h1>
        </div>
        <h2 className="text-center service-div">These Are Our Services</h2>
        <br/>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4 myservice">
                        {
                            Sdata.map((val, ind)=>{
                                return <Card
                                key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                text={val.text}
                                />;
    
                            })
                        }
                    
                    </div> 

                </div>

            </div>

        </div>
        </>
    );

}
 
export default Service;