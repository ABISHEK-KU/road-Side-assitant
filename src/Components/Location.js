import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Location = (props) => {
    const location = props.location.state
    console.log(location)
    return (
        <div>
            <button className="btn btn-danger" onClick={()=>{props.history.push('/admin')}}>Back</button>
            <div className="ratio ratio-16x9">
                <iframe title='trackmap' allowfFullScreen src={`https://maps.google.com/maps?q=${location[0]}&output=svembed`} />
            </div>
        </div>
    )
}
export default Location