import React from 'react'

function CuisineFilter({setSelectedCuisine}) {

    return (
        <div>
            <div className="menu">
                <div className="menuTray">
                    <button
                        onClick={() => setSelectedCuisine("All")}
                        className="menuitem"
                        >
                        All
                    </button>
                </div>
                <div className="menuTray">
                    <button
                        onClick={() => setSelectedCuisine("American")}
                        className="menuitem"
                        >
                        American
                    </button>
                </div>
                <div className="menuTray">
                    <button
                        onClick={() => setSelectedCuisine("British")}
                        className="menuitem"
                        >
                        British
                    </button>
                </div>
                <div className="menuTray">
                    <button
                        onClick={() => setSelectedCuisine("Mexican")}
                        className="menuitem"
                        >
                        Mexican
                    </button>
                </div>
                <div className="menuTray">
                    <button
                        onClick={() => setSelectedCuisine("Chinese")}
                        className="menuitem"
                        >
                        Chinese
                    </button>
                </div>
                <div className="menuTray">
                    <button
                        onClick={() => setSelectedCuisine("Japanese")}
                        className="menuitem"
                        >
                        Japanese
                    </button>
                </div>
                <div className="menuTray">
                    <button
                        onClick={() => setSelectedCuisine("Vietnamese")}
                        className="menuitem"
                        >
                        Vietnamese
                    </button>
                </div>
                <div className="menuTray">
                    <button
                        onClick={() => setSelectedCuisine("Italian")}
                        className="menuitem"
                        >
                        Italian
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CuisineFilter