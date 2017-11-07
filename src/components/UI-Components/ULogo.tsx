import * as React from 'react';
import styled from './styled-components';

interface LogoProps {

}
  
class Logo extends React.Component<LogoProps, {}> {
render() {
    return (
        <div>
            <div>
                <img src={require('../Images/uniload_logo.png')}/>
            </div>
        </div>
        );
    }
}

export const ULogo = styled(Logo)`
    font-family: 'Helvetica';
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
    align-content: center;
    align-self: center;
`;

