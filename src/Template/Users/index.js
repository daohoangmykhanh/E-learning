import React from 'react'
import {Route} from 'react-router-dom'

export const UsersTemplate = (props) => {
    return (
        <div>
            <Route path={props.path} render={(propsRoute) => {
                return <>
                <div className="user__container">
                    <div className="user__content"  >
                        <div className="d-flex">
                            <div className="user__img">
                               <img src="./image/background.jpg" alt="" />
                            </div>
                            <div className="user__form" >
                                <props.component {...propsRoute} />
                            </div>
                        </div>
                    </div>
                   
                </div>
                </>
            }}></Route>
                
        </div>
    )
}