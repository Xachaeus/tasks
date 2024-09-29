import React, { useState } from "react";
import {Form} from "react-bootstrap";

export function EditMode(): React.JSX.Element {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="edit-mode-form">

                <Form.Check type="switch" id="edit-mode-switch" label="Edit" checked={editMode} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setEditMode(event.target.checked)}}/>
                {editMode?
                <span>
                    <Form.Control value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setName(event.target.value)}}/> 
                    <Form.Check id="student" type="checkbox" label="Student" checked={isStudent} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setIsStudent(event.target.checked)}}/>
                </span>
                : null}
            </Form.Group>
            {!editMode? `${name} is ${isStudent? "" : "not"} a student.` : null}
        </div>
    );
}
