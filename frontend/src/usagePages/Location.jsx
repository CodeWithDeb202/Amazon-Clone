import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Location.css';

function Location({ setUserLocation }){
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return() => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const [pincode, setPincode] = useState('');

    const handleInputChange = (e) => {
        setPincode(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

            
            const res = await axios.get(
                `https://api.postalpincode.in/pincode/${pincode}`
            );
            const data = res.data;
            
            if(data[0].Status === 'Success') {
                const postOffice = data[0].PostOffice[0];

                const newLocation= {
                    district: postOffice.District,
                    pincode: pincode
                }
                
                setUserLocation(newLocation);
                localStorage.setItem('userLocation', JSON.stringify(newLocation));
                navigate('/');
            } else{
                alert('Invalid pincode');
            }
        } catch(err){
            alert('Something went wrong');
            console.log(err)
            console.log(pincode)
        }
        setPincode('');
    }


    return(
        <>
            <div className="location_page">
                <div className="location_page_cont">
                    <div className="heading">
                        <h4 style={{fontSize:'1rem'}}> <b>Choose your location </b></h4>
                        <Link to={'/'} style={{textDecoration:'none', color:'#000'}}><i className="fa-solid fa-xmark cross"></i></Link>
                    </div>

                    <div className="content">
                        <p style={{margin:'0', fontSize:'0.8rem'}} className='text-muted'>Select a delivery location to see product availability and delivery options</p>
                        <Link to="/signin"><button className="signinBtn" style={{width:'100%', padding:'0.5rem 3rem'}}><b>Sign in to see your addresses</b></button></Link>

                        <div className="para_line">
                            <div className="line"></div>
                            <p style={{margin:'0', fontSize:'0.7rem', width:'100%'}} className='text-muted'>or enter an Indian pincode</p>
                            <div className="line"></div>
                        </div>

                        <form onSubmit={handleSubmit} style={{width:'100%'}}>
                            <div className="location_input mt-3">
                                <input type="text" value={pincode} onChange={handleInputChange} />
                                <button type='submit'>Apply</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location;