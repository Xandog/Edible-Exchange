import React from 'react'

function CuisineFilter({setSelectedCuisine}) {

    return (
        <div>
            <div class="menu">
                <button
                    onClick={() => setSelectedCuisine("All")}
                    class="menuitem"
                    >
                    All
                </button>
                <button
                    onClick={() => setSelectedCuisine("American")}
                    class="menuitem"
                    >
                    American
                </button>
                <button
                    onClick={() => setSelectedCuisine("British")}
                    class="menuitem"
                    >
                    British
                </button>
                <button
                    onClick={() => setSelectedCuisine("Mexican")}
                    class="menuitem"
                    >
                    Mexican
                </button>
                <button
                    onClick={() => setSelectedCuisine("Chinese")}
                    class="menuitem"
                    >
                    Chinese
                </button>
                <button
                    onClick={() => setSelectedCuisine("Japanese")}
                    class="menuitem"
                    >
                    Japanese
                </button>
                <button
                    onClick={() => setSelectedCuisine("Vietnamese")}
                    class="menuitem"
                    >
                    Vietnamese
                </button>
                <button
                    onClick={() => setSelectedCuisine("Italian")}
                    class="menuitem"
                    >
                    Italian
                </button>
            </div>
        </div>
    )
}

export default CuisineFilter
