import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header_2 from '../layout/header';
import Footer from '../layout/footer';
import SideDrawer2 from '../layout/SideDrawer2';
import Navbar from "../layout/Navbar";

import Backdrop from '../layout/Backdrop';
export default class KentRidge2 extends Component {
    state = {
        todos: [
    
        ],
        sideDrawerOpen: false,
    
      }
      drawerToggleClickHandler = () => {
        this.setState ((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
      }
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
      }
    constructor(props) {
        super(props);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDuration = this.onChangeDuration.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.onChangeSearchKey = this.onChangeSearchKey.bind(this);

        this.state = {
            searchkey: '',
            canteenDisplay: []
            //listItems,
        }
    }
    componentDidMount() {
        axios.get('canteens')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                // canteenDisplay: response.data.map(canteen => canteen.name),
                canteenDisplay: response.data,
              })
            }
        })
          .catch((error) => {
            console.log(error);
        })
    
    }

    onChangeSearchKey(e) {
        this.setState({
            searchkey : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const sendData = {
            searchkey: this.state.searchkey
        }
        console.log(sendData);
        axios.post('canteens/search', sendData)
        .then(response => {
            if (response.data.length > 0) {
                console.log(response.data);
                this.setState({
                    //canteenDisplay : response.data.map(canteen => canteen.name)
                    canteenDisplay: response.data
                })
            }
        })
        .catch(error => {
            console.log(error);
        })

        // this.props.addTodo(this.state.title);
        // this.setState({title: ''});
    }
    
    //this.state.listItems = this.state.canteenDisplay.map((canteen) =><li>{canteen}</li>);

    render() {
        let sidedrawer;
        let backdrop;
        if (this.state.sideDrawerOpen) {
          sidedrawer = <SideDrawer2/>;
          backdrop = <Backdrop click = {this.backdropClickHandler}/>;
        }
        return(
            <div>
                <Header_2 drawerClickHandler= {this.drawerToggleClickHandler}/>
                <Navbar/>
                {sidedrawer}
                {backdrop}
                <form onSubmit = {this.onSubmit} style = {{display: 'flex', position: 'fixed'}}> 
                    <input 
                        type = "text" 
                        name = "title" 
                        style ={{width: '80%', padding: '5px'}}
                        placeholder = "Search for your crave"
                        value = {this.state.searchkey}
                        onChange = {this.onChangeSearchKey}
                    />
                    <input 
                    type="submit" 
                    value = "Submit" 
                    className ="btN"
                    style = {{width: '20%'}}
                    />
                </form>  
                
                <div className = "halfKR" id = "KR">
                    <h3>𝙺𝚎𝚗𝚝 𝚁𝚒𝚍𝚐𝚎 𝙲𝚊𝚖𝚙𝚞𝚜</h3>
                </div>


                <div className =  "banana_background">
                    {/* <img src="/images/Atempo.jpg" alt="Girl in a jacket" width="500" height="600"/> */}
                    <div className = "container">
                            {this.state.canteenDisplay.map((element) => 
                                {
                                    if (element.campus === "Kent Ridge") 
                                    return (
    
                                <div>
                                    <img src={element.img_link} alt={element.name} width="273" height="216"/>
                                    <Link onClick = {scrollToTop} style = {linkStyle} to={element.to_id} className = "_Linkbtn"> {element.name}</Link>
                                </div>
                                
                                        )
                                }
                            )}                                  
                    </div>
                                
                    {/* <ul>                       
                        {this.state.canteenDisplay.map(element => <li>{element.name}</li>)}
                    </ul> */}
                </div>
            
                <Footer/>
            </div>
        )
    }
}

const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    float: 'center, center'   
}
const scrollToTop = () => {
    window.scrollTo(0, 0)
}