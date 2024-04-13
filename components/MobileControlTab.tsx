"use client"
import {
    CallStatsButton,
    CancelCallButton,
    ReactionsButton,
    RecordCallButton,
    ScreenShareButton,
    SpeakingWhileMutedNotification,
    ToggleAudioPublishingButton,
    ToggleVideoPublishingButton,
} from "@stream-io/video-react-sdk"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { EllipsisVertical, LayoutList, ListMinus, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import EndCallButton from "./EndCallButton";

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

interface MobileControlTabProps {
    setLayout: (layout: CallLayoutType) => void;
    setShowParticipants: (value: boolean) => void;
    
}
const MobileControlTab = ({ setLayout, setShowParticipants}: MobileControlTabProps) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get('personal');
 


    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    return (
        <div className="flex md:hidden fixed bottom-0  w-full items-center justify-center gap-2 px-2 pb-6">
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        onClick={toggleDropdown1}
                        className="border-none cursor-pointer rounded-2xl bg-[#19232d] px-2 py-2 hover:bg-[#4c535b]"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        <EllipsisVertical fill="#fff" />
                    </button>
                </div>

                {isOpen1 && (
                    <div className="absolute z-10 bottom-6 mb-6 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-2">
                            <div className="flex gap-4">
                                <RecordCallButton />
                            </div>
                            <div className="flex gap-4">
                                <ReactionsButton />
                            </div>
                            <div className="flex gap-4">
                                <ScreenShareButton />

                            </div>
                        </div>
                    </div>
                )}
            </div>

            <SpeakingWhileMutedNotification>
                <ToggleAudioPublishingButton />
            </SpeakingWhileMutedNotification>
            <ToggleVideoPublishingButton />
            <CancelCallButton onLeave={() => router.push(`/`)} />
            <DropdownMenu>
                <div className="flex items-center">
                    <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
                        <LayoutList size={20} className="text-white" />
                    </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
                    {['Grid', 'Speaker-Left', 'Speaker-Right'].map((item, index) => (
                        <div key={index}>
                            <DropdownMenuItem
                                onClick={() =>
                                    setLayout(item.toLowerCase() as CallLayoutType)
                                }
                            >
                                {item}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="border-dark-1" />
                        </div>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative inline-block text-left">
                <div>
                    <button
                        type="button"
                        onClick={toggleDropdown2}
                        className="border-none cursor-pointer rounded-2xl bg-[#19232d] px-2 py-2 hover:bg-[#4c535b]"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        <ListMinus fill="#fff" />
                    </button>
                </div>

                {isOpen2 && (
                    <div className="absolute z-10 bottom-6 mb-6 right-5 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-2">
                            <div className="flex gap-4">
                                <CallStatsButton />
                            </div>
                            <div className="flex gap-4">
                                <button onClick={() => setShowParticipants((prev) => !prev)}>
                                    <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-2 py-2 hover:bg-[#4c535b]  ">
                                        <Users size={20} className="text-white" />
                                    </div>
                                </button>
                            </div>
                            <div className="flex gap-4">
                                { !isPersonalRoom ? <EndCallButton /> : null}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MobileControlTab
