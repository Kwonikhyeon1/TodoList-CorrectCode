import React, { useEffect, useState } from "react";
import Top from './Top';

import { createRandomNum } from './js/utils';

const Home = () => {

    // hook
    const [imgNo, setImgNo] = useState(100);

    useEffect(() => {

        setImgNo(createRandomNum(10, 100));

    }, [])

    return(
        <>
            <div className="home">
                <h3>Our service is TODO-LIST</h3>
                <img src={`https://picsum.photos/id/${imgNo}/1000/600`}/ >
                <br />
                <img src={`https://picsum.photos/id/${imgNo + 1}/1000/600`}/ >
                <br />
                <img src={`https://picsum.photos/id/${imgNo + 2}/1000/600`}/ >
            </div>
            <Top />
        </>
    )
}

export default Home;