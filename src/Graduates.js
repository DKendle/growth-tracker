import React, { Component } from 'react'
import { grads } from './data/info';


export class Graduates extends Component {
    render() {
        return (
            <>
                <li>
                    {grads.one.firstName}
                    {grads.one.lastName}
                    {grads.one.ministry}
                    {grads.one.overseeingPastor}
                </li>
                <li>
                    {grads.two.firstName}
                    {grads.two.lastName}
                    {grads.two.ministry}
                    {grads.two.overseeingPastor}
                </li>
                <li>
                    {grads.three.firstName}
                    {grads.three.lastName}
                    {grads.three.ministry}
                    {grads.three.overseeingPastor}
                </li>
            </>
        )
    }
}

export default Graduates
