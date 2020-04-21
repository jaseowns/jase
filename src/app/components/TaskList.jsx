import React from 'react';
import { connect} from 'react-redux';
import { requestTaskcreation } from '../store/mutations';
import { Link } from 'react-router-dom';

export const TaskList = ({tasks, name, id, createNewTask}) => (
    <div>
        <h3>{name}</h3>
        <div>
        {tasks.map(task=>(
                <Link to={`/task/${task.id}`} key={task.id}>
                    <div>
                        {task.name}
                    </div>
                </Link>
            ))}
        </div>
        <button onClick={()=>createNewTask(id)}>Add New</button>
    </div>
)

const mapDispatchToProps = (dispatchEvent, ownProps) => {
    return {
        createNewTask(id){
            console.log("createt ask", id);
            dispatchEvent(requestTaskcreation(id));
        }
    }
}

const mapToStateProps = (state, ownProps) => {
    let groupId = ownProps.id;
    return {
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
}

export const ConnectedTaskList = connect(mapToStateProps, mapDispatchToProps)(TaskList);