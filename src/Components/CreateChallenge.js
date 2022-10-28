import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import uploadImg from '../assets/icons/bxs_cloud-upload.svg';

const CreateChallenge = () => {
    return (
        <div>
            <h3 className="bg-light p-5 fw-bold">Challenge Details</h3>
            <Form>
                <FormGroup>
                    <Label for="challengeName">
                        Challenge Name
                    </Label>
                    <Input
                        id="challengeName"
                        name="text"
                        placeholder="Enter the name of challenge"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="startDate">
                        Start Date
                    </Label>
                    <Input
                        id="startDate"
                        type="date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="endDate">
                        End Date
                    </Label>
                    <Input
                        id="endDate"
                        type="date"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="descriptionText">
                        Description
                    </Label>
                    <Input
                        id="descriptionText"
                        type="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <p>Image</p>
                    <Button color="light">Upload <img src={uploadImg}/></Button>
                </FormGroup>
                <FormGroup>
                    <p>Level Type</p>
                    <Button>Upload <img src={uploadImg}/></Button>
                </FormGroup>

            </Form>
            <Link to="/main" className="m-5"> <Button color="success" size="lg">Creat Challenge</Button> </Link>
        </div>
    )
}


export default CreateChallenge;