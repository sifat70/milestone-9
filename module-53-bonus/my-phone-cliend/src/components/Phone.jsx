import { useLoaderData } from "react-router-dom";


const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <h1>{phone.name}</h1>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;