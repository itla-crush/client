import React, { Component } from 'react';
import firebase from 'firebase';

class DeleteNewsfeedWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // radioChecked: null
        };
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    }

    handleSubmitDelete = () => {
        var isPublic = this.props.isPublic;
        var newsfeedReportedId = this.props.newsfeedId;
        var timestamp = {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            minute: new Date().getMinutes(),
            hour: new Date().getHours()
        };

        console.log({newsfeedReportedId, timestamp, isPublic});
        
        // firebase.database().ref('posts-reported/').remove();

        // var updates = {};

        // if(this.props.isPublic) {
        //   updates[`/posts/${this.props.id}/likes`] = currentRank;
        // }
        // updates['/posts/' + newPostKey] = postData;
        // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

        // return firebase.database().ref().update(updates);
        
    }

    render() {
        return (
            <div className="modal fade" id="deleteNewsfeedModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="exampleModalLongTitle" style={{fontSize:"1.4rem"}} >Eliminar Declaración</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5>¿Desea eliminar esta declaración?</h5>
                        
                        {this.props.newsfeedId}

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" id="dismissReportWidget">Cancelar</button>
                        <button onClick={this.handleSubmitDelete} type="button" className="btn btn-danger">Aceptar</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DeleteNewsfeedWidget;