import React from 'react';


export default function Paginado ({countriesPage, allCountries,paginado}) {
    const pageNumbers = [];

        for(let i=1; i<=Math.ceil(allCountries / countriesPage); i++){
            pageNumbers.push(i);
        }
    

    
    return(
        <nav className=''>
            <ul className=''>
                {pageNumbers &&
                    pageNumbers.map(number => (
                      /*   <li className='' key={number}> 
                            <a onClick={() => paginado(number)} className=''>{number}</a>
                        </li> */
                        <a onClick={() => paginado(number)} className='number'>{number}</a>
                    ))
                }     
              
            </ul>

        </nav>
    )
}