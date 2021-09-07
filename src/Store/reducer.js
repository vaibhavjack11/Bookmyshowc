let dataid=0;

export default function reducer(state = [], action){
    console.log(action.type);
    
    switch(action.type)
    {
        case "dataAdded":
            return [
                ...state,
                {
                    id: ++dataid,
                    description: action.payload.description,
                    status: false,
                }
            ];


        case "dataRemoved":
            return state.filter(data => data.id  !== action.payload.id);
        default:
           return state;





    }
}