import logo from './logo.svg';
import './App.css';
import React from 'react';
import Introduction from './component/Introduction';
import Skills from './component/Skills';
import Qualifications from './component/Qualifications';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state={
      name:"Vaibhav",
      location:"Bangalore,India",
      number:9482827884,
      mail:"vk@gmail.com",


      qualifications:
      [
        {
          class:"mca",
          percentage:"8.71cgpa",
          year:"2023",
          college:"RVCE"
        },
        {
          class:"bca",
          percentage:"86%",
          year:"2021",
          college:"JSS"
        }
      ],
      projects:
      [
        {
          sno:1,
          projectname:"Decentralized Crowdfunding",
          technology:"blockchain"
        },
        {
          sno:2,
          projectname:"Hotel application",
          technology:"android"
        },
        {
          sno:3,
          projectname:"track my disciple",
          technology:"android"
        }
      ]
    };
  }

  render()
  {
    return(
      <div className='divBox'>
        <h3>RESUME</h3><br/><br/>
        <center>
          <img src={logo} alt="profile img" className='profileImg'/>
        </center><br/>
        <Introduction name={this.state.name} number={this.state.number} mail={this.state.mail} location={this.state.location} />
        
        <Qualifications qualifications={this.state.qualifications}/><br/>
        <Skills projects={this.state.projects}/>
      </div>
    )
  }

}

export default App;
