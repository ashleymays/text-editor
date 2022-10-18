import React from "react";

export default class AlignFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alignment: 'left'
        }
    }

    changeAlignment = e => {
        const alignment = e.target.value;
        const text = document.querySelector('.text');
        text.style.textAlign = alignment;
        this.setState({ alignment: alignment });
    }

    render() {
        return (
            <div className="filters__option">
                <label className="option"><input onChange={this.changeAlignment} defaultChecked={true} type="radio" name="format-option" value="left" /><span className="material-icons-outlined">format_align_left</span></label>
                <label className="option"><input onChange={this.changeAlignment} type="radio" name="format-option" value="right" /><span className="material-icons-outlined">format_align_right</span></label>
                <label className="option"><input onChange={this.changeAlignment} type="radio" name="format-option" value="center" /><span className="material-icons-outlined">format_align_center</span></label>
                <label className="option"><input onChange={this.changeAlignment} type="radio" name="format-option" value="justify" /><span className="material-icons-outlined">format_align_justify</span></label>
            </div>
        )
    }
}