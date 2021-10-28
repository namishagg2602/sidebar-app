import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Topiccss = styled.nav`
    color: grey;
    font-family: cursive;
    margin-left: 20px;
    padding: 5px;
`

const Topics = ({name}) => {
    return (
        <div>
        <Topiccss>
            {name}
        </Topiccss>
        </div>
    );
}

export default Topics;
