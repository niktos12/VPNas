import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "../../components/ui/navigation-menu.tsx"
import { Button } from "./button.tsx";
import Lines from '../../assets/Clip path group.svg';
import Logo from '../../assets/Frame 22.svg';
const Header = () => {
    return (
        <div className="flex flex-row items-center gap-60 py-8">
            <img src={Lines} className="absolute -z-10 right-0 top-0"/>
            <img src={Logo} />
            <div className='flex flex-row items-center justify-center gap-16'>
                <a href="#" className='no-underline text-white font-medium text-md'>Home</a>
                <a href="#" className='no-underline text-white font-medium text-md'>About us</a>
                <a href="#" className='no-underline text-white font-medium text-md'>Service</a>
                <div className="flex flex-row gap-12">
                    <NavigationMenu> 
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-[#242424] hover:bg-[#242424] hover:text-white text-md bg-transparent">Page</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-[#242424] hover:bg-[#242424] hover:text-white text-md bg-transparent">Blog</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

            </div>
            <Button variant={'outline'} size={"lg"} className="h-[52px] bg-transparent rounded-none border-top-gradient from-[#0CBAF1] to-[#E95CE9]">Contact us</Button>
        </div>
    )
}
export default Header