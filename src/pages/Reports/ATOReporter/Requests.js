import React from 'react'
import { useNavigate } from 'react-router-dom';

const requests = [
  {requestID: 1, requestDescription: "Request Alpha", requestedDate: "11-02-2023", issuedDate: "15-02-2023", status: "Pending"},
  {requestID: 2, requestDescription: "Request Alpha", requestedDate: "11-02-2023", issuedDate: "15-02-2023", status: "Finished"},
  {requestID: 4, requestDescription: "Request Alpha", requestedDate: "11-02-2023", issuedDate: "15-02-2023", status: "Finished"},
  {requestID: 5, requestDescription: "Request Alpha", requestedDate: "11-02-2023", issuedDate: "15-02-2023", status: "Pending"},
  {requestID: 6, requestDescription: "Request Alpha", requestedDate: "11-02-2023", issuedDate: "15-02-2023", status: "Pending"},
  {requestID: 7, requestDescription: "Request Alpha", requestedDate: "11-02-2023", issuedDate: "15-02-2023", status: "Finished"},
]

const customers = [{id: 1, companyName: 'Company 1', ABN: '0123456789'},
                    {id: 2, companyName: 'Company 2', ABN: '0123456789'},
                    {id: 3, companyName: 'Company 3', ABN: '0123456789'},
                    {id: 4, companyName: 'Company 4', ABN: '0123456789'},
                    {id: 5, companyName: 'Company 5', ABN: '0123456789'},
                    {id: 6, companyName: 'Company 6', ABN: '0123456789'},
                    ]

export default function Requests() {
  const navigate = useNavigate();
  
  function handleClick(requestId) {
    navigate(`/reports/ATOrequests/${requestId}`);
  }

  return (
      <table class="table table-striped table-dark table-hover" style={{marginTop: '30px'}}>
        <thead>
          <tr>
            <th scope="col"  style={{"color": "#ee7170"}}>RequestID</th>
            <th scope="col" style={{"color": "#ee7170"}} >Request Description</th>
            <th scope="col" style={{"color": "#ee7170"}}>Request date</th>
            <th scope="col" style={{"color": "#ee7170"}}>Issued date</th>
            <th scope="col" style={{"color": "#ee7170"}}>Status</th>
          </tr>
        </thead>
          <tbody>
            {requests.map((request) => (
                <tr onClick={() => handleClick(request.requestID)}>          
                    <td>{request.requestID}</td>
                    <td>{request.requestDescription}</td>
                    <td>{request.requestedDate}</td>
                    <td>{request.issuedDate}</td>
                    <td>{request.status}</td>
                </tr>
            ))}
        </tbody>
      </table>
  )
}
