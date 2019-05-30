import React, { Component } from 'react'
import { Select } from 'antd';
import { getJoinableUsers } from '../../../utils/SlackUtils';
import { SlackContext } from '../../../store/store';
import AddPeopleModal from '../../../components/SlackHeader/AddPeople'

const Option = Select.Option;

class AddPeopleContainer extends Component {
    static contextType = SlackContext;
    state = {
        selectedUsers : []
    }
    componentDidMount(){
        // console.log("called");
    }

    componentDidUpdate(){
        // console.log("updated");
    }

    // Returns list of all available users except existing members
    _getAllUsers(){
        let {rooms, room} = this.context.state;
        if(rooms.length){
            return getJoinableUsers(rooms, room);
        }
    }

    _onUserSelect = (selectedIds) => this.setState({ selectedUsers: selectedIds})
    _clearSelected = () => this.setState({ selectedUsers : [] })

    render() {
        let { room } = this.context.state;
        if(room !== null)
            return (
                <AddPeopleModal
                    allUsers      = {this._getAllUsers()}
                    roomName      = {room.name}
                    onUserSelect  = {this._onUserSelect}
                    selectedUsers = {this.state.selectedUsers}
                    clearSelected = {this._clearSelected}
                />
            )
        return "";
    }
}

export default AddPeopleContainer;