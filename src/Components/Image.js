import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Image = (props) => {
    const imageSrc = props.location.state
    console.log(imageSrc)
    return (
        <div>
            <button className="btn btn-danger" onClick={() => { props.history.push('/admin') }}>Back</button>
            <h1>{imageSrc}</h1>
            <img style={{ "height": "50%", "width": "50%" }} src='https://static.carthrottle.com/workspace/uploads/posts/2017/07/43df24faa6299543bb3c862724432333.JPG' className="rounded mx-auto d-block" alt={imageSrc}></img>
        </div>
    )
}
export default Image