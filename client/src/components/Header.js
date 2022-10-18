import React from "react";
import Filters from "./Filters";
import Fullscreen from './Fullscreen';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top: '-10vh'
        }
    }

    componentDidMount() {
        const header = document.querySelector('header');
        document.addEventListener('mousemove', e => {
            if (e.clientY <= 100) {
                header.style.top = '0';
                this.setState({ top: '0' })
            }
            else {
                header.style.top = '-10vh';
                this.setState({ top: '-10vh' })
            }
        })
    }

    render() {
        return (
            <header>
                <Fullscreen />
                <Filters />
                <Fullscreen />
            </header>
        )
    }
}