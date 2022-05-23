// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './Delivered.css';
// const Delivered = () => {

//     // const [user] = useAuthState(auth)
//     const [name, setName] = useState('');
//     const [email] = useState('');
//     const [address, setAddress] = useState('');
//     const [phone, setPhone] = useState('');
//     const [error] = useState('');

//     const handleNameBlur = event => {
//         setName(event.target.value);
//     };
//     const handleAddressBlur = event => {
//         setAddress(event.target.value);
//     };
//     const handlPhoneNumberBlur = event => {
//         setPhone(event.target.value);
//     };
//     const [Quantity, setQuantity] = useState({});
//     const { productId } = useParams();
//     const handleDeliveredProduct = event => {
//         event.preventDefault();
//         const delivered = { name, email, phone, address };
//         console.log(delivered);
//         const count = parseInt(Quantity.quantity - 1);
//         const quantity = { count };
//         // send data to the server;
//         const url = `http://localhost:5000/product/${productId}`;
//         fetch(url, {
//             method: 'PUT',
//             headers: {
//                 "content-type": 'application/json'
//             },
//             body: JSON.stringify(quantity)

//         })
//             .then(res => res.json())
//             .then(data => setQuantity(parseInt(data.count)))
//     };

//     return (
//         <div className='container mb-5'>
//             <div className='row'>
//                 <div className='form-container mb-4 col'>
//                     <div>
//                         <h2 className='form-title'>Delivered Information</h2>
//                         <form onSubmit={handleDeliveredProduct}>
//                             <div className="input-groups">
//                                 <label htmlFor="name">Name</label>
//                                 <input onBlur={handleNameBlur} type="text" name="Name" required />
//                             </div>
//                             <div className="input-groups">
//                                 <label htmlFor="email">Email</label>
//                                 <input style={{ backgroundColor: '#b5b6b7' }} readOnly type="email" name="email" required />
//                                 {/* value={user?.email}  */}
//                             </div>
//                             <div className="input-groups">
//                                 <label htmlFor="Address">Address</label>
//                                 <input onBlur={handleAddressBlur} type="text" name="Address" required />
//                             </div>
//                             <div className="input-groups">
//                                 <label htmlFor="Phone">Phone</label>
//                                 <input onBlur={handlPhoneNumberBlur} type="number" name="Phone" required />
//                             </div>
//                             <p style={{ color: 'red' }}>{error}</p>
//                             <input style={{ marginBottom: '8px' }} className='form-submit' type="submit" value="Delivered" />
//                         </form>
//                     </div>
//                 </div >
//             </div>
//         </div>
//     );
// };

// export default Delivered;