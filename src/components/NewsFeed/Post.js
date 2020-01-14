import React from 'react';


export default function Post(props){
        return(
                <div className="content">
                    <h3 className="content_header">{props.post.title}</h3>
                    <img alt="Proglem with picrure" src={props.post.photo} className="content__img"/>
                    <div className="content__text" dangerouslySetInnerHTML={{__html: props.post.excerpt}}></div>
                </div>
            
        )
    
}