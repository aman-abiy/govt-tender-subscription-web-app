import router from '../router';
import { HOME_ROUTE } from '../utils/routes'

export const redirectOn404 = (to, from) => {
    if (from.name != null) {
        const route = router.resolve(from.name)

        // if previous router is a route that exists, then redirect back to that route
        if (route && route.href !== '/') {
            router.push({ name: from.name })
            return
        }
    }

    // else go to home route
    router.push({ name: HOME_ROUTE })
}