'use client'

import { useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";

const MakeAdminBtn = ({isAdmin, id}) => {
    console.log(isAdmin, id);
    const [admin, setAdmin] = useState(isAdmin)
    return (
        <div>
            <button>
                {
                    admin ? <MdAdminPanelSettings /> : <RiUserFill />
                }
            </button>
        </div>
    );
};

export default MakeAdminBtn;