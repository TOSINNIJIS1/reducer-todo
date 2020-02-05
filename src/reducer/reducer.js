export const initial = [
    {
        item: 'Learn about reducers',
        completed: true,
        id: 3892987589
    }, 
    {
        item: 'Legendary Team Lead',
        id: 'Michael Harms',
        completed: true
    }
]


export function reducer(state, action) {

    switch (action.type) {
        
        case "Add":
            return [
                ...state, action.payload
                
        

            ];

        case "Completed": 
            return state.map((item) => {
                return item.id === action.payload ? {...item, completed: !item.completed} : item
            })
            
        
        case "Clear_Completed": return state.filter ((item) => !item.completed)
        
        default:
            return state
    }
    
} 

