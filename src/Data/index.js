import { v4 as uuidv4 } from 'uuid';

// {
//     id: uuidv4();
//     todo: 'do sth';
//     isComplete: false;
// }

const TODOS = [
    {
        id: uuidv4(),
        todo: 'Learn React',
        isComplete: false,
    },
    {
        id: uuidv4(),
        todo: 'Shopping',
        isComplete: true,
    },
    {
        id: uuidv4(),
        todo: 'Breakfast',
        isComplete: false,
    }
]

export default TODOS;