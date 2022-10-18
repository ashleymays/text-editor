import React from "react"

export default class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        // Add tab
        const text = document.querySelector('.text');
        text.addEventListener('keydown', e => {
            if (e.key === 'Tab') {
                e.preventDefault();
                let doc = this.myRef.current.ownerDocument.defaultView;
                let sel = doc.getSelection();
                let range = sel.getRangeAt(0);
                let tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
                range.insertNode(tabNode);
                range.setStartAfter(tabNode);
                range.setEndAfter(tabNode); 
                sel.removeAllRanges();
                sel.addRange(range);
            }
        })

        // Autofocus
        this.myRef.current.focus();
    }

    render() {
        return <div className="text" ref={this.myRef} contentEditable={true}></div>
    }
}