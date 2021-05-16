import React from 'react';
import { css } from '@emotion/react';
import { SyncLoader } from 'react-spinners';
import {loading} from '../constants';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export const Spinner = props => {
    return (
        <React.Fragment>
                <div className={props.loading ? 'spinner spinner-open' : 'spinner spinner-close'}>
                    <SyncLoader
                        css={override}
                        sizeUnit={"px"}
                        size={15}
                        color={'#3333'}
                        loading={true}
                    />
                    <div className="spinner-label">{loading}</div>
                </div>
        </React.Fragment>
    )
}
