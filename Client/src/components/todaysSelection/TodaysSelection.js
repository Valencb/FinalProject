import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import UnaCard from './UnaCard/UnaCard';

class TodaysSelection extends Component {

    constructor(props){
        super(props);

        this.state = {
            docsArray: []
        };

        this.printCards = this.printCards.bind(this);
    };

    printCards() {
        let myArray ={...this.state.docsArray};

        let cardArray = [];

        for (let i=0; i<6;i++){
            let singleClip = {...myArray[i]};
            cardArray.push(<UnaCard name={singleClip.nomClip} desc={singleClip.descripcion} />);      
        }   
        return cardArray
    }

    componentDidMount(){

        fetch("/api/getVids")
        .then((resp)=>resp.json())
        .then((data)=>this.setState({docsArray: {...data}}))
        .catch(error => console.error(error));
    }

    render(){

        return (

            <div className={this.props.landing ? "todays-bg" : "todays-bg-noimg"}>
                <div className="white-overlay">
                    <Row>
                        <Col md="12" className="text-center">
                            <span className="h2">{this.props.tsTitle}</span>
                            <br/>
                            <span>{this.props.tsSubtitle}</span>
                        </Col>
                    </Row>
                    <Row className="first-row">
                        {this.printCards()}
                    </Row>
                </div>
            </div>
        )
    }
};

export default TodaysSelection;