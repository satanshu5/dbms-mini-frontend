import {ColumnFilter} from './ColumnFilter';

export const Columns = [
    {
        Header: "SalerName",
        accessor: "name",
        Filter:ColumnFilter,
        disableFilters:true
    },
    {
        Header: "BrandName",
        accessor: "brandname",
        Filter:ColumnFilter
    },
    {
        Header: "Price",
        accessor: "price",
        Filter:ColumnFilter
    },
    {
        Header: "Yor",
        accessor: "yor",
        Filter:ColumnFilter
    },
    {
        Header: "Travelled",
        accessor: "travelled",
        Filter:ColumnFilter
    },
    {
        Header: "Vehicle-No",
        accessor: "vehicleno",
        Filter:ColumnFilter
    },
    {
        Header: "Phone-No",
        accessor: "phoneno",
        Filter:ColumnFilter,
        disableFilters:true
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
