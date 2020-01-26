import React from 'react';
import {connect} from 'react-redux';

import UsersPage from '../User/UsersPage'


class WriterPosts extends React.Component {
    constructor(){
        super();

        this.state = {
            title: '',
            excerpt: '',
            content: ''
        }
    }

    addPost = (e) => {
        e.preventDefault();
        let post = {
            id: Math.floor(Math.random() * 100),
            status: "publish",
            type: "post",
            title: {
                rendered: this.state.title
            },
            content: {
                rendered: this.state.content,
                protected: false
            },
            excerpt : {
                rendered: this.state.excerpt,
                protected: false
            },
            author: this.props._mainUser.id,
            featured_media: 12, 
            comment_status: "open",
            ping_status: "open",
            sticky: false,
            template: "",
            format: "standard"
        }
        console.log(post.id);
        /*const url = 'http://social-network.com/wp-json/wp/v2/posts/';
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(post), 
                headers: {
                  'Content-Type': 'application/json'
                }
            })
                .then (response => {
                    if (response.status !== 200 ) {
                        console.log ('Error code: ', response.status);
                    }
                response.json()
                    .then (posts => {
                        console.log(posts);
                    })
                })
            .catch(err => {
            console.log('Error: ', err);
        })*/
        var WPAPI = require( 'wpapi' );
        var wp = new WPAPI({
            endpoint: 'http://social-network.com/wp-json',
            username: 'Kazakov Vasya',
            password: 'k09r yGLm LqWL 3puK SDxr mkNZ'
        });
        wp.posts().create({
            title: post.title.rendered,
            content: post.content.rendered,
            excerpt: post.excerpt.rendered,
            status: 'publish', 
            featured_media: 12
        }).then(function( response ) {
            console.log( response.id );
        })

        /*
        Почему закаты так притягательны?

        Все дело в объективных законах физики и субъективности нашего восприятия световых волн. Цвета меняются по мере уменьшения длины световой волны. Из видимых нам самым «коротковолновым» будет синий свет. Он рассеивается гораздо сильнее, чем тот же красный цвет. Говоря проще, красный свет рассеивается меньше остальных, а синий и фиолетовый больше. Это и объясняет, почему небо голубое днем, а при закате становится алым, а порой и вовсе красным. А все потому, что красный – это самый «длинноволновой» свет, которому под силу пробиться через толщу воздуха тогда, когда солнце садится. Чем больший слой атмосферы придется преодолеть солнечному лучу, тем краснее будет закат!

        Уже давно все рассчитано и замерено. Солнце, проходя круг по небосводу не меняется в размере. Но по ощущениям, кажется что на восходе и закате, оно все-таки больше обычного в 1,5 - 2 раза. В книге М. Миннарта "Свет и цвет в природе" объясняется этот психологический эффект: кажущаяся сплюснутость небесного свода. Мы воспринимаем Солнце и Луну на таком же расстоянии, как и окружающее их небо, поэтому низкое Солнце представляется нам во много раз дальше, чем высокое. Так как его угловой размер остается одинаковым, мы бессознательно приписываем Солнцу в несколько раз большую величину. Кажущаяся форма неба - определяющий фактор в видимом размере Солнца. Вот так!
        Давным-давно в 2006 году я увлекся фотографией. И съемка закатов была (и остается) моей страстью. Закаты в этой статье были сняты мной в Черногории в разные времена года. Каждый раз, когда погода была переменчивой, я выходил на фотоохоту. Именно во время смены погоды, можно предвидеть фантастические по красоте закаты. Именно закаты притягивают своей красотой начинающих пейзажистов. Когда-то, я снимал закаты на мобильный телефон. Таким образом, я старался сохранить в памяти ускользающие мгновения, забрать частицу прекрасного с собой.
        Стоя на берегу моря, всегда очень хорошо смотреть на вечерний закат. Он очень красивый. О нем есть своя легенда, своя история. Когда-то любили друг друга парень и девушка. Очень любили и были так счастливы, что люди стали завидовать их отношениям. Не смогли они вынести людскую зависть и злобу. Ушли они и стали: юноша - морем, а девушка - солнцем. Раз в сутки они встречаются, и юноша поет своей любимой прекрасные песни. А она ласкает его своими руками-лучами.
        
        */
    }

    render(){
        return(
            <div className="writerPost">
                <UsersPage  id_user = {this.props._mainUser.id} />
                <form className="postForm" onSubmit={this.addPost}>
                <input 
                    className="postForm__title"
                    onChange={e => {this.setState({title: e.target.value})}} 
                    value={this.state.title}
                    placeholder = "Title"
                />
                <textarea className="postForm__excerpt"
                    onChange={e => {this.setState({excerpt: e.target.value})}} 
                    value={this.state.excerpt}
                    placeholder = "Post excerpt"
                />
                <textarea className="postForm__content"
                    onChange={e => {this.setState({content: e.target.value})}} 
                    value={this.state.content}
                    placeholder = "Post content"
                />
                <button className="postForm__btn">Add post</button>
            </form> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        _mainUser: state.MainUser.user
    }
}

export default connect(mapStateToProps)(WriterPosts);

