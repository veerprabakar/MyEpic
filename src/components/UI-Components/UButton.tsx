import * as React from 'react';
import styled from './styled-components';
import { Button, NavLink } from 'reactstrap';

export const UButton = styled(Button)`
    font-family: 'Helvetica';
    background-color: #dad9d6;
    border-style: none;
    border-radius: 0px;
    color: #202126;
    cursor: pointer;
    &:hover{
        background-color: #E80A2B; 
    }
`;

// interface UButtonProps {
//     className?: string;
//     // tslint:disable-next-line:no-any
//     onClick?: any;
// }

// class UButton extends React.Component<UButtonProps, {}> {
//     // tslint:disable-next-line:no-any
//     render(): any {
//         return (
//             <div>
//                 <Button className={this.props.className} onClick={this.props.onClick}>
//                 {this.props.children}
//                 </Button>
//             </div>
//         );
//     }
// }

// export const UButtonStyled = styled(UButton)`
//     font-family: 'Helvetica';
//     font-weight: bold;
//     font-size: 1.8rem;
// `;

