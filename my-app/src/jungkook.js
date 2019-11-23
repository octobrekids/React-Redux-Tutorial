import React, { Component } from 'react'

export default class jungkook extends Component {
    render() {
        const { name , age } = this.props
        return (
            <div className="jungkook">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                
            </div>
        )
    }
}
