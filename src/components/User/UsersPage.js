import React from 'react';

export default class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                id: '', 
                name: '', 
                photo: ''
            }
        }
    }

    /*componentDidMount(){
        this.forceUpdate();
    }*/

    async componentWillUpdate(){
        if (this.props.id_user) {
            const url ='http://social-network.com/wp-json/wp/v2/';
            let response = await fetch(url + 'users/' + this.props.id_user);
            const user = await response.json();
            response = await fetch(url + 'media');
            const photos = await response.json();
            let photo = photos[photos.map(photo => photo.title.rendered).indexOf('u' + this.props.id_user)];
            this.setState({user: {
                id: user.id, 
                name: user.name, 
                photo: photo.guid.rendered
            }})
        }
    }

    

    render(){
        return(
            <div className="usersPage">
                <img 
                    alt="Proglem with picrure" 
                    src={this.state.user.photo} 
                    className="usersPage__img"
                />
                <div>
                    <p className="usersPage__name">{this.state.user.name}</p>
                </div>
            </div>
        )
    }
} 