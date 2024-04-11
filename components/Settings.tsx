import { Settings } from "lucide-react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const Setting = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="fixed bottom-24 -right-1 rounded-full z-50 cursor-pointer animate-bounce bg-white p-2">
                    <Settings className="animate-spin" />
                </button>
            </DialogTrigger>
            <DialogContent className="w-[96%] max-w-2xl text-white border-none">
                <DialogHeader>
                    <DialogTitle className="text-white">About the Creator!!!</DialogTitle>
                </DialogHeader>
                <div className="items-center">
                    <p className="text-center text-sm text-white/70">Introducing my latest project: a video website designed and developed by yours truly, Godwin Adu. As a junior web developer proficient in JavaScript, I've crafted this platform using Next.js for enhanced performance and scalability. Leveraging the power of Stream, I've ensured seamless video streaming, offering users an immersive viewing experience. Excited to take on new challenges and collaborations, feel free to reach out to me at +233551556650 to discuss your next project!</p>
                </div>

            </DialogContent>
        </Dialog>

    )
}

export default Setting