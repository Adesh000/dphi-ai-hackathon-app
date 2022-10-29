import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateChallenge = () => {
    const [challengeData, setChallengeData] = useState({
        challengeName: "",
        startDate: "",
        endDate: "",
        descriptionText: "",
        image: "",
        levelType: "",
    })
    let id, value;
    const  getChallengeData = (e) => {
        id = e.target.id;
        value = e.target.value;

        setChallengeData({...challengeData, [id]: value})
    }
    
    const postData = async(event) => {
        event.preventDefault()
        
        const {
            challengeName,
            startDate,
            endDate,
            descriptionText,
            image,
            levelType,
        } = challengeData;

        if( challengeName && startDate  && endDate && descriptionText && image && levelType ){

            const response = await fetch('https://dphiapp-52209-default-rtdb.firebaseio.com/dphiapp.json', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    challengeName,
                    startDate,
                    endDate,
                    descriptionText,
                    image,
                    levelType,
                })
            }
            )
    
            if(response) {
                setChallengeData({
                    challengeName: "",
                    startDate: "",
                    endDate: "",
                    descriptionText: "",
                    image: "",
                    levelType: "",
                })
    
                alert("Data sent Successfully");
            }
        } else {
            alert("Please fill Data");
        }
    }



    return (
        <div>
            <h3 className="bg-light p-5 fw-bold">Challenge Details</h3>
            <Form method="POST" className="p-5">
                <FormGroup>
                    <Label for="challengeName" className="fw-bold">
                        Challenge Name
                    </Label>
                    <Input
                        id="challengeName"
                        name="text"
                        placeholder="Enter the name of challenge"
                        value={challengeData.name} 
                        onChange={getChallengeData}
                        type="text"
                        className="w-25"
                    />
                </FormGroup>
                <FormGroup>
                    < Label
                    for = "startDate"
                    className = "fw-bold" >
                        Start Date
                    </Label>
                    <Input
                        id="startDate"
                        type="date"
                        className = "w-25"
                        value = {challengeData.startDate} 
                        onChange={getChallengeData}
                    />
                </FormGroup>
                <FormGroup>
                    < Label
                    for = "endDate"
                    className = "fw-bold" >
                        End Date
                    </Label>
                    <Input
                        id="endDate"
                        type="date"
                        className = "w-25"
                        value={challengeData.endDate} 
                        onChange={getChallengeData}
                    />
                </FormGroup>
                <FormGroup>
                    < Label
                    for = "descriptionText"
                    className = "fw-bold" >
                        Description
                    </Label>
                    <Input
                        id="descriptionText"
                        type="textarea"
                        className = "w-25"
                        value={challengeData.description} 
                        onChange={getChallengeData}
                    />
                </FormGroup>
                <FormGroup>
                    <p className="fw-bold fs-6">Image</p>
                    <Input type="url" id="image" className="w-25" placeholder="Link here " value={challengeData.image} onChange={getChallengeData}/>
                </FormGroup>
                <FormGroup>
                    <p className="fw-bold fs-6"> Level Type </p>
                    <select name="level" id="levelType" value={challengeData.levelType} 
                    onChange={getChallengeData}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </FormGroup>
                <Button color="primary" size="sm" onClick={postData}>Submit</Button>
            </Form>
            <Link to="/" className="m-5"> <Button color="success" size="lg">Creat Challenge</Button> </Link>
        </div>
    )
}


export default CreateChallenge;