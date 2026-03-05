import React from 'react';

interface ServiceMenuProps {
    isWaitlist: boolean;
    selectedServices: string[];
    toggleService: (service: string) => void;
    additionalServicesList: string[];
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({
    isWaitlist, selectedServices, toggleService, additionalServicesList
}) => {
    if (isWaitlist) return null;

    return (
        <>
            <div className="bg-lush-emerald/10 border border-lush-emerald/20 p-5 rounded-xl mt-2 transition-all duration-300">
                <h4 className="text-lush-emerald font-extrabold text-xl text-center mb-4">Complete Your Property Harmony</h4>
                <div className="mt-2 flex flex-col gap-3 bg-lush-charcoal/90 p-5 rounded-lg border border-lush-emerald/30 shadow-inner">
                    {additionalServicesList.map(service => (
                        <label key={service} className="flex items-center gap-4 text-sm font-medium text-gray-300 cursor-pointer hover:text-white transition-colors p-2">
                            <input
                                type="checkbox"
                                checked={selectedServices.includes(service)}
                                onChange={() => toggleService(service)}
                                className="accent-lush-emerald w-5 h-5 cursor-pointer rounded"
                            />
                            {service}
                        </label>
                    ))}
                </div>
            </div>

            {selectedServices.includes("Sprinkler Turn-On / Blowout") && (
                <div className="bg-lush-charcoal/80 border border-lush-emerald/30 p-5 rounded-xl mt-2 flex flex-col gap-4 animate-in slide-in-from-top-4 fade-in duration-300">
                    <h4 className="text-lush-emerald font-bold text-md border-b border-white/5 pb-2">Sprinkler System Details</h4>

                    <div>
                        <label className="text-xs font-semibold text-gray-300 mb-1 block">Which services would you like an estimate for? *</label>
                        <select name="sprinkler_estimate_type" className="appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2339B54A%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1.2em_1.2em] pr-12 transition-all bg-white/5 border border-white/10 focus:border-lush-emerald focus:ring-1 focus:ring-lush-emerald/50 text-white font-medium text-lg px-4 py-3 rounded-xl w-full outline-none [&>option]:bg-lush-charcoal [&>option]:text-white" required>
                            <option value="">Select an option</option>
                            <option value="Sprinkler System Turn-on">Sprinkler System Turn-on</option>
                            <option value="Sprinkler System Blowout">Sprinkler System Blowout</option>
                            <option value="Both Turn-on and Blowout">Both Turn-on and Blowout</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-300 mb-1 block">Is your sprinkler system connected to city water, pressurized irrigation, or both? *</label>
                        <select name="sprinkler_water_source" className="appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2339B54A%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1.2em_1.2em] pr-12 transition-all bg-white/5 border border-white/10 focus:border-lush-emerald focus:ring-1 focus:ring-lush-emerald/50 text-white font-medium text-lg px-4 py-3 rounded-xl w-full outline-none [&>option]:bg-lush-charcoal [&>option]:text-white" required>
                            <option value="">Select an option</option>
                            <option value="City Water Only">City Water Only</option>
                            <option value="Pressurized Irrigation Only">Pressurized Irrigation Only</option>
                            <option value="Both City Water and Pressurized Irrigation">Both City Water and Pressurized Irrigation</option>
                            <option value="I Don't Know">I Don&apos;t Know</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-300 mb-1 block">How many zones does your system have? *</label>
                        <input type="number" name="sprinkler_zones" min="1" placeholder="e.g. 6" className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none" required />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-300 mb-1 block">Are there any water spickets attached to the system that need blown out? If so, How many? (if none put 0) *</label>
                        <input type="number" name="sprinkler_spickets" min="0" defaultValue="0" className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none" required />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-300 mb-1 block">Please describe where the backflow is located: *</label>
                        <textarea name="sprinkler_backflow_location" placeholder="e.g. North side of house behind fence" className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none h-24" required />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-300 mb-1 block">Please describe where the irrigation boxes that contain the valves are located: *</label>
                        <textarea name="sprinkler_valve_location" placeholder="e.g. In the front yard near the driveway" className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none h-24" required />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer text-gray-300 hover:text-white transition-colors">
                        <input type="checkbox" name="sprinkler_yearly_schedule" value="Yes" className="accent-lush-emerald w-5 h-5 cursor-pointer rounded mt-0.5" />
                        <span className="text-xs font-semibold leading-relaxed"><strong className="text-lush-emerald font-extrabold text-sm uppercase mr-1">Yes,</strong> add me to the yearly schedule (we will automatically schedule you each fall for the service)</span>
                    </label>

                    <div>
                        <label className="text-xs font-semibold text-gray-300 mb-1 block">Any additional questions or comments:</label>
                        <textarea name="sprinkler_comments" placeholder="Any special instructions..." className="bg-white/5 border border-white/10 focus:border-lush-emerald text-white font-medium text-lg placeholder:text-gray-500 px-4 py-3 rounded-xl w-full outline-none h-24" />
                    </div>
                </div>
            )}
        </>
    );
};
