function Skeleton({items}){
    return [...Array(items).keys()].map(()=> {
        return(
        <div className="animate-pulse pulse">
            <div className="skeleton-div rounded "></div>
        </div>
        )
    })
}

export {Skeleton}