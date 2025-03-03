'use client';

import { FC } from 'react';
import { FaUser, FaUsers } from 'react-icons/fa';
import ApplyCard from "@/components/ApplyCard/Index";




const ApplicationCallToAction: FC = () => {
    return (
        <div className="flex justify-center items-center gap-8 p-10 bg-[#EBF3FF]">
            <ApplyCard type="Individual" description="Apply as an individual" icon={<FaUser />} />
            <ApplyCard type="Team" description="Apply as a team" icon={<FaUsers />} />
        </div>
    );
};

export default ApplicationCallToAction;
