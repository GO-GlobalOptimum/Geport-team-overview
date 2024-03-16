import './App.css';
import ToDo from './ToDo';
import React, {useState} from "react";
import {Container, List, Paper} from "@mui/material";
import AddTodo from './AddTodo';

function App(){
    const [items, setItems] = useState([{
        id : "0",
        title : "mmmmm",
        done : true
    },{
        id : "1",
        title : "제발 좀 돼라",
        done : true
    }]) // 전체 item 리스트

    const editItem = () => {
        setItems([...items])
    } // 고친 item을 setItem으로 전체 아이템 reloading

    const deleteItem = (item) => {
        // 삭제하고 싶은 item을 제외한 모든 item list
        const newItems = items.filter(e => e.id !== item.id);
        // 다시 전체 item list를 reloading
        setItems([...newItems]);
    }

    // item의 길이가 1 이상
    // 각 item의 ToDo page를 만들어줌
    let todoItems = items.length > 0 &&
        (
            <Paper style={{margin:16}}>
                <List>
                    {items.map((item)=>
                        <ToDo item={item} key={item.id}
                              editItem={editItem}
                              deleteItem={deleteItem}/>
                        // 각 item component에 id로 key
                    )}
                </List>
            </Paper>
        )

    const addItem = (item) => {
        item.id = "ID-" + items.length;
        item.done = false;

        setItems([...items, item])
        console.log("items: ", items);
    }
    return (<div className="App">
        <Container maxWidth="md">
            <AddTodo addItem={addItem} />
            <div className="TodoList">{todoItems}</div>
        </Container>
    </div>);

}
export default App;