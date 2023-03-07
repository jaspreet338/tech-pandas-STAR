import React from "react";
import { useLocation } from "react-router-dom";
const StarDetail=()=>{
    const location = useLocation().state;
    return <div>{location.id}</div>;
};
export default StarDetail;