
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const app = initializeApp(
    //firebase code is added
)

export const auth = getAuth(app)
export default app
