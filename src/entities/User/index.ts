import {userReducer, userActions} from "./model/slice/userSlice";
import {User} from "entities/User/model/types/user";
import {UserSchema} from "entities/User/model/types/user";
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
}