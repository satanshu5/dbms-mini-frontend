import {ColumnFilter} from '../Display/ColumnFilter';

export const Columns = [
    {
        Header: "Type",
        accessor: "type",
        Filter:ColumnFilter,
    },
    {
        Header: "SalerName",
        accessor: "name",
        Filter:ColumnFilter,
    },
    {
        Header: "Phone-No",
        accessor: "phoneno",
        Filter:ColumnFilter,
    },
    {
        Header: "BrandName",
        accessor: "brandname",
        Filter:ColumnFilter,
    },
    {
        Header: "Yor",
        accessor: "yor",
        Filter:ColumnFilter,
    },
    {
        Header: "Travelled",
        accessor: "travelled",
        Filter:ColumnFilter,
    },
    {
        Header: "Price",
        accessor: "price",
        Filter:ColumnFilter,
    },
    {
        Header: "Vehicle-No",
        accessor: "vehicleno",
        Filter:ColumnFilter,
    },
    {
        Header: "BuyerName",
        accessor: "buyername",
        Filter:ColumnFilter,
    },
    {
        Header: "Sale's Employee ID",
        accessor: "saleid",
        Filter:ColumnFilter,
    },
    {
        Header: "EmployeeName",
        accessor: "employeename",
        Filter:ColumnFilter,
    },
    {
        Header: "DateTime",
        accessor: "datetime",
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
