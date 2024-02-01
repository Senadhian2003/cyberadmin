
import React from "react";
import {ref, onValue, getDatabase} from 'firebase/database';
import {Table} from 'react-bootstrap';
import  "../firebase.js"
const db = getDatabase();

export default class UserDetails extends React.Component{
    constructor(){
        super();
        this.state={
            tableData: []
        
    }
}
    componentDidMount(){
        const dbRef=ref(db,'cyber');

        onValue(dbRef,(snapshot)=>{
            let records=[];
            snapshot.forEach(childSnapshot=>{
                let keyName=childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key":keyName,"data":data});
                
            });
            this.setState({tableData:records});
        });
    }
    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>College</th>
                        <th>Email ID</th>
                        <th>Mobile Number</th>
                        <th>Technical Events</th>
                        <th>Non Technical Events</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((row,index)=>
                   {
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{row.data.name}</td>
                            <td>{row.data.college}</td>
                            <td>{row.data.email}</td>
                            <td>{row.data.phoneNumber}</td>
                            <td>{row.data.technicalEvents ? row.data.technicalEvents.join(', ') : 'N/A'}</td>
                            <td>{row.data.nonTechnicalEvents ? row.data.nonTechnicalEvents.join(', ') : 'N/A'}</td>
                           
                        </tr>
                    )
                   } )}
                </tbody>
            </Table>
        )
    }
}
