import {ColumnFilter} from '../Display/ColumnFilter';

export const Columns = [
    {
        Header: "ID",
        accessor: "id",
        Filter:ColumnFilter,
        disableFilters:true
    },
    {
        Header: "Vehicle-Type",
        accessor: "vehicletype",
        Filter:ColumnFilter,
    },
    {
        Header: "Service-Type",
        accessor: "servicetype",
        Filter:ColumnFilter,
    },
    {
        Header: "Price",
        accessor: "price",
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
