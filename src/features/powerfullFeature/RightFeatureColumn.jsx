import React from 'react'
import { FaFolder, FaShield, FaLock } from 'react-icons/fa6'
import folder from '../../assets/folder.png'
import feature1 from '../../assets/feature1.png'
import feature2 from '../../assets/feature2.png'

const RightFeatureColumn = () => {
    return (
        <div className="flex h-full flex-col gap-4">

            {/* Document Storage */}
            <div className="shrink-0 bg-gray-50 rounded-3xl p-6 flex items-center gap-5">
                <div className="w-16 h-16 md:h-24 md:w-24  xl:h-28 xl:w-28 shrink-0 bg-amber-400 rounded-2xl flex items-center justify-center shadow-md">
                    <img src={folder} alt="Folder" />
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-gray-900 mb-1">
                        Document Storage
                    </h3>
                    <p className="text-gray-500 text-sm xl:text-base leading-relaxed">
                        Securely upload and organise legal, medical, school and other
                        important documents.
                    </p>
                </div>
            </div>

            {/* Bottom row */}
            <div className="grid flex-1 min-h-0 grid-cols-2 gap-4">

                {/* Family photo */}
                <div className="rounded-3xl overflow-hidden">
                    <img
                        src={feature1}
                        alt="Co-parenting family"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Secure Data */}
                <div className="bg-gray-50 rounded-3xl overflow-hidden">
                    <img
                        src={feature2}
                        alt="Secure data"
                        className="block w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default RightFeatureColumn
