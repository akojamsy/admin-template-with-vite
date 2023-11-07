import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DropdownMenuProps {
    trigger: React.ReactNode
}

const ProfileDropdownMenu = ({ trigger }: DropdownMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                alignOffset={2}
                className="mr-4"
            >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdownMenu