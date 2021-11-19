import React from 'react'

function CuisineFilter({setSelectedCuisine}) {

    return (
        <div>
            <div className="menu">
                <button
                    onClick={() => setSelectedCuisine("All")}
                    className="menuitem"
                    >
                    All
                </button>
                <button
                    onClick={() => setSelectedCuisine("American")}
                    className="menuitem"
                    >
                    American
                </button>
                <button
                    onClick={() => setSelectedCuisine("British")}
                    className="menuitem"
                    >
                    British
                </button>
                <button
                    onClick={() => setSelectedCuisine("Mexican")}
                    className="menuitem"
                    >
                    Mexican
                </button>
                <button
                    onClick={() => setSelectedCuisine("Chinese")}
                    className="menuitem"
                    >
                    Chinese
                </button>
                <button
                    onClick={() => setSelectedCuisine("Japanese")}
                    className="menuitem"
                    >
                    Japanese
                </button>
                <button
                    onClick={() => setSelectedCuisine("Vietnamese")}
                    className="menuitem"
                    >
                    Vietnamese
                </button>
                <button
                    onClick={() => setSelectedCuisine("Italian")}
                    className="menuitem"
                    >
                    Italian
                </button>
            </div>
        </div>
    )
}

export default CuisineFilter
