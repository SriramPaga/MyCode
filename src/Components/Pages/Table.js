import React from 'react'
import data from "./Mock-data.json";
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


const Table = () => {
  // function Table() {
    const history= useNavigate();
 const[ contacts ] = React.useState(data);
  return (
    <div><table class="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Email</th>
        <th scope="col">Actions</th>

      </tr>
    </thead>
    <tbody>
       {contacts.map((contacts) => (<tr>
        <th scope="row">{contacts.id}</th>
        <td>{contacts.fullName}</td>
        <td>{contacts.address}</td>
        <td>{contacts.phoneNumber}</td>
        <td>{contacts.email}</td>
        <td><Button onClick={()=>history('/EditTable')} variant="light">Edit</Button> <Button variant="outline-light">Delete</Button></td>
        
      </tr> ) )}
  
      {/* <tr>
        <th scope="row">2</th>
        <td>0002</td>
        <td>Phone</td>
        <td>Pending</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr> */}
     
    </tbody>
  </table></div>
  );
};

export default Table