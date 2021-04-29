import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        tags: ['tag1']
    }

    styles = {
        fontSize: 10,
        fontweight: 'bold'
    }

    handleIncreament(){
        this.setState({ count : this.state.count + 1 });
    }

    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getBadgeClasses()}> {this.FormatText()} </span>
                <button className="btn btn-secondary btn-sm" onClick={()=> this.handleIncreament()}>Increament</button>
                <p>{this.state.tags.length === 0 && 'Please add Some tags !!'}</p>
                <ul>
                    {this.RenderTagList()}
                </ul>
            </React.Fragment>
        );
    }

    RenderTagList() {
        const {tags} = this.state;
        if(tags.length === 0) return <p>No Tags is there !</p>
        return tags.map(item => <li key={item}>{item}</li>);
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    FormatText() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;