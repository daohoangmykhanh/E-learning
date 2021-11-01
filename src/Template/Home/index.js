import React from 'react'
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import { Route } from 'react-router'

export const HomeTemplate = (props) => {
    return (
        <div>
            <Route path={props.path} render={(propsRoute) => {
                return <>
                    <Header></Header>
                    <props.component {...propsRoute} />
                    <Footer></Footer>
                </>
            }}></Route>
                
        </div>
    )
}
