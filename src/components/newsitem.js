import React from 'react'

export default function NewsItem (props){
    
        let { title, description, imageUrl, url, author, date ,source} = props
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7pQLi-oRnXgKQVNH8zDMb9_L_FBfgvARbQ&usqp=CAU"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: "1" }}>{source} </span>
                    </div>
                </div>

            </div>
        )
    }

