import {ColumnFilter} from '../Display/ColumnFilter';

export const Columns = [
    {
        Header: "ID",
        accessor: "id",
        Filter:ColumnFilter,
        disableFilters:true
    },
    {
        Header: "Name",
        accessor: "name",
        Filter:ColumnFilter,
    },
    {
        Header: "Phone-No",
        accessor: "phoneno",
        Filter:ColumnFilter,
    },
    {
        Header: "Salary",
        accessor: "salary",
        Filter:ColumnFilter,
    },
    {
        Header: "Post",
        accessor: "post",
        Filter:ColumnFilter,
    }
   /* {
        Header:"Action",    
        Cell: props =>{
            return (
                <button className="button" style={{backgroundColor:'indigo',color:'#F0FFF0'}}
                onClick={()=>{
                   console.log(props.allColumns[0].filteredRows); 
                }}
                >Delete</button>
            )
        }
    }*/
]
