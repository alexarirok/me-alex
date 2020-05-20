import React, { Component } from 'react';
import axios from 'axios';

export default class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // fetch('http://localhost:3000/send', {
        //     method: "POST",
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then(
        //     (response) => (response.json())
        // ).then((response)=>{
        //     if (response.status === 'success'){
        //         alert("Message Sent.");
        //         this.resetForm()
        //     }else if(response.status === 'fail'){
        //         alert("Message failed to send.")
        //     }
        // })
        axios({
            method: "POST",
            url:"http://localhost:3000/send",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', phone: '', subject: '', message: ''})
    }

    render() {
        return(
            <div className="colorlib-contact">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label"> Name: </label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="exampleInputEmail" className="col-sm-2 col-form-label">Email Address: </label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                Please enter a valid email address
                            </small>
                        </div>
                        
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number: </label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                Please enter a working phone
                            </small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="subject" className="col-sm-2 col-form-label">Subject: </label> 
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="subject" aria-describedby="subjectHelp" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="message" className="col-sm-2 col-form-label">Message: </label>
                        <div className="col-sm-8">
                            <textarea className="form-control" id="message" cols="30" rows="10" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary my-1">Submit</button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onPhoneChange(event) {
        this.setState({phone: event.target.value})
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

