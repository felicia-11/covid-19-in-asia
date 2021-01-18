import React from 'react';
import './PreventionComponent.css';

/**
 * Component for prevention's title
 * Props:
 * 1. prevention_image_url -> filled with image's path/URL
 * 2. card_title           -> filled with card's title regarding image above
 * 3. card_description     -> filled with card's description regarding image above
 */
class PreventionComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="card prevention-card">
                <img className="card-img-top" src={this.props.prevention_image_url} />
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.card_title}</h5>
                    <p className="card-text text-center">{this.props.card_description}</p>
                </div>
            </div>
        )
    }
}

export default PreventionComponent;