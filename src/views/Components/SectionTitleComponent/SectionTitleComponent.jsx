import React from 'react';
import './SectionTitleComponent.css';

/**
 * Component for section's title
 * Props:
 * 1. section_title -> filled with section's title
 */
class SectionTitleComponent extends React.Component {
    render(){
        return(
            <h1 className="section-title mb-5">{this.props.section_title}</h1>
        )
    }
}

export default SectionTitleComponent;