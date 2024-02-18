import asyncHandler from './async_handler'
import { publicIpv4 } from 'public-ip';
import { getPlatform, isWebApp, isMobileApp, isIOSApp, isAndroidApp } from 'cozy-device-helper'

export const getDeviceInfo = asyncHandler(async() => {
    let publicIp = await publicIpv4();
    return {
        ip: publicIp,
        device: {
            platform: getPlatform(),
            isWebApp: isWebApp(),
            isMobileApp: isMobileApp(),
            isAndroidApp: isAndroidApp(),
            isIOSApp: isIOSApp()
        }
    }

})