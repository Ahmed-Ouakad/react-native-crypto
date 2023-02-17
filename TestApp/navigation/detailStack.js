import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsPage from "../pages/detailsPage";
import WelcomePage from "../pages/welcomePage";

const Stack = createNativeStackNavigator()

const DetailStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name ="Welcome" component={WelcomePage} options={{headerShown : false}}/>
            <Stack.Screen name ="DetailsPage" component={DetailsPage} options={{headerShown : false}}/>
        </Stack.Navigator>
    )
}
export default DetailStack