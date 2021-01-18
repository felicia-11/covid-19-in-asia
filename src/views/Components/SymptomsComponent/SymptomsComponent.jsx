import React from 'react';
import './SymptomsComponent.css';

/**
 * Component for Symptoms section.
 * Consists of 1 rounded image and 1 image title below it.
 * Props:
 * 1. symptom_image_url     -> filled with image's path/URL
 * 2. symptom_description   -> filled with short description/title regarding image above
 */
class SymptomsComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
                <img src={this.props.symptom_image_url} className="symptoms-image" />
                <h5 className="symptoms-description">{this.props.symptom_description}</h5>
            </div>
        )
    }
}

export default SymptomsComponent;