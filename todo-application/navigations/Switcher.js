import { StackNavigation } from "./StackNavigation";
import { BottomTabs } from "./BottomNavigation";
import { useSelector } from 'react-redux';

const Switcher =()=> {
    const user=useSelector((state)=>state.token);
    return user? <BottomTabs /> : <StackNavigation />
}

export default Switcher;