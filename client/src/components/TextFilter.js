import React from 'react';

export default class TextFilter extends React.Component {
    render() {
        return (
            <div className="filters__option">
                <button type="button" className="option" value="bold"><span className="material-icons-outlined">format_bold</span></button>
                <button type="button" className="option" value="italic"><span className="material-icons-outlined">format_italic</span></button>
                <button type="button" className="option" value="underline"><span className="material-icons-outlined">format_underlined</span></button>
            </div>
        )
    }
}