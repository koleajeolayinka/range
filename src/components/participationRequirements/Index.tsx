import React from 'react';

const ParticipationRequirements = () => {
    return (
        <section className="mx-auto max-w-6xl px-4 py-8">
            <div className="grid gap-8 md:grid-cols-2">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
                    <img alt="Workspace with laptop" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} src="/participation-requirement-image.png" />
                </div>
                <div className="space-y-4">
                    <h3 className="mb-6 text-center text-2xl font-bold text-blue-600">Participation Requirements</h3>
                    <div className="flex items-center gap-3">
                        <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓</div>
                        <p>Teams must be physically present at the venue in Lagos throughout the duration of the hacker house (March 24-29).</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓</div>
                        <p>Teams should ensure they can be fully engaged and attentive to their projects throughout the period.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓</div>
                        <p>All participants will be required to adhere to the event guidelines and code of conduct.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-6 aspect-square items-center justify-center rounded-full bg-cyan-500 text-white">✓</div>
                        <p>Intellectual property created by teams during the hacker house will be retained by those teams.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParticipationRequirements;