import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    /*  const service = useLoaderData();
     console.log(service); */
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h2 className='text-2xl text-gray-950 font-semibold mx-12 mt-12'>Services We Offer</h2>
            <div className='mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;