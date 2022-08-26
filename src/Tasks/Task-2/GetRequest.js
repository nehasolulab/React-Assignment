import './GetRequest.css';
import axios from "axios";
import React, { useEffect, useState } from "react";

const GetRequest = () => {
    const [info,setInfo] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect (()=>{
         async function personInfo(){
            await axios.get("https://randomuser.me/api/?results=12")
            .then(response=>{
                setInfo(response.data.results)
            })
           .then(info => {
            setIsLoading(false);
           })
        }

        
        personInfo()
    },[])


    return (
        <div className="mainContainer">
            <p><b>Task:</b> Making frontend application to call http get request and display data </p>
            {
                !isLoading ? (
                    <div className="row">
                        {
                            info.map((person,index)=>{
                                return(
                                    <div className="col-3 my-3" key = {index}>
                                        <div className="card">
                                            <div className="card-body d-flex">
                                            <img src={person.picture.thumbnail} className="card-img mb-auto me-3" alt="..." />
                                    <div>
                                        <p className='mb-1'><b>Name: </b>{person.name.first}</p>
                                        <p className='mb-1'><b>Address: </b>{person.location.city} , {person.location.country}</p>
                                        <p><b>ZipCode: </b>{person.location.postcode}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            </div>
                    )
                })
            }
            </div>
                ):<h2>.....</h2> 
            }
            
        </div>
    )
        }

export default GetRequest;