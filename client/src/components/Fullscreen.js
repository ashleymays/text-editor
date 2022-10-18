import React from 'react';

export default class Fullscreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFullscreen: false
        }
    }

    setFullscreen = _ => {
        if (this.state.isFullscreen) {
            return this.closeFullscreen();
        }
        return this.openFullscreen();
    }

    openFullscreen = _ => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
        this.setState({ isFullscreen: true })
    }

    closeFullscreen = _ => {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
        this.setState({ isFullscreen: false })
    }

    render() {
        return (
            <div className="option" onClick={this.setFullscreen}>
                <span className="material-icons-outlined">
                    fullscreen
                </span>
            </div>
        )
    }
}