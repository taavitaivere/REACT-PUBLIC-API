import React, { useEffect, useState } from "react";
import {Table,} from "semantic-ui-react";
import axios from "axios";


export default function Read() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://63274caeba4a9c475334aec1.mockapi.io/crud')
            .then((res) => {
                setData(res.data)
            })
    })
    return (
        <div className="table">
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Avatar</Table.HeaderCell>
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
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

        </div>
    );
}