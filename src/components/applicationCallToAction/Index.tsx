'use client';

import {FC} from 'react';
import {FaUser, FaUsers} from 'react-icons/fa';
import ApplyCard from "@/components/ApplyCard/Index";

const ApplicationCallToAction: FC = () => {
    return (
        <section>
            <div className="flex justify-center items-center gap-8 p-10 bg-[#EBF3FF]">
                <ApplyCard type="Individual" description="Apply as an individual" icon={<FaUser/>}/>
                <ApplyCard type="Team" description="Apply as a team" icon={<FaUsers/>}/>
            </div>
            <div className={'mt-6 grid place-content-center'}>
                <h1>We will inform applicants if they were selected by <span className={'font-semibold'}>Monday, March 17, 2025.</span>
                </h1>
            </div>
        </section>
    );
};

export default ApplicationCallToAction;
