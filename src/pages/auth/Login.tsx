import { images } from "@/assets"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import "@/pages/auth/login.css"
import { routesPath } from "@/utils"
import { Eye, EyeOff, LogInIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const { DASHBOARD } = routesPath

    useEffect(() => {
        if (loading) {
            navigate(DASHBOARD)
        }
        let timeout = setTimeout(() => {
            setLoading(false)
        }, 3000)
        
        return () => clearTimeout(timeout)
    }, [loading])

    return (
        <main className="login-b w-screen h-screen overflow-x-hidden bg-gray-200">
            <div className="flex justify-center mt-16 m-6 items-center md:mt-32">
                <div className="w-[29rem] md:w-[27rem] px-5 rounded-xl bg-white pt-12">
                    <img className="mx-auto pb-10" src={images.logo} alt="" />
                    <span className="flex justify-center font-medium text-gray-600 text-xl">Login</span>
                    <div className="pt-6 pb-10 px-8">
                        <form>
                            <div>
                                <Input
                                    placeholder="Email"
                                // className={`${2 === 2 && 'focus:border-red-400 focus-visible:ring-0' }`}
                                />
                                {/* <span className="text-xs text-red-500">Email is required</span> */}
                            </div>
                            <div className="mt-10 relative">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                // className={`${2 === 2 && 'focus:border-red-400 focus-visible:ring-0' }`}
                                />
                                <span className="cursor-pointer absolute top-3.5 right-4"
                                    onClick={() => setShowPassword(!showPassword)}
                                >{showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}</span>
                            </div>
                            <div className="mt-10">
                                <div className="flex items-center space-x-2 cursor-pointer">
                                    <Switch id="remember-mode" />
                                    <Label htmlFor="remember-mode" className="cursor-pointer">Remember me</Label>
                                </div>
                            </div>
                            <div className="mt-14">
                                <Button
                                    className="w-full p-6 font-normal text-md rounded-[8px]"
                                    disabled={loading}
                                    loading={loading}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setLoading(true)
                                        toast.success("Authenticated successfully")
                                    }}
                                >
                                    <>
                                        <LogInIcon className="h-4 w-4 mr-2" />
                                        Login
                                    </>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login