import React, { Component } from 'react';

import './post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromUsername: null,
            toUsername: null,
            photoUrl: null,
            date: null,
            time: null,
            text: null,
            imageUrl: null,
            displayName: null,
            image: null,
            likes: null,
            comments: [
                {
                    uid: '@Username1',
                    username: '@Username1',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis.'
                },
                {
                    uid: '@Username1',
                    username: '@Username2',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate.'
                }
            ]
        }

        this.handleSendComment = this.handleSendComment.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ 
            fromUsername: nextProps.data.fromUsername || '@username',
            to: nextProps.data.to,
            photoUrl: nextProps.data.photoUrl || "https://firebasestorage.googleapis.com/v0/b/social-crush.appspot.com/o/images%2Fuser_profile%2Fprofile_placeholder.jpg?alt=media&token=7efadeaa-d290-44aa-88aa-ec18a5181cd0",
            date: nextProps.data.date,
            time: nextProps.data.time,
            text: nextProps.data.text,
            imageUrl: nextProps.data.imageUrl,
            displayName: nextProps.data.displayName,
            image: nextProps.data.image,
            likes: nextProps.data.likes || '0',
            comments: nextProps.data.comments
         });
         console.log(nextProps.data.comments);
    }

    handleSendComment = (event) => {
        alert(document.getElementById('textareaComment').value);
    }

    render() {
        return (
            <article className="post">
                <header className="header-post">
                <div className="div-img-profile">
                    <a href="#">
                        <img alt={this.state.fromUsername} className="img-profile" src={this.state.photoUrl} />
                    </a>
                </div>
                <div className="div-user"> 
                    <a href="#">{this.state.fromUsername}</a>
                    <p>32 min</p>
                </div>
                </header>
                <div className="">
                <div className="div-text-post">
                    <p>{this.state.text}</p>
                </div> 
                <div className="div-img-post">
                    <img alt="" className="img-post" src={this.state.imageUrl} />
                </div>
                </div>
                <div className="div-footer">
                <section className="section-like-comment">
                    <a className="" href="#"><i className="far fa-heart icon-post" /></a>
                    <a className="" href="#"><i className="far fa-comment icon-post" /></a>
                </section>
                <section>
                    <div className="div-likes">
                    <a href="#"><span>{`${this.state.likes} Me gusta`}</span></a>
                    </div>
                </section>
                <div className="div-comments">
                    <ul className="list-unstyled">
                        {
                            this.state.comments.map(comment => 
                                <li className=""> 
                                    <a href={`profile/${comment.uid}`}>{comment.username}</a><span>{comment.text}</span>
                                </li>
                                )
                        }
                    </ul>
                </div>
                <div className="div-form-comment">
                    <hr className="hl" />
                    <form className="form-comment">
                    <textarea id="textareaComment" className="textarea-comment" rows={1} placeholder="Escribe un comentario..." defaultValue={""} /><i onClick={this.handleSendComment} className="material-icons send">send</i> {/* 5 lineas max */}
                    {/* <button type="submit"><i class="fa fa-arrow-right icon-comment"></i></button> */}
                    {/* <button type="submit"><img alt="" src="img/send.svg" /></button> */}
                    </form>
                </div>
                </div>
            </article>
        );
    }
}

export default Post;