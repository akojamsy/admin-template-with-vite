import Sidebar from "@/components/sidebar"
import Topnav from "@/components/top-navbar"
import { useState } from "react"
import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(true)

    return (
        <main className="w-screen h-screen overflow-x-hidden bg-[#F5F5F5]">
            <section className="md:flex md:gap-0">
                <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
                <section className="md:mr-3 md:w-[calc(100vw_-_14rem)] lg:w-[calc(100vw_-_16rem)]">
                    <Topnav setShowSidebar={setShowSidebar} />
                    <section className="h-screen overflow-y-scroll p-4 pt-20">
                        <Outlet/>
                    </section>
                </section>
            </section>
        </main>
    )
}

export default DashboardLayout