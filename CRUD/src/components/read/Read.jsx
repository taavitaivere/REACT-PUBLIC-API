import React, { useEffect, useState } from "react";
import {Table, Button} from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Read() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://63274caeba4a9c475334aec1.mockapi.io/crud')
            .then((res) => {
                setData(res.data)
            })
    })
    const setID = (id) => {
        localStorage.setItem('id', id)
    }
    const deleteData = (id) => {
        axios.delete(`https://63274caeba4a9c475334aec1.mockapi.io/crud/${id}`)
            .then((res) => {
                setData(res.data)
            }).then(() => navigate('/read'))
    }
    return (
        <div className="table">
            <Link to={`/create`}>
                <Button onClick={() => navigate('/create')}>Create</Button>
            </Link>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Avatar</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {data.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.fName}</Table.Cell>
                                <Table.Cell>{data.lName}</Table.Cell>
                                <Table.Cell><img className="img" src={data.avatar} alt=""/></Table.Cell>
                                <Table.Cell>
                                    <Link to={`/update`}>
                                        <Button className="update" onClick={() => setID(data.id)}>Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to={`/delete/`}>
                                        <Button className="delete" onClick={() => deleteData(data.id)}>Delete</Button>
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

        </div>
    );
}
