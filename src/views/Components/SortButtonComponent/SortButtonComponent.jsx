import React from 'react';
import './SortButtonComponent.css';

/**
 * Component for sort button
 * Props:
 * 1. background_color_button   -> filled with desired color for the button
 * 2. is_disabled               -> true if clicked/default, false if other button is clicked
 * 3. onclick_sort_btn          -> filled with sort function
 * 4. sort_by_text              -> filled with button's text
 */
class SortButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const style = {
            backgroundColor: this.props.background_color_button,
        }
        return(
            <button className={"sort_btn py-3 " + (this.props.is_disabled? "clicked" : "") } style={style}
                onClick={this.props.onclick_sort_btn} disabled={this.props.is_disabled}>{this.props.sort_by_text}</button>
        )
    }
}

export default SortButtonComponent;