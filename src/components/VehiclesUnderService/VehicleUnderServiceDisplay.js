import React,{useMemo} from 'react';
import { useTable,useFilters,useRowSelect} from 'react-table';
import {Columns} from './VehicleUnderServiceColumn';
import './VehicleUnderService.css';


function VehicleUnderServiceDisplay(props){

    const columns = useMemo(()=> Columns,[])
    const data = useMemo(()=> props.currentData,[props])
    const tableinstance = useTable({
        columns,
        data
    }, useFilters,useRowSelect,/*(hooks) =>{
        hooks.visibleColumns.push((columns) =>{
            return [
                {
                    id:'selection',
                    Header:({getToggleAllRowsSelectedProps}) =>(
                        //<button {...getToggleAllRowsSelectedProps()}>delete</button>
                    ),
                    Cell:({ row}) =>(
                        //<button {...row.getToggleRowSelectedProps()}>delete</button>
                    )
                },
                ...columns
            ]
        })}*/
    )

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,/*selectedFlatRows*/} = tableinstance;
    return(
        <>
       <table {...getTableProps()}>
           <thead>
               {    
                   headerGroups.map((headerGroup) =>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) =>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))
                        }
                    </tr>
                   ))
               }
           </thead>
           <tbody {...getTableBodyProps()}>
               {
                   rows.map((row) =>{
                       prepareRow(row)
                       return(
                        <tr {...row.getRowProps()}>{
                            row.cells.map((cell) =>{
                                return <td {...cell.getCellProps()}>
                                    {
                                        cell.render('Cell')
                                    }
                                </td>
                            })
                        }
                        </tr>
                       )
                   })
               }
           </tbody>
       </table>
       </>
    );
}

export default VehicleUnderServiceDisplay;