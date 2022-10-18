import React from 'react';

export default class ThemeFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
    }
    
    changeTheme = e => {
        const theme = e.target.value;
        const html = document.querySelector('html');
        html.setAttribute('data-theme', theme);
        this.setState({ theme: theme });
    }

    render() {
        return (
            <div className="filters__option">
                <label className="option"><input onChange={this.changeTheme} defaultChecked={true} type="radio" name="color-scheme" value="light" /><span className="material-icons-outlined">light_mode</span></label>
                <label className="option"><input onChange={this.changeTheme} type="radio" name="color-scheme" value="dark" /><span className="material-icons-outlined">nightlight_round</span></label>
                <label className="option"><input onChange={this.changeTheme} type="radio" name="color-scheme" value="midnight" /><span className="material-icons-outlined">nightlight</span></label>
            </div>
        )
    }
}