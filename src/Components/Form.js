import React, { Component } from 'react';
import FBconf from './FBconf.js';
const firebase = require('firebase')

export class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      desc: '',
      msg: '',
      visibility: 'private',
      email: '',
      shouldUpdate: false,
      data: [],
    }
  }

  componentDidMount(){
    if (!firebase.apps.length) {
      firebase.initializeApp(FBconf);
    }
    let ref = firebase.database().ref('data');
    ref.on('value', snapshot => {
      let data = snapshot.val();
        let newData = [];
        let months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        for (let entry in data) {
          let d = new Date(data[entry].date);
          let date = months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+" ("+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+")";
          newData.push({
            id: entry,
            name: data[entry].name,
            desc: data[entry].desc,
            msg: data[entry].msg,
            visibility: data[entry].visibility,
            email: data[entry].email,
            date: date,
          })
        }
        this.setState({data: newData});
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.state.shouldUpdate !== prevState.shouldUpdate){
      let ref = firebase.database().ref('data');
      ref.on('value', snapshot => {
        let data = snapshot.val();
        let newData = [];
        let months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        for (let entry in data) {
          let d = new Date(data[entry].date);
          let date = months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+" ("+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+")";
          newData.push({
            id: entry,
            name: data[entry].name,
            desc: data[entry].desc,
            msg: data[entry].msg,
            visibility: data[entry].visibility,
            email: data[entry].email,
            date: date,
          })
        }
        this.setState({data: newData});
      })
    }
  }

  myFormHandler = (event) => {
    event.preventDefault();
    if (this.state.name === '') {
      alert("Missing name");
    } else if (this.state.msg === '') {
      alert("Missing message");
    } else if (this.state.visibility === '') {
      alert("Missing your choice for visibility");
    } else {
      let formObj = {
        name: this.state.name, 
        desc: this.state.desc,
        msg: this.state.msg,
        visibility: this.state.visibility,
        email: this.state.email,
        date: firebase.database.ServerValue.TIMESTAMP,
      };
      firebase.database().ref('data').push().set(formObj);
      this.setState({shouldUpdate: true});
    }
  }

  myChangeHandler = (event) => {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({[field]: value});
  }

  render() {
    return (
      <div>
        <div className='content'>
          <div id='form-section'>
            <div className='form animated fadeInLeft'>
            
            <form onSubmit={this.myFormHandler}>
            <br></br>
            <br></br>
              <p>Your name:&nbsp;
              <input name='name' type='text' minLength='3' maxLength='19' required onChange={this.myChangeHandler} /></p>
              
              <br></br>
              <p>Description:<br/>
              <input name='desc' type='text' size='50' maxLength='99' onChange={this.myChangeHandler}/>
              </p>              

              <br></br>
              <p> Your message:<br/>
                <textarea name='msg' minLength='5' maxLength='499' required onChange={this.myChangeHandler}></textarea>
              </p>

              <br></br>
              <p>Would you like publish your information?<br/>
                <select id='visibility' name='visibility' required onChange={this.myChangeHandler}>
                  <option value='private'>No</option>
                  <option value='public'>Yes</option>
                </select>
              </p>

              <br></br>
              <p>Your email:
              <input name='email' type='text' size='30' onChange={this.myChangeHandler}/>
              </p>

              <br></br>
              <div>
                <input type='submit' id='submit' name='submit' value='Submit'></input>
              </div>

            </form>

            </div>
            <div className='responses animated fadeInRight'>
              <p>Messages</p>
              {this.state.data.map((entry) => {
                if(entry.visibility !== 'private') {
                  if(entry.desc !== '') {
                    return (
                      <div className='response animated pulse' id={entry.id}>
                        <div>
                          <span className='name'>{entry.name}</span>
                          <span className='date'>{entry.date}</span>
                        </div>
                        <i>{entry.desc}</i><br/>
                        <span className='message'>{entry.msg}</span><br/>
                      </div>
                    )
                  } else {
                    return (
                      <div className='response animated pulse' id={entry.id}>
                        <div>
                          <span className='name'>{entry.name}</span>
                          <span className='date'>{entry.date}</span>
                        </div>
                        <span className='message'>{entry.msg}</span><br/>
                      </div>
                    )
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Form;