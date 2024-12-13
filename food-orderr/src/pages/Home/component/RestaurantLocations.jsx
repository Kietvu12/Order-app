import React from 'react';
import { Building2, Phone, Info } from 'lucide-react';

export default function RestaurantLocations() {
    const locations = [
        "Loveit Restaurant 1 - Address, Fax 99 Roving St, Big City PKU",
        "Loveit Restaurant 2 - Address, Fax 99 Roving St, Big City PKU",
        "Loveit Restaurant 3 - Address, Fax 99 Roving St, Big City PKU",
        "Loveit Restaurant 4 - Address, Fax 99 Roving St, Big City PKU",
        "Loveit Restaurant 5 - Address, Fax 99 Roving St, Big City PKU"
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Column */}
                <div className="space-y-6">
                    <span className="text-[#FF6B00] font-medium">Restaurant Location</span>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Check Your Loveit
                        <br />
                        Restaurant location.
                    </h1>

                    <div className="space-y-4">
                        <p className="text-gray-600">
                            All in good taste elementum integer enim neque volutpat ac. Morbi enim nunc
                            faucibus a. Amet consectetur adipiscing elit duis tempus urna et pharetra.
                        </p>

                        <p className="text-gray-600">
                            Sagittis scelerisque purus semper eget duis. Viverra maecenas accumsan lacus vel
                            facilisis volutpat est. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <button className="bg-[#8DC63F] text-white px-8 py-3 rounded-full hover:bg-[#7AB62F] transition-colors">
                            CHECK OUR LOCATION
                        </button>

                        <div className="flex items-center gap-2 text-gray-600">
                            <Info className="w-4 h-4" />
                            <a href="#" className="text-sm hover:underline">TERMS & CONDITIONS</a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Help Card */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-[#37A345] text-white p-6">
                            <h2 className="text-2xl font-bold mb-2">NEED HELP?</h2>
                            <p className="text-white/90">CALL US RESTAURANT</p>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#37A345]" />
                                <span className="font-semibold">+123-234-1234</span>
                            </div>
                            <p className="text-gray-600">hello@awesomesite.com</p>
                        </div>
                    </div>

                    {/* Locations List */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="space-y-4">
                            {locations.map((location, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
                                    <Building2 className="w-5 h-5 text-[#37A345] flex-shrink-0" />
                                    <span>{location}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

