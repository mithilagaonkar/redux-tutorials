import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'75525888560-gqj1ak6qt0o9ug759ephhskh174317r8.apps.googleusercontent.com',
                scope:'email'
            })
        })
    }
    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;