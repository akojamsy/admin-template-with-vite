import { images } from "@/assets";
import { routesPath } from "@/utils";
import useWindowSize from "@/utils/hooks/useWindowSize";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftRight, ChevronDown, ChevronUp, CircleDollarSign, LayoutDashboard, LogOutIcon, Mail, Settings, Star, TrendingUp, User, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface IProps {
    showSidebar: any;
    setShowSidebar: (state: any) => any;
}

const { DASHBOARD, KYC, SUPPORT, SETTLEMENTS, ALL_SETTLEMENTS, RECONCILIATION, USERS, REPORT, TRANSACTIONS, SETTINGS, APP_FEEDBACK } = routesPath

const navigationPath = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <LayoutDashboard className="w-4 h-4" />,
        path: DASHBOARD,
        subLinks: []
    },
    {
        id: 2,
        title: 'KYC',
        icon: <Users className="w-4 h-4" />,
        path: KYC,
        subLinks: []
    },
    {
        id: 3,
        title: 'Support',
        icon: <Mail className="w-4 h-4" />,
        path: SUPPORT,
        subLinks: []
    },
    {
        id: 4,
        title: 'Settlements',
        icon: <CircleDollarSign className="w-4 h-4" />,
        path: SETTLEMENTS,
        subLinks: [
            {
                id: 1,
                title: 'Settlements',
                path: ALL_SETTLEMENTS,
            },
            {
                id: 2,
                title: 'Reconciliation',
                path: RECONCILIATION,
            }
        ]
    },
    {
        id: 5,
        title: 'Users',
        icon: <User className="w-4 h-4" />,
        path: USERS,
        subLinks: []
    },
    {
        id: 6,
        title: 'Report',
        icon: <TrendingUp className="w-4 h-4" />,
        path: REPORT,
        subLinks: []
    },
    {
        id: 7,
        title: 'Transactions',
        icon: <ArrowLeftRight className="w-4 h-4" />,
        path: TRANSACTIONS,
        subLinks: []
    },
    {
        id: 8,
        title: 'Settings',
        icon: <Settings className="w-4 h-4" />,
        path: SETTINGS,
        subLinks: []
    },
    {
        id: 9,
        title: 'App Feedback',
        icon: <Star className="w-4 h-4" />,
        path: APP_FEEDBACK,
        subLinks: []
    },

]

const Sidebar = ({ setShowSidebar, showSidebar }: IProps) => {
    const [collapsible, setCollapsible] = useState({ path: '', collapsed: false })

    const { width } = useWindowSize()
    const navigate = useNavigate()
    console.log(collapsible)
    const defaultLink = 'block text-grey-500 pl-8 dark:text-slate-400 dark:hover:text-slate-300 hover:bg-secondary hover:text-whit hover:p-3 hover:pl-8 hover:rounded-[8px]'
    const activeLink = 'block text-white bg-primary rounded-[8px] pl-8 dark:text-slate-300'

    const location = useLocation();

    useEffect(() => {
        if (width < 768) {
            // dispatch an action to close sidebar
            setShowSidebar(false)
        } else {
            setShowSidebar(true)
        }
    }, [width])

    return (
        <>
            {showSidebar && width < 768 && <div className='absolute w-screen h-screen left-0 bg-neutral-50/5 z-20 cursor-pointer'
                onClick={() => setShowSidebar(!showSidebar)}
            ></div>}
            <nav className={`fixed top-0 left-0 h-screen bg-white shadow-sm w-[14rem] x-5 py-6 z-30 transition-all duration-500 ease-in-out md:relative md:x-7 lg:w-[16rem] ${showSidebar || width >= 768 ? 'translate-x-0' : '-translate-x-full'} dark:bg-gray-800`}>
                <div className="flex justify-center">
                    <img src={images.logo} alt="" />
                </div>
                <section className="mt-9 h-[85vh] flex flex-col justify-between bg-secondary-foregroun">
                    <div className="h-[60%] overflow-y-scroll">
                        {
                            navigationPath.map((navigation) => (
                                <div key={navigation.id} className="relative flex flex-col">
                                    <NavLink
                                        key={navigation.id}
                                        to={navigation.path}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setCollapsible({
                                                ...collapsible,
                                                collapsed: false
                                            })
                                            if (navigation.subLinks.length > 0) {
                                                setCollapsible({
                                                    ...collapsible,
                                                    path: navigation.path,
                                                    collapsed: !collapsible.collapsed
                                                })
                                                navigate(navigation.path)
                                                return
                                            }
                                            setShowSidebar(false)
                                            navigate(navigation.path)
                                        }}
                                        className={`relative flex mx-7 p-3 items-center gap-x-2 mb-3
                                    ${location.pathname === navigation.path ? activeLink : defaultLink}
                                    `}
                                    >
                                        <>
                                            <span>{navigation.icon}</span>
                                            <span className="text-sm">{navigation.title}</span>
                                            {navigation.subLinks.length > 0 && <span
                                            >
                                                {
                                                    collapsible.path === navigation.path && collapsible.collapsed ?
                                                        <ChevronUp className={`h-4 w-4 absolute right-2 top-3.5 text-gray-500 ${location.pathname === navigation.path && 'text-white'}`} /> :
                                                        <ChevronDown className={`h-4 w-4 absolute right-2 top-3.5 text-gray-500 ${location.pathname === navigation.path && 'text-white'}`} />

                                                }
                                            </span>}
                                        </>
                                        {location.pathname === navigation.path && <span className="absolute rounded-r-xl h-7 w-1 bg-primary -left-7"></span>}
                                    </NavLink>
                                    {/* Sublinks */}
                                    <div className={cn(
                                        `h-0 flex flex-col gap-y-3 transition-all ease-in-out overflow-hidden`,
                                        collapsible.path === navigation.path && collapsible.collapsed && 'flex h-full'
                                    )}>
                                        {
                                            navigation.subLinks.map((link) => (
                                                <div key={link.id} className={`relative last:mb-3`}>
                                                    <Link
                                                        key={link.path}
                                                        to={link.path}
                                                        className={cn(
                                                            `pl-20 text-sm`,
                                                            location.pathname === link.path && 'text-primary'
                                                        )}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                    {location.pathname === link.path && <span className="absolute rounded-r-xl h-7 w-1 bg-primary left-0"></span>}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="h-[30%] mx-6 md:mx-10 rounded-xl bg-white border flex flex-col items-center pt-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@zpay" />
                            <AvatarFallback>ZTH</AvatarFallback>
                        </Avatar>
                        <span className="block w-[8rem] text-sm text-center mt-3 text-gray-500 truncate">Friday Odoh</span>
                        <Button
                            className="font-normal bg-background bg-none border border-red-500 h-7 px-7 rounded-[8px] mt-6 text-red-400 text-[11px] hover:bg-red-400 hover:text-white hover:border-white"
                            // variant="outline"
                            onClick={() => navigate('/')}
                        >
                            <LogOutIcon className="h-3 w-3 mr-1" />
                            Logout
                        </Button>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Sidebar