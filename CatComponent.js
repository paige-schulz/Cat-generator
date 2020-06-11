import React from 'react';
import cat from "../Components/cat.jpeg"
import './CatComponent.css'

const API_KEY = "729f703d-84f7-4295-b449-925a17b9e643";



export default class CatComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            link: "https://cdn2.thecatapi.com/images/2n9.jpg",
            linksArray: []

        }
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount() {
        fetch("https://api.thecatapi.com/v1/images/search", {
            method: "GET",
            headers: {
                'x-api-key': '729f703d-84f7-4295-b449-925a17b9e643',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

            .then(response => response.json())
            .then(json => {
                console.log(json);



                this.setState({
                    isLoaded: true,
                    items: json.items,
                    link: json[0].url


                })
                console.log(this.state.linksArray);
            });

    }
    onClick() {
        fetch("https://api.thecatapi.com/v1/images/search", {
            method: "GET",
            headers: {
                'x-api-key': '729f703d-84f7-4295-b449-925a17b9e643',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

            .then(response => response.json())
            .then(json => {
                console.log(json);

                this.setState({
                    isLoaded: true,
                    items: json.items,
                    link: json[0].url


                })
            });


    }

    render() {
        var { isLoaded, items, link } = this.state;
        if (!isLoaded) {
            return <div> "Cats are Loading!</div>;
        }
        else {
            return (
                <div className="CatComponent">


                    {items && items.map(item => {
                        return <div key={item.id}>{item.link}>{item.title}</div>;

                    })

                    }
                    <br />
                    <h1> I love kitties! </h1>
                    <img className="catImage" src={this.state.link} alt="cat3"  ></img> <br />
                    <button className="catButton" onClick={this.onClick} > Next Cat</button>


                </div >
            );
        }
    }






}





