import { find } from "lodash";
import React, {Fragment, useState} from "react";
import { Alert, Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import MyCounter from "./MyCounter";
// const _ = require('lodash');
// const languages = [{"IsiXhosa": "Molo, "}, {"English": "Hello, "}, {"Spanish": "Ola, "}, {"Zulu" : "Sawubona, "}]
const languages = [
    {
        name: 'IsiXhosa', greeting: "Molo, "
    },
    {
        name: 'English', greeting: "Hello, "
    },
    {
        name: 'Spanish', greeting: "Ola, "
    },
    {
        name: 'Zulu', greeting: "Sawubona, "
    }
]

function MyForm() {

    const [message, setMessage] = useState(null);
    const [name, setName] = useState('')
    const [languageSelected, setLanguage] = useState('')

    const [namesGreeted, setNamesGreeted] = useState(JSON.parse(localStorage.getItem('names')) || {})



    const languageList = languages.map(language => {
        return <FormGroup check inline key={language.name}>
                    <Input name="radio2" type="radio" 
                    value={language.name}
                    onClick={(event) => {
                        setLanguage(event.currentTarget.value);
                    }}/> {' '}
                    <Label check>{language.name}</Label>
                </FormGroup>
    })

    return <Fragment>
        {message && <Alert color='info'>{message} </Alert>}
        <Form>
            <FormGroup row>
                <Input id="exampleEmail" name="email" placeholder="Please enter your name" type="email"
                onChange={(event) => {
                    setName(event.target.value)
                }}
                />
            </FormGroup>

            <FormGroup row tag="fieldset">
                <Col>
                    {languageList}
                </Col>
            </FormGroup>

            <FormGroup check inline>
                <Col>
                    <Button onClick={ ()=> {
                        console.log({name, namesGreeted});
                        const greetMessage = find(languages, (language) => {
                            return language.name == languageSelected
                        });
                        if(name) {
                            
                            if(namesGreeted[name] === undefined) {
                                namesGreeted[name] = 1
                            } else {
                                namesGreeted[name] ++
                            }

                            setNamesGreeted({...namesGreeted})
                            localStorage.clear();
                            localStorage.setItem('names', JSON.stringify(namesGreeted));
                            setMessage(greetMessage.greeting + "" + name);
                        }
                        }} >
                        Greet 
                    </Button>
                </Col>
            </FormGroup>
        </Form>
        <MyCounter overallCounter={Object.keys(namesGreeted).length} counter={namesGreeted[name]} />
    </Fragment>
}
export default MyForm
