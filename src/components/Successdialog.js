import React, { useState } from 'react';
import successTick from "../images/successTick.png";
import { Dialog } from "primereact/dialog";


const Successdialog = ({successDialog,closeSuccess}) => {

    return (
        <div>
            <Dialog visible={successDialog} style={{ width: '350px' }} onHide={() => { closeSuccess(false); }}>
                <div className="flex-col successpopup">
                    <img src={successTick} alt="success tick" />
                    <h4>Success</h4>
                    <p>Your response submitted successful! Our sales team will contact you soon.</p>
                </div>
            </Dialog>
        </div>
    )
}

export default Successdialog