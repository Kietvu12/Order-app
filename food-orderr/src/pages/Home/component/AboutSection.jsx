
import { Check } from 'lucide-react';
import { food } from '../../../assets/assets';

export default function AboutSection() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left Column - Image */}
                <div className="relative">
                    <div className="relative">
                        <img
                            src={food.food_1}
                            alt="Fresh Greek Salad"
                            className="w-full rounded-full object-cover"
                        />
                        {/* Happy Client Card */}
                        <div className="absolute bottom-8 right-0 bg-white rounded-lg shadow-lg p-4 md:p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <Check className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-medium">HAPPY CLIENT</span>
                            </div>
                            <div className="text-2xl font-bold text-green-700">20.022+</div>
                            <div className="text-xs text-gray-600 mt-1">THANKS VEGAN LOVERS</div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="space-y-6">
                    <span className="text-[#FF6B00] font-medium">About Us</span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        The Best Enjoyable Place Around You.
                    </h2>

                    <div className="space-y-4 text-gray-600">
                        <p>
                            We are the best quality elementum integer enim neque volutpat ac. Morbi enim
                            nunc faucibus a. Amet consectetur adipiscing elit duis tempus pharetra.
                        </p>
                        <p>
                            Massa placerat duis ultricies lacus sed turpis tincidunt id. Interdum varius sit amet mattis
                            enim. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sagittis scelerisque purus
                            semper eget duis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Ultricies
                            lacus sed turpis tincidunt id aliquet risus feugiat in. Adipiscing elit duis tristique sollicitudin
                            nibh sit. Porttitor lacus luctus accumsan tortor.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <div className="text-4xl font-bold text-[#FF6B00]">108</div>
                            <div className="text-sm text-gray-600 mt-2">EXPERT CHEF</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">140</div>
                            <div className="text-sm text-gray-600 mt-2">MENU OF FOOD</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900">32.000</div>
                            <div className="text-sm text-gray-600 mt-2">ORDER DELIVERED</div>
                        </div>
                    </div>

                    <button className="bg-[#8DC63F] text-white px-8 py-3 rounded-full hover:bg-[#7AB62F] transition-colors">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
}

